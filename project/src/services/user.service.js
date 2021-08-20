const getUsers=()=>{
    return  fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}
const getUserById=(id)=>{
    return  fetch('https://jsonplaceholder.typicode.com/users/'+id)
        .then(value => value.json())
}

export {getUsers,getUserById};