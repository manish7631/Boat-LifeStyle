import { combineReducers,  legacy_createStore, compose, applyMiddleware} from "redux";
import { reducer } from  "./appCart/reducer"
import AppReducer from "./Products/ProductReducer";
import thunk from "redux-thunk";

const oneReducer = combineReducers({reducer, AppReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(oneReducer, composeEnhancers(applyMiddleware( thunk)))

export {store}
 