import bcrypt

# Encode your password and generate a salt
password = b'mysecretpassword'
hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())
print(f"Hashed password: {hashed_password}")

# Check if a password is correct
is_match = bcrypt.checkpw(b'mysecretpassword', hashed_password)
print(f"Password matches: {is_match}")
 