import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"; 
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import DashboardHome from './Pages/DashboardHome/DashboardHome';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import SellerProfile from './Pages/SellerProfile/SellerProfile';
import Message from './Pages/Message/Message';
import SingleMessage from './Pages/Message/SingleMessage/SingleMessage'
 function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route path='/dashboard' component={DashboardHome} exact/> 
              <Route path='/singleProduct' component={SingleProduct} exact/>           
              <Route path='/login' component={Login} exact/>
              <Route path='/registration' component={Registration} exact/>
              <Route path='/sellerProfile' component={SellerProfile} exact/> 
              <Route path='/message' component={Message} exact/> 
              <Route path='/message/userid' component={SingleMessage} exact/> 

          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
