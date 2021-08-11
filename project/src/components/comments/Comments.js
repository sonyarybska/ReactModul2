import {useEffect, useState} from "react";
import {getComments} from "../../services/comments.service";
import {Comment} from "../comment/Comment";

export function Comments(){
    let [comments,setComments] = useState([]);

    useEffect(()=>{
        getComments()
            .then(data=>setComments([...data]))
    },[]);
    return(
        <div>
            {
                comments.map(value => <Comment key={value.id} oneComment={value}/>)
            }
        </div>
    )
}