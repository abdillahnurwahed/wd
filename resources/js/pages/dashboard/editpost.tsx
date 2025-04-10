import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, Link } from '@inertiajs/react';
import { FormEvent } from 'react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

interface Post {
    id: number;
    title: string;
    description: string;
    image: string | null;
}

interface Props {
    post: Post;
}

export default function EditPost({ post }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Edit Post',
            href: `/dashboard/post/${post.id}/edit`,
        },
    ];

    const { data, setData, post: submitForm, processing, errors } = useForm({
        title: post.title,
        description: post.description,
        image: null as File | null, // Inisialisasi image sebagai null
        _method: 'PUT',
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('image', e.target.files[0]);
        }
    };
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
        // Create a new FormData object
        const formData = new FormData();
    
        // Add title and description
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('_method', 'PUT');
    
        // Jika ada file gambar baru, tambahkan ke FormData
        if (data.image instanceof File) {
            formData.append('image', data.image);
        } else if (post.image) {
            // Jika tidak ada file baru, kirim path gambar yang sudah ada
            formData.append('current_image', post.image);
        }
    
        // Submit the form with the FormData
        submitForm(`/dashboard/post/${post.id}`, {
            forceFormData: true, // Pastikan Inertia.js menggunakan FormData
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Post" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-6">
                    <div className="relative z-10">
                        <h1 className="text-2xl font-bold mb-6">Edit Portfolio Post</h1>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium mb-1">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full rounded-md border border-sidebar-border/70 bg-white/5 px-3 py-2"
                                    required
                                />
                                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium mb-1">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                    className="w-full rounded-md border border-sidebar-border/70 bg-white/5 px-3 py-2 min-h-40"
                                    required
                                />
                                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium mb-1">
                                    Image (Optional)
                                </label>
                                {post.image && (
                                    <div className="mb-3">
                                        <p className="text-sm mb-2">Current image:</p>
                                        <img 
                                            src={`/storage/${post.image}`} 
                                            alt={post.title} 
                                            className="w-40 h-auto rounded-md mb-2" 
                                        />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    id="image"
                                    onChange={handleFileChange}
                                    className="w-full rounded-md border border-sidebar-border/70 bg-white/5 px-3 py-2"
                                />
                                <p className="text-sm text-gray-500 mt-1">Upload a new image to replace the current one.</p>
                                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                            </div>
                            
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    {processing ? 'Saving...' : 'Save Changes'}
                                </button>
                                <Link
                                    href="/dashboard"
                                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}