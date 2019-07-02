import {CHANGE_TEXT} from './types';

export const changeText = (e) => dispatch => {
    console.log(e.target.value);
    
    const action = {
        type: CHANGE_TEXT,
        text: e.target.value
    }
    dispatch(action)
}