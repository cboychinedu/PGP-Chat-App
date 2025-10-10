/**
 * TermsOfService Component
 * * This component lays out the rules and legal agreement for using the PGP Chat Application.
 */

import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar";
import Footer from '@components/Footer/Footer';

// Icons for the UI
const FileTextIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
);
const UserXIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m17 17 5 5m0-5-5 5"/></svg>
);


const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);


const TermsOfService = () => {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                <Navbar />

                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <FileTextIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            Terms of <span className="text-blue-400">Service</span>
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            The legal agreement governing your use of the PGP Chat Application. Last Updated: Oct 2025.
                        </p>
                    </header>
                    
                    <div className="bg-blue-900 p-8 rounded-xl shadow-2xl border border-blue-700 space-y-8 text-blue-100 text-lg">
                        
                        <section>
                            <h3 className="text-3xl font-bold text-white mb-3">1. Acceptance of Terms</h3>
                            <p>
                                By accessing or using the PGP Chat Application (the "Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-3xl font-bold text-white mb-3">2. User Responsibilities</h3>
                            <ul className="list-disc list-inside ml-4 space-y-2">
                                <li>**Lawful Use:** You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of others.</li>
                                <li>**Key Management:** You are solely responsible for the security and retention of your PGP Private Key. We are unable to restore lost keys.</li>
                                <li>**Prohibited Content:** Use of the Service to transmit spam, viruses, or illegal material is strictly prohibited.</li>
                            </ul>
                        </section>
                        
                        <section>
                            <h3 className="text-3xl font-bold text-white mb-3 flex items-center"><UserXIcon className="w-6 h-6 mr-2 text-red-400"/> 3. Termination</h3>
                            <p>
                                We may terminate or suspend access to our Service immediately, without prior notice, for any breach of the Terms of Service. Upon termination, your right to use the Service will immediately cease.
                            </p>
                        </section>
                        
                        <section className="border-t border-blue-700 pt-6">
                            <h3 className="text-3xl font-bold text-white mb-3">4. Limitation of Liability</h3>
                            <p>
                                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Due to the nature of client-side cryptography, we are not liable for any loss of data, including the permanent loss of Private Keys.
                            </p>
                        </section>
                    </div>

                </main>

                <Footer />
            </div>
        </Fragment>
    );
}

export default TermsOfService;