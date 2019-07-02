import {combineReducers} from 'redux';
import testReducer from './testReducer';
import userReducer from './userReducer';
import registerReducer from './registerReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    user: userReducer,
    register: registerReducer,
    test: testReducer,
    form: formReducer
})