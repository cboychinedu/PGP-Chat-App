// Importing the necessary modules
import React, { Fragment } from "react";

// Creating the navbar for both mobile and pc 
const Navbar = () => {
    return (
        <Fragment> 
        {/* Header / Navigation Bar (Placeholder) */}
        <header className="bg-[#182d63] top-0 sticky z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-blue-300">PGP Secure Chat</a>
                <nav>
                    <a href="/" className="text-blue-200 hover:text-blue-50 transition duration-150 mx-3"> Home </a>
                    <a href="/howitworks" className="text-blue-200 hover:text-blue-50 transition duration-150 mx-3">How it Works</a>
                    <a href="/security" className="text-blue-200 hover:text-blue-50 transition duration-150 mx-3">Security</a>
                    <a href="/about" className="text-blue-200 hover:text-blue-50 transition duration-150 mx-3"> About </a>
                    <button onClick={() => window.location.href="/login"}className="ml-4 px-4 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 text-white"> Login </button>
                    <button onClick={() => window.location.href="/register"}className="ml-4 px-4 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 text-white"> Register</button>
                </nav>
            </div>
        </header>
        </Fragment>
    );
};

// Exporting the navbar 
export default Navbar;