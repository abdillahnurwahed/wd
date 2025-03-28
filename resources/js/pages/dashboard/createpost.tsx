import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, Link } from '@inertiajs/react';
import { FormEvent } from 'react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Create Post',
        href: '/dashboard/post/create',
    },
];

export default function CreatePost() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        image: null as File | null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/dashboard/post');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('image', e.target.files[0]);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Post" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-6">
                    <div className="relative z-10">
                        <h1 className="text-2xl font-bold mb-6">Create New Portfolio Post</h1>
                        
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
                                <Input
                                    type='file'
                                    onChange={handleFileChange}
                                    id='image'
                                />
                                {/* <input
                                    type="file"
                                    id="image"
                                    onChange={handleFileChange}
                                    className="w-full rounded-md border border-sidebar-border/70 bg-white/5 px-3 py-2"
                                /> */}
                                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                            </div>
                            
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded"
                                >
                                    {processing ? 'Creating...' : 'Create Post'}
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