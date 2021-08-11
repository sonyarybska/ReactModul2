import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";
import {Post} from "../post/Post";

export function Posts(){
    let [posts,setPosts] = useState([]);

    useEffect(()=>{
        getPosts()
            .then(data=>setPosts([...data]))
    },[])

    return(
        <div>
            {
                posts.map(value => <Post key={value.id} onePost={value}/>)
            }
        </div>
    )
}