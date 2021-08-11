import {useEffect, useState} from "react";
import {getPostsComments} from "../../services/posts-comments.service";
import {Comments} from "../comments/Comments";

export function Post({onePost:{id,title}}){

    let [comments,setComments] = useState([]);

    useEffect(()=>{
      getPostsComments(id)
            .then(data=>setComments([...data]));
    },[id]);

    return(
        <div>
            <h1>User's post {id} </h1>
            <h3>{id}-{title}</h3>
            <h1>Comments of the post {id}</h1>
            <Comments comments={comments}/>
        </div>
    )
}