import './App.css';
import {FormOfCarsInfo} from "./components/form-of-cars-info/FormOfCarsInfo";
import {Cars} from "./components/cars/Cars";


function App() {
    return (
        <div className="App">
            <FormOfCarsInfo/>
            <Cars/>
        </div>
    );
}

export default App;
