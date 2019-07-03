const initialState = {
    allFilms: []
}

export default function(state = initialState, action){
    switch(action.type){
        case "GET_FILMS":
            return {
                ...state,
                allFilms: action.payload,
            }
            break
        default:
            return state
    }
}


