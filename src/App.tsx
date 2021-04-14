import React from 'react';
import './App.css';
import Login from './components/login/login';
import {IAuthService} from './service/auth_service';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Maker from './components/maker/maker';

type PropTypes = {
  authService: IAuthService
}

function App({authService}:PropTypes) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
