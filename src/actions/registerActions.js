import history from '../history';

export const Register = (values) => dispatch => {
    const {name, email, password, password_match} = values
    if(password != password_match){
        dispatch(passwordMismatch("Passwords do not match!"))
    }
    else {
        fetch("https://immense-ridge-54213.herokuapp.com/api/accounts/sign_up", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        .then(function(response){ 
            console.log(response)
            return response.json()
        })
        .then(function(data){ 
            if(data.register){
                history.push('/')
            }
            else {
                dispatch(registerError(data))
            }
        })
        .catch(function(error){ 
            console.log(error) 
        })
    }
}

export const passwordMismatch = (data) => dispatch => {
    const action = {
        type: "PASSWORD_MISMATCH",
        message: data
    }
    dispatch(action)
}

export const registerError = (data) => dispatch => {
    const action = {
        type: "REGISTER_ERROR",
        message: data.message
    }
    dispatch(action)
}