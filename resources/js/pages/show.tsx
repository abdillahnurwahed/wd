import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { BreadcrumbItem } from '@/types';
// import AppLayout from '@/Layouts/AppLayout';

// Import Layout sesuai dengan struktur proyek Anda
// Biasanya ada di salah satu lokasi ini:
// import AppLayout from '@/Layouts/App'; 
// Atau
// import AppLayout from '@/Layouts/AppLayout';
// Atau mungkin
// import AppLayout from '@/Layouts/MainLayout';

interface Post {
    id: number;
    title: string;
    description: string;
    image: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    post: Post;
}

export default function Show({ post }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Projects',
            href: '/',
        },
        {
            title: post.title,
            href: `/post/${post.id}`,
        },
    ];

    return (
        // Jika ada masalah dengan AppLayout, Anda dapat menggunakan fragment sementara
        // dan menyesuaikan layout nanti
        <>
            <Head title={post.title} />
            <div className="min-h-screen w-full flex flex-col items-center p-6 md:p-10">
                <motion.div
                    className="w-full max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center text-lime-400 hover:text-lime-300 mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Projects
                    </Link>
                    
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-lime-400 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {post.title}
                    </motion.h1>
                    
                    {post.image && (
                        <motion.div
                            className="w-full aspect-video overflow-hidden rounded-xl mb-8"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <img
                                src={`/storage/${post.image}`}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    )}
                    
                    <motion.div
                        className="prose prose-lg prose-invert prose-lime max-w-none"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <p className="whitespace-pre-line">{post.description}</p>
                    </motion.div>
                    
                    <motion.div
                        className="mt-12 pt-8 border-t border-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <p className="text-gray-400 text-sm">
                            Last updated: {new Date(post.updated_at).toLocaleDateString()}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}