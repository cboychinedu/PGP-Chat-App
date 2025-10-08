// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 

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
        <h1>{this.state.message}</h1>
      </Fragment>
    );
  }
}

// Exporting the App component as default
export default App;
