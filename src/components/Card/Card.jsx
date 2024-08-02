import React from 'react'
import "./card.css"
import { useWeather } from '../../context/weather'
const Card = () => {
    const {city, temp, data} = useWeather()
    return (
        <div className='cardContainer'>
            <div className='card'>
                <div className="icon">
                    <li className='cloud'>&#9729;</li>
                    <li className="sun">&#9728;</li>

                </div>
                {data? (<div>
                <h2 className="deg">{temp? `${temp}℃`: "No Data Found"}</h2>
                <p className='city'>{data.name}</p>
                <p>{data.weather[0].description}</p>
                </div>) : (<></>)}
                
            </div>
        </div>
    )
}

export default Card
