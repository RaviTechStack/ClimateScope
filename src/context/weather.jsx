import React, {useContext, createContext, useState} from "react";

export const WeatherContext = createContext(null)

export const WeatherContextProvider = ({children}) =>{
    const [temp, setTemp] = useState(null)
    const [data, setdata] = useState(null)
    const [city, setcity] = useState("Mumbai")
    const [loading , setLoading] = useState(false)
    return(
    <WeatherContext.Provider value={{temp, setTemp,city, setcity, loading, setLoading, data , setdata}}>
        {children}
    </WeatherContext.Provider>

)}

export const useWeather= ()=>{
    return(useContext(WeatherContext))
}
