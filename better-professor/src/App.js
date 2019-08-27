import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css"
import Login from "./components/Login"

import PrivateRoute from "./utilities/privateRoute"
import Registration from './components/Registration'





function App() {
  return (
    <Router>
      <div className="App">
        <header>
          
        </header>
        
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route path="/registration" component={Registration} />
        <PrivateRoute path="/protected" />
      </div>
    </Router>
  )
}

export default App
