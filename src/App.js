import React, { Component } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Cart from './Cart/Cart'
import Details from './components/Details'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Default from './components/Default'
import Modal from './components/Modal'
 class App extends Component {
  render() {
    return (
      
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route  component={Default}></Route>
        </Switch>
        <Modal/>
        
        
        
        <Default/>

      </React.Fragment>
       
    )
  }
}

export default App
