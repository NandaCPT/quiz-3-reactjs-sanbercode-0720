import React from "react";
import './css/login.css'
import { login } from './context/token';

const LoginPage = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('/editor');
    }
    
      return (
        <div>
          <title>Card</title>
          <div id="card">
            <div id="card-content">
              <div id="card-title">
                <h2>LOGIN</h2>
                <div className="underline-title" />
              </div>
              <form method="post" className="form">
                <label htmlFor="user-email" style={{paddingTop: '13px'}}>
                  &nbsp;Email
                </label>
                <input id="user-email" className="form-content" type="email" name="email" autoComplete="on" required />
                <div className="form-border" />
                <label htmlFor="user-password" style={{paddingTop: '22px'}}>&nbsp;Password
                </label>
                <input id="user-password" className="form-content" type="password" name="password" required />
                <div className="form-border" />
                <button id="submit-btn" onClick={() => handleLogin()}>Click here to log in</button>
              </form>
            </div>
          </div>
        </div>
      );
    }

  
  export default LoginPage;