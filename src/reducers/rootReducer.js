import {combineReducers} from 'redux';
import testReducer from './testReducer';
import userReducer from './userReducer';
import registerReducer from './registerReducer';
import filmsReducer from './filmsReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    user: userReducer,
    register: registerReducer,
    films: filmsReducer,
    test: testReducer,
    form: formReducer
})