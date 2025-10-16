/**
 * Dashboard Component
 * * This component serves as the central hub for the PGP Chat Application.
 * * It includes user search functionality and initiates a PGP Chat Dialog
 * upon selecting a user, ensuring the E2E encryption is ready.
 * * NOTE: This version uses a 'fetch' request to http://localhost:3001/dashboard/users 
 * to search for users based on the input term.
 */

// Importing the necessary modules 
import io from "socket.io-client";
import { Fragment, useState, useCallback, useEffect } from 'react';
import DashboardNavbar from "@components/Navbar/DashboardNavbar";
import PGPChatDialog from "./PgpComponent/PgpChatDialog";
import Footer from '@components/Footer/Footer';

// Setting the server url 
const backendUrl = `${process.env.REACT_APP_SERVER_URL}/dashboard/users`; 

// Establish socket connection (kept from original code)
const socket = io(process.env.REACT_APP_SERVER_URL, {
  transports: ["websocket", "polling"],
});

// Icons for the UI (omitted for brevity)
const SearchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const UserIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);


// Creating the main dashboard component 
const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchResults, setSearchResults] = useState([]); 
    const [isSearching, setIsSearching] = useState(false); 
    const [fetchError, setFetchError] = useState(null); // New state for error handling

    /**
     * @function fetchUsersByUsername
     * Initiates the fetch request to the backend.
     * The connection to the database (via the backend) and the data send
     * (username) happens here, triggered by the useEffect below.
     */
    const fetchUsersByUsername = useCallback(async (usernameQuery) => {
        if (!usernameQuery || usernameQuery.trim() === '') {
            setSearchResults([]);
            return;
        }

        setIsSearching(true);
        setFetchError(null); // Clear previous errors

        try {
            // Making the fetch request 
            const response = await fetch(backendUrl, {
                method: 'POST', // Use POST to send body data securely
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send the username as body data
                body: JSON.stringify({ username: usernameQuery }), 
            });

            if (!response.ok) {
                // Handle HTTP errors (e.g., 404, 500)
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Fetch request comes back to the dashboard, then displayed on the screen
            const data = await response.json(); 
            
            // Assuming the backend returns an array of user objects: [{id: 1, username: 'user1'}, ...]
            if (data.status === "success") {
                // Getting the search results 
                setSearchResults(data.user); 
            }

            else {
                // 
                
            }

        } catch (error) {
            console.error("Fetch error:", error);
            // Set error state to be displayed on the screen
            setFetchError(`Failed to connect to the backend: ${error.message}. Please check if the server is running at ${backendUrl}.`);
            setSearchResults([]); // Clear any old results on error
        } finally {
            setIsSearching(false);
        }
    }, []); 

    /**
     * useEffect hook to trigger the fetch request when the searchTerm changes.
     * I've added a simple debounce here to prevent spamming the server on every keystroke.
     */
    useEffect(() => {
        if (searchTerm.trim().length > 0) {
            // Debounce: Wait 300ms after the last keystroke before fetching
            const delayFetch = setTimeout(() => {
                fetchUsersByUsername(searchTerm); 
            }, 300);

            // Cleanup function: clears the timeout if the component unmounts or searchTerm changes again
            return () => clearTimeout(delayFetch);
        } else {
            // Clear results and errors if the search term is empty
            setSearchResults([]);
            setFetchError(null);
        }
    }, [searchTerm, fetchUsersByUsername]); 

    // Handler to open the chat dialog (camelCase)
    const handleUserSelect = useCallback((user) => {
        setSelectedUser(user);
    }, []);

    // Handler to close the chat dialog (camelCase)
    const handleCloseChat = useCallback(() => {
        setSelectedUser(null);
    }, []);

    // Rendering the component 
    return (
        <Fragment>
            <div className="min-h-screen bg-gray-900 font-sans text-white">
                {/* Adding the dashboard navbar */}
                <DashboardNavbar />

                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-[125px] mb-[8em]">
                    
                    {/* Header (omitted for brevity) */}
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
                            
                            {/* Display Fetch Error */}
                            {fetchError && (
                                <p className="p-4 bg-red-800/50 text-red-300 rounded-lg text-sm">{fetchError}</p>
                            )}

                            {/* Display Loading State */}
                            {isSearching && searchTerm.length > 0 && !fetchError && (
                                <p className="text-center text-blue-300/50 p-4">⏳ Connecting to backend and searching for "{searchTerm}"...</p>
                            )}
                            
                            {/* Display No Users Found State */}
                            {!isSearching && !fetchError && searchTerm.length > 0 && searchResults.length === 0 && (
                                <p className="text-center text-blue-300/50 p-4"> No users found matching "{searchTerm}".</p>
                            )}
                            
                            {/* Render Fetched Users */}
                            {searchResults.map(user => (
                                <div 
                                    key={user.id} // Ensure the user object from the backend has a unique 'id'
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
                    <PGPChatDialog recipient={selectedUser} onClose={handleCloseChat} />
                )}

                {/* Adding the footer */}
                <Footer />
            </div>
        </Fragment>
    );
}

// Exporting the dashboard 
export default Dashboard;