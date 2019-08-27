import axios from 'axios'
import axiosWithAuth from '../utilities/axiosWithAuth'

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = (history, credentials) => dispatch => {
    console.log(credentials)
    dispatch({
        type: REGISTER_START
    });
    axios
        .post(`https://better-prof-app.herokuapp.com/api/professors/register`, credentials)
        .then(response => {
            console.log(response)
            dispatch({
                type: REGISTER_SUCCESS
            })
            history.push("/")
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: REGISTER_FAILURE,
                payload: 'Error registering user. Please try again.'
            })
        })
}