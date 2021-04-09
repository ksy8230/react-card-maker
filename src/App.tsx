import React from 'react';
import './App.css';
import Login from './components/login/login';
import {IAuthService} from './service/auth_service';

type PropTypes = {
  authService: IAuthService
}

function App({authService}:PropTypes) {
  return (
    <div className="App">
      <Login authService={authService} />
    </div>
  );
}

export default App;
