import React from 'react';
import { Switch, Link, Route } from "react-router-dom";
import IndexPage from './IndexPage';
import AboutPage from './AboutPage';
import logo from './css/logo.png';
import MovieListEditor from './MovieListEditor';
import PrivateRoute from './PrivateRoute';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';


const Routes = () => {

    return (
        <div>
        <header>
          <img src={logo} width="200px" alt="Logo" />
          <nav>
            <ul>
              <li><Link to = '/'> Home </Link> </li>
              <li><Link to = '/about'> About </Link> </li>
              <li><Link to = '/editor'> Editor </Link> </li>
              <li><Link to = '/LogoutPage'> Logout </Link> </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path='/about' component={AboutPage}></Route>
          <PrivateRoute path='/editor' component={MovieListEditor}></PrivateRoute>
          <Route path='/about' component={AboutPage}></Route>
          <Route path='/login' component={LoginPage}></Route>
          <Route path='/LogoutPage' component={LogoutPage}></Route>
          <Route path="/" component={IndexPage}/>
        </Switch>
        </div>

    ) 

}

export default Routes