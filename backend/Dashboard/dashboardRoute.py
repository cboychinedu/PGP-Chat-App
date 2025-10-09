# Importing the necessary modules 
import os 
import jwt 
from datetime import datetime 
from Database.database import DatabaseManager
from flask import Blueprint, jsonify, request 

# Getting the secret key 
secretKey = os.getenv("SECRET_KEY")

# Creating an instance of the database manager 
db = DatabaseManager() 

# Creating a blueprint for the dashboard route
dashboard = Blueprint('dashboard', __name__)

# Route for the dashborad page 
@dashboard.route("/", methods=["POST"])
def getDashboardUser(): 
    pass 