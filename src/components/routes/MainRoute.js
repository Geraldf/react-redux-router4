import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home';
//import Todos from '../Todos';
import StatusComponent from '../StatusComponent';
import ProcessList from '../ListProcesses';


const MainRoute = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/processList" component={ProcessList} />
    <Route path="/status" component={StatusComponent} />
  </Switch>
)

export default MainRoute;
