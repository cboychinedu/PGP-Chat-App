# Importing the necessary modules 
import os 
import jwt 
import bcrypt
import datetime 
from Database.database import DatabaseManager
from flask import Blueprint, jsonify, request

# Getting the secret key 
secretKey = os.getenv("SECRET_KEY")

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

            # Sending the error message 
            return jsonify(errorMessage)
        
        # Else register the user on the database 
        else: 
            # Hashing the user passowrd 
            password = bytes(password.encode('utf-8'))
            passwordHash = bcrypt.hashpw(password, bcrypt.gensalt())

            # Saving the userdetails into the database 
            data = db.saveUser(
                username=username, 
                email=email, 
                password=passwordHash, 
                fullname=fullname
            )

            # if the status message was a success 
            if (data["status"] == "success"): 
                # return the jsonify message 
                return jsonify({
                    "message": "User registered successfully.", 
                    "status": "success", 
                    "statusCode": 200
                }) 
        

    # Except exception as error 
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

    # Getting the user email and username 
    email = data.get("email")
    password = data.get("password")

    # Using try except block to get the users 
    try: 
        # Execute the block of code below 
        # Getting the user details 
        usersData = db.verifyUserByEmail(email=email)

        # if the user data returns none 
        if (usersData == None): 
            # Execute the block of code below 
            return jsonify({
                "message": "Invalid Username/email or password", 
                "status": "error", 
                "statusCode": 404
            })

        # Validating the user 
        passwordHash = usersData[0]
        username = usersData[1]
        email = usersData[2]

        # Converting the password into a byte file 
        password = password.encode("utf-8")

        # Verifying the password hash 
        condition = bcrypt.checkpw(password, passwordHash)

        # Checking the condition 
        if (condition): 
            # Generate a token for the user and send it back to 
            # the clinet 
            payload = {
                "email": email, 
                "username": username,
                "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=30)
            
            }

            # Encode the payload as a jwt token 
            encodedJwt = jwt.encode(
                payload, 
                secretKey, 
                algorithm="HS256"
            )

            # Build the response data 
            responseData = {
                "message": "User logged in", 
                "status": "success", 
                "token": encodedJwt, 
                "statusCode": 200 
            }

            # Send the json data 
            return jsonify(responseData)

        # else if the user password was incorrect execute 
        # the block of code below 
        else: 
            # Else if the condition was false 
            responseData = {
                "message": "Invalid email or password", 
                "status": "error", 
                "statusCode": 404
            }

            # Send the response data as a json object 
            return jsonify(responseData)
   
    # Unless exception as error, execute this block 
    # of code below 
    except Exception as e:
        # Convert the object into a json object and send it 
        # to the client  
        return jsonify({
            "message": str(e), 
            "status": "error", 
            "statusCode": 404 
        }) 
