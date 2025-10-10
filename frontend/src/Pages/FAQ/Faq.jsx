/**
 * FAQ Component
 * * This component provides answers to common questions about PGP,
 * application security, and functionality, using the established design.
 */

import React, { Fragment, useState } from 'react';
import Navbar from "@components/Navbar/Navbar";
import Footer from '@components/Footer/Footer';

// Icons for the UI
const HelpCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);
const PlusIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
);
const MinusIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

// Reusable component for an expandable FAQ item
const FAQItem = ({ question, answer, isOpen, onToggle }) => (
    <div className="border-b border-blue-700/80">
        <button
            className="flex justify-between items-center w-full py-4 text-left font-semibold text-xl text-white hover:text-blue-300 transition duration-200"
            onClick={onToggle}
        >
            {question}
            <span className="ml-4 text-blue-400">
                {isOpen ? <MinusIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
            </span>
        </button>
        {isOpen && (
            <div className="pb-4 text-blue-200 text-lg transition-all duration-300 ease-in-out">
                {answer}
            </div>
        )}
    </div>
);


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "What does 'End-to-End Encryption (E2EE)' actually mean?",
            a: (
                <p>
                    E2EE ensures that the message is encrypted (**scrambled**) on the sender's device and can only be decrypted (**unscrambled**) on the recipient's device. No one in between—not the server, not internet providers, and not even the application's developers—can read the content.
                </p>
            ),
        },
        {
            q: "How is PGP (Pretty Good Privacy) used in this chat application?",
            a: (
                <p>
                    We use PGP's core principle of **asymmetric cryptography**, utilizing a **Public Key** and a **Private Key**. The sender uses the recipient's Public Key to encrypt the message, and only the recipient's secret Private Key can decrypt it. This mechanism guarantees that only the intended recipient can read the chat.
                </p>
            ),
        },
        {
            q: "Where is my Private Key stored?",
            a: (
                <p>
                    Your **Private Key** is generated locally on your device and is **never** sent to our servers. It is stored securely on your client-side storage (e.g., IndexedDB or Local Storage) and often protected by your account password. **We cannot access your Private Key.**
                </p>
            ),
        },
        {
            q: "What role does the server (Flask backend) play if it can't read messages?",
            a: (
                <p>
                    The server acts purely as a **relay station** and key manager. Its role is to: 1) Handle user authentication, 2) Store and distribute public keys, and 3) Route **already encrypted ciphertext** from the sender to the intended recipient. It is part of our **Zero-Knowledge Architecture**.
                </p>
            ),
        },
        {
            q: "What happens if I lose my device or forget my password?",
            a: (
                <p className="text-yellow-300 font-bold">
                    Due to our zero-knowledge, E2EE commitment, we **cannot recover your Private Key** or decrypt your chat history if you lose access to your device and your backup passphrase. This is the cryptographic trade-off for absolute privacy. Always back up your keys if a feature is provided!
                </p>
            ),
        },
        {
            q: "Is this application open-source?",
            a: (
                <p>
                    Yes, projects focused on privacy and security should operate with transparency. The source code for this application is intended to be open-source, allowing the community to inspect the cryptographic implementation and verify the security claims.
                </p>
            ),
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                <Navbar />

                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <HelpCircleIcon className="w-16 h-16 text-blue-400 mx-auto mb-4"/>
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            Frequently <span className="text-blue-400">Asked</span> Questions
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            Everything you need to know about PGP, security, and how your privacy is protected.
                        </p>
                    </header>

                    {/* FAQ List */}
                    <section id="faq-list" className="mb-20 bg-blue-900 p-8 rounded-xl shadow-2xl border border-blue-700">
                        <SectionTitle>Privacy and Security</SectionTitle>
                        <div className="mt-6">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.q}
                                    answer={faq.a}
                                    isOpen={openIndex === index}
                                    onToggle={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                    </section>

                    {/* Final Call to Action */}
                    <section className="text-center py-12 bg-blue-800/80 rounded-2xl">
                        <h2 className="text-4xl font-bold mb-4 text-white">Still Have Questions?</h2>
                        <p className="text-xl text-blue-200 mb-6">
                            Visit our Security Page or contact support for a detailed explanation of our architecture.
                        </p>
                        <button className="bg-blue-400 text-blue-950 text-xl font-bold py-3 px-10 rounded-full shadow-xl hover:bg-blue-300 transition duration-300 transform hover:scale-105">
                            Contact Support
                        </button>
                    </section>

                </main>

                <Footer />
            </div>
        </Fragment>
    );
}

export default FAQ;