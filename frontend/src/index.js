// Importing the necessary libraries and components
import App from "./App";
import "./index.css"; 
import { AuthContextProvider } from "./Auth/Auth";
import ReactDOM from 'react-dom/client';

// Rendering the main App component into the root element of the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Using React's StrictMode for highlighting potential problems in the application
root.render(
    <AuthContextProvider>
      <App /> 
    </AuthContextProvider>
);


