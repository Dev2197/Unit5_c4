import { legacy_createStore,applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from 'redux-thunk'
import { LoginReducer } from "./Login/reducer";
import { OrderReducer } from "./Orders/reducer";

const rootReducer = combineReducers({
    Login : LoginReducer,
    Orders: OrderReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));