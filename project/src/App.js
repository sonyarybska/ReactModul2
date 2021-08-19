import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Cars} from "./components/cars/Cars";
import {CreateCarForm} from "./components/create-car-form/CreateCarForm";
import {UpdateCarForm} from "./components/update-car-form/UpdateCarForm";
import {useEffect, useState} from "react";
import {getCars} from "./services/car.service";

function App() {
    let [cars,setCars] = useState([]);

    useEffect(()=>{
        getCars()
            .then(value => setCars([...value]))
    },[cars]);

    return (
        <Router>
            <div className="App">
                <div className="header">
                    <Link to={'/cars'}><h1>Cars</h1></Link>
                    <Link to={'/create-car'}><h1>Create car</h1></Link>
                    <Link to={'/update-car'}><h1>Update car</h1></Link>
                </div>
                <Switch>
                    <Route path={'/cars'} render={()=><Cars cars={cars}/>}/>
                    <Route path={'/create-car'} component={CreateCarForm}/>
                    <Route path={'/update-car'} render={()=><UpdateCarForm cars={cars}/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
