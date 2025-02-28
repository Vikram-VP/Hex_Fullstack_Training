todos =[
    {    #dictionary data type
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": False  
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": False
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": False
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": True
  },
  {
    "userId": 2,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": True
  },
  {
    "userId": 2,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": False
  }
]

#filter todos to display only not completed entries 
incomplete_todos = list(filter(lambda t: not t["completed"], todos))
completed_todos = list(filter(lambda t:  t["completed"], todos))

def displayTodos():
    for todo in completed_todos:
        print(todo["title"] ,"   Completed: ", todo["completed"])

#display todos posted by userId: 1  hint: use == 
displayTodos()