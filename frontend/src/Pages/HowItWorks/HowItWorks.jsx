/**
 * HowItWorks Component
 * * This component details the step-by-step mechanism of PGP (Pretty Good Privacy)
 * as implemented in the PGP Chat Application, focusing on key generation,
 * encryption, and decryption processes.
 * * It maintains the dark, professional blue theme (bg-gray-900) established
 * by the main Home component for a consistent, secure aesthetic.
 */

// Importing the necessary modules
import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar"; 
import Footer from '@components/Footer/Footer'; 
import DashboardNavbar from "@components/Navbar/DashboardNavbar"; 

// Getting the user token 
let tokenValue = localStorage.getItem("xAuthToken") || null; 

// ----------------------------------------------------------------------
// ICON DEFINITIONS (Copied from Home component to resolve the error)
// ----------------------------------------------------------------------
const KeyIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20v-4.5a3.5 3.5 0 0 1 7 0V20"/><path d="M12 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><circle cx="17" cy="17" r="3"/></svg>
);
const LockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const MessageCircleIcon = (props) => ( // <--- This icon was missing its definition!
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
);
const SendIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></svg>
);
const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
// ----------------------------------------------------------------------


// Reusable components
const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

const StepCard = ({ number, title, description, icon: Icon, reversed = false }) => (
    <div className={`flex flex-col md:flex-${reversed ? 'row-reverse' : 'row'} items-start bg-blue-900/70 p-8 rounded-xl shadow-2xl transition-all duration-500 hover:bg-blue-800/80 border border-blue-700`}>
        <div className={`md:w-1/4 flex-shrink-0 text-center ${reversed ? 'md:text-right' : 'md:text-left'}`}>
            <span className="text-7xl font-black text-blue-400 block mb-2">{number}.</span>
            <h3 className="text-3xl font-semibold text-white mb-4 flex items-center justify-center md:justify-start">
                <Icon className="w-8 h-8 mr-2 text-blue-300"/>
                {title}
            </h3>
        </div>
        <div className={`md:w-3/4 ${reversed ? 'md:pr-10' : 'md:pl-10'} text-blue-100 mt-4 md:mt-0`}>
            {description}
        </div>
    </div>
);


// Creating the HowItWorks component
const HowItWorks = () => {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                {/* Adding the navbar  */}
                {tokenValue ? <DashboardNavbar/> : <Navbar />}

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Page Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            How PGP <span className="text-blue-400">Encryption</span> Works
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            A step-by-step guide to the **Pretty Good Privacy (PGP)** cryptographic process that secures every single message you send on our platform.
                        </p>
                    </header>
                    {/* -------------------------------------------------------------------------------- */}


                    {/* PGP Mechanism Steps */}
                    <section id="pgp-process" className="mb-20">
                        <SectionTitle>The 3 Core Steps of End-to-End Security</SectionTitle>

                        <div className="space-y-16 mt-12">

                            {/* Step 1: Key Pair Generation */}
                            <StepCard
                                number="1"
                                icon={KeyIcon}
                                title="Initial Key Generation"
                                description={
                                    <>
                                        <p className="mb-4 text-lg">
                                            The foundation of PGP security is the **asymmetric key pair** generated locally on your device during registration. This pair is mathematically linked but serves opposite functions.
                                        </p>
                                        <ul className="list-disc list-inside space-y-3 ml-4 text-blue-200">
                                            <li><strong className="text-blue-300">Public Key:</strong> This key is shared and publicly visible. It's stored on the server for others to access. It is used *only* for **encrypting** messages intended for you.</li>
                                            <li><strong className="text-red-300">Private Key:</strong> This is your secret. It is **never** transmitted over the network and remains securely stored on your device. It is the *only* key capable of **decrypting** messages that were encrypted with your corresponding Public Key.</li>
                                        </ul>
                                    </>
                                }
                            />

                            {/* Step 2: Message Encryption */}
                            <StepCard
                                number="2"
                                icon={LockIcon}
                                title="Message Encryption (The Sender's Role)"
                                reversed={true}
                                description={
                                    <>
                                        <p className="mb-4 text-lg">
                                            When **Alice** sends a message, the encryption process happens entirely on her local machine, before the message leaves her browser.
                                        </p>
                                        <ol className="list-decimal list-inside space-y-3 ml-4 text-blue-200">
                                            <li>Alice's application automatically fetches **Bob's Public Key** from the key server.</li>
                                            <li>The application uses Bob's Public Key to apply a strong cryptographic algorithm (e.g., RSA or ECC) to the plain text.</li>
                                            <li>The message is instantly transformed into unreadable **ciphertext**.</li>
                                            <li>This ciphertext is then sent to the server. The server can see the ciphertext, but it's an impenetrable scramble without Bob's Private Key.</li>
                                        </ol>
                                    </>
                                }
                            />

                            {/* Step 3: Message Decryption */}
                            <StepCard
                                number="3"
                                icon={UserIcon}
                                title="Message Decryption (The Recipient's Role)"
                                description={
                                    <>
                                        <p className="mb-4 text-lg">
                                            When **Bob** receives the ciphertext, his device is the only one in the world that can revert it to the original message.
                                        </p>
                                        <ul className="list-disc list-inside space-y-3 ml-4 text-blue-200">
                                            <li>Bob's application retrieves the ciphertext from the server.</li>
                                            <li>It accesses **Bob's Private Key** (which is unique and secret to him) to unscramble (decrypt) the ciphertext.</li>
                                            <li>The original plain text message is then displayed to Bob. This entire process is seamless and occurs in milliseconds.</li>
                                        </ul>
                                    </>
                                }
                            />

                        </div>
                    </section>
                    {/* -------------------------------------------------------------------------------- */}


                    {/* Architecture Summary */}
                    <section id="architecture-role" className="mb-20">
                        <SectionTitle>The Architecture: Trust & Zero-Knowledge</SectionTitle>
                        <div className="bg-blue-950 p-8 rounded-xl shadow-2xl border border-blue-800 space-y-6">
                            <p className="text-blue-100 text-xl">
                                Our architecture is built on the principle of **Zero-Knowledge**. Simply put: we do not hold the keys to your communication.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 bg-blue-800 rounded-lg shadow-xl border-t-4 border-blue-500">
                                    <h4 className="font-bold text-2xl text-blue-300 mb-3 flex items-center"><SendIcon className="w-6 h-6 mr-2"/> Server (Backend) Role</h4>
                                    <p className="text-blue-200">
                                        The backend (Flask) functions strictly as a **relay station**. It stores public keys and forwards encrypted messages between users. It is mathematically incapable of reading the content, making it secure even against server breaches.
                                    </p>
                                </div>
                                <div className="p-6 bg-blue-800 rounded-lg shadow-xl border-t-4 border-blue-500">
                                    <h4 className="font-bold text-2xl text-blue-300 mb-3 flex items-center"><MessageCircleIcon className="w-6 h-6 mr-2"/> Client (Frontend) Role</h4>
                                    <p className="text-blue-200">
                                        The client (React) is the **security powerhouse**. All sensitive operations—key generation, encryption, and decryption—are executed locally in your browser. This is what truly ensures **End-to-End** encryption.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* -------------------------------------------------------------------------------- */}


                    {/* Final Call to Action */}
                    <section className="text-center py-12 bg-blue-800/80 rounded-2xl">
                        <h2 className="text-4xl font-bold mb-4 text-white">Experience True Privacy.</h2>
                        <p className="text-xl text-blue-200 mb-6">
                            Start chatting with the peace of mind that comes from industry-standard, time-tested PGP cryptography.
                        </p>
                        <button className="bg-blue-400 text-blue-950 text-xl font-bold py-3 px-10 rounded-full shadow-xl hover:bg-blue-300 transition duration-300 transform hover:scale-105">
                            Secure Your Account Now
                        </button>
                    </section>

                </main>

                <Footer />
            </div>
        </Fragment>
    );
}

// Export the HowItWorks component
export default HowItWorks;