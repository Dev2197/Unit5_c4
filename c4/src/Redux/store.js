import { legacy_createStore,applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from 'redux-thunk'
import { LoginReducer } from "./Login/reducer";

const rootReducer = combineReducers({
    Login : LoginReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));