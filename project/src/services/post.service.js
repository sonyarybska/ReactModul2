const getPostsOfUsers=(id)=>{
return fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(value => value.json())
}

export {getPostsOfUsers};