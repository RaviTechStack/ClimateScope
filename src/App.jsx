import React from 'react'
import "./components/NavBar/Nav.css"
import "./App.css"
import Nav from './components/NavBar/Nav'
import Input from './components/Input/Input'
import Card from './components/Card/Card'
import Loader from './components/Loader'
import { useWeather } from './context/weather'

const App = () => {
  const {loading} = useWeather()
  return (
    <div className='loader-tester'>
      <Nav />
    <Input />
    <Card />
    {loading? <Loader />: <></>}
    
    </div>
  )
}

export default App
