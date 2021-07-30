import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Question from './components/Question';
import Error from './components/Error';
import Create from './components/Create';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/question/" exact component={Question}/>
        <Route path="/question/:slug" exact component={Question}/>
        <Route path="/create/" exact component={Create}/>
        <Route path="/" component={Error}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
