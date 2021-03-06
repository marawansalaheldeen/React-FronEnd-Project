import React from 'react';
import {BrowserRouter as Router , Route,Switch, Redirect} from 'react-router-dom';
import './App.css';
import Users from './user/pages/Users';
import Newplace from './places/pages/NewPlace';
function App() {
  return(
   
      <Router>
         <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places" exact>
          <Newplace />
        </Route>
        <Redirect to="/" />
        </Switch>
    </Router>
      
   
  );
}

export default App;
