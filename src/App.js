
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/header/Header';
import Product from './component/product/Product';
import Footer from './component/footer/Footer';
import Service from './component/service/Service';
import Payment from './component/payment/Payment';
import Order from './component/order/Order';

const App=()=>{
  return (
    <BrowserRouter>
     <Header/>
     <Switch>
           
              <Route exact path='/' component={Product} />
              <Route path='/service' component={Service}/>
              <Route path='/payment' component={Payment}/>
              <Route path='/order' component={Order}/>
      </Switch>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
