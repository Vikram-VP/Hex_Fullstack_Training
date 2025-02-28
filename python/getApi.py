import requests # type: ignore
import json

apiUrl="https://jsonplaceholder.typicode.com/users"

response=requests.get(apiUrl)
data=response.json()

for u in data:
    print(f"{u['name']} - {u['username']} - {u['address']['city']}")
    
#save this data as json in user_data.json

with open('user_data.json', "w") as file:
        json.dump(data, file, indent=4)
        
'''print("Saved in file and displaying")
for u in data:
    print(u,end='\n')'''
    

