import React from "react"
import "./App.css"
import Login from "./components/Login"
import PrivateRoute from "./utilities/PrivateRoute"
import { Route, BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        <PrivateRoute path="/protected" />
      </div>
    </Router>
  )
}

export default App
