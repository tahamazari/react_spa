import {CHANGE_TEXT} from '../actions/types';

const initialState = {
    check: "test",
    text: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
            break
        default:
            return state
    }
}