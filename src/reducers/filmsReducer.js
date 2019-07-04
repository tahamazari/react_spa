const initialState = {
    allFilms: [],
    averageRatings: []
}

export default function(state = initialState, action){
    switch(action.type){
        case "GET_FILMS":
            return {
                ...state,
                allFilms: action.payload,
            }
            break
        case "AVERAGE_RATINGS":
            return {
                ...state,
                averageRatings: state.averageRatings.concat(action.payload)
            }
        default:
            return state
    }
}


