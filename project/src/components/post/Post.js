import {useEffect, useState} from "react";
import {getPostsComments} from "../../services/posts-comments.service";
import {Comments} from "../comments/Comments";
import './Post.css';

export function Post({onePost:{id,title}}){

    let [comments,setComments] = useState([]);

    useEffect(()=>{
      getPostsComments(id)
            .then(data=>setComments([...data]));
    },[id]);

    return(
        <div className={'post'}>
            <h1>User's post {id} </h1>
            <h3>{id}-{title}</h3>
            <h1>Comments of the post {id}</h1>
            <div className={'comment'}>
                <Comments comments={comments}/>
            </div>

        </div>
    )
}