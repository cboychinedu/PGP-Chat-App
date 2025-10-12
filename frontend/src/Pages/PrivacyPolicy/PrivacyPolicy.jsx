/**
 * PrivacyPolicy Component
 * * This component details the application's policy on user data,
 * emphasizing the Zero-Knowledge principle and minimal data collection.
 */

import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar";
import DashboardNavbar from "@components/Navbar/DashboardNavbar"; 
import Footer from '@components/Footer/Footer';

// Getting the user token 
let tokenValue = localStorage.getItem("xAuthToken") || null; 

// Icons for the UI
const ShieldIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const LockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

// Privacy policy 
const PrivacyPolicy = () => {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                {/* Adding the navbar  */}
                {tokenValue ? <DashboardNavbar/> : <Navbar />}

                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <ShieldIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            Our <span className="text-blue-400">Privacy Policy</span>
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            We collect the absolute minimum required data and maintain a strict Zero-Knowledge standard.
                        </p>
                    </header>
                    
                    <div className="bg-blue-900 p-8 rounded-xl shadow-2xl border border-blue-700 space-y-8 text-blue-100 text-lg">
                        
                        <section>
                            <h3 className="text-3xl font-bold text-white mb-3 flex items-center"><LockIcon className="w-6 h-6 mr-2 text-red-400"/> Message Content (Zero-Knowledge)</h3>
                            <p>
                                **We do not collect or store the content of your messages in plain, readable text.** All messages are end-to-end encrypted (E2EE) using PGP before transmission. Our server only handles **ciphertext**, which is mathematically unreadable without your local Private Key.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-3xl font-bold text-white mb-3">Information We Collect</h3>
                            <ul className="list-disc list-inside ml-4 space-y-2">
                                <li>**Account Data:** Username, a hashed version of your password (for authentication), and a timestamp of creation.</li>
                                <li>**Public Keys:** Your PGP Public Key, which is essential for other users to encrypt messages to you. This key is public by design.</li>
                                <li>**Metadata:** Basic message routing metadata (sender ID, recipient ID, time sent) to deliver the ciphertext.</li>
                            </ul>
                        </section>
                        
                        <section>
                            <h3 className="text-3xl font-bold text-white mb-3">How We Use Information</h3>
                            <p>
                                The information collected is used solely for the purpose of **providing the secure chat service**: authenticating your identity and routing encrypted data to the correct recipient. We do not sell, rent, or trade your data.
                            </p>
                        </section>
                        
                        <section className="border-t border-blue-700 pt-6">
                            <h3 className="text-3xl font-bold text-red-300 mb-3">Private Keys</h3>
                            <p>
                                **Your Private Key is never transmitted, stored, or logged by our servers.** It remains on your local device. We have no mechanism for key recovery, which is the guarantee of your privacy.
                            </p>
                        </section>
                    </div>

                </main>

                <Footer />
            </div>
        </Fragment>
    );
}

export default PrivacyPolicy;