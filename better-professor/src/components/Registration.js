import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { register } from '../actions'

const Registration = props => {
    let token = localStorage.getItem('token');
        if (token) {
            props.history.push('/')
        } 
    const [newUser, setNewUser] = useState({name: '',username: '', email:'', password:''})
    const [userNameErrors, setUserNameErrors] = useState("");
    const [passwordErrors, setPasswordErrors] = useState("");

    const defaultUser = {
        username: "",
        password: ""
    };

    const validateForm = () => {
        let valid = true;

        if (newUser.username.length === 0 || userNameErrors.length > 0) {
        valid = false;
        setUserNameErrors("Username must have at least 3 characters");
        }

        if (newUser.password.length === 0 || passwordErrors.length > 0) {
        valid = false;
        setPasswordErrors("Password must have at least 6 characters");
        }

        return valid;
    };

    const handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;

        let userNameError = userNameErrors;
        let passwordError = passwordErrors;

        switch (name) {
        case "username":
            userNameError =
            value.length < 3 ? "Username must have at least 3 characters" : "";
            break;
        case "password":
            passwordError =
            value.length < 6 ? "Password must have at least 6 characters" : "";
            break;
        default:
            break;
    }
    setUserNameErrors(userNameError);
    setPasswordErrors(passwordError);

    setNewUser({ ...newUser, [name]: value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Valid Form")
            props.register(props.history, newUser)
            resetForm()
        } else {
            console.log("Invalid Form")
        }
    }
    const resetForm = () => {
        setNewUser(defaultUser);
      };
    
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

const mapStateToProps = state => ({
    isRegistering: state.isRegistering,
    error: state.error
})
export default withRouter(
    connect(mapStateToProps,
    { register }
  )(Registration)
)    