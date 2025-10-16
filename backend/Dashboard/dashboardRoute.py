# Importing the necessary modules 
import os 
import jwt 
from datetime import datetime 
from Database.database import DatabaseManager
from flask import Blueprint, jsonify, request 
from Socket.extensions import socketio

# Getting the secret key 
secretKey = os.getenv("SECRET_KEY")


# Creating an instance of the database manager 
db = DatabaseManager() 

# Creating a blueprint for the dashboard route
dashboard = Blueprint('dashboard', __name__)

# Creating a function to display the chat user 
def chatUser(sid, message, firstuser, secondUser): 
    pass 

# Event listener for chatting 
@socketio.on("chatUser")
def handleChat(data): 
    # Start the background task for chatting with the user 
    socketio.start_background_task(
        chatUser, 
        data.get("message"), 
        data.get("firstUser"), 
        data.get("secondUser")
    )

# Get users 
@dashboard.route("/users", methods=["POST"])
def getSearchUsers(): 
    # Getting the request parameters 
    data = request.get_json()

    # Checking if the data is valid 
    if (data): 
        # Check the database to see if the user with the specified username is 
        # present 
        # Getting the username 
        username = data["username"]

        # Making a request to the database 
        user = db.verifyUser(username, username)

        # if the user exist execute this block of code 
        if (user):
            # Setting the user data 
            userData = [{
                "username": user[0],
                "fullaname": user[1], 
                "email": user[2]
            }] 

            # Execute this block of code if the user is found 
            return jsonify({
                "status": "success", 
                "message": "user found",
                "user": userData, 
            })
        
        # else if the user was not found 
        else: 
            # No user was found 
            return jsonify({
                "status": "error", 
                "message": "User not found", 
                "user": [], 
            })

    else: 
        # Return an error message saying the user with the specified username is 
        # Not found on the database 
        # No data was found 
        return jsonify({
            "status": "error", 
            "message": "No user was found", 
            "user": []
        })
    

# Route for the dashborad page 
@dashboard.route("/", methods=["POST"])
def getDashboardUser(): 
    pass 