import React, { useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import Logo from "../images/Logo.png"
import styled from "styled-components"

export const Submit = styled.button`
  border-radius: 15px;
  padding: 25px;
  background-color: #629800;
  color: black;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.4);
  border: none;
  justify-content: center;
`
export const BigDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid #629800;
  width: 65%;
  height: 500px;
  margin: 50px auto 0 auto;
  background: white;
`
 
export const Image = styled.img`
  width: 45%;
  height: auto;
  margin-bottom: 20px;
`
 
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export  const Input = styled.input`
  margin-bottom: 40px;
  margin-left: 20px;
`

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "jsmith",
    password: "pass"
  })
  const handleChanger = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post(
        "https://better-prof-app.herokuapp.com/api/professors/login",
        credentials
      )
      .then(
        response => (
          localStorage.setItem("token", response.data.payload),
          props.history.push("/protected")
        )
      )
      .catch(error => console.log("Failured Login", error))
    console.log(credentials)
  }
  return (
    <>
      <BigDiv>
        <Image src={Logo} alt="It's our logo!" />
        <Form onSubmit={handleSubmit}>
          <label>
            Username
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={credentials.username}
              onChange={handleChanger}
              required
            />
          </label>
          <label>
            Password
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChanger}
              required
            />
          </label>
          <Submit>Submit</Submit>
        </Form>
      </BigDiv>
      <h4>Don't have an accont? <Link to="/registration">Sign up</Link></h4>
    </>
  )
}

export default Login
