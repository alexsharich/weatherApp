const initialState = {

}
type InitialStateType = {

}
type ActionType = GetCurrentWeatherActionType

const weatherReducer = (state:InitialStateType,action:any):InitialStateType=>{
  switch (action.type) {
    case 'GET-CURRENT-WEATHER':
      return state
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
const getCurrentWeatherTC = (payload:any)=>{
  return (dispatch:any)=>{
    dispatch(getCurrenWeatherAC(payload))
  }
}