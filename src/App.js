import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductListPage from './containers/ProductListPage';
import {useDispatch, useSelector} from 'react-redux';
import { isUserLoggedIn, updateCart } from './actions';
import './App.css';
import ProductDetailsPage from './containers/productDetailsPage';
import CartPage from './containers/CartPage';
import CheckoutPage  from './containers/CheckoutPage';
import OrderDetailsPage  from './containers/OrderDetailsPage';
import OrderPage  from './containers/OrderPage';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

useEffect(() => {
  dispatch(updateCart());
}, [auth.authenticate]);

  return (
    <div className="App">
       <Router>
        <Switch>
         <Route path='/' exact component={HomePage} />
         <Route path='/cart' component={CartPage} />
         <Route path="/checkout" component={CheckoutPage} />
         <Route path="/account/orders" component={OrderPage} />
         <Route path="/order_details/:orderId" component={OrderDetailsPage} />
         <Route path='/:ProductSlug/:productId/p' component={ProductDetailsPage} />
         <Route path='/:slug' component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
