<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PostsController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('dashboard/createpost');
    }

    public function store(Request $request): RedirectResponse
    {
        // Validasi input
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Handle file upload (jika ada)
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('posts', 'public');
            $validatedData['image'] = $imagePath;
        }

        // Tambahkan user_id dari user yang sedang login
        $validatedData['user_id'] = Auth::id();

        // Simpan data ke database
        Post::create($validatedData);

        // Redirect ke halaman dashboard dengan pesan sukses
        return redirect()->route('dashboard')->with('success', 'Post created successfully!');
    }

    public function edit($id): Response
    {
        $post = Post::findOrFail($id);
        
        return Inertia::render('dashboard/editpost', [
            'post' => $post,
        ]);
    }
     
    public function update(Request $request, $id): RedirectResponse
    {
        // Temukan post berdasarkan ID
        $post = Post::findOrFail($id);
    
        // Validasi data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        // Jika ada file gambar baru, simpan gambar baru
        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if ($post->image) {
                Storage::disk('public')->delete($post->image);
            }
    
            // Simpan gambar baru
            $imagePath = $request->file('image')->store('posts', 'public');
            $validatedData['image'] = $imagePath;
        } else {
            // Jika tidak ada file gambar baru, pertahankan gambar yang sudah ada
            $validatedData['image'] = $post->image;
        }
    
        // Update post dengan data yang sudah divalidasi
        $post->update($validatedData);
    
        // Redirect ke dashboard dengan pesan sukses
        return redirect()->route('dashboard')->with('success', 'Post updated successfully!');
    }
    public function destroy($id): RedirectResponse
    {
        $post = Post::findOrFail($id);

        if ($post->image) {
            Storage::disk('public')->delete($post->image);
        }

        $post->delete();

        return redirect()->route('dashboard')->with('success', 'Post deleted successfully!');
    }
}