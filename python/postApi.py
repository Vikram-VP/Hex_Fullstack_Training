import requests
import json

apiUrl="https://jsonplaceholder.typicode.com/posts"

postData={
    "title":'foo',
    "body":'bar',
    "userId":1
}

response=requests.post(apiUrl,postData)

# i want to check whether this above api has worked or not 
# the best way to do that is to check status_code,if 200 then all okayy

print(response)
if response.status_code == 200 or response.status_code == 201:
    p=response.json()
    print("post inserted ",p)
else:
    print("op failed")