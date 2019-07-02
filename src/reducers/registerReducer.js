const initialState = {
    register_error: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case "PASSWORD_MISMATCH":
            return {
                ...state,
                register_error: action.message,
            }
            break
        case "REGISTER_ERROR":
            return {
                ...state,
                register_error: action.message,
            }
            break
        default:
            return state
    }
}


