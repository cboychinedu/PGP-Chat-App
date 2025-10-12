/**
 * Career Component
 * * This component serves as the career or job openings page,
 * highlighting the mission and available opportunities focused on security and development.
 */

import React, { Fragment } from 'react';
import Navbar from "@components/Navbar/Navbar";
import DashboardNavbar from "@components/Navbar/DashboardNavbar"; 
import Footer from '@components/Footer/Footer';

// Getting the user token 
let tokenValue = localStorage.getItem("xAuthToken") || null; 

// Icons for the UI
const BriefcaseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const ZapIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
);
const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);


const SectionTitle = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        {children}
    </h2>
);

const JobOpeningCard = ({ title, department, summary }) => (
    <div className="bg-blue-900/70 p-6 rounded-xl shadow-xl border-t-4 border-blue-500 hover:bg-blue-800 transition duration-300">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-300 font-semibold mb-3">{department}</p>
        <p className="text-blue-200">{summary}</p>
        <button className="mt-4 text-sm font-bold bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-400 transition">
            View Details & Apply
        </button>
    </div>
);


const Career = () => {
    const openings = [
        { title: "Senior Cryptography Engineer", department: "Security & Core Protocol", summary: "Develop and audit the PGP implementation and key management systems for optimal security." },
        { title: "React Frontend Developer", department: "Application Development", summary: "Build the next generation of our secure chat interface using React, focusing on performance and UX." },
        { title: "Python Backend Engineer (Flask)", department: "Infrastructure & API", summary: "Maintain and scale the Zero-Knowledge backend, ensuring fast, reliable routing of encrypted data." },
    ];

    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                {/* Adding the navbar  */}
                {tokenValue ? <DashboardNavbar/> : <Navbar />}

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Header */}
                    <header className="text-center py-16 mb-16 bg-blue-900/60 rounded-3xl p-10 border border-blue-800 shadow-2xl shadow-blue-900/50">
                        <BriefcaseIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                            Join Our <span className="text-blue-400">Mission</span>
                        </h1>
                        <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                            Careers dedicated to the fundamental right of digital privacy. Build the future of secure communication with PGP.
                        </p>
                    </header>

                    {/* Openings */}
                    <section id="openings" className="mb-20">
                        <SectionTitle>Current Job Openings</SectionTitle>
                        <div className="grid md:grid-cols-3 gap-8 mt-10">
                            {openings.map((job, index) => (
                                <JobOpeningCard key={index} {...job} />
                            ))}
                        </div>
                    </section>
                    
                    {/* Why Join Us */}
                    <section id="why-join" className="mb-20">
                        <SectionTitle>Why Work Here?</SectionTitle>
                        <div className="grid md:grid-cols-2 gap-8 mt-10">
                            <div className="bg-blue-950 p-6 rounded-xl border border-blue-700 shadow-lg">
                                <ZapIcon className="w-8 h-8 text-blue-400 mb-3"/>
                                <h3 className="text-xl font-bold text-white mb-2">Impactful Work</h3>
                                <p className="text-blue-200">You'll work directly on the core cryptographic features that protect thousands of user conversations daily. Your code means privacy.</p>
                            </div>
                            <div className="bg-blue-950 p-6 rounded-xl border border-blue-700 shadow-lg">
                                <UserIcon className="w-8 h-8 text-blue-400 mb-3"/>
                                <h3 className="text-xl font-bold text-white mb-2">Remote-First & Trust</h3>
                                <p className="text-blue-200">Our architecture is built on trust, and so is our team. Enjoy a remote-first culture that respects autonomy and focuses on results.</p>
                            </div>
                        </div>
                    </section>

                </main>

                <Footer />
            </div>
        </Fragment>
    );
}

export default Career;