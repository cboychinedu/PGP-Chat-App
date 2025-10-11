/**
 * About Component
 * * This component details the application's mission, the technology stack,
 * and the history/purpose of PGP (Pretty Good Privacy).
 */

// Importing the necessary modules 
import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar"; 
import DashboardNavbar from "@components/Navbar/DashboardNavbar"; 
import Footer from '@components/Footer/Footer';

// Getting the user token 
let tokenValue = localStorage.getItem("xAuthToken") || null; 

// Icons reused and added for context
const BookOpenIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13h10v8L12 3H2v10zM12 21l-10-8M12 13l10 8V3z"/></svg>
);
const CodeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const HeartIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.2 3-5.5A7 7 0 0 0 16.5 3c-1.5 0-3.05 1-4.5 3-1.45-2-3-3-4.5-3A7 7 0 0 0 2 8.5c0 2.3 1.5 4.04 3 5.5l7 7Z"/></svg>
);
const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);


const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

const StackItem = ({ icon: Icon, title, description, color }) => (
    <div className={`p-5 rounded-lg border-l-4 ${color} bg-blue-900/70 shadow-lg`}>
        <Icon className={`w-8 h-8 ${color} mb-2`} />
        <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
        <p className="text-blue-200">{description}</p>
    </div>
);

// Creating the about component
const About = () => {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                {tokenValue ? <DashboardNavbar/> : <Navbar />}

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <BookOpenIcon className="w-16 h-16 text-blue-400 mx-auto mb-4"/>
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            About This <span className="text-blue-400">Project</span>
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            A dedication to privacy, open-source principles, and the power of cryptography.
                        </p>
                    </header>
                    
                    {/* Mission */}
                    <section id="mission" className="mb-20">
                        <SectionTitle>Our Mission: Privacy by Default</SectionTitle>
                        <div className="bg-blue-900 p-8 rounded-xl shadow-inner border border-blue-700 space-y-4 text-lg text-blue-100">
                            <p>
                                The goal of the PGP Chat Application is to demonstrate and provide accessible, end-to-end encrypted messaging using the principles of **Pretty Good Privacy (PGP)**. In an era where digital surveillance is common, we believe that **private communication** should be a fundamental right, not a luxury.
                            </p>
                            <p>
                                This project serves both as a functional communication tool and an **educational platform**, allowing users to understand the robust mechanisms of asymmetric cryptography that secure their data.
                            </p>
                            <p className="font-bold text-blue-300 flex items-center pt-2">
                                <HeartIcon className="w-6 h-6 mr-2 text-red-400"/> Built with love, cryptography, and a commitment to user autonomy.
                            </p>
                        </div>
                    </section>
                    
                    {/* The Technology Stack */}
                    <section id="stack" className="mb-20">
                        <SectionTitle>The Technology Stack</SectionTitle>
                        <p className="text-xl text-blue-200 mb-10 max-w-4xl">
                            A modern, secure stack designed for performance and cryptographic heavy-lifting on the client-side.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StackItem
                                icon={CodeIcon}
                                title="Frontend: React & Tailwind CSS"
                                description="A fast, modern UI built with React, styled efficiently with Tailwind CSS for a seamless user experience."
                                color="border-blue-400 text-blue-400"
                            />
                            <StackItem
                                icon={CodeIcon}
                                title="Backend: Flask (Python)"
                                description="A lightweight, secure Python backend primarily used for user authentication and relaying ciphertext."
                                color="border-yellow-400 text-yellow-400"
                            />
                            <StackItem
                                icon={CodeIcon}
                                title="Cryptography: PGP (js-based)"
                                description="Client-side implementation of the PGP standard to ensure encryption/decryption happens locally."
                                color="border-red-400 text-red-400"
                            />
                            <StackItem
                                icon={CodeIcon}
                                title="Data: Client-Side Storage"
                                description="Private keys are secured in the browser's local storage (e.g., IndexedDB) and never touch the server."
                                color="border-green-400 text-green-400"
                            />
                        </div>
                    </section>
                    
                    {/* About PGP */}
                    <section id="pgp-info" className="mb-20">
                        <SectionTitle>What is PGP?</SectionTitle>
                        <div className="bg-blue-900 p-8 rounded-xl shadow-inner border border-blue-500">
                            <h3 className="text-3xl font-bold text-blue-300 mb-4 flex items-center">
                                <UserIcon className="w-8 h-8 mr-3"/> Pretty Good Privacy
                            </h3>
                            <div className="space-y-4 text-blue-100 text-lg">
                                <p>
                                    PGP is a **cryptographic protocol** that was created in 1991 by **Phil Zimmermann** to enable individuals to send emails and files securely. It quickly became the standard for digital security.
                                </p>
                                <p>
                                    It utilizes a **hybrid encryption system**, combining fast symmetric-key cryptography for encrypting the bulk message data and slower, more secure **asymmetric public-key cryptography** (like RSA or ECC) for securing and exchanging the symmetric key. This ensures both speed and uncompromised security. PGP's key feature is the **Web of Trust**, a decentralized way to verify public keys.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    {/* Final Call to Action - Focused on Community */}
                     <section className="text-center py-12 bg-blue-800/80 rounded-2xl">
                        <h2 className="text-4xl font-bold mb-4 text-white">Join the Community.</h2>
                        <p className="text-xl text-blue-200 mb-6">
                            This is an open-source project. Contribute to the code, report issues, or just help us spread the word about privacy!
                        </p>
                        <button className="bg-green-400 text-blue-950 text-xl font-bold py-3 px-10 rounded-full shadow-xl hover:bg-green-300 transition duration-300 transform hover:scale-105">
                            View Project on GitHub
                        </button>
                    </section>

                </main>

                <Footer/>
            </div>
        </Fragment>
    );
}

// Exporting the about page 
export default About;