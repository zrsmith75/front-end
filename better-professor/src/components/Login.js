import React, { useState } from "react"
import axios from "axios"

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
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
      .post("EnterEndPoint", credentials)
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChanger}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChanger}
          required
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Login
