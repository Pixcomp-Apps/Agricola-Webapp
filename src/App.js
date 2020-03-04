import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*import logo from './logo.svg';*/
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Components/Login/login.js';
import Shipments from './Components/Shipments/shipments.js';
import Partners from './Components/Partners/partners.js';
import Account from './Components/Account/account.js';
import Footer from './Components/footer/footer';

class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact/>
          <div>
            <Route path="/shipments" component={Shipments} exact/>
            <Route path="/partners" component={Partners} exact/>
            <Route path="/account" component={Account} exact/> 
            <Footer />
          </div>
          
          {/*<Login/>
          <Shipments/>
          <Partners/>
          <Account/>*/}
         
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
