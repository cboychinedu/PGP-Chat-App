/**
 * Security Component
 * * This component outlines the architectural and cryptographic principles
 * that ensure the security of the PGP Chat Application.
 * * It emphasizes client-side control, zero-knowledge architecture, and PGP standards.
 */

// Importing the necessary modules 
import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar"; 
import Footer from '@components/Footer/Footer';
import DashboardNavbar from "@components/Navbar/DashboardNavbar";

// Getting the user token 
let tokenValue = localStorage.getItem("xAuthToken") || null; 

// Icons reused from the Home component
const LockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const ShieldIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const KeyIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20v-4.5a3.5 3.5 0 0 1 7 0V20"/><path d="M12 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><circle cx="17" cy="17" r="3"/></svg>
);
const ZapIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

const SecurityCommitmentCard = ({ icon: Icon, title, description }) => (
    <div className="bg-blue-900 p-6 rounded-xl shadow-xl border-t-4 border-blue-500 hover:bg-blue-800/80 transition duration-300">
        <Icon className="w-10 h-10 text-blue-300 mb-4"/>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-200">{description}</p>
    </div>
);

// Creating the security component
const Security = () => {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                {/* Adding the navbar  */}
                {tokenValue ? <DashboardNavbar/> : <Navbar />}

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-950/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <ShieldIcon className="w-16 h-16 text-red-400 mx-auto mb-4"/>
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            Our <span className="text-red-400">Security</span> Promise
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            Privacy is not an option; it's the foundation. We are committed to a **Zero-Knowledge** architecture powered by industry-standard PGP cryptography.
                        </p>
                    </header>
                    
                    {/* Core Principles */}
                    <section id="principles" className="mb-20">
                        <SectionTitle>Core Security Principles</SectionTitle>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                            <SecurityCommitmentCard
                                icon={LockIcon}
                                title="End-to-End Encryption"
                                description="Messages are encrypted on the sender's device and decrypted only on the recipient's device."
                            />
                            <SecurityCommitmentCard
                                icon={KeyIcon}
                                title="Client-Side Keys"
                                description="Your private keys never leave your machine and are not stored on our server, ensuring maximum control."
                            />
                            <SecurityCommitmentCard
                                icon={ZapIcon}
                                title="Zero-Knowledge Architecture"
                                description="Our server only relays encrypted data and public keys, possessing no ability to read your messages."
                            />
                             <SecurityCommitmentCard
                                icon={ShieldIcon}
                                title="PGP Standard"
                                description="We use the time-tested Pretty Good Privacy standard for robust, asymmetric encryption."
                            />
                        </div>
                    </section>
                    
                    {/* The Private Key Policy */}
                    <section id="key-policy" className="mb-20">
                        <SectionTitle>Private Key Management Policy</SectionTitle>
                        <div className="bg-blue-900 p-8 rounded-xl shadow-inner border border-red-700/50">
                            <h3 className="text-3xl font-bold text-red-300 mb-4 flex items-center">
                                <KeyIcon className="w-8 h-8 mr-3"/> Private Keys Are Yours Alone
                            </h3>
                            <div className="space-y-4 text-blue-100 text-lg">
                                <p>
                                    Your **Private Key** is the most critical component of your security. It is generated locally in your browser when you first register.
                                </p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>**No Transmission:** The Private Key is *never* sent over the internet.</li>
                                    <li>**No Server Storage:** We do not, and structurally cannot, store your Private Key on our server.</li>
                                    <li>**Local Storage:** It is stored securely on your local device's storage (e.g., indexedDB or local storage, depending on implementation) and is protected by your account password.</li>
                                </ul>
                                <p className="font-bold text-yellow-300 pt-4">
                                    ⚠️ **Note on Key Loss:** Because we do not store your Private Key, if you lose access to your device and forget your backup passphrase, we cannot recover your chat history. This is the trade-off for true end-to-end security.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    {/* Server Role and Data Handling */}
                    <section id="server-role" className="mb-20">
                        <SectionTitle>Data Handling and Server Isolation</SectionTitle>
                        <div className="bg-blue-950 p-8 rounded-xl shadow-2xl border border-blue-800 space-y-6">
                            <p className="text-blue-100 text-lg">
                                The **Flask Backend** is designed with the minimal necessary functionality to maintain communication, preventing any snooping by administrators or third parties.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-4 bg-blue-800 rounded-lg">
                                    <h4 className="font-bold text-xl text-blue-300 mb-2">What the Server Stores:</h4>
                                    <ul className="list-disc list-inside ml-4 text-blue-200">
                                        <li>User Authentication Tokens (for session management)</li>
                                        <li>Usernames/Hashed Passwords</li>
                                        <li><strong className="text-blue-400">Public Keys</strong> (Essential for message encryption)</li>
                                        <li><strong className="text-red-400">Ciphertext</strong> (Encrypted, unreadable messages)</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-blue-800 rounded-lg">
                                    <h4 className="font-bold text-xl text-blue-300 mb-2">What the Server NEVER Stores:</h4>
                                    <ul className="list-disc list-inside ml-4 text-blue-200">
                                        <li>Plain Text Messages</li>
                                        <li><strong className="text-red-400">Private Keys</strong></li>
                                        <li>Decryption Passphrases</li>
                                        <li>Any information required to decrypt user data</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Final Call to Action - Focused on Trust */}
                     <section className="text-center py-12 bg-blue-800/80 rounded-2xl">
                        <h2 className="text-4xl font-bold mb-4 text-white">Security is Built-In, Not Added On.</h2>
                        <p className="text-xl text-blue-200 mb-6">
                            Start chatting knowing the security standards are verifiable and your privacy is paramount.
                        </p>
                        <button className="bg-red-400 text-blue-950 text-xl font-bold py-3 px-10 rounded-full shadow-xl hover:bg-red-300 transition duration-300 transform hover:scale-105">
                            Verify Our Security
                        </button>
                    </section>

                </main>

                <Footer/>
            </div>
        </Fragment>
    );
}

// Exporting the security component
export default Security;