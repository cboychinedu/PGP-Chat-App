def get_user_by_login(login_id):
    """Retrieve a user by either username or email."""
    sql_query = "SELECT id, username, email FROM users WHERE username = ? OR email = ?"
    cursor.execute(sql_query, (login_id, login_id))
    user_data = cursor.fetchone()

    if user_data:
        print(f"User found via combined search: {user_data}")
    else:
        print(f"No user found matching: {login_id}")

# Example usage
get_user_by_login('janedoe')
get_user_by_login('john.doe@example.com')
