import {useEffect, useState} from "react";
import {getUsers} from "../../../services/user.service";



export function UserSelectComponent({getPosts}){
    let [users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers()
            .then(data=>setUsers([...data]))
    },[])

    let onSelect=(e)=>{
        getPosts(e.target.value)
    };
    return(
        <div>
            {
                <form action="">
                    <select name="user" onChange={onSelect}>
                        {
                            users.map(value => <option value={value.id}>{value.name}</option>)
                        }
                    </select>
                </form>

            }
        </div>
    )
}