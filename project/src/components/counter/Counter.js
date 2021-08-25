////стоврити об'єкт {a:0,b:0,c:0}
// // Стоврити 6 кнопок.
// // по дві на кожен з параметрів об'єкту.
// // одна кнопка збільшує значення , інша зменшує
// // логіку реалізувати через reducer

import {useReducer} from "react";
import reducer from "../../reducers/reduce.counter";


export function Counter() {
    let [state, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

    let {a, b, c} = state;

    let arrayOfValues = [a, b, c];
    let arrayOfKeys = Object.keys(state);

    return (
        <div>
            {
                arrayOfValues.map((value, index) => {
                    return (
                        <div>
                            <h4>{value}</h4>
                            <button onClick={() => dispatch({type: 'INC', payload: arrayOfKeys[index]})}>+</button>
                            <button onClick={() => dispatch({type: 'DEC', payload: arrayOfKeys[index]})}>-</button>
                        </div>
                    )
                })
            }
        </div>
    )
}