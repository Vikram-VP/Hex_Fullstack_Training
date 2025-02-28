import json; 
import os; 

FILE_NAME= "users.json" 

def loadUsers():
    if os.path.exists(FILE_NAME):
        with open(FILE_NAME, "r") as file:
            return json.load(file)
    
    return []

def saveUsers(users):
    with open(FILE_NAME, "w") as file:
        json.dump(users, file, indent=4)
        
def signup():
    name = input("Enter name: ")
    username = input("Enter username: ")
    password = input("Enter password: ")
    users = loadUsers()
    users.append(
        {
            "name":name,
            "username": username,
            "password": password
        }
    )
    saveUsers(users)
    print('Sign-up successful, please login ')
    
    
def login():
    username = input("Enter username: ")
    password = input("Enter password: ")
    users = loadUsers()
    for user in users:
        if user["username"] == username and user['password'] == password:
            print(f"Login Success!! Welcome {user['name']} !!!")
            return True 
    
    print('Invalid Credentials!!')
    return False          
        
#menu
while True:
    print("1. Sign Up")
    print("2. Login")
    print("0. Exit")

    option = input('Select operation')

    if option == "1":
        signup()
    elif  option == "2":
        login()
    elif option == "0":
        print('Exiting.. Thank You!!!')
        break; 
    else:
        print('Invalid Option....')
