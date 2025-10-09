import jwt
import datetime
import time

# --- Encoding a JWT ---
secret_key = "your-super-secret-key"

payload = {
    "user_id": 123,
    "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(minutes=30)
}

# Encode the JWT
encoded_jwt = jwt.encode(payload, secret_key, algorithm="HS256")

print("Encoded JWT:", encoded_jwt)

# --- Decoding a JWT ---
try:
    # Decode the JWT to get the payload
    decoded_payload = jwt.decode(encoded_jwt, secret_key, algorithms=["HS256"])
    print("Decoded Payload:", decoded_payload)

except jwt.ExpiredSignatureError:
    print("The token has expired.")
except jwt.InvalidTokenError:
    print("The token is invalid.")
