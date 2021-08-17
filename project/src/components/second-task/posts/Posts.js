import {Post} from "../post/Post";

export function Posts({posts}){
    return(
        <div>
            {
                posts.map(value=><Post onePost={value}/>)
            }
        </div>
    )
}