<?php

use App\Http\Controllers\PostsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Post; // <-- singular!

// Public routes
Route::get('/', function () {
    $posts = Post::all();

    return Inertia::render('fyp', compact('posts'));
})->name('home');

Route::get('/enter', function () {
    return Inertia::render('welcome'); 
})->name('enter');

Route::get('/posts', [PostsController::class, 'getPosts']); 
Route::get('/post/{id}', [PostsController::class, 'show'])->name('post.show');

// Protected routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $posts = Post::all(); // <-- singular!
        return Inertia::render('dashboard', [
            'posts' => $posts
        ]);
    })->name('dashboard');
    
    Route::get('/dashboard/post/create', [PostsController::class, 'create'])->name('post.create');
    Route::post('/dashboard/post', [PostsController::class, 'store'])->name('post.store');
    Route::get('/dashboard/post/{id}/edit', [PostsController::class, 'edit'])->name('post.edit');
    Route::put('/dashboard/post/{id}', [PostsController::class, 'update'])->name('post.update');
    Route::delete('/dashboard/post/{id}', [PostsController::class, 'destroy'])->name('post.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
