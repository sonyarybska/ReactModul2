import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import {User} from "../user/User";

export function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(data => setUsers([...data]))
    }, []);
    return (
        <div>

            {
                users.map(value => <User key={value.id} oneUser={value}/>)
            }
        </div>
    )
}