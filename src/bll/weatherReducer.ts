import { Dispatch } from "redux"
import { AppThunk } from "./store"

const initialState = {
  coord: {
    lon: 0,
    lat: 0
  },
  weather: [
    {
      id: 0,
      main: 'main',
      description: "moderate weather",
      icon: "10d"
    }
  ],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0
  },
  rain: {
    ['1h']: 0
  },
  clouds: {
    all: 0
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: 'country',
    sunrise: 0,
    sunset: 0
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0
}
type InitialStateType = {
  coord: {
    lon: number
    lat: number
  },
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level:number
  },
  visibility: number
  wind: {
    speed: number
    deg: number
    gust:number
  },
  rain: {
    ['1h']:number
  },
  clouds: {
    all: number
  },
  dt: number
  sys: {
    type: number
    id: number
    country: string,
    sunrise: number
    sunset: number
  },
  timezone: number
  id: number
  name: string
  cod: number
}
export type WeatherReducerActionType = GetCurrentWeatherActionType

export const weatherReducer = (state:any=initialState,action:WeatherReducerActionType):InitialStateType=>{
  switch (action.type) {
    case 'GET-CURRENT-WEATHER':
      return {
        ...state,
        ...action.payload
        
      }
    default :
     return state  
  }
}
type GetCurrentWeatherActionType = {
  type:'GET-CURRENT-WEATHER'
  payload:any
}
const getCurrenWeatherAC = (payload:any):GetCurrentWeatherActionType=>{
  return {
    type: 'GET-CURRENT-WEATHER',
    payload
  }
}
export const getCurrentWeatherTC = (payload:any):AppThunk=>{
  return (dispatch)=>{
    dispatch(getCurrenWeatherAC(payload))
  }
}