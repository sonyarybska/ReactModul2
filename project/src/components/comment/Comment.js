export function Comment({oneComment:{id,body}}){
    return(
        <div>
            <h3>{id}-{body}</h3>
        </div>
    )
}