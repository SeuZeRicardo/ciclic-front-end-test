import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Result from '../Pages/Result'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
