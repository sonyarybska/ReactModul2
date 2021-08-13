import {Post} from "../post/Post";
import './Posts.css';

export function Posts({posts}) {
    return (
        <div className={'posts-box'}>
            {
                posts.map(value => <Post onePost={value}/>)
            }
        </div>
    )
}