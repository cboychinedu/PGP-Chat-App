# Importing the necessary modules 
import os 
import bcrypt
from Database.database import DatabaseManager
from flask import Blueprint, jsonify, request

# Creating an instance of the database manager 
db = DatabaseManager()

# Create a Blueprint for home routes
home = Blueprint('home', __name__)

# Route for the home page 
@home.route("/", methods=["GET"])
def homePage(): 
    return jsonify({
        "message": "Welcome to the PGP Chat App Backend!", 
        "status": "success", 
        "stausCode": 200
    })

# Creating a route for the register page 
@home.route("/register", methods=["POST"])
def register():
    # Using try and except block to handle errors
    try: 
        # Getting the user data from the request 
        data = request.get_json()

        # Getting the user's details 
        email = data.get("email") 
        username = data.get("username")
        fullname = data.get("fullname")
        password = data.get("password")

        # Checking if the user details are on the sqlite3 database
        verifyUser = db.verifyUser(username=username, email=email)

        # if the verify user exists on the database
        if (verifyUser): 
            # Return a message that the user already exists on the database 
            errorMessage = {"message": "User already exists", "status": "error", "statusCode": 400}
            return jsonify(errorMessage)
        
        # Else register the user on the database 
        else: 
            # Hashing the user passowrd 
            passwordHash = bcrypt.hashpw(password, bcrypt.gensalt(5))

            # Saving the userdetails into the database 
            print(passwordHash)

            # Register the user on the database 
            return jsonify({"message": verifyUser})  
        

    # Except 
    except Exception as e: 
        print(f"Error: {e}")
        return jsonify({
            "message": str(e), 
            "status": "error", 
            "statusCode": 500
        })

# Creating a route for the login page 
@home.route("/login", methods=["POST"])
def login():
    # Getting the user data from the request 
    data = request.get_json()
    emailAddress = data.get("emailAddress")
    password = data.get("password")

    pass 
