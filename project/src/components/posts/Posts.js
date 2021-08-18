import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";

export function Posts(){
    let [posts,setPosts] = useState([]);

    useEffect(()=>{
        getPosts()
            .then(value => setPosts([...value]))
    },[])
    return(
        <div>
            {
                posts.map(value => <h4>{value.title}</h4>)
            }
        </div>
    )
}