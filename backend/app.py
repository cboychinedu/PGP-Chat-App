# Importing the necessary modules 
import os
import logging
from datetime import timedelta
from flask import Flask, request
from Socket.extensions import socketio
from dotenv import load_dotenv
from flask_cors import CORS
from Home.homeRoute import home

# --- ANSI Color Definition ---
# ANSI escape code for green color and reset
GREEN = '\033[92m'
RESET = '\033[0m'

# --- Custom Formatter Class ---
class GreenConsoleFormatter(logging.Formatter):
    """Custom Formatter to color the entire log message green."""
    
    # Define the format string with color codes
    COLOR_FORMAT = f"{GREEN}%(asctime)s - %(levelname)s - %(message)s{RESET}"
    DATE_FORMAT = "%Y-%m-%d %H:%M:%S"
    
    def format(self, record):
        # Create a new formatter instance using the colored format string
        formatter = logging.Formatter(self.COLOR_FORMAT, datefmt=self.DATE_FORMAT)
        return formatter.format(record)


# Load environment variables from .env file
load_dotenv()

# Create the Flask application instance
app = Flask(__name__, static_folder=None, template_folder=None)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.secret_key = os.getenv("SECRET_KEY")
app.permanent_session_lifetime = timedelta(days=24)

# Getting the host, and port address 
serverHost = os.getenv("SERVER_ADDR")
serverPort = os.getenv("SERVER_PORT")

# Enable CORS configuration 
CORS(app, resources={r"/*": {"origins": "*"}})

# Set up the path to the logs directory and file
logsDir = os.path.join("Logs")
logFilePath = os.path.join(logsDir, "requests.log")
os.makedirs(logsDir, exist_ok=True)

# Set up logging to both file and console
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

# Clear existing handlers to prevent duplicate messages
if logger.hasHandlers():
    logger.handlers.clear()

# File handler for loggin 
fileHandler = logging.FileHandler(logFilePath)
fileHandler.setLevel(logging.DEBUG)
fileFormatter = logging.Formatter(
    "%(asctime)s - %(levelname)s - %(message)s", datefmt="%Y-%m-%d %H:%M:%S"
)

# Set the file handler format
fileHandler.setFormatter(fileFormatter)

# Console handler
consoleHandler = logging.StreamHandler()
consoleHandler.setLevel(logging.DEBUG)

# --- APPLY THE CUSTOM GREEN FORMATTER ---
consoleHandler.setFormatter(GreenConsoleFormatter())
# consoleFormatter = logging.Formatter( # Removed original line
#     "%(asctime)s - %(levelname)s - %(message)s", datefmt="%Y-%m-%d %H:%M:%S"
# )
# consoleHandler.setFormatter(consoleFormatter) # Removed original line

# Add handlers to the logger
logger.addHandler(fileHandler)
logger.addHandler(consoleHandler)

# Middleware to log every request
@app.before_request
def logRequestInfo():
    logger.info(f"Request: {request.method} {request.path} - IP: {request.remote_addr}")

# Initialize Socket.IO with CORS allowed origins
socketio.init_app(app, cors_allowed_origins="*")

# Register blueprints for the application
app.register_blueprint(home, url_prefix="/")

# Run the main Flask application
if __name__ == "__main__":
    socketio.run(
        app,
        debug=True,
        host=serverHost,
        port=serverPort,
        allow_unsafe_werkzeug=True
    )