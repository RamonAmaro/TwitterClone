import React from 'react';
import './Login.css'
import Logo from '../assets/twitterLogo.png'

// import { Container } from './styles';

function Login() {
    return (
        <div className="login-wrapper">
            <img src={Logo} alt=".." style={{ width: '40px', height: '40px' }} />
            <form>
                <input placeholder="nome de usuario" />
                <button type="submit"> Entrar  </button>
            </form>
        </div>
    )
}

export default Login;