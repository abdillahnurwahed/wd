import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import image01 from '../../assets/abd-2.jpg';
import { Phone, Mail } from "lucide-react";


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

export default function Fyp({ posts = [] }: Props) {
    const [selectedPost, setSelectedPost] = useState(null);
    
    return (
        // Add scroll snapping properties to the main container
<div className="flex flex-col items-center bg-[#0b0b10] text-white relative overflow-y-scroll snap-y snap-mandatory h-screen scroll-smooth">
{/* Section 1: Landing Page */}
            <div className="flex flex-col items-center justify-center min-h-screen w-full p-10 snap-start">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-grid opacity-10"></div>

                {/* Title */}
                <motion.h1
                    className="text-6xl md:text-8xl font-bold pixelated text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-lime-400">2025</span> portFolio
                </motion.h1>

                {/* Tags */}
                <motion.div
                    className="flex gap-3 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-lg text-sm shadow-lg">Web Developer</span>
                    <span className="bg-lime-400 text-black px-3 py-1 rounded-lg text-sm shadow-lg">Software Engineer</span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm shadow-lg">Wordpress Developer</span>
                </motion.div>

                {/* Admin Button - Uncomment if needed */}
                <motion.div
                    className="mt-6 bg-purple-500 text-white px-4 py-2 rounded-full font-bold shadow-lg relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 2 }}
                >
                    by Muhammad Abdillah 
                </motion.div>
            </div>

            {/* Section 2: Portfolio Content */}
            <div className="min-h-screen w-full flex flex-col items-center justify-center gap-10 p-10 snap-start">
                {/* Portfolio Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                    {/* Experience */}
                    <motion.div className="bg-gray-800 p-5 rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
                        <h2 className="text-xl font-bold text-pink-400">Tools</h2>
                        <div className="mt-2 text-gray-300 grid grid-cols-2 gap-2">
                            <p>Laravel</p>
                            <p>PHP</p>
                            <p>Java Spring Boot</p>
                            <p>MySQL</p>
                            <p>Git & GitHub</p>
                            <p>React</p>
                            <p className="col-span-2 ">WordPress </p>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div className="bg-gray-800 p-5 rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
                        <h2 className="text-xl font-bold text-lime-400">Education</h2>
                        <p className="mt-2">Senior High School in Mathematics and Science - Al Burhan (2021 - 2024)</p>
                        <p>Bachelor of Applied Science in Software Engineering Technology - IDN Polytechnic (2025 - present)</p>
                    </motion.div>

                    {/* Skills */}
                    <motion.div className="bg-gray-800 p-5 rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
                        <h2 className="text-xl font-bold text-pink-300">Skills</h2>
                        <div className="space-y-2">
                            <p className="mt-2">✔ Web Development ✔ Full-Stack Development ✔ React</p>
                            <p>✔ PHP (Laravel, Filament) ✔ Java (Spring Boot) </p>
                            <p>✔ WordPress (Elementor)  ✔ MySQL</p>
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div className="bg-gray-800 p-5 rounded-xl shadow-lg col-span-3" whileHover={{ scale: 1.05 }}>
                        <h2 className="text-xl font-bold text-blue-500">Experience</h2>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            {/* Kiri */}
                            <div>
                                <p className="font-semibold">Backend Engineer - Santri Admission Project (PSB)</p>
                                <p className="text-sm text-gray-400">
                                    Developed a seamless admission system using Docker and Kubernetes, enhancing scalability and performance.
                                </p>

                                <p className="font-semibold mt-4">Web Developer - WordPress Projects (Elementor & Kubio)</p>
                                <p className="text-sm text-gray-400">
                                    Created custom websites for clients, leveraging Elementor and Kubio to build responsive designs with optimized SEO.
                                </p>
                            </div>

                            {/* Kanan */}
                            <div>
                                <p className="font-semibold">Backend Developer - Pinemate Project</p>
                                <p className="text-sm text-gray-400">
                                    Built REST APIs to handle user authentication and activity tracking. Integrated with third-party services to enrich app functionality.
                                </p>

                                <p className="font-semibold mt-4">Full-Stack Developer - Sekol Project</p>
                                <p className="text-sm text-gray-400">
                                    Designed and implemented the front-end using React, while developing the back-end with Laravel, ensuring smooth data management.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Section 3: Who Am I */}
            <div className="flex min-h-screen text-white items-center justify-center px-8 snap-start">
                <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
                    {/* Image and Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img src={image01} className="w-full max-w-sm" />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute bottom-5 left-10 text-red-500 text-2xl font-bold"
                        >
                            {/* Hi there! */}
                        </motion.p>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-bold">Who am I?</h1>
                        <p className="mt-4 text-gray-300">
                            I'm Abdillah based in Indonesia. Fresh graduate with experience in PHP, Laravel, WordPress, and MySQL. I have skills in developing as well as managing web applications and designing WordPress-based solutions. With an organized approach, I am ready to contribute to freelance projects and continue developing skills in the world of web development, both frontend and backend. I am committed to providing innovative and optimized solutions.
                        </p>
                        {/* <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="mt-6 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
                        >
                            Learn more
                        </motion.button> */}
                    </motion.div>
                </div>
            </div>

            {/* NEW SECTION: Portfolio Projects from Dashboard */}
            <div className="min-h-screen w-full flex flex-col items-center justify-center p-10 snap-start relative">
            {/* Background Blur when Modal Open */}
            {selectedPost && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}

            {/* Project Section */}
            <motion.h2 
                className="text-4xl font-bold mb-12 text-lime-400 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                My Projects
            </motion.h2>

            {posts.length === 0 ? (
                <motion.p 
                    className="text-gray-400 text-center z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    No projects to display yet. Stay tuned!
                </motion.p>
            ) : (
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {posts.map((post) => (
                        <motion.div 
                            key={post.id} 
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {post.image && (
                                <div className="aspect-video overflow-hidden">
                                    <img 
                                        src={`/storage/${post.image}`} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-lime-400 mb-2">{post.title}</h3>
                                <p className="text-gray-300 line-clamp-4">{post.description}</p>
                                <motion.button
                                    className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedPost(post)}
                                >
                                    View Project
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                )}

            {/* Modal */}
                <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="bg-gray-900 rounded-lg shadow-xl overflow-hidden max-w-3xl w-full relative"
                        >
                            <button
                                className="absolute top-3 right-3 bg-pink-500 text-white px-3 py-1 rounded-lg text-sm"
                                onClick={() => setSelectedPost(null)}
                            >
                                Close
                            </button>
                            {selectedPost.image && (
                                <img 
                                    src={`/storage/${selectedPost.image}`} 
                                    alt={selectedPost.title} 
                                    className="w-full" 
                                />
                            )}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-lime-400 mb-2">{selectedPost.title}</h3>
                                <p className="text-gray-300">{selectedPost.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

            <div className="min-h-screen w-full flex flex-col items-center justify-center p-10 snap-start">
                <motion.section
                    className="max-w-md mx-auto text-center p-6 space-y-6 text-white rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-2xl font-bold text-lime-400"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Thank you for exploring my project! 

                        Have Questions?
                    </motion.h2>

                    <motion.h3
                        className="text-xl font-semibold text-white"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Ready to Help!
                    </motion.h3>

                    <div className="space-y-4 mt-6">
                        {/* Phone */}
                        <motion.div
                            className="flex items-center space-x-4"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Phone className="w-8 h-8  text-pink-500" />
                            <div className="text-left">
                                <p className="text-sm text-gray-400">Call us for quick assistance or inquiries.</p>
                                <p className="font-medium text-white">+62 822 4787 4882</p>
                            </div>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            className="flex items-center space-x-4"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <Mail className="w-8 h-8 text-blue-500" />
                            <div className="text-left">
                                <p className="text-sm text-gray-400">Drop us a message, and we'll get back to you soon.</p>
                                <p className="font-medium text-white">abdillahnurw@gmail.com</p>
                            </div>
                        </motion.div>

                        {/* Location
                        <motion.div
                            className="flex items-center space-x-4"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <MapPin className="w-8 h-8 text-pink-500" />
                            <div className="text-left">
                                <p className="text-sm text-gray-400">Visit us at our location for in-person support.</p>
                                <p className="font-medium text-white">Indonesisa</p>
                            </div>
                        </motion.div> */}
                    </div>
                </motion.section>
            </div>


            {/* Footer */}
            <div className="w-full py-8 text-center border-t border-gray-800 snap-start">
                <p className="text-gray-400">© {new Date().getFullYear()} Muhammad Abdillah. All rights reserved.</p>
            </div>
        </div>
    );
}