import history from '../history';

export const Login = (values) => dispatch => {
    const {email, password} = values
    fetch("http://localhost:3000/api/accounts/login", {
        method: "POST",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(function(response){ 
        return response.json()
    })
    .then(function(data){ 
        if(data.login){
            dispatch(getData(data)) 
            history.push('/dashboard')
        }
        else {
            dispatch(loginError(data))
        }
    })
    .catch(function(error){ 
        console.log(error) 
    })
}

export const getData = (data) => dispatch => {
    const action = {
        type: "GET_DATA",
        name: data.name,
        email: data.email,
        token: data.token
    }
    dispatch(action)
}

export const loginError = (data) => dispatch => {
    const action = {
        type: "LOGIN_ERROR",
        message: data.message
    }
    dispatch(action)
}