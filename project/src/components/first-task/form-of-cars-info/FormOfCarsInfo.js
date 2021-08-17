import { useEffect, useState} from "react";
import {editCar, getCars, postCars} from "../../../services/car.service";
import './FormOfCarsInfo.css';
import {Cars} from "../cars/Cars";


export function FormOfCarsInfo() {
    let [value, setValue] = useState({model: '', price: '', year: ''});
    let [err, setErr] = useState(['no errors'])
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars()
            .then(value => setCars([...value]))
    }, [cars]);

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

    let edit = (model, price, year, id) => {
        setValue({model: model, price: price, year: year,id:id})
    }

    let update = () => {
        editCar(value.id,value)
    };

    return (
        <div>
            <div className={'content'}>
                <form onSubmit={myForm}>
                    <input name={'model'} value={value.model} placeholder={'Model'} onChange={formChange} type="text"/>
                    <input name={'price'} value={value.price} placeholder={'Price'} onChange={formChange} type="number"/>
                    <input name={'year'} value={value.year} placeholder={'Year'} onChange={formChange} type="number"/>
                    <button>Save</button>
                </form>
                <button onClick={update}>Update</button>
            </div>
            <div className={'error-box'}>
                {err.map(value => <p>{value}</p>)}
            </div>
            {
                <Cars cars={cars} edit={edit}/>
            }

        </div>
    )
}