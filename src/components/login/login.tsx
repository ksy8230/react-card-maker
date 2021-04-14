import React, { SyntheticEvent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { IAuthService } from '../../service/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';

type PropTypes = {
    authService: IAuthService
}
export type UserType = {
    uid: string
    [key:string]: any
}

const Login = ({authService}:PropTypes) => {
    const history = useHistory();
    const goToMaker = (userId: string) => {
        history.push({pathname:'/maker', state:{id: userId}});
    };
    const onLogin = (event: SyntheticEvent) =>  {
        authService
            .login(event.currentTarget.textContent)
            .then((data) => {
                if(data && data.user) {
                    goToMaker(data.user.uid)
                } 
            });
    };

    useEffect(() => {
        // 로그인 컴포넌트 마운트될 때마다 firebase의 인증상태 관찰자 함수 실행
        // 유저 있나 없나 체크
        authService.onAuthChange((user:any) => {
            user && goToMaker(user.uid);
        })
    });

    return (
        <div>
            <Header />
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