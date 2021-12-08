import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'


const CityList = () => {

    const {cityName, setCity} = useContext(WeatherContext)
    console.log(cityName);
    return (
        <div>
            <h1>Weather test app</h1>
        </div>
    )
}

export default CityList
