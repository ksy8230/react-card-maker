import React, { SyntheticEvent } from 'react';
import { IAuthService } from '../../service/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';

type PropTypes = {
    authService: IAuthService
}

const Login = ({authService}:PropTypes) => {
    const onLogin = (event: SyntheticEvent) =>  {
        authService
            .login(event.currentTarget.textContent)
            .then(console.log);
    }
    return (
        <div>
            <Header onLogout={() => null} />
            <section>
                <h1>Login</h1>
                <ul>
                    <li><button onClick={onLogin}>Google</button></li>
                    <li><button onClick={onLogin}>Github</button></li>
                </ul>
            </section>
            <Footer />
        </div>
    );
};

export default Login;