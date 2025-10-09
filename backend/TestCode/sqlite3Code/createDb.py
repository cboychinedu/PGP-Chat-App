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


# 1. Establish the connection
# This creates a new database file named `my_database.db` if it doesn't exist.
conn = None
try:
    conn = sqlite3.connect('my_database.db')
    
    # 2. Create the cursor object
    cursor = conn.cursor()
    print("Database connection and cursor created successfully.")
    
    # 3. Use the cursor to execute SQL commands
    # For example, create a table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )
    ''')
    
    # Insert a record
    cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", ('Alice', 'alice@example.com'))
    
    # Commit the changes
    conn.commit()
    print("User 'Alice' inserted.")
    
except sqlite3.Error as e:
    print(f"Database error: {e}")
    
finally:
    # 4. Close the cursor and connection
    if conn:
        conn.close()
        print("Database connection closed.")
