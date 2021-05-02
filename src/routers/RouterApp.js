import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import ItemsListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from '../components/Cart/Cart'
import Checkout from '../components/Checkout/Checkout'
import Navbar from "../components/NavBar/Navbar";
import Finish from "../components/Finish/Finish";

const RouterApp = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/item/:id?' children={<ItemDetailContainer />} />
        <Route path="/category/:id?" children={<ItemsListContainer />} />
        <Route path='/cart' exact children={<Cart />} />
        <Route path='/checkout' exact children={<Checkout />} />
        <Route path='/finish/:id?' exact children={<Finish/>} />
        <Route path='/' exact children={<ItemsListContainer />} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}



export default RouterApp;