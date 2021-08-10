import {Address} from "./address/Address";
import {Company} from "./company/Company"
import './User.css';

export function User({oneUser}){
    let {id,name,username,email,address,phone,website,company}=oneUser;
    let addressArray=[address];
    let companyArray=[company];
    return(
        <div className={'users'}>
          <h1>{id}-{name}-{username}</h1>
          <h2>{email}</h2>
            <h2>{phone}</h2>
            <h2>{website}</h2>
            {
               addressArray.map(value =><Address address={value}/>)
            }
            {
               companyArray.map(value => <Company company={value}/>)
            }
        </div>
    )
}