import React from "react"
import ReactDOM from "react-dom"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter } from "react-router-dom"
import { logger } from "redux-logger"
import { reducer } from "./reducers"

import "./index.css"
import App from "./App"
import "./interceptors.js"

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
