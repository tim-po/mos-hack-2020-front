import React from 'react';
import './login.scss';

const Login = () => {
    return (
        <div className={"container_for_tima"}>
            <div className={"login_container"}>
                <div className={"login_form"}>
                    <div className={"login_header"}>Добро пожаловать</div>
                    <div className={"login"}>
                        <div className={"login_text"}>Логин</div>
                        <input type={"text"} className={"input_login"}/>
                    </div>
                    <div className={"password"}>
                        <div className={"password_text"}>Пароль</div>
                        <input type={"text"}className={"input_password"}/>
                    </div>
                    <div className={"registration"}>Зарегистрироваться</div>
                    <button className={"login_button"}>Войти</button>
                </div>
            </div>
        </div>
    )
}

export default Login;