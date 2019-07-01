import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {compose} from 'redux';
import rootReducer from '../reducers/rootReducer.js';

const initialState = {}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;