/**
 * HomePage Component
 * * This component serves as the landing page for the PGP Chat Application,
 * explaining the principles of Pretty Good Privacy (PGP) and how the application
 * provides secure, end-to-end encrypted messaging.
 * * It uses a dark, professional blue theme (bg-blue-900) for a secure aesthetic.
 */

// Importing the necessary modules 
import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar"; 
import Footer from '@components/Footer/Footer';

// Icons used from lucide-react (simulated as simple functions/components)
const KeyIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20v-4.5a3.5 3.5 0 0 1 7 0V20"/><path d="M12 17H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><circle cx="17" cy="17" r="3"/></svg>
);
const LockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const MessageCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
);
const ZapIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13.13l10 5.74 10-5.74L12 7.39z"/><path d="M2 17.13l10 5.74 10-5.74"/><path d="M12 2l10 5.74L12 13.48 2 7.74 12 2z"/></svg>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-blue-800/50 p-6 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.02] border border-blue-700">
        <Icon className="w-10 h-10 text-blue-300 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-200">{description}</p>
    </div>
);


// Creating the home component 
const Home = () => {
    return (
        <Fragment> 
        <div className="min-h-screen bg-gray-900 font-sans text-white">
            {/* Adding the navbar */}
            <Navbar /> 

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* 1. Hero Section */}
                <section className="text-center py-16 mb-20 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                        <span className="text-blue-400">Secure</span> Your Conversations.
                    </h1>
                    <p className="text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
                        End-to-End Encryption powered by **Pretty Good Privacy (PGP)** principles. Chat with confidence, knowing only the intended recipient can read your messages.
                    </p>
                    <button className="bg-blue-500 text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                        Start Encrypted Chat Now
                    </button>
                </section>

                {/* 2. Key Features Overview */}
                <section className="mb-20">
                    <SectionTitle>Application Features</SectionTitle>
                    <div className="grid md:grid-cols-4 gap-8 mt-10">
                        <FeatureCard 
                            icon={LockIcon} 
                            title="End-to-End Encryption"
                            description="All data is encrypted before leaving your device, ensuring true privacy."
                        />
                        <FeatureCard 
                            icon={KeyIcon} 
                            title="Client-Side Key Management"
                            description="Your private keys are never stored on our server, giving you full control."
                        />
                         <FeatureCard 
                            icon={MessageCircleIcon} 
                            title="Real-Time Messaging"
                            description="Enjoy instant, seamless communication without compromising security."
                        />
                        <FeatureCard 
                            icon={ZapIcon} 
                            title="Fast & Responsive"
                            description="A modern React frontend provides a smooth and efficient chat experience."
                        />
                    </div>
                </section>

                {/* 3. How It Works: The PGP Mechanism */}
                <section id="how-it-works" className="mb-20">
                    <SectionTitle>The Core: How PGP Secures Your Communication</SectionTitle>
                    <p className="text-xl text-blue-200 mb-10 max-w-4xl">
                        Our application uses a sophisticated asymmetric encryption model, relying on a pair of cryptographic keys for every user: a Public Key and a Private Key.
                    </p>

                    <div className="space-y-12">
                        
                        {/* Step 1: Key Pair Generation */}
                        <div className="flex flex-col md:flex-row items-start bg-blue-900 p-8 rounded-xl shadow-inner border border-blue-700">
                            <div className="md:w-1/4 flex-shrink-0 text-center md:text-left">
                                <span className="text-6xl font-black text-blue-400 block mb-2">1.</span>
                                <h3 className="text-2xl font-semibold text-white">Key Generation</h3>
                            </div>
                            <div className="md:w-3/4 md:pl-10 text-blue-100">
                                <p className="mb-3">
                                    When you register, the application generates a unique cryptographic key pair for you:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong className="text-blue-300">Public Key:</strong> This key is shared with everyone and is stored on the server. Others use it to *encrypt* messages intended for you.</li>
                                    <li><strong className="text-red-300">Private Key:</strong> This key is kept secret on your device. Only you can use it to *decrypt* messages sent to you.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 2: Encryption (Sending a Message) */}
                        <div className="flex flex-col md:flex-row-reverse items-start bg-blue-900 p-8 rounded-xl shadow-inner border border-blue-700">
                            <div className="md:w-1/4 flex-shrink-0 text-center md:text-right">
                                <span className="text-6xl font-black text-blue-400 block mb-2">2.</span>
                                <h3 className="text-2xl font-semibold text-white">Encryption (Client-Side)</h3>
                            </div>
                            <div className="md:w-3/4 md:pr-10 text-blue-100">
                                <p className="mb-3">
                                    When **Alice** wants to send a message to **Bob**:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>Alice's browser retrieves **Bob's Public Key** from the server.</li>
                                    <li>Alice's browser uses Bob's Public Key to scramble (encrypt) the plain text message.</li>
                                    <li>The resulting ciphertext is sent to the Flask backend.</li>
                                    <li><strong className="text-yellow-400">Crucially:</strong> The server only stores and routes the encrypted text. It cannot read the message.</li>
                                </ol>
                            </div>
                        </div>

                        {/* Step 3: Decryption (Receiving a Message) */}
                        <div className="flex flex-col md:flex-row items-start bg-blue-900 p-8 rounded-xl shadow-inner border border-blue-700">
                            <div className="md:w-1/4 flex-shrink-0 text-center md:text-left">
                                <span className="text-6xl font-black text-blue-400 block mb-2">3.</span>
                                <h3 className="text-2xl font-semibold text-white">Decryption (Recipient Only)</h3>
                            </div>
                            <div className="md:w-3/4 md:pl-10 text-blue-100">
                                <p className="mb-3">
                                    When **Bob** receives the encrypted message:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Bob's browser retrieves the ciphertext from the server.</li>
                                    <li>Bob uses his **Private Key** (which is unique and secret to him) to unscramble (decrypt) the ciphertext back into plain text.</li>
                                    <li>No other key, not even Alice's Private Key or Bob's Public Key, can perform this decryption.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Security & Architecture Commitment */}
                <section id="security" className="mb-20">
                    <SectionTitle>Our Security Commitment</SectionTitle>
                    <div className="bg-blue-950 p-8 rounded-xl shadow-2xl border border-blue-800 space-y-6">
                        <p className="text-blue-100 text-lg">
                            We've architected this application to uphold the highest standards of privacy:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 bg-blue-800 rounded-lg">
                                <h4 className="font-bold text-xl text-blue-300 mb-2">The Server's Role (Flask Backend)</h4>
                                <p className="text-blue-200">
                                    The server's job is purely managerial: it handles user authentication, stores public keys, and relays **already encrypted** messages. <strong className="text-red-400">The server never possesses the data needed to decrypt a message.</strong>
                                </p>
                            </div>
                            <div className="p-4 bg-blue-800 rounded-lg">
                                <h4 className="font-bold text-xl text-blue-300 mb-2">The Client's Role (React Frontend)</h4>
                                <p className="text-blue-200">
                                    The React frontend is where the heavy lifting occurs. It is responsible for generating keys, encrypting messages before transmission, and decrypting messages upon receipt, ensuring the 'End-to-End' promise is kept.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Final Call to Action */}
                 <section className="text-center py-12 bg-blue-800/80 rounded-2xl">
                    <h2 className="text-4xl font-bold mb-4 text-white">Ready for Truly Private Communication?</h2>
                    <p className="text-xl text-blue-200 mb-6">
                        Join the platform that puts your privacy first, powered by time-tested cryptographic standards.
                    </p>
                    <button className="bg-blue-400 text-blue-950 text-xl font-bold py-3 px-10 rounded-full shadow-xl hover:bg-blue-300 transition duration-300 transform hover:scale-105">
                        Create Your Secure Account
                    </button>
                </section>

            </main>

            {/* Footer (Placeholder) */}
            <Footer/>
        </div>
    </Fragment>
    );
}


// Export the home component 
export default Home; 