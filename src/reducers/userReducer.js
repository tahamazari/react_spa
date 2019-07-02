const initialState = {
    name: "",
    email: "",
    token: "",
    login_error: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case "GET_DATA":
            return {
                ...state,
                name: action.name,
                email: action.email,
                token: action.token
            }
            break
        case "LOGIN_ERROR":
            return {
                ...state,
                login_error: action.message + "!"
            }
            break
        default:
            return state
    }
}