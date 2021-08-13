import './User.css'
export function User({userPosts,oneUser}){
    let {id,name,username}=oneUser
    return(
        <div className={'oneUser'}>
          <h4>{id}-{name}-{username}</h4>
            <button onClick={()=>userPosts(id)}>Details</button>
        </div>
    )
}