import React from 'react';
import './App.css';
import Login from './components/login/login';
import {IAuthService} from './service/auth_service';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Maker from './components/maker/maker';

type PropTypes = {
  authService: IAuthService
  FileInput: React.FunctionComponent
  CardRepository: any
}

function App({FileInput, authService, CardRepository}:PropTypes) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker FileInput={FileInput} authService={authService} CardRepository={CardRepository} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
