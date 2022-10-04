import { Dispatch } from "redux"
import { AppThunk } from "./store"

const initialState:InitialStateType = {
  isLoading:false
}
type InitialStateType = {
  isLoading:boolean
}
export type AppReducerActionType = SetIsLoadingActionType

export const appReducer = (state:InitialStateType=initialState,action:AppReducerActionType):InitialStateType=>{
switch(action.type){
  case 'SET-ISLOADING':
    return {
      ...state,isLoading:action.value
    }
    default: 
    return state
}
}

type SetIsLoadingActionType = {
  type:'SET-ISLOADING'
  value:boolean
}
const setIsLoadingAC = (value:boolean):SetIsLoadingActionType=>{
  return {
    type:'SET-ISLOADING',
    value
  }
}
export const setIsLoadingTC = (value:boolean):AppThunk=>{
  return (dispatch)=>{
    dispatch(setIsLoadingAC(value))
  }
}