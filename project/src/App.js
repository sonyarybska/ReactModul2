import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";

function App() {
    return (
        <div className="App">
            <Router>
                <Link to={'/users-page'}><h4>users</h4></Link>
                <Link to={'/posts-page'}><h4>posts</h4></Link>
                <Link to={'/comments-page'}><h4>comments</h4></Link>
                <Switch>
                    <Route path={'/users-page'} component={Users}/>
                    <Route path={'/posts-page'} component={Posts}/>
                    <Route path={'/comments-page'} component={Comments}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
