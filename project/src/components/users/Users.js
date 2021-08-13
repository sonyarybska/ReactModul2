import {getUsers} from "../../services/user.services";
import {useEffect, useState} from "react";
import {User} from "../user/User";
import './Users.css';
import {getPostsOfUser} from "../../services/post.services";
import {Posts} from "../posts/Posts";

export function Users() {
    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);

    let userPosts = (id) => {
        getPostsOfUser(id)
            .then(value => setPosts([...value]))
    }


    return (
        <div className={'content'}>
            <div className="users-box">
                {
                    users.map(value => <User userPosts={userPosts} oneUser={value}/>)
                }
            </div>
            {
                posts && <Posts posts={posts}/>
            }
        </div>
    )
}