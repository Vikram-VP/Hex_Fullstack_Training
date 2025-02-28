import json;

todos=[
    {
        'title': 'Complete Project 2 sprint 3',
        'priority': 2
    },
    {
        'title': 'Send email to PO for new chart req',
        'priority': 3
    },
    {
        'title': 'Fix bugs from prod app',
        'priority': 1
    },
    {
        'title': 'Prepare doc for spring review',
        'priority': 4
    }
]

#sort the list by priority in asc order[1,2,3,4]

sortedTodoList = sorted(todos, key=lambda t: t['priority'])

#save this sorted list in a file sorted_todo.json

print('Sorted Todos')
with open('sorted_todo.json',"w") as file:
     json.dump(sortedTodoList,file,indent=4)
     
print("Sorted list saved in file.")