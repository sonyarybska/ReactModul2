import {useEffect, useState} from "react";
import {getUserById} from "../../services/user.service";
import './UserDetails.css'

export function UserDetails(props){
   let {match:{params:{id}}}=props;

   let [user,setUser] = useState({});

   useEffect(()=>{
       getUserById(id)
           .then(value => setUser({...value}))
   },[id])
    return(
        <div className={'user-details'}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    )
}