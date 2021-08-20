
import "./User.css";

export function User({oneUser:{id,name},url,history}){
    let toNavigate=()=>{
        history.push(url+'/'+id)
    };
    return(
        <div className={'oneUser'}>
            <h4>{id}-{name}</h4>
            <button onClick={toNavigate}>Details</button>
        </div>
    )
}