const initialState = {
    allFilms: [],
    averageRatings: [],
    currentFilm: ""
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
        case "ADD_FILM":
            return {
                ...state,
                allFilms: state.allFilms.concat(action.payload)
            }
        case "CURRENT_FILM":
            return {
                ...state,
                currentFilm: action.payload
            }
        default:
            return state
    }
}


