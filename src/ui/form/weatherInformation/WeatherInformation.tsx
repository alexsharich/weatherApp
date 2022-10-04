import { timeEnd } from 'console'
import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import s from './WeatherInformation.module.css'

export const WeatherInformation =()=> {

  let weather = useAppSelector(state=>state.weatherReducer)
  let isLoading = useAppSelector(state=>state.appReducer.isLoading)
  
  const correctTime = (value:number)=>{
    if(value != 0){
      const time = new Date(value * 1000)
      return  time.toLocaleTimeString()
    }
    return 0
  }

  return (
    <div className={s.container}>
      <div className={s.weatherInformationBlock}>
      <div>{
      isLoading 
      ? <h2 style={{margin:'0 auto' }}>Please, wait ...</h2>
      : <div>
        <h2>Weather</h2>
      <p>Current city: {weather.name}</p>
      <ul style={{listStyle:'none'}}>Temp: {weather.main.temp}
        <li> <p style={{color:'blue'}}>Min.temp: {weather.main.temp_min}</p> </li>
        <li> <p style={{color:'red'}}>Max.temp: {weather.main.temp_max}</p> </li>
      </ul>
      <p>Pressure: {weather.main.pressure}</p>
      <p>Sunrise: {correctTime(weather.sys.sunrise)}</p>
      <p>Sunset: {correctTime(weather.sys.sunset)}</p>
      </div> }
      
      </div>
      
      </div>
      </div>      
  )
}
