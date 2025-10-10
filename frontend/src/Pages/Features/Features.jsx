/**
 * Features Component
 * * This component highlights and details the main functional and security
 * features of the PGP Chat Application, such as E2E encryption, key management,
 * and user experience.
 */

import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar";
import Footer from '@components/Footer/Footer';

// Icons reused from the Home and other components
const LockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const KeyIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20v-4.5a3.5 3.5 0 0 1 7 0V20"/><path d="M12 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><circle cx="17" cy="17" r="3"/></svg>
);
const MessageCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
);
const SearchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const ShieldIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

const FeatureDetailCard = ({ icon: Icon, title, description, highlight }) => (
    <div className="bg-blue-900/70 p-6 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.02] border border-blue-700">
        <Icon className="w-10 h-10 text-blue-400 mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-200 mb-3">{description}</p>
        <p className="font-bold text-sm text-blue-300 border-t border-blue-600 pt-2">{highlight}</p>
    </div>
);


const Features = () => {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                <Navbar />

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <MessageCircleIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            Application <span className="text-blue-400">Features</span>
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            Blending state-of-the-art cryptography with a seamless, user-focused chat experience.
                        </p>
                    </header>

                    {/* Security Features Section */}
                    <section id="security-features" className="mb-20">
                        <SectionTitle>Core Security & Privacy</SectionTitle>
                        <div className="grid md:grid-cols-3 gap-8 mt-10">
                            <FeatureDetailCard
                                icon={LockIcon}
                                title="End-to-End PGP Encryption"
                                description="Every message is scrambled using the recipient's Public Key before leaving your device."
                                highlight="Protocol: Pretty Good Privacy (PGP) Standard"
                            />
                            <FeatureDetailCard
                                icon={KeyIcon}
                                title="Client-Side Private Key Management"
                                description="Your Private Key is generated and stored locally in your browser. The server never sees it."
                                highlight="Commitment: Zero-Knowledge Architecture"
                            />
                            <FeatureDetailCard
                                icon={ShieldIcon}
                                title="Server Isolation (Relay Only)"
                                description="The backend only manages public keys and routes ciphertext, making it impossible to eavesdrop."
                                highlight="Storage: Ciphertext, not Plain Text"
                            />
                        </div>
                    </section>
                    
                    {/* Functional Features Section */}
                    <section id="functional-features" className="mb-20">
                        <SectionTitle>User Experience & Functionality</SectionTitle>
                        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
                            <FeatureDetailCard
                                icon={SearchIcon}
                                title="Instant User Search"
                                description="Quickly locate and initiate a PGP-secured chat with any registered user via the dashboard."
                                highlight="Integration: Real-time User Lookup"
                            />
                            <FeatureDetailCard
                                icon={MessageCircleIcon}
                                title="Dedicated Chat Dialogs"
                                description="A clear, focused interface for each conversation, with real-time feedback on key readiness."
                                highlight="Focus: Security Status Clarity"
                            />
                        </div>
                    </section>
                    
                    {/* PGP Workflow Summary */}
                    <section id="workflow-summary" className="mb-20">
                        <SectionTitle>Key Workflow Highlights</SectionTitle>
                        <div className="bg-blue-950 p-8 rounded-xl shadow-2xl border border-blue-800 space-y-4 text-blue-100 text-lg">
                            <p>
                                The application automates the complex PGP workflow, making security simple:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>**Automatic Key Exchange:** Public keys are automatically exchanged and cached upon initiating a chat.</li>
                                <li>**Client-Side Encryption:** Encryption happens instantaneously on the client device (React Frontend) before data hits the network.</li>
                                <li>**Seamless Decryption:** Incoming ciphertext is immediately decrypted using your local Private Key for an instant, readable chat experience.</li>
                            </ul>
                            <p className="text-blue-300 font-bold pt-4">
                                This ensures that the high standard of PGP security is delivered with the speed and usability of a modern web application.
                            </p>
                        </div>
                    </section>

                    {/* Final Call to Action */}
                    <section className="text-center py-12 bg-blue-800/80 rounded-2xl">
                        <h2 className="text-4xl font-bold mb-4 text-white">Ready to Chat Securely?</h2>
                        <p className="text-xl text-blue-200 mb-6">
                            Experience the difference when privacy is the default setting.
                        </p>
                        <button className="bg-blue-400 text-blue-950 text-xl font-bold py-3 px-10 rounded-full shadow-xl hover:bg-blue-300 transition duration-300 transform hover:scale-105">
                            Start Encrypting Your Messages
                        </button>
                    </section>

                </main>

                <Footer />
            </div>
        </Fragment>
    );
}

export default Features;