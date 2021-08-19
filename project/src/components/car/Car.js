import './Car.css'
export function Car({oneCar: {model, price, year}}) {
    return (
        <div className={'oneCar'}>
            <h2>Model:<span>{model}</span></h2>
            <h2>Price:<span>{price}</span></h2>
            <h2>Year:<span>{year}</span></h2>
        </div>
    )
}