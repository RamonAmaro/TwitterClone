import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css'
import Logo from '../assets/twitterLogo.png'

function Login() {
    const [inputValue, setInputValue] = useState('')
    const history = useHistory();

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.length) return;
        localStorage.setItem('username', inputValue)
        history.push('/timeline')
    }
    return (
        <div className="login-wrapper">
            <img src={Logo} alt=".." style={{ width: '40px', height: '40px' }} />
            <form onSubmit={handleSubmit}>
                <input name="user" value={inputValue}
                    placeholder="nome de usuario"
                    onChange={handleInputChange} />
                <button type="submit"> Entrar </button>
            </form>
        </div>
    )
}

export default Login;