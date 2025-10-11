// Importing the necessary modules 
import { Fragment, useContext, useState } from 'react';
import { AuthContext } from "@auth/Auth"; 
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import LockIcon from '@components/Icons/LockIcon';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import DashboardNavbar from "@components/Navbar/DashboardNavbar"; 

// Getting the user token 
let tokenValue = localStorage.getItem("xAuthToken") || null; 

// Creating the login component  
const Login = () => {
    // Get the setToken from context so we can store the auth token globally 
    const { setToken } = useContext(AuthContext); 

    // Setting the state 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [flashOpen, setFlashOpen] = useState(false);
    const [flashMessage, setFlashMessage] = useState("");
    const [flashSeverity, setFlashSeverity] = useState("error");

    // Creating a function to handle the flash close function 
    const handleFlashClose = (event, reason) => {
        // if the reasoon is click away 
        if (reason === "clickaway") return; 

        // Setting the flash open 
        setFlashOpen(false); 
    }

    // Creating a function to handle the submit 
    const handleSubmit = (event) => {
        // Prevent default submission 
        event.preventDefault();

        // Checking the email value
        if (!email) {
            // Setting the flash message 
            setFlashMessage("Email or Username required!"); 
            setFlashSeverity("error"); 
            setFlashOpen(true); 
            return; 
        }

        // Checking the password value 
        else if (!password) {
            // Setting the flash message 
            setFlashMessage("Password required!"); 
            setFlashSeverity("error"); 
            setFlashOpen(true) 
            return; 
        }

        // Else if all the fields are filled execute the block 
        // of code below 
        else {
            // Converting the user input into a JSON object 
            const userData = JSON.stringify({
                "email": email, 
                "password": password, 
            }); 

            // Defining the server url for the login route 
            const serverUrl = `${process.env.REACT_APP_SERVER_URL}/login`; 

            // using try-catch block to handle the fetch request 
            try {
                // Sending the POST request to the server 
                fetch(serverUrl, {
                    method: "POST", 
                    "headers": { "Content-Type": "application/json"}, 
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

                        // Getting the token value 
                        const tokenValue = responseData.token; 
                        localStorage.setItem('xAuthToken', tokenValue); 
                        setToken(tokenValue); 

                        console.log(tokenValue);

                        // Wait for another 5 seconds and redirect the user to the login page 
                        // setInterval(() => {
                        //     // Redirect the user to the dashboard page 
                        //     window.location.href = "/dashboard"; 
                        // }, 5000); 
                    }
                })
            }

            // Catch block 
            catch (error) {
                // Catch the error 
                console.log("Fetch Error: ", error); 
                setFlashMessage(error); 
                setFlashSeverity("error"); 
                setFlashOpen(true);

            }
        }
    };

    // Returng the jsx component
    return (
        <Fragment>
            <main className="bg-gray-900">
                {/* Adding the navbar */}
                {tokenValue ? <DashboardNavbar /> : <Navbar />}

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
                            backgroundColor: '#283e7cff', 
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


                {/* Adding the main login div */}
                <div className="flex items-center justify-center min-h-screen bg-gray-900 font-sans p-4">
                    <div className="w-full max-w-md bg-blue-900/80 p-8 md:p-10 rounded-xl shadow-2xl border border-blue-700 backdrop-blur-sm">
                        <div className="text-center mb-8">
                            <LockIcon className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                            <p className="text-blue-300">Sign in to access your secure chat.</p>
                        </div>

                        {/* Adding the form div */}
                        <form onSubmit={handleSubmit}>
                            {/* Adding the username/email div */}
                            <div> 
                                <label className='block text-sm font-medium text-blue-200 mb-1'> Username or Email </label>
                                <input 
                                    type="email"
                                    name="username"
                                    placeholder='Enter username or email...'
                                    className="w-full px-4 py-2 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-400 focus:ring-blue-400 focus:border-blue-400 shadow-inner"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            {/* Adding the password div */}
                            <div> 
                                <label className='block text-sm font-medium text-blue-200 mb-1'> Password </label>
                                <input 
                                    type="password"
                                    name="password" 
                                    placeholder="Enter your password..."
                                    className="w-full px-4 py-2 border border-blue-600 rounded-lg bg-blue-900 text-white placeholder-blue-400 focus:ring-blue-400 focus:border-blue-400 shadow-inner"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                /> 
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]"
                            >
                                Login Securely
                            </button>
                        </form>

                        <p className="mt-6 text-center text-blue-300">
                            Don’t have an account?
                            <a href="/register" className="ml-2 font-bold text-blue-400 hover:text-blue-300 transition duration-150">
                                Register Now
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

// Exporting the login component 
export default Login;
