person=[] #this is an empty list 

def addPerson(value):
    #print('value appended...')
    person.append(value) #this adds the value to the list

def displayPerson():
    i=0
    for p in person:
        i = i+1
        print(i ,"person: ",p)

def displayPersonV2():
    for index,p in enumerate(person,1):
        print(f"{index}. {p}")  #f tells python to consider i and p as variabes

addPerson("harry potter")
addPerson("ronald weasley")

displayPerson()
displayPersonV2()