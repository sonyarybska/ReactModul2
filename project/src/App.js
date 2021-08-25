import './App.css';
import {Counter} from "./components/counter/Counter";

////є об'єкт, значення якого 0
// // Стоврити 2 кнопки.
// // Перша збільшує   значення на 10
// // Друга зменшує на 2.
// // Зміну стану та виведення реалізувати через reducer

function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    );
}

export default App;
