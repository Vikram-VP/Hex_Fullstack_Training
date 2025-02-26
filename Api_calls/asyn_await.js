/**
 * PATH: https://jsonplaceholder.typicode.com/comments?postId=1
 * METHOD: GET
 * RESPONSE : array of comments for that post id 
 * PARAMS: postId
 * technique: async await
 */

const getAllCommentsByPostId = async (postId) => {
    try {
        // Fetching Data Using `fetch()`
        // The fetch() function makes an HTTP GET request to the given API URL.
        // `await` makes JavaScript wait until the request completes and stores the result in `response`.
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId);

        // Converting Response to JSON
        // `.json()` converts the API response into JSON format.
        // `await` ensures JavaScript waits for the conversion to finish before moving to the next line.
        // Stores the array of comments in the `comments` variable.
        let comments = await response.json(); 

        // Displaying the fetched comments
        console.log(comments);

        console.log("good bye");
    }
    catch(err) {
        // If an error occurs (e.g., no internet, wrong API, server issue),
        // this block executes and displays an error message.
        console.log(`Error fetching comments for post with ID ${postId}`);
    }
}

// Calling the function with postId = 1 to fetch comments for that specific post.
getAllCommentsByPostId(1);
