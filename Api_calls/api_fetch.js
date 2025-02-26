/* Fake Api url- https://jsonplaceholder.typicode.com/posts (Path)
Method- GET
Response- Array of Posts -[]
param - None
*/

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}

/**
 * PATH: https://jsonplaceholder.typicode.com/users
 * METHOD: GET
 * RESPONSE : array of users 
 * PARAMS: none
 */

function getUsers(callback){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((json)=>callback(json))
}
let trimmedUserArray=[];
const DisplayUsers=(users)=>{
    users.forEach((u)=>{ // iterating the users
        let trimmedUser={  // this is to extract the single user from the array of users
            id:u.id,
            name:u.name,
            email:u.email,
            city:u.address.city,
            company:u.company.name
        }
        trimmedUserArray.push(trimmedUser);// we are pushing the user to the empty array for the trimmed users
    });
    console.log(trimmedUserArray);
}
//getPost();
getUsers(DisplayUsers);

function getUsersobj(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((json)=>console.log(json))
}
getUsersobj();
/**
 * PATH: https://jsonplaceholder.typicode.com/comments?postId=1
 * METHOD: GET
 * RESPONSE : array of comments for that post id 
 * PARAMS: postId
 */
const getAllCommentsByPostId=(postId)=>{
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' +postId)
    .then(response=>response.json())
    .then(json=>{
        let comments= json; 
        console.log(comments)
    })
    .catch(err=>console.log(err))
}

//getAllCommentsByPostId(5);