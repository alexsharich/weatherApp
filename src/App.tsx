import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Form } from './ui/form/Form'
import { WeatherInformation } from './ui/form/weatherInformation/WeatherInformation'
import { getCurrentWeatherTC } from './bll/weatherReducer'
import { setIsLoadingTC } from './bll/appReducer'
import { useAppDispatch } from './app/hooks'
import { WeatherApp } from './ui/weatherApp/WeatherApp'

function App() {
  let [cityName, setCityName] = useState('')
  const dispatch = useAppDispatch()

  const getCurrentWeather = async (e: any) => {
    e.preventDefault()
    dispatch(setIsLoadingTC(true))
    const city = cityName === '' ? 'London' : cityName
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f56a8950eaa1448bf0e4dd0a329053a9units=metric`,
    )
    const data = await api_url.json()
    dispatch(getCurrentWeatherTC(data))
    dispatch(setIsLoadingTC(false))
    console.log(data)
  }

  return (
    <div className="App">
      {/*  <WeatherInformation /> */}
      <WeatherApp />
    </div>
  )
}

export default App
