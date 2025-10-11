# Importing the necessary modules 
import logging

# --- ANSI Color Definition ---
# ANSI escape code for green color and reset
GREEN = '\033[92m'
RESET = '\033[0m'

# Custom Formatter Class 
class GreenConsoleFormatter(logging.Formatter):
    """Custom Formatter to color the entire log message green."""
    
    # Define the format string with color codes
    COLOR_FORMAT = f"{GREEN}%(asctime)s - %(levelname)s - %(message)s{RESET}"
    DATE_FORMAT = "%Y-%m-%d %H:%M:%S"
    
    def format(self, record):
        # Create a new formatter instance using the colored format string
        formatter = logging.Formatter(self.COLOR_FORMAT, datefmt=self.DATE_FORMAT)
        return formatter.format(record)