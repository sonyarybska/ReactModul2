import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import {Car} from "../car/Car";

export function Cars(){
    let [cars,setCars] = useState([]);

    useEffect(()=>{
        getCars()
            .then(value => setCars([...value]))
    },[cars])
    return(
        <div>
            {
                cars.map(value => <Car key={value.id} oneCar={value}/>)
            }
        </div>
    )
}