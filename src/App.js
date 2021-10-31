
import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from './component/Login/Login';
import AuthProvider from './context/AuthProvider';
import Home from './component/Home/Home';
import Add from './component/Add/Add';
import Packages from './component/Packages/Packages';
import PrivateRoute from './component/Login/PrivetRoute/PrivetRoute';
import Booking from './component/Booking/Booking';
import Order from './component/Order/Order';
import MyOrder from './component/MyOrder/MyOrder';
import Error from './component/Error/Error';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/packages'>
           <Packages></Packages>
          </Route>

          <Route path='/add'>
            <Add></Add>
          </Route>

          <Route path='/order'>
            <Order></Order>
          </Route>

          <Route path='/myorder'>
           <MyOrder></MyOrder>
          </Route>

          <Route path='/login'>
            <Login></Login>  
          </Route>

          <PrivateRoute path='/booking/:id'>
           <Booking></Booking> 
          </PrivateRoute>

          <Route path='*'>
            <Error></Error>
          </Route>

        </Switch>
       
      </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
