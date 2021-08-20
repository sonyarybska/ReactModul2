import "./PostDetails.css";
export function PostDetails({location:{state}}) {
    return (
        <div className={'post-details'}>
            <p>ID:{state.id}</p>
            <p>TITLE:{state.title}</p>
            <p>BODY:{state.body}</p>
        </div>
    )
}