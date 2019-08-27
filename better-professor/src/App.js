import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
import Login from "./components/Login"
import PrivateRoute from "./utilities/PrivateRoute"
import Registration from "./components/Registration"
import StudentList from "./components/StudentList"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route path="/registration" component={Registration} />
        <PrivateRoute path="/protected" component={StudentList} />
      </div>
    </Router>
  )
}

export default App
