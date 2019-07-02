import {combineReducers} from 'redux';
import testReducer from './testReducer';
import userReducer from './userReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    user: userReducer,
    test: testReducer,
    form: formReducer
})