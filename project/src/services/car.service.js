const postCars = (car) => {
    return fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

const getCars = () => {
    return fetch('http://195.72.146.25/api/v1/cars')
        .then((response) => response.json())
}

const deleteCar=(id)=>{
    return fetch(`http://195.72.146.25/api/v1/cars/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}

const editCar=(id,info)=>{
    fetch(`http://195.72.146.25/api/v1/cars/${id}`, {
        method: 'PUT',
        body: JSON.stringify(info),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
export {postCars, getCars,deleteCar,editCar};