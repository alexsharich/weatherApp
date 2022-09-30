import React from 'react'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../../bll/store'

export const WeatherInformation =()=> {

  let weather = useSelector<AppRootStateType,any>(state=>state.weatherReducer.weather)

  return (
    <div><h2>{weather[0].description}</h2></div>
  )
}
