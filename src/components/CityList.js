import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'


const CityList = () => {
    const {cityList, selectedCity, setSelectedCity} = useContext(WeatherContext)

    const handleChange = (e) => {
        e.preventDefault()
        const selected = e.target.value
        setSelectedCity( selected )
    }

    const keyValue = new Date().getTime()
    console.log(selectedCity);


    return (
        <div>
                <select onChange={handleChange} name="Cities" id="cities">
                <option>{selectedCity}</option>
                    {cityList.map(city => (
                        <option value={city}>{city}</option>
                    ))}
                </select>
        </div>
    )
}

export default CityList
