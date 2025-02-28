import requests
import json
import time

LOGIN_URL = "https://reqres.in/api/login"
USERS_URL = "https://reqres.in/api/users?page=1"
USER_DATA_FILE = "user_data.json"

# to login and get a token
def login():
    credentials = {
        "email": "eve.holt@reqres.in",  
        "password": "cityslicka"
    }
    response = requests.post(LOGIN_URL, json=credentials)

    if response.status_code == 200:
        token = response.json().get("token")
        print(f"Login Successful! Token: {token}")
        return token
    else:
        print("Login Failed! Check credentials.")
        return None

# to fetch users from API
def fetch_users():
    response = requests.get(USERS_URL)

    if response.status_code == 200:
        users = response.json().get("data", [])

        # Save users to JSON file
        with open(USER_DATA_FILE, "w") as file:
            json.dump(users, file, indent=4)

        print("Users fetched and saved successfully!")
        return users
    else:
        print("Failed to fetch users.")
        return []

# to display users from the saved file
def display_users():
    try:
        with open(USER_DATA_FILE, "r") as file:
            users = json.load(file)

        if users:
            print("\nList of Users:")
            for user in users:
                print(f"{user['id']}. {user['first_name']} {user['last_name']} - {user['email']}")
        else:
            print("No users found.")
    except FileNotFoundError:
        print("User data file not found. Fetch users first.")

# to autorate fetch every 30 seconds
def auto_fetch():
    print("Auto-fetching users every 30 seconds. Press Ctrl+C to stop.")
    try:
        while True:
            fetch_users()
            time.sleep(30)
    except KeyboardInterrupt:
        print("Auto-fetch stopped.")


while True:
    print("1. Login")
    print("2. Fetch all Users")
    print("3. Display all Users")
    print("4. Auto-fetch Users (every 30 sec)")
    print("5. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        login()
    elif choice == "2":
        fetch_users()
    elif choice == "3":
        display_users()
    elif choice == "4":
        auto_fetch()
    elif choice == "5":
        print("Thank you! Exiting...")
        break
    else:
        print("Invalid choice! Try again.")
