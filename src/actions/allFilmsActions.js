export const getFilms = (token) => dispatch => {
    fetch('http://localhost:3000/api/films', { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'Bearer '+ token, 
        }), 
    })
    .then(response => response.json())
    .then(function(data){
        dispatch(allFilms(data))
        console.log(data)
        return data
    })
}

const allFilms = (data) => dispatch => {
    const action = {
        type: "GET_FILMS",
        payload: data
    }
    dispatch(action)
}