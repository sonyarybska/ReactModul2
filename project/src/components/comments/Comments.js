import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";

export function Comments(){
    let [comments,setComments] = useState([]);

    useEffect(()=>{
        getComments()
            .then(value => setComments([...value]))
    },[])
    return(
        <div>
            {
                comments.map(value => <h4>{value.body}</h4>)
            }
        </div>
    )
}