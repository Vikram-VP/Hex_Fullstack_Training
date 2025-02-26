
/*
    - fetch all TODOs from the API using fetch with async await 
    - filter todos that have been complete/incomplete using filter operation 
    - display the titles of complete/incomplee todos using map operation 

    extected output: 
    Completed/ incomplete Todo titles

    - delectus aut autem
    - quis ut nam facilis et officia qui
    .... 

    API PATH: https://jsonplaceholder.typicode.com/todos

    getAllTodoTitles('complete'/'incomplete')
*/


const getAllTodoTitles = async (status) => {
    try {
        // Fetch all TODOs from the API
        // The fetch() function makes an HTTP GET request to get all TODOs.
        // `await` ensures JavaScript waits until the request completes.
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');  
        
        // Convert the response to JSON format
        // `.json()` extracts the JSON body content from the response.
        let todos = await response.json();

        // Filter todos based on their completion status
        // `filter()` creates a new array containing only the todos where 
        // `completed` matches the provided `status` (true for complete, false for incomplete).
        let filteredTodos = todos.filter(t => t.completed === status);

        // Extract only the titles from the filtered todos
        // `map()` transforms each todo object into just its `title` string.
        let todoTitles = filteredTodos.map(t => t.title);

        // Display each title with a `-` before it
        todoTitles.forEach(t => console.log(`- ${t}`));
    }
    catch(err) {
        // Handle errors (e.g., network issues)
        console.log('Error fetching todos: ' + err);
    }
}

// Call the function with `false` to get incomplete tasks
getAllTodoTitles(false);
