import { applyMiddleware, combineReducers, } from "redux";
import { legacy_createStore as createStore } from 'redux'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { appReducer, AppReducerActionType } from "./appReducer";
import { weatherReducer, WeatherReducerActionType } from "./weatherReducer";

const rootReducer = combineReducers({
    weatherReducer,
    appReducer
})

export type ActionsType = AppReducerActionType | WeatherReducerActionType
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, ActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionsType>