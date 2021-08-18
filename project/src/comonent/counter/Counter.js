import {useState} from "react";

export function Counter(){
    let [number,setNumber]=useState(0)

   let plus=()=>{
       setNumber(++number)
   }
   let minus=()=>{
       setNumber( --number);
   }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}