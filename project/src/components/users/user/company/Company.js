export function Company({company}) {
    let {name, catchPhrase, bs} = company
    return (
        <div>
            <h4>{name}-{catchPhrase}-{bs}</h4>
        </div>
    )
}