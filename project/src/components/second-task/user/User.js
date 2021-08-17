export function User({oneUser: {name,id}}) {

    return (
        <div>
            <option value={id}>{name}</option>
        </div>
    )
}