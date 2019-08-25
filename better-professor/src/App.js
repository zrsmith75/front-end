import React from "react"
import "./App.css"
import Login from "./components/Login"
import PrivateRoute from "./utilities/PrivateRoute"

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={props => <Login {...props} />} />
      <PrivateRoute path="/protected" component={SOMETHING} />
    </div>
  )
}

export default App
