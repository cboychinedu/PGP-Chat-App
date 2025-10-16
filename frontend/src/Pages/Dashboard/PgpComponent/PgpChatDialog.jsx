// Importing the necessary modules 
import io from "socket.io-client"; 
import { Fragment, useState, useEffect } from 'react';

// PGP chat dialog 
const PGPChatDialog = ({ recipient, onClose, socket, searchUser}) => {
    // ... (PGP_ChatDialog logic and JSX omitted for brevity) ...
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isKeyReady, setIsKeyReady] = useState(false);

    // Defing the message circle icon 
    const MessageCircleIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
    );

    // Creating the XIcon 
    const XIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    );
    
    // Use effect 
    useEffect(() => {
        setIsKeyReady(false);
        const timer = setTimeout(() => {
            setIsKeyReady(true);
        }, 500);
        return () => clearTimeout(timer);
    }, [recipient.id]);

    // Creating a function to handle the send key word 
    const handleSend = () => {
        if (message.trim() && isKeyReady) {
            
            // 
            const newMessage = {
                id: Date.now(),
                text: message,
                sender: 'Me',
                receiver: searchUser,
                status: isKeyReady ? 'Encrypted & Sent' : 'Error',
            };

            // 
            socket.emit("chatMessage", newMessage); 

            // 
            setMessages(prev => [...prev, newMessage]);
            setMessage('');
        }
    };
    
    // Rendering the component 
    return (
        <Fragment> 
            <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50 p-4">
                <div className="bg-blue-900 w-full max-w-xl h-full max-h-[80vh] rounded-xl shadow-2xl flex flex-col border border-blue-700">
                    
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
                    
                    <div className={`text-center p-2 ${isKeyReady ? 'bg-green-700/50 text-green-300' : 'bg-yellow-700/50 text-yellow-300'}`}>
                        {isKeyReady ? '✅ PGP Key Securely Fetched & Ready' : '⏳ Fetching Public Key...'}
                    </div>

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
        </Fragment>
    );
};

// Exporting the chat dialog 
export default PGPChatDialog; 
