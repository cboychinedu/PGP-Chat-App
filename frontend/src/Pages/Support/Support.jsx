/**
 * Support Component
 * * This component provides various options for users to seek assistance,
 * from FAQs to direct contact.
 */

import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar";
import Footer from '@components/Footer/Footer';

// Icons for the UI
const HeadsetIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19c-3.314 0-6-2.686-6-6v-4h3v4c0 1.657 1.343 3 3 3s3-1.343 3-3v-4h3v4c0 3.314-2.686 6-6 6z"/><path d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
);
const MailIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
);
const HelpCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);


const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

const SupportOptionCard = ({ icon: Icon, title, summary, actionText, link }) => (
    <div className="bg-blue-900/70 p-6 rounded-xl shadow-xl border-b-4 border-blue-500 hover:bg-blue-800/80 transition duration-300">
        <Icon className="w-10 h-10 text-blue-400 mb-3" />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-200 mb-4">{summary}</p>
        <a href={link} className="text-sm font-bold bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-400 transition">
            {actionText}
        </a>
    </div>
);


const Support = () => {
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                <Navbar />

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <HeadsetIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            Dedicated <span className="text-blue-400">Support</span>
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            Need help with PGP setup, key management, or troubleshooting? We're here to assist.
                        </p>
                    </header>

                    {/* Support Options */}
                    <section id="support-options" className="mb-20">
                        <SectionTitle>How Can We Help?</SectionTitle>
                        <div className="grid md:grid-cols-3 gap-8 mt-10">
                            <SupportOptionCard
                                icon={HelpCircleIcon}
                                title="Frequently Asked Questions (FAQ)"
                                summary="Find instant answers to common questions about security, PGP, and features."
                                actionText="View FAQ"
                                link="/faq"
                            />
                            <SupportOptionCard
                                icon={MailIcon}
                                title="Contact Technical Support"
                                summary="For issues, bugs, or complex setup questions. We'll respond within one business day."
                                actionText="Send a Message"
                                link="mailto:support@pgpchat.com"
                            />
                            <SupportOptionCard
                                icon={HeadsetIcon}
                                title="Report a Security Issue"
                                summary="If you discover a vulnerability, use our dedicated line for responsible disclosure."
                                actionText="Report Vulnerability"
                                link="/security-vulnerability"
                            />
                        </div>
                    </section>

                    {/* Self-Service Reminder */}
                    <section className="text-center py-12 bg-blue-950 p-8 rounded-xl shadow-xl border border-blue-700">
                        <h2 className="text-3xl font-bold mb-3 text-blue-300">Tip: Check Documentation First</h2>
                        <p className="text-lg text-blue-200">
                            Our <a href="/docs" className="text-blue-400 font-semibold hover:underline">Documentation</a> section contains detailed, step-by-step guides for key management and setup.
                        </p>
                    </section>

                </main>

                <Footer />
            </div>
        </Fragment>
    );
}

export default Support;