export function Post({onePost}){
    let {id,title}=onePost
    return(
        <div>
            {id}-{title}
        </div>
    )
}