import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Logo from "../images/Logo.png"
import styled from "styled-components"

export const LogIn = styled.button`
  border-radius: 15px;
  padding: 25px;
  background-color: #619800;
  color: black;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.4);
  border: none;
  justify-content: center;
  margin: 15px;
  color: white;
  font-size: 1.2rem;
`
export const SignUp = styled.button`
  border-radius: 15px;
  padding: 25px 150px;
  background-color: #619800;
  color: black;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.4);
  border: none;
  justify-content: center;
  margin: 15px;
  color: white;
  font-size: 1.2rem;
`
export const BigDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid #619800;
  width: 65%;
  height: 55%;
  margin: 50px auto;
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

export const Input = styled.input`
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
      .then(response => {
        console.log(response)
        localStorage.setItem("token", response.data.token)
        props.history.push("/protected")
      })
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
          <LogIn>Log In</LogIn>
          <Link to="/registration">
            <SignUp>Sign Up</SignUp>
          </Link>
        </Form>
      </BigDiv>
    </>
  )
}

export default Login
