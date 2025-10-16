# Importing the necessary modules
import os 
import sqlite3

# Defining the path to the database file
databasePath = os.path.join(os.path.dirname(__file__), 'database.db')

# Creating a class to manage the database connections 
class DatabaseManager:
    def __init__(self):
        self.dbPath = databasePath
        self.connection = None # Using camelCase for variable names

    # Creating a method to connect to the database
    def connect(self):
        """Establish a connection to the SQLite database."""
        # using try except block 
        try: 
            # if the connection is not established, create a new one
            if self.connection is None:
                # Connect to the SQLite database 
                # FIX: Add check_same_thread=False to allow cross-thread use
                self.connection = sqlite3.connect(self.dbPath, check_same_thread=False) 

                # Connected to the db 
                print("[INFO]: Connected to the database")
            
            # Return the connection object 
            return self.connection
        
        # Except exception on error 
        except Exception as error: 
            # Displaying the error message 
            print("[INFO]: Error connecting to the database")
            print(error); 
            
            # Could not connect to the database 
            return str(error)
        
    
    # Close the database connection 
    def close(self):
        """Close the database connection."""

        # if the connection exists, close it and set it to None
        if self.connection:
            # Close the connection 
            self.connection.close()
            self.connection = None

    # Get user by email only 
    def verifyUserByEmail(self, email): 
        """Verify if a user exists in the database by email"""
        conn = self.connect() 
        cursor = conn.cursor() 

        # Sql query to check for existing username or email address 
        query = "SELECT password, username, email FROM users WHERE email = ? OR username = ?"
        cursor.execute(query, (email, email))

        # Fetch one result for the query 
        result = cursor.fetchone() 

        # Return the result 
        return result 

    # Retrive verify a user from the database 
    def verifyUser(self, username, email): 
        """
        Verify if a user exists in the database by username or email address.
        Returns the user data (username, fullname, email) as a tuple, or None if not found.
        """
        conn = self.connect()
        cursor = conn.cursor()
        
        # SQL query to check for existing username or email address
        query = "SELECT username, fullname, email FROM users WHERE username = ? OR email = ?"
        cursor.execute(query, (username, email))
        
        # Fetch one result from the executed query
        result = cursor.fetchone()
        
        # Returns the fetched result (user data or None)
        return result
    
    # Save the user to the database 
    def saveUser(self, username, email, password, fullname): 
        # Connect to the database 
        conn = self.connect() 
        cursor = conn.cursor()

        # Getting the user data
        userData = (username, fullname, email, password)

        # SQL query to save the users 
        query = "INSERT INTO users (username, fullname, email, password) VALUES (?, ?, ?, ?)"
        cursor.execute(query, userData)

        # Print the changes 
        conn.commit() 

        # Display a status message 
        print("[INFO]: User registered.")
        
        # Return the data 
        return {
            "message": "Successful", 
            "status": "success", 
            "statusCode": 200 
        }