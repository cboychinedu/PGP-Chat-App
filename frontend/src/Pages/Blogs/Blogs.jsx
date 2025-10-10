/**
 * Blog Component
 * * This component serves as a simple blog page, listing articles related to
 * PGP cryptography, security best practices, and application updates.
 * * It maintains the application's dark blue theme and structure.
 */

import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar";
import Footer from '@components/Footer/Footer';

// Icons for the UI
const RssIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
);
const ClockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const TagIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.5 12.5 16 16m3 3-6.5-6.5zm0-10-11 11a2 2 0 0 0 0 2l10 10a2 2 0 0 0 2 0l11-11a2 2 0 0 0 0-3L12.5 4a2 2 0 0 0-2 0z"/></svg>
);


const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

// Simulated Blog Post Data
const blogPosts = [
    {
        id: 1,
        title: "The Zero-Knowledge Pledge: Why Our Server Can't Read Your Chats",
        summary: "A deep dive into the server's architectural design and how the separation of keys ensures true end-to-end privacy, even from us.",
        date: "Oct 5, 2025",
        tags: ["Security", "Architecture", "PGP"],
    },
    {
        id: 2,
        title: "Understanding Asymmetric Encryption: Public Keys vs. Private Keys",
        summary: "An accessible guide explaining the PGP key pair and the mathematical link that makes secure digital communication possible.",
        date: "Sep 28, 2025",
        tags: ["Cryptography", "How It Works"],
    },
    {
        id: 3,
        title: "Client-Side Cryptography: The React Frontend as the Security Hub",
        summary: "Exploring why the React frontend is responsible for key generation, encryption, and decryption—and why this is crucial for E2EE.",
        date: "Sep 20, 2025",
        tags: ["Development", "React", "E2EE"],
    },
    {
        id: 4,
        title: "Flask Backend Update: Scaling Ciphertext Relay for Speed",
        summary: "A technical update on optimizations made to our lightweight Python backend to ensure fast, reliable delivery of encrypted messages.",
        date: "Sep 12, 2025",
        tags: ["Development", "Backend"],
    },
];

const BlogPostCard = ({ post }) => (
    <div className="bg-blue-900/80 p-6 rounded-xl shadow-xl transition-all duration-300 hover:bg-blue-800 hover:shadow-2xl border border-blue-700/50">
        <h3 className="text-3xl font-bold text-white mb-3 hover:text-blue-300 cursor-pointer transition">
            {post.title}
        </h3>
        <p className="text-blue-200 mb-4">{post.summary}</p>
        
        <div className="flex items-center text-sm text-blue-300 border-t border-blue-700 pt-3">
            <ClockIcon className="w-4 h-4 mr-2" />
            <span className="mr-4">{post.date}</span>
            <TagIcon className="w-4 h-4 mr-2" />
            <div className="space-x-2">
                {post.tags.map(tag => (
                    <span key={tag} className="inline-block bg-blue-700 text-blue-100 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <button className="mt-4 text-blue-400 font-semibold hover:text-blue-200 transition duration-200">
            Read Full Article &rarr;
        </button>
    </div>
);


const Blog = () => {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                <Navbar />

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <RssIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            The PGP Chat <span className="text-blue-400">Blog</span>
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            Technical insights, security updates, and deep dives into the cryptography that protects your privacy.
                        </p>
                    </header>

                    {/* Blog Posts List */}
                    <section id="latest-posts" className="mb-20">
                        <SectionTitle>Latest Posts</SectionTitle>
                        <div className="grid md:grid-cols-2 gap-10 mt-10">
                            {blogPosts.map(post => (
                                <BlogPostCard key={post.id} post={post} />
                            ))}
                        </div>
                    </section>

                    {/* Newsletter Callout */}
                    <section className="text-center py-12 bg-blue-800/80 rounded-2xl">
                        <h2 className="text-4xl font-bold mb-4 text-white">Stay Updated on Cryptography</h2>
                        <p className="text-xl text-blue-200 mb-6">
                            Subscribe to our newsletter for direct security advisories and development news.
                        </p>
                        <div className="flex justify-center max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email for updates..."
                                className="flex-grow p-3 rounded-l-full bg-blue-900 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button className="bg-blue-400 text-blue-950 text-lg font-bold py-3 px-8 rounded-r-full shadow-lg hover:bg-blue-300 transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </section>

                </main>

                <Footer />
            </div>
        </Fragment>
    );
}

export default Blog;