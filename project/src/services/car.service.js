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

export {postCars, getCars};