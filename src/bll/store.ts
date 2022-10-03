import { applyMiddleware, combineReducers, createStore } from "redux";
import  thunkMiddleware  from "redux-thunk";
import { appReducer } from "./appReducer";
import { weatherReducer } from "./weatherReducer";

const rootReducer = combineReducers({
weatherReducer,
appReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))