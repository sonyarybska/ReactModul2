import {
  Link
} from "react-router-dom";
import "./Post.css"

export function Post({onePost,url}){
    let {id,title}=onePost;
    return(
        <div className={'onePost'}>
            <h4>{id}-{title}</h4>
            <Link to={{pathname:`${url}/${id}`, state:onePost}}>details</Link>
        </div>
    )
}