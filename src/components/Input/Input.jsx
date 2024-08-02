import React, { useEffect } from 'react'
import "./Input.css"
import { useWeather } from '../../context/weather'

const Input = () => {
  const {city, setTemp, setcity, setLoading, setdata} = useWeather()
useEffect(()=>{
  
  fetchWeather()
}, [])
  const fetchWeather = async() =>{
    
    setLoading(true)
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=hi&APPID=bf0340a22aa2f698969b329918ce8401`)
    const response = await request.json()
    console.log(response)
    if(response.cod === 200){
      setTemp(response.main.temp)
      setdata(response)
    }
    else{
      setTemp(null)
    }
    setLoading(false)
    
  }
  const changeValue = (e) =>{
    setcity(e.target.value)
  }
  const handelSubmit = (e) =>{
    e.preventDefault()
    fetchWeather()
  }
  return (
    <div className='Input-container'>
      <div className='inputsearch'>
        <form action="" onSubmit={handelSubmit}>
      <input type="text" value={city} onSubmit={fetchWeather} onChange={changeValue}/>
      <button type='submit' onClick={fetchWeather} >&#8594;</button>
      </form>
      </div>
      
    </div>
  )
}

export default Input
