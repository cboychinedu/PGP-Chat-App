// Importing the necessary modules 
import About from './Pages/About/About';
import Home from './Pages/Home/Home'; 
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Security from './Pages/Security/Security';
import Dashboard from './Pages/Dashboard/Dashboard';
import Features from './Pages/Features/Features';
import FAQ from './Pages/FAQ/Faq';
import Documentation from './Pages/Documentation/Documentation';
import Blog from './Pages/Blogs/Blogs';
import TermsOfService from './Pages/TermsOfService/TermsOfService';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Career from './Pages/Careers/Careers';
import Support from './Pages/Support/Support';

// Defining the App component
class App extends Component {
  // Setting the state 
  state = {
    message: "Welcome to PGP!"
  }

  // Rendering the component 
  render() {
    // Returning the JSX to be rendered
    return (
      <Fragment> 
        <BrowserRouter>
          {/* Setting the routes configurations */}
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/howitworks" element={<HowItWorks /> } /> 
            <Route path="/about" element={<About />} />
            <Route path="/security" element={<Security />} /> 
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/careers" element={<Career />} /> 
            <Route path="/features" element={<Features />} />
            <Route path="/termsofservice" element={<TermsOfService />} /> 
            <Route path="privacypolicy" element={<PrivacyPolicy /> } /> 
            <Route path="/documentation" element={<Documentation />} /> 
            <Route path="/support" element={<Support />} /> 
          </Routes>
        </BrowserRouter>
      </Fragment>

    );
  }
}

// Exporting the App component as default
export default App;
