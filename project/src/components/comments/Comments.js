
import {Comment} from "../comment/Comment";

export function Comments({comments}){

    return(
        <div>
            {
                comments.map(value => <Comment key={value.id} oneComment={value}/>)
            }
        </div>
    )
}