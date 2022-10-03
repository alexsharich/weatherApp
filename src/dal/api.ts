import axios from 'axios'

const instance = axios.create({
  baseURL:'https://api.openweathermap.org/data/2.5/weather?q=London&appid=f56a8950eaa1448bf0e4dd0a329053a9',
  withCredentials:true
})
export const weatherApi = {
getWeatherInLondon(){
  return instance.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=London&appid=f56a8950eaa1448bf0e4dd0a329053a9')
}
}
