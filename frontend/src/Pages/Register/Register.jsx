// Importing the necessary modules 
import { Fragment, useState } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import LockIcon from '@components/Icons/LockIcon';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// Creating the register route
const Register = () => {
    // Setting the state 
    const [fullname, setFullName] = useState(""); 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");  
    const [flashOpen, setFlashOpen] = useState(false);
    const [flashMessage, setFlashMessage] = useState("");
    const [flashSeverity, setFlashSeverity] = useState("error");

    // Creating a function to handle the flash close function 
    const handleFlashClose = (event, reason) => {
        // if the reason is click away
        if (reason === 'clickaway') return;

        // set the flash open 
        setFlashOpen(false);
    };

    // Creating a function to handle the submit button 
    const handleSubmit = (event) => {
        // Preventing default submission 
        event.preventDefault(); 

        // Checking the fullname
        if (!fullname) {
            // Setting the flash message 
            setFlashMessage("Fullname required!"); 
            setFlashSeverity("error"); 
            setFlashOpen(true); 
            return; 
        }

        // Checking the username 
        else if (!username) {
            // Setting the flash message
            setFlashMessage("Username is required!"); 
            setFlashSeverity("error"); 
            setFlashOpen(true); 
            return; 
        }

        // Checking the email 
        else if (!email) {
            // Setting the flash message 
            setFlashMessage("Email address is required!"); 
            setFlashSeverity("error");
            setFlashOpen(true); 
            return; 
        }

        // Checking the password 
        else if (!password) {
            // Setting the flash message 
            setFlashMessage("Password is required!"); 
            setFlashSeverity("error"); 
            setFlashOpen(true); 
        }

        // Checking the verify password field 
        else if(!verifyPassword) {
            // Setting the flash message 
            setFlashMessage("Verify password is required!"); 
            setFlashSeverity("error"); 
            setFlashOpen(true); 
        }

        // Checking if the password field is the same with 
        // the verify password 
        else if (password != verifyPassword) {
            // Setting the flash message 
            setFlashMessage("Passwords are not correct!"); 
            setFlashSeverity("error"); 
            setFlashOpen(true); 
        }

        // Else if all the fields are complete, execute the block 
        // of code below 
        else {
            // Converting the user input into a JSON object 
            const userData = JSON.stringify({
                "fullname": fullname, 
                "username": username,
                "email": email, 
                "password": password, 
            }); 

            // Defining the server URL for the register route 
            const serverUrl = `${process.env.REACT_APP_SERVER_URL}/register`; 

            // Using try-catch block to handle the fetch request 
            try {
                // Sending the POST request to the server 
                // with the user data 
                fetch(serverUrl, {
                    method: "POST", 
                    headers: { "Content-Type": "application/json"}, 
                    body: userData, 
                })
                // Handling the response from the server 
                .then((response) => response.json())
                .then((responseData) => {
                    // if the response data was an error 
                    if (responseData.status === "error") {
                        // Display the error message to the user
                        setFlashMessage(responseData.message); 
                        setFlashSeverity("error"); 
                        setFlashOpen(true); 
                        return;  
                    }

                    // Else if the status was a success 
                    else if (responseData.status === "success") {
                        // Display it to the user 
                        setFlashMessage(responseData.message); 
                        setFlashSeverity("success"); 
                        setFlashOpen(true); 

                        // Using set interval
                        setInterval(() => {
                            // Display this message after 3 seconds
                            setFlashMessage("Redirecting to the login page..."); 
                            setFlashSeverity("success")
                            setFlashOpen(true);
 
                            // Wait for another 3 seconds and redirect the user to 
                            // the login page 
                            setInterval(() => {
                                // Redirect the user to the login page 
                                window.location.href = "/login"; 
                            }, 5000)
                        }, 5000)
 
                    }
                  
                })
            }

            // Catch the error 
            catch (error) {
                // Handle the network error 
                console.log("Fetch error: ", error); 

                // Log the error to the user 
                setFlashMessage(error); 
                setFlashMessage("error"); 
                setFlashOpen(true); 

                // Pause the code 
                return; 

            }
        }
    };

    return (
        <Fragment>
            <main className="bg-gray-900">
            {/* Adding the navbar */}
            <Navbar />

            {/* Adding the flash Message */}
            {/* Flash Message */}
            <Snackbar
                className='mt-[65px]'
                open={flashOpen}
                autoHideDuration={4000}
                onClose={handleFlashClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }} 
                sx={{
                    position: 'fixed',
                    left: '1rem',          // small padding from the screen edge
                    top: '5rem',           // space below navbar
                    zIndex: 2000,          // ensure it appears above everything
                    width: 'auto',         // adjust width dynamically
                    maxWidth: '80vw',      // prevent it from stretching too far on small screens
                }}
            >
                <MuiAlert
                    onClose={handleFlashClose}
                    severity={flashSeverity}
                    sx={{
                        width: '100%',
                        backgroundColor: '#283e7cff', // same as Tailwind bg-blue-900
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                    }}
                    elevation={6}
                    variant="filled"
                >
                    {flashMessage}
                </MuiAlert>
            </Snackbar>

            {/* Adding the register div */}
            <div className="flex items-center justify-center min-h-screen bg-gray-900 font-sans p-4">
                <div className="w-full max-w-md bg-blue-900/80 p-8 md:p-10 rounded-xl shadow-2xl border border-blue-700 backdrop-blur-sm">
                <div className="text-center mb-8">
                    <LockIcon className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-blue-300">Secure your communication with PGP encryption.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-[10px]"> 
                        <label className="block text-sm font-medium text-blue-200 mb-1"> Full Name </label>
                        <input 
                            type="text" 
                            value={fullname}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder='Type your fullname...'
                            name="Full Name"
                            className="w-full px-4 py-2 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-400 focus:ring-blue-400 focus:border-blue-400 shadow-inner"
                        /> 
                    </div>
                    <div className="mb-[10px]"> 
                        <label className="block text-sm font-medium text-blue-200 mb-1"> Username </label>
                        <input 
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Type your username...'
                            name="Username"
                            className="w-full px-4 py-2 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-400 focus:ring-blue-400 focus:border-blue-400 shadow-inner"
                        />
                    </div>
                    <div className="mb-[10px]"> 
                        <label className="block text-sm font-medium text-blue-200 mb-1"> Email Address </label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Type your email address...'
                            name="Email Address"
                            className="w-full px-4 py-2 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-400 focus:ring-blue-400 focus:border-blue-400 shadow-inner"
                        />
                    </div>
                    <div className="mb-[10px]"> 
                        <label className="block text-sm font-medium text-blue-200 mb-1"> Password </label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Type your password...'
                            name="Password"
                            className="w-full px-4 py-2 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-400 focus:ring-blue-400 focus:border-blue-400 shadow-inner" 
                        /> 
                    </div>
                    <div className="mb-[10px]"> 
                        <label className="block text-sm font-medium text-blue-200 mb-1"> Password </label>
                        <input 
                            type="password"
                            value={verifyPassword}
                            onChange={(e) => setVerifyPassword(e.target.value)}
                            placeholder='Verify your password...'
                            name="Password"
                            className="w-full px-4 py-2 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-400 focus:ring-blue-400 focus:border-blue-400 shadow-inner" 
                        /> 
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]"
                    >
                        Register & Generate Keys
                    </button>
                </form>

                <p className="mt-6 text-center text-blue-300">
                    Already have an account?
                    <a
                    href="/login"
                    className="ml-2 font-bold text-blue-400 hover:text-blue-300 transition duration-150"
                    >
                    Login
                    </a>
                </p>
                </div>
            </div>

            {/* Adding the footer */}
            <Footer />
            </main>
        </Fragment>
    );
};

// Exporting the register component 
export default Register;
