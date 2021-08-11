export function User({oneUser:{id,name,username}}){
    return(
        <div>
            <h3>{id}-{name}-{username}</h3>
        </div>
    )
}