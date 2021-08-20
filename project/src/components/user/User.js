import {
  Link
} from "react-router-dom";
import "./User.css";

export function User({oneUser:{id,name},url}){
    return(
        <div className={'oneUser'}>
            <h4>{id}-{name}</h4>
            <Link to={url+'/'+id}><button>Details</button></Link>
        </div>
    )
}