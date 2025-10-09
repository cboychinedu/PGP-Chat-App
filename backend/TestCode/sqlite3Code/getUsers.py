def get_user_by_username(username):
    """Retrieve a single user's data by username."""
    sql_query = "SELECT id, username, email FROM users WHERE username = ?"
    cursor.execute(sql_query, (username,)) # Note the comma to make it a tuple
    user_data = cursor.fetchone() # Fetches a single matching row

    if user_data:
        print(f"User found: {user_data}")
        print(f"Username: {user_data[1]}, Email: {user_data[2]}")
    else:
        print(f"No user found with username: {username}")

# Example usage
get_user_by_username('johndoe')
