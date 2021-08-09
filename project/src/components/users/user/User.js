import {Address} from "./address/Address";
import './User.css';

export function User({oneUser}){
    let {id,name,username,email,address}=oneUser;
    let addressArray=[address];
    return(
        <div className={'users'}>
          <h1>{id}-{name}-{username}</h1>
          <h2>{email}</h2>
            {
               addressArray.map(value =><Address address={value}/>)
            }
        </div>
    )
}