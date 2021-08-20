import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Posts} from "./components/posts/Posts";
import {Users} from "./components/users/Users";

function App() {
    return (
        <Router>
            <div className="App">
                <div className={'header'}>
                    <Link to={'/posts'}>Posts</Link>
                    <Link to={'/users'}>Users</Link>
                </div>
                <Switch>
                    <Route path={'/users'} render={(props)=><Users {...props}/>}/>
                    <Route path={'/posts'} render={(props)=><Posts {...props}/>}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
