import React, { useEffect, useState } from 'react'
import letoImg from '../../assets/leto.jpg'
import zimaImg from '../../assets/zima.jpg'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setIsLoadingTC } from '../../bll/appReducer'
import { getCurrentWeatherTC } from '../../bll/weatherReducer'
import { Form } from '../form/Form'
import humidity from '../../assets/humidity.png'
import wind from '../../assets/wind.png'
import minTemp from '../../assets/minTemp.png'
import maxTemp from '../../assets/maxTemp.png'

export const WeatherApp = () => {
  const weather = useAppSelector((state) => state.weatherReducer)
  let [cityName, setCityName] = useState('')
  const dispatch = useAppDispatch()

  const getCurrentWeather = async (e: any) => {
    e.preventDefault()
    dispatch(setIsLoadingTC(true))
    const city = cityName === '' ? 'London' : cityName
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f56a8950eaa1448bf0e4dd0a329053a9&units=metric`,
    )
    const data = await api_url.json()
    dispatch(getCurrentWeatherTC(data))
    dispatch(setIsLoadingTC(false))
    console.log(data)
  }

  return (
    <div>
      <Form getCurrentWeather={getCurrentWeather} setCityName={setCityName} />
      <div className="container">
        <div className="upper-data">
          {weather.main.temp > 10 ? (
            <img src={letoImg} alt="leto" />
          ) : (
            <img src={zimaImg} alt="zima" />
          )}

          {/*  <img src={zimaImg} alt="zima" /> */}
          <div className="weather-data">
            <div className="location">{weather.name ? weather.name : '-'}</div>
            <div className="temperature">
              {weather.main.temp ? weather.main.temp : '-'}&#8451;
            </div>
          </div>
        </div>
        <div className="lower-data">
          <div className="more-info-label">More information</div>
          <div className="more-info-container">
            <div className="info-block">
              <div className="info-block-label">
                <img src={minTemp} alt="minTemp" />
                <span>min</span>
              </div>
              <div className="info-block-value">
                {weather.main.temp_min ? weather.main.temp_min : '-'}&#8451;
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-label">
                <img src={maxTemp} alt="maxTemp" />
                <span>max</span>
              </div>
              <div className="info-block-value">
                {weather.main.temp_max ? weather.main.temp_max : '-'}&#8451;
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-label">
                <img src={humidity} alt="humidity" />
                <span>humidity</span>
              </div>
              <div className="info-block-value">
                {weather.main.humidity ? weather.main.humidity : '-'}%
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-label">
                <img src={wind} alt="wind" />
                <span>wind</span>
              </div>
              <div className="info-block-value">
                {weather.wind.speed ? weather.wind.speed : '-'}km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
