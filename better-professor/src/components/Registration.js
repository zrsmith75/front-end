import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { axiosWithAuth } from '../utilities/axiosWithAuth'
import axios from 'axios'

const Registration = () => {
    const [newUser, setNawUser] = useState({name: '',username: '', email:'', password:''})

    const handleChange = e => {
        // console.log(newUser)
        setNawUser({...newUser, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log('its work')
        // axios
        // .post('https://better-prof-app.herokuapp.com/api/professors/register', {
        //     name: '',
        //     username: '', 
        //     email:'', 
        //     password:''
        // })
        // .then(res => {
        //     console.log(newUser)
        // })
        // .catch(err => console.log(err))
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                value={newUser.name}
            /> <br/>
            <input 
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
                value={newUser.username}
            /> <br/>
             <input 
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
                value={newUser.email}
            /><br/>
             <input 
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={newUser.password}
            /><br/>
            
            <button type="submit">Sign up</button><br/>
            <Link to="/">Already have an account</Link>
        </form>
        </>
    ) 
}

export default Registration;