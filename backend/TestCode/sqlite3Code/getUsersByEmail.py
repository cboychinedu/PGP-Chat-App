def get_user_by_email(email):
    """Retrieve a single user's data by email."""
    sql_query = "SELECT id, username, email FROM users WHERE email = ?"
    cursor.execute(sql_query, (email,))
    user_data = cursor.fetchone()

    if user_data:
        print(f"User found: {user_data}")
        print(f"Username: {user_data[1]}, Email: {user_data[2]}")
    else:
        print(f"No user found with email: {email}")

# Example usage
get_user_by_email('jane.doe@example.com')
