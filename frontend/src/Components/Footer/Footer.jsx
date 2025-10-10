// Importing the necessary modules 
import React, { Fragment } from "react";

// Creating the footer component 
const Footer = () => (
    <Fragment>
        <footer className="bg-blue-900 text-white py-12 mt-8 w-full left-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4 space-y-8 md:space-y-0">
                {/* Branding and Description */}
                <div className="flex-1 min-w-[220px]">
                    <div className="text-2xl font-bold tracking-wide mb-2">
                        Pretty Good Privacy Chat App
                    </div>
                    <p className="text-sm mb-4">
                        Secure, private, and encrypted messaging for everyone. Built with privacy in mind.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-200 transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:support@pgpchat.com"
                            className="hover:text-blue-200 transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
                {/* Quick Links */}
                <div className="flex-1 min-w-[180px]">
                    <div className="font-semibold mb-2">Quick Links</div>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <a href="/about" className="hover:text-blue-200 transition-colors">About Us</a>
                        </li>
                        <li>
                            <a href="/features" className="hover:text-blue-200 transition-colors">Features</a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-blue-200 transition-colors">FAQ</a>
                        </li>
                        <li>
                            <a href="/blogs" className="hover:text-blue-200 transition-colors">Blog</a>
                        </li>
                        <li>
                            <a href="/careers" className="hover:text-blue-200 transition-colors">Careers</a>
                        </li>
                    </ul>
                </div>
                {/* Resources */}
                <div className="flex-1 min-w-[180px]">
                    <div className="font-semibold mb-2">Resources</div>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <a href="/documentation" className="hover:text-blue-200 transition-colors">Documentation</a>
                        </li>
                        <li>
                            <a href="/privacypolicy" className="hover:text-blue-200 transition-colors">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/termsofservice" className="hover:text-blue-200 transition-colors">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/security" className="hover:text-blue-200 transition-colors">Security</a>
                        </li>
                        <li>
                            <a href="/support" className="hover:text-blue-200 transition-colors">Support</a>
                        </li>
                    </ul>
                </div>
                {/* Newsletter Signup */}
                <div className="flex-1 min-w-[220px]">
                    <div className="font-semibold mb-2">Subscribe to our Newsletter</div>
                    <form className="flex flex-col space-y-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-3 py-2 rounded text-blue-900 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-900 hover:bg-blue-800 text-white rounded px-3 py-2 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="text-xs mt-2">
                        Get the latest updates and news directly in your inbox.
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-10 border-t border-blue-600 pt-6 px-4 flex flex-col md:flex-row items-center justify-between text-xs">
                <div>
                    &copy; {new Date().getFullYear()} PGP Chat. All rights reserved.
                </div>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="/privacy" className="hover:text-blue-200 transition-colors">Privacy Policy</a>
                    <a href="/terms" className="hover:text-blue-200 transition-colors">Terms of Service</a>
                    <a href="/contact" className="hover:text-blue-200 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    </Fragment>
);

// Exporting the footer 
export default Footer;