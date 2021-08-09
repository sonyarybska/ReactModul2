export function Geo({geo}){
    let {lat,lng}=geo;
    return(
        <div>
            <h4>Lat: {lat}</h4>
            <h4>Lng: {lng}</h4>
        </div>
    )
}