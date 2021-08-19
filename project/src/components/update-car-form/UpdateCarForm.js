import './UpdateCarForm.css';
import {useState} from "react";
import {updateCar} from "../../services/car.service";

export function UpdateCarForm({cars}) {
    let [value, setValue] = useState({model: '', price: '', year: ''});

    let myForm = (e) => {
        let find=cars.find(value=>value.id=== +e.target.value);
        setValue(find)
    };
    let update=(e)=>{
        e.preventDefault();
       updateCar(value.id,value);
    };
    let formChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value});
    };
    return (
        <div className={'content'}>
            <form onChange={myForm} action="">
                <select name="" id="">
                    {
                        cars.map(value => <option value={value.id}>{value.model}</option>)
                    }
                </select>
            </form>
            <form onSubmit={update} action="">
                <input name={'model'} type="text" value={value.model}  onChange={formChange} placeholder={'Model'}/>
                <input name={'price'} type="number" value={value.price} onChange={formChange} placeholder={'Price'}/>
                <input name={'year'} type="number" value={value.year} onChange={formChange} placeholder={'Year'}/>
                <button>Update</button>
            </form>
            <div>
                <h1>Your updated car</h1>
                <h4>Model:{value.model}</h4>
                <h4>Price:{value.price}</h4>
                <h4> Year:{value.year}</h4>
            </div>
        </div>
    )
}