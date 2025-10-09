import sqlite3

def setup_database():
    """Create and populate a sample users table."""
    conn = sqlite3.connect('database.db')  # Or specify a file like 'user_data.db'
    cursor = conn.cursor()
    
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            username TEXT NOT NULL UNIQUE,
            fullname TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
    """)
                   
    conn.commit()
    return conn

conn = setup_database()
cursor = conn.cursor()
