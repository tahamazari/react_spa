import {combineReducers} from 'redux';
import testReducer from './testReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    test: testReducer,
    form: formReducer
})