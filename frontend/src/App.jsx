// Importing the necessary modules 
import Home from './Pages/Home/Home'; 
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          </Routes>
        </BrowserRouter>
      </Fragment>

    );
  }
}

// Exporting the App component as default
export default App;
