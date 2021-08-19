import {Car} from "../car/Car";
import './Cars.css';

export function Cars({cars}){


    return(
        <div className={'cars-box'}>
            {
                cars.map(value => <Car key={value.id} oneCar={value}/>)
            }
        </div>
    )
}