import requests
import json 
import os 

FILE_NAME="token.json"

def getEmployeeToken():
    apiUrl="http://localhost:5004/api/employee/login"
    token=''

    username = input('Enter username')
    password = input('Enter password')

    response  = requests.post(apiUrl, json ={
        "username": username,
        "password": password
    })

    if response.status_code == 200:
        info = response.json()
        token = info['token']
        #save this token in a file 
        with open(FILE_NAME,"w") as file:
            json.dump(token,file,indent=4)
         
    

 
def getUserDetails():
    apiUrl="http://localhost:5004/api/auth/user"
    
    #read the token from the file 
    if os.path.exists(FILE_NAME):
        with open(FILE_NAME, "r") as file:
            token = json.load(file)
            header= {
             "Authorization": f"Bearer {token}"
            }
            response = requests.get(apiUrl,headers=header)
    if response.status_code == 200:
        user = response.json() 
        return user
    else:
        return ''
    
while True:
    print("1. Employee Login")
    print("2. Admin Login")
    
    op = input("Enter the option")
    
    if op == "1":
        getEmployeeToken()
        user = getUserDetails()
        
        if(user == ''):
            print('Invalid Credentials!!')
        else:
            print(f"Welcome {user["name"]}  ROLE: {user["role"]}")
                
        break 
    
    if op == "2":
        print("not available yet")
        break         