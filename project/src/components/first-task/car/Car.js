import {deleteCar} from "../../../services/car.service";
import './Car.css';
export function Car({edit,oneCar: {model, price, year, id}}) {


    return (
        <div className={'oneCar'}>
            <div className={'car-box'}>
                {model}-{price}-{year}-{id}
            </div>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <button onClick={()=>edit(model,price,year,id)}>Edit</button>
        </div>
    )
}