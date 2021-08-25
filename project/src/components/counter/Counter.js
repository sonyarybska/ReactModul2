
//є об'єкт, значення якого 0
// Стоврити 2 кнопки.
// Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через redcer

import {useReducer} from "react";

export function Counter(){
    let reducer=(state,action)=>{
        switch (action.type){
            case 'INC_BY_10':
                return {...state,obj:state.obj+10}
            case 'DEC_BY_2':
                return {...state,obj: state.obj-2}
            default:
                return {...state}
        }
    }
    let [{obj},dispatch]=useReducer(reducer,{obj:0});

    return(
        <div>
            {obj}
            <button onClick={()=>dispatch({type:'INC_BY_10'})}>Increase by 10</button>
            <button onClick={()=>dispatch({type:'DEC_BY_2'})}>Decrease by 2</button>
        </div>
    )
}