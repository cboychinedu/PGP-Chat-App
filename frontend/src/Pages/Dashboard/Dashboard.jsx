/**
 * Dashboard Component
 * * This component serves as the central hub for the PGP Chat Application.
 * * It includes user search functionality and initiates a PGP Chat Dialog
 * upon selecting a user, ensuring the E2E encryption is ready.
 */

import React, { Fragment, useState, useCallback, useMemo } from 'react';
import DashboardNavbar from "@components/Navbar/DashboardNavbar"; 
import Footer from '@components/Footer/Footer';

// Icons for the UI
const SearchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const MessageCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
);
const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);


// --- SIMULATED DATA & COMPONENTS ---

// Simulated list of all searchable users
const allUsers = [
    { id: 101, username: 'alice_crypto' },
    { id: 102, username: 'bob_secure' },
    { id: 103, username: 'charlie_pgp' },
    { id: 104, username: 'diana_keys' },
    { id: 105, username: 'eve_watcher' },
    { id: 106, username: 'frank_secure_chat' },
    { id: 107, username: 'greg_encrypt' },
];

/**
 * PGP Chat Dialog Component
 * This component represents the actual chat interface.
 * In a real PGP app, this would handle key exchange, encryption, and decryption.
 */
const PGP_ChatDialog = ({ recipient, onClose }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // Simulate PGP Key Fetch/Setup on component mount/recipient change
    // In a real app, this would fetch the recipient's Public Key.
    const [isKeyReady, setIsKeyReady] = useState(false);
    React.useEffect(() => {
        setIsKeyReady(false);
        const timer = setTimeout(() => {
            setIsKeyReady(true);
        }, 500); // Simulate network delay for key fetch
        return () => clearTimeout(timer);
    }, [recipient.id]);

    const handleSend = () => {
        if (message.trim() && isKeyReady) {
            // In a real app:
            // 1. Encrypt message using recipient.publicKey
            // 2. Send ciphertext to server
            const newMessage = {
                id: Date.now(),
                text: message,
                sender: 'Me',
                status: isKeyReady ? 'Encrypted & Sent' : 'Error',
            };
            setMessages(prev => [...prev, newMessage]);
            setMessage('');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="bg-blue-900 w-full max-w-xl h-full max-h-[80vh] rounded-xl shadow-2xl flex flex-col border border-blue-700">
                
                {/* Chat Header */}
                <div className="p-4 border-b border-blue-700 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-blue-300 flex items-center">
                        <MessageCircleIcon className="w-6 h-6 mr-2 text-blue-400" /> 
                        Chatting with: <span className="ml-2 text-white">{recipient.username}</span>
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="p-2 rounded-full bg-blue-700 hover:bg-red-600 transition"
                        title="Close Chat"
                    >
                        <XIcon className="w-6 h-6 text-white" />
                    </button>
                </div>
                
                {/* Key Status Alert */}
                <div className={`text-center p-2 ${isKeyReady ? 'bg-green-700/50 text-green-300' : 'bg-yellow-700/50 text-yellow-300'}`}>
                    {isKeyReady ? '✅ PGP Key Securely Fetched & Ready' : '⏳ Fetching Public Key...'}
                </div>

                {/* Message Area */}
                <div className="flex-grow p-4 overflow-y-auto space-y-3">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.sender === 'Me' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-3 rounded-lg max-w-[75%] shadow-md ${msg.sender === 'Me' ? 'bg-blue-600' : 'bg-gray-700'}`}>
                                <p className="text-sm font-semibold mb-1">{msg.sender}</p>
                                <p className="text-white">{msg.text}</p>
                                <span className="text-xs text-gray-300 block mt-1 italic">{msg.status}</span>
                            </div>
                        </div>
                    ))}
                    {messages.length === 0 && (
                        <p className="text-center text-blue-300/50 pt-10">Start your secure conversation now.</p>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-blue-700 flex">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={isKeyReady ? "Type your secure message..." : "Waiting for key setup..."}
                        className="flex-grow p-3 rounded-l-lg bg-blue-800 text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                        disabled={!isKeyReady}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-r-lg hover:bg-blue-600 transition duration-200 disabled:bg-gray-600"
                        disabled={!message.trim() || !isKeyReady}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- MAIN DASHBOARD COMPONENT ---

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    // Filter users based on search term
    const filteredUsers = useMemo(() => {
        if (!searchTerm) return [];
        const lowerSearchTerm = searchTerm.toLowerCase();
        return allUsers
            .filter(user => user.username.toLowerCase().includes(lowerSearchTerm))
            // Exclude 'eve_watcher' for a bit of humor/security context
            .filter(user => user.username !== 'eve_watcher');
    }, [searchTerm]);

    // Handler to open the chat dialog
    const handleUserSelect = useCallback((user) => {
        setSelectedUser(user);
    }, []);

    // Handler to close the chat dialog
    const handleCloseChat = useCallback(() => {
        setSelectedUser(null);
    }, []);

    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                <DashboardNavbar />

                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-[125px] mb-[8em]">
                    
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="text-5xl font-extrabold text-blue-400 mb-2">Secure Chat Dashboard</h1>
                        <p className="text-xl text-blue-200">Find a user to start an end-to-end encrypted conversation.</p>
                    </header>
                    
                    {/* User Search Section */}
                    <section className="mb-12 bg-blue-900/70 p-8 rounded-xl shadow-2xl border border-blue-700">
                        <h2 className="text-3xl font-bold text-white mb-4">Search for Users</h2>
                        
                        {/* Search Input */}
                        <div className="flex items-center bg-blue-800 rounded-lg p-3 shadow-inner">
                            <SearchIcon className="w-6 h-6 text-blue-300 mr-3" />
                            <input
                                type="text"
                                placeholder="Search usernames (e.g., 'bob', 'crypto')..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-transparent text-white placeholder-blue-300/80 focus:outline-none text-lg"
                            />
                            {searchTerm && (
                                <button onClick={() => setSearchTerm('')} className="ml-3 text-blue-400 hover:text-red-400 transition">
                                    <XIcon className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Search Results */}
                        <div className="mt-6 space-y-3 max-h-60 overflow-y-auto">
                            {searchTerm && filteredUsers.length === 0 && (
                                <p className="text-center text-blue-300/50 p-4">No users found matching "{searchTerm}".</p>
                            )}
                            
                            {filteredUsers.map(user => (
                                <div 
                                    key={user.id}
                                    onClick={() => handleUserSelect(user)}
                                    className="flex items-center justify-between p-4 bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-700 transition duration-200 border border-blue-600"
                                >
                                    <div className="flex items-center">
                                        <UserIcon className="w-6 h-6 text-blue-400 mr-3" />
                                        <span className="text-lg font-semibold text-white">{user.username}</span>
                                    </div>
                                    <button className="text-sm font-medium bg-blue-500 px-3 py-1 rounded-full hover:bg-blue-400">
                                        Start PGP Chat
                                    </button>
                                </div>
                            ))}
                        </div>
                        
                    </section>

                </main>

                {/* PGP Chat Dialog */}
                {selectedUser && (
                    <PGP_ChatDialog recipient={selectedUser} onClose={handleCloseChat} />
                )}

                <Footer />
            </div>
        </Fragment>
    );
}

export default Dashboard;