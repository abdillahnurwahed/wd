import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

interface Post {
    id: number;
    title: string;
    description: string;
    image: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    posts: Post[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ posts = [] }: Props) {
    const [message, setMessage] = useState<string | null>(null);
    
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this post?')) {
            router.delete(`/dashboard/post/${id}`, {
                onSuccess: () => {
                    setMessage('Post deleted successfully');
                    setTimeout(() => setMessage(null), 3000);
                }
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {message && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                        {message}
                    </div>
                )}
                
                {/* Original Placeholder Grid */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4">
                        <div className="z-10 relative h-full flex flex-col justify-between">
                            <h3 className="font-bold text-xl mb-2">Portfolio Posts</h3>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold">{posts.length}</span>
                                <Link 
                                    href="/dashboard/post/create" 
                                    className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded text-sm"
                                >
                                    Add New Post
                                </Link>
                            </div>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4">
                        <div className="z-10 relative h-full flex flex-col justify-between">
                            <h3 className="font-bold text-xl mb-2">Page Views</h3>
                            <span className="text-2xl font-bold">0</span>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4">
                        <div className="z-10 relative h-full flex flex-col justify-between">
                            <h3 className="font-bold text-xl mb-2">Interactions</h3>
                            <span className="text-2xl font-bold">0</span>
                        </div>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                
                {/* Portfolio Post Management Section */}
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min p-4">
                    <div className="z-10 relative">
                        <h2 className="text-2xl font-bold mb-4">Manage Portfolio Posts</h2>
                        
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <div key={post.id} className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                                    <p className="text-sm mb-4 line-clamp-3">{post.description}</p>
                                    {post.image && (
                                        <div className="aspect-video overflow-hidden rounded-lg mb-4">
                                            <img 
                                                src={`/storage/${post.image}`} 
                                                alt={post.title} 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex gap-2">
                                        <Link 
                                            href={`/dashboard/post/${post.id}/edit`}
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded text-sm"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {posts.length === 0 && (
                                <div className="col-span-full p-8 text-center">
                                    <p className="mb-4">No posts yet. Start adding your portfolio projects!</p>
                                    <Link 
                                        href="/dashboard/post/create" 
                                        className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded inline-block"
                                    >
                                        Create First Post
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}