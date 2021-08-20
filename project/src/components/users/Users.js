import {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import {UserDetails} from "../user-details/UserDetails";
import {User} from "../user/User";
import {getUsers} from "../../services/user.service";
import "./Users.css"

export function Users(props){
    let {match: {url}} = props;
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(value => setUsers([...value]))
    }, [])

    return (
        <div className={'users'}>
            <div>
                {
                    users.map(value => <User key={value.id} url={url} oneUser={value}/>)
                }
            </div>
            <Route path={'/users/:id'} render={(props) => <UserDetails {...props}/>}/>
        </div>
    )
}