/**
 * Documentation Component
 * * This component provides an entry point to the application's documentation,
 * focusing on PGP setup, key management, and API usage.
 */

import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar";
import Footer from '@components/Footer/Footer';

// Icons for the UI
const BookOpenIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13h10v8L12 3H2v10zM12 21l-10-8M12 13l10 8V3z"/></svg>
);
const KeyIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20v-4.5a3.5 3.5 0 0 1 7 0V20"/><path d="M12 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><circle cx="17" cy="17" r="3"/></svg>
);
const CodeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);


const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

const DocLinkCard = ({ icon: Icon, title, summary, link }) => (
    <a href={link} className="block bg-blue-900/70 p-6 rounded-xl shadow-xl border-l-4 border-blue-500 hover:bg-blue-800/80 transition duration-300">
        <Icon className="w-10 h-10 text-blue-400 mb-3" />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-200">{summary}</p>
    </a>
);


const Documentation = () => {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                <Navbar />

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <BookOpenIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            Official <span className="text-blue-400">Documentation</span>
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            A comprehensive guide to understanding, using, and integrating the PGP Chat Application.
                        </p>
                    </header>

                    {/* Quick Links */}
                    <section id="quick-links" className="mb-20">
                        <SectionTitle>Getting Started</SectionTitle>
                        <div className="grid md:grid-cols-3 gap-8 mt-10">
                            <DocLinkCard
                                icon={KeyIcon}
                                title="Key Management Guide"
                                summary="Learn how keys are generated, stored locally, and how to safely back up your Private Key."
                                link="/docs/key-management"
                            />
                            <DocLinkCard
                                icon={CodeIcon}
                                title="API & Protocol Reference"
                                summary="Detailed documentation for the public API endpoints used for user lookups and ciphertext relay."
                                link="/docs/api"
                            />
                            <DocLinkCard
                                icon={BookOpenIcon}
                                title="Cryptography Deep Dive"
                                summary="Technical whitepaper explaining the specific PGP algorithms used for E2EE."
                                link="/docs/crypto-deep-dive"
                            />
                        </div>
                    </section>

                    {/* Search & Contribution */}
                    <section id="search-contribute" className="text-center py-12 bg-blue-800/80 rounded-2xl">
                        <h2 className="text-4xl font-bold mb-4 text-white">Can't Find What You Need?</h2>
                        <p className="text-xl text-blue-200 mb-6">
                            Use the search bar above or check out our open-source repositories to contribute to the documentation.
                        </p>
                        <button className="bg-blue-400 text-blue-950 text-lg font-bold py-3 px-10 rounded-full shadow-xl hover:bg-blue-300 transition duration-300 transform hover:scale-105">
                            Browse GitHub Docs
                        </button>
                    </section>

                </main>

                <Footer />
            </div>
        </Fragment>
    );
}

export default Documentation;