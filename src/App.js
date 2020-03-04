import React, { Component } from 'react'
/*import logo from './logo.svg';*/
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Components/Login/login.js';
import Shipments from './Components/Shipments/shipments.js';
import Partners from './Components/Partners/partners.js';
import Account from './Components/Account/account.js';


class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/shipments" component={Shipments} exact/>
          <Route path="/partners" component={Partners} exact/>
          <Route path="/account" component={Account} exact/>
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
