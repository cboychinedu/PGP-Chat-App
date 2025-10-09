# Importing the necessary modules
import os 
import sqlite3

# Defining the path to the database file
databasePath = os.path.join(os.path.dirname(__file__), 'database.db')

# Creating a class to manage the database connections 
class DatabaseManager:
    def __init__(self):
        self.dbPath = databasePath
        self.connection = None

    # Creating a method to connect to the database
    def connect(self):
        """Establish a connection to the SQLite database."""
        # using try except block 
        try: 
            # if the connection is not established, create a new one
            if self.connection is None:
                # Connect to the SQLite database 
                self.connection = sqlite3.connect(self.dbPath)

                # Connected to the db 
                print("[INFO]: Conneted to the database")
            
            # Return the connection object 
            return self.connection
        
        # Except exception on error 
        except Exception as error: 
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

    # Retrive verify a user from the database 
    def verifyUser(self, username, email): 
        """Verify if a user exists in the database by username or email address."""
        conn = self.connect()
        cursor = conn.cursor()
        
        # SQL query to check for existing username or email address
        query = "SELECT username, fullname, email FROM users WHERE username = ? OR email = ?"
        cursor.execute(query, (username, email))
        
        # Fetch one result from the executed query
        result = cursor.fetchone()
        
        # Return True if a user is found, otherwise False
        return result is not None

    # def execute_query(self, query, params=()):
    #     """Execute a SQL query and return the results."""
    #     conn = self.connect()
    #     cursor = conn.cursor()
    #     cursor.execute(query, params)
    #     results = cursor.fetchall()
    #     conn.commit()
    #     return results

    # def __enter__(self):
    #     """Enable use of 'with' statement for automatic connection management."""
    #     self.connect()
    #     return self

    # def __exit__(self, exc_type, exc_value, traceback):
    #     """Ensure the connection is closed when exiting 'with' block."""
    #     self.close()