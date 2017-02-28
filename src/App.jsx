import React, { Component } from 'react';
import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import News from './Routes/News/News'

const App = () => (
  <Router>
    <div className='App'>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Syanmil React</h2>
      </div>
      <ul>
        <li><Link to="/">News</Link></li>
        <li><Link to="/people">People</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={News}/>
      <Route path="/people" />
    </div>
  </Router>
)

export default App
