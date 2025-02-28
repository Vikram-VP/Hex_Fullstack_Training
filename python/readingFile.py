import json

def fetchData():
    try:
        #open the file in read mode  
        with open("sorted_todo.json","r") as file:
            fetchedTodos=json.load(file); 
    
        for t in fetchedTodos:
            print(t)
            
    except Exception as e:
        print(e)

fetchData();