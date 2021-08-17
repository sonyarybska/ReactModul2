import './App.css';
import {FormOfCarsInfo} from "./components/first-task/form-of-cars-info/FormOfCarsInfo";
import {getPostsOfUsers} from "./services/post.service";
import {useState} from "react";
import {Posts} from "./components/second-task/posts/Posts";
import {UserSelectComponent} from "./components/second-task/user-select-component/UserSelectComponent";


function App() {
    let [posts,setPosts] = useState([]);

    let catchUserPosts = (id) => {
        getPostsOfUsers(id)
            .then(value => setPosts([...value]))
    }
    return (
        <div className="App">
            <div>
                <FormOfCarsInfo/>
            </div>
            <div className={'option'}>
                <UserSelectComponent getPosts={catchUserPosts}/>
                <Posts posts={posts}/>
            </div>
        </div>

    );
}

export default App;
