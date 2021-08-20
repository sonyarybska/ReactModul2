import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import {Post} from "../post/Post";
import {Route} from "react-router-dom";
import {PostDetails} from "../post-details/PostDetails";
import "./Posts.css";

export function Posts(props) {
    let {match: {url}} = props;
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'posts'}>
            <div>
                {
                    posts.map(value => <Post key={value.id} url={url} onePost={value}/>)
                }
            </div>
            <Route path={'/posts/:id'} render={(props) => <PostDetails {...props}/>}/>
        </div>
    )
}