import {useEffect, useState} from "react";
import {Posts} from "../posts/Posts";
import {getUserPosts} from "../../services/users.service";

export function User({oneUser:{id,name,username}}){

    let [posts,setPosts] = useState([]);

    useEffect(()=>{
        getUserPosts(id)
            .then(data=>setPosts([...data]))
    },[]);

    return(
        <div>
            <h1>User {id}</h1>
            <h3>{id}-{name}-{username}</h3>
            <Posts posts={posts}/>
        </div>
    )
}