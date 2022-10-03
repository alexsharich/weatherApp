const initialState:InitialStateType = {
  isLoading:false
}
type InitialStateType = {
  isLoading:boolean
}
type ActionType = SetIsLoadingActionType
export const appReducer = (state:InitialStateType=initialState,action:ActionType):InitialStateType=>{
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
export const setIsLoadingTC = (value:boolean):any=>{
  return (dispatch:any)=>{
    dispatch(setIsLoadingAC(value))
  }
}