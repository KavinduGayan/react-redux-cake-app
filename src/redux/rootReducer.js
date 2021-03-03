import { combineReducers } from 'redux';
import sandwitchReducer from '../component/sandwitch/sandWitchReducer';
import cakeReducer from "./cakeReducer";

const rootReducer = combineReducers({
    cakeReducer,
    sandwitchReducer   
}) 

export default rootReducer