import './App.css';
import {Counter} from "./components/counter/Counter";

//////стоврити об'єкт {a:0,b:0,c:0}
// // // Стоврити 6 кнопок.
// // // по дві на кожен з параметрів об'єкту.
// // // одна кнопка збільшує значення , інша зменшує
// // // логіку реалізувати через reducer

function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

export default App;
