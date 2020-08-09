import React, { Component } from 'react';
import { logout, isLogin } from './context/token';
import {Redirect} from 'react-router-dom';

class LogoutPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                <h1>LogoutPage</h1>

                {this.state.isLogin ? 
                    <button onClick={() => this.handleLogout()}>Klik Untuk Logout</button>
                    : <Redirect to="/login" />
                }
            </div>
        );
    }
}

export default LogoutPage;