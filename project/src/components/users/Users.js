import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";

export function Users(){
    let [users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers()
            .then(value => setUsers([...value]))
    },[])
    return(
        <div>
            {
                users.map(value => <h4>{value.name}</h4>)
            }
        </div>
    )
}