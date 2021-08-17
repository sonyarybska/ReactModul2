import {Car} from "../car/Car";

export function Cars({cars,edit}){
    return(
        <div>
            {
                cars.map(value=><Car key={value.id} edit={edit} oneCar={value}/>)
            }
        </div>
    )
}