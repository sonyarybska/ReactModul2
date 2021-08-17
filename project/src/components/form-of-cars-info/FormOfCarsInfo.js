import {useState} from "react";
import {postCars} from "../../services/car.service";

export function FormOfCarsInfo() {
    let [value, setValue] = useState({model: '', price: '', year: ''});
    let [err, setErr] = useState(['no errors'])

    let myForm = (e) => {
        e.preventDefault();
        let arr = [];
        postCars(value).then(json => {
            for (const item in json) {
                if (typeof json[item] === "object") {
                    arr.push(json[item])
                    setErr(arr.flat(1));
                } else {
                    setErr(['no errors']);
                }
            }
        })
    };


    let formChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    return (
        <div className={'content'}>
            <form onSubmit={myForm}>
                <input name={'model'} value={value.model} onChange={formChange} type="text"/>
                <input name={'price'} value={value.price} onChange={formChange} type="number"/>
                <input name={'year'} value={value.year} onChange={formChange} type="number"/>
                <button>Save</button>
            </form>

            <div className={'error-box'}>
                {err.map(value => <p>{value}</p>)}
            </div>
        </div>
    )
}