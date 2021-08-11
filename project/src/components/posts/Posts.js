
import {Post} from "../post/Post";

export function Posts({posts}){


    return(
        <div>
            {
                posts.map(value => <Post key={value.id} onePost={value}/>)
            }
        </div>
    )
}