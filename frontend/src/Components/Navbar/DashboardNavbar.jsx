// Importing the necessary modules
import pgpLogo from "@images/pgpLogo.jpg"
import React, { Fragment, useState } from "react";

// Icons for the mobile menu
const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);

const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

// Creating the navbar for both mobile and pc 
const DashboardNavbar = () => {
    // State to manage the open/closed status of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to close the menu after navigation (on mobile)
    const handleNavigation = (path) => {
        window.location.href = path;
        setIsMenuOpen(false); // Close menu on navigation
    };

    // Creating a function for logging out the user 
    const logoutUser = (event) => {
        // Clearing the local storage 
        localStorage.clear(); 

        // Redirecting the user to the login page 
        setInterval(() => {
            // Redirection 
            window.location.href = "/"; 
        }, 3000)
    }

    // Returning the jsx component 
    return (
        <Fragment> 
            {/* Header / Navigation Bar */}
            <header className="bg-[#182d63] top-0 sticky z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        
                        {/* Logo / Brand */}
                        <div className="flex items-center justify-between"> 
                            <img src={pgpLogo} alt="PGP Logo" className="h-[43px] mr-[17px] w-[45px] rounded-[40px]"/>
                            <a href="/" className="text-2xl font-bold text-blue-300">PGP Secure Chat</a> 
                        </div>
                        
                        {/* Desktop Navigation (Visible on screen sizes 'sm' and larger) */}
                        <nav className="hidden sm:flex items-center space-x-6">
                            <a href="/" className="text-blue-200 hover:text-blue-50 transition duration-150"> Home </a>
                            <a href="/howitworks" className="text-blue-200 hover:text-blue-50 transition duration-150">How it Works</a>
                            <a href="/security" className="text-blue-200 hover:text-blue-50 transition duration-150">Security</a>
                            <a href="/about" className="text-blue-200 hover:text-blue-50 transition duration-150"> About </a>
                            <a href="/dashbaord" className="text-blue-200 hover:text-blue-50 transition duration-150"> Dashboard </a>
                            <button 
                                onClick={logoutUser}
                                className="px-4 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 text-white shadow-md"
                            > 
                                Logout 
                            </button>
                        </nav>
                        
                        {/* Mobile Menu Button (Visible only on smaller screens) */}
                        <button 
                            className="sm:hidden text-blue-200 hover:text-blue-50 transition duration-150 p-2 rounded-lg"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content (Toggles based on isMenuOpen state) */}
                <div 
                    id="mobile-menu" 
                    className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0'}`}
                >
                    <div className="flex flex-col space-y-3 px-4 pb-4">
                        <a 
                            href="/" 
                            onClick={() => handleNavigation("/")}
                            className="text-blue-200 hover:bg-blue-700/50 p-3 rounded-lg transition duration-150 text-lg font-medium"
                        > 
                            Home 
                        </a>
                        <a 
                            href="/howitworks" 
                            onClick={() => handleNavigation("/howitworks")}
                            className="text-blue-200 hover:bg-blue-700/50 p-3 rounded-lg transition duration-150 text-lg font-medium"
                        > 
                            How it Works
                        </a>
                        <a 
                            href="/security" 
                            onClick={() => handleNavigation("/security")}
                            className="text-blue-200 hover:bg-blue-700/50 p-3 rounded-lg transition duration-150 text-lg font-medium"
                        > 
                            Security
                        </a>
                        <a 
                            href="/about" 
                            onClick={() => handleNavigation("/about")}
                            className="text-blue-200 hover:bg-blue-700/50 p-3 rounded-lg transition duration-150 text-lg font-medium"
                        > 
                            About 
                        </a>
                        <a href="/dashbaord" className="text-blue-200 hover:bg-blue-700/50 p-3 rounded-lg transition duration-150 text-lg font-medium"> Dashboard </a>
                        <button 
                            onClick={logoutUser}
                            className="w-full mt-4 px-4 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition duration-150 text-white text-lg"
                        > 
                            Logout 
                        </button>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

// Exporting the navbar 
export default DashboardNavbar;
