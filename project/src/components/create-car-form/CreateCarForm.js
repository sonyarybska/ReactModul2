import {useState} from "react";
import {postCar} from "../../services/car.service";
import './CreateCarForm.css'

export function CreateCarForm(){
    let [value,setValue] = useState({model:'',price:'',year:''});

    let myForm=(e)=>{
        e.preventDefault();
        postCar(value);
    };
    let formChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value});
    };
    return(
        <div className={'form'}>
            <form onSubmit={myForm} action="">
                <input name={'model'} type="text"   value={value.model}  onChange={formChange}  placeholder={'Model'}/>
                <input name={'price'} type="number" value={value.price} onChange={formChange}  placeholder={'Price'}/>
                <input name={'year'} type="number"  value={value.year} onChange={formChange}  placeholder={'Year'}/>
                <button>Save</button>
            </form>
            <div>
                <h1>Your new car</h1>
                <h4>Model:{value.model}</h4>
               <h4>Price:{value.price}</h4>
                <h4> Year:{value.year}</h4>

            </div>

        </div>
    )
}