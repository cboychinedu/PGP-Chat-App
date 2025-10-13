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

# Route for the dashborad page 
@dashboard.route("/", methods=["POST"])
def getDashboardUser(): 
    pass 