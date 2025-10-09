/**
 * AuthPage Component
 * * This component handles both User Login and Registration (Sign Up).
 * * It collects all required user information, including fullname, username,
 * * emailaddress, and password for registration, and uses a dark, secure blue theme.
 */

// 
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import React, { Fragment, useState } from 'react';


// Placeholder Icon (Lock)
const LockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);


const Login = () => {
    // State to toggle between 'login' and 'register' views
    const [isRegister, setIsRegister] = useState(false);
    
    // State for form data
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        emailAddress: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // --- PGP Key Generation and Server API Call Simulation ---
        if (isRegister) {
            console.log('Attempting Registration:', formData);
            // In a real PGP app, key generation would happen here,
            // and the Public Key would be sent to the Flask backend.
            alert('Registration simulated! (Key generation and API call skipped)');
        } else {
            console.log('Attempting Login:', { 
                identifier: formData.username || formData.emailAddress, 
                password: formData.password 
            });
            // Upon successful login, the user's private key (if stored locally)
            // would be loaded, ready for decryption.
            alert('Login simulated! (API call skipped)');
        }
        // You'd typically clear the form or redirect the user here.
    };

    // Reusable input component for consistency
    const AuthInput = ({ label, name, type = 'text', placeholder, value, required = true }) => (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-blue-200 mb-1">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required={required}
                className="w-full px-4 py-2 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-400 focus:ring-blue-400 focus:border-blue-400 shadow-inner"
            />
        </div>
    );

    return (
        <Fragment> 
        <main className='bg-gray-900'> 


            {/* Adding the navbar */}
            <Navbar />

            {/* Main component  */}
            <div className="flex items-center justify-center min-h-screen bg-gray-900 font-sans p-4">
                <div className="w-full max-w-md bg-blue-900/80 p-8 md:p-10 rounded-xl shadow-2xl border border-blue-700 backdrop-blur-sm">
                    
                    <div className="text-center mb-8">
                        <LockIcon className="w-12 h-12 text-blue-400 mx-auto mb-3"/>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            {isRegister ? 'Create Account' : 'Welcome Back'}
                        </h1>
                        <p className="text-blue-300">
                            {isRegister ? 'Secure your communication with PGP encryption.' : 'Sign in to access your secure chat.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        
                        {/* Registration Fields (Show only when registering) */}
                        {isRegister && (
                            <>
                                <AuthInput
                                    label="Full Name"
                                    name="fullName"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                />
                                <AuthInput
                                    label="Username"
                                    name="username"
                                    placeholder="secure_user_42"
                                    value={formData.username}
                                />
                                <AuthInput
                                    label="Email Address"
                                    name="emailAddress"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.emailAddress}
                                />
                            </>
                        )}
                        
                        {/* Login Fields (Show always or conditionally if a combined field is used) */}
                        {!isRegister && (
                            <AuthInput
                                label="Username or Email"
                                name="username" // Using username field for identifier in this simplified example
                                placeholder="username or email"
                                value={formData.username}
                            />
                        )}

                        <AuthInput
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                        />

                        <button
                            type="submit"
                            className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]"
                        >
                            {isRegister ? 'Register & Generate Keys' : 'Login Securely'}
                        </button>
                    </form>

                    {/* Switch between Login and Register */}
                    <p className="mt-6 text-center text-blue-300">
                        {isRegister ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            type="button"
                            onClick={() => setIsRegister(!isRegister)}
                            className="ml-2 font-bold text-blue-400 hover:text-blue-300 transition duration-150"
                        >
                            {isRegister ? 'Login' : 'Register Now'}
                        </button>
                    </p>

                
                </div>
            </div>

            {/* Adding the footer */}
            <Footer /> 
        </main>
    </Fragment>
    );
};

// Exporting the login component 
export default Login;
