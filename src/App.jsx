import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/Registration/Login';
import SignUp from './pages/Registration/SignUp';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts';


const App = () => {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allproducts' element={<Allproducts/>}/>
        <Route path='/order' element={
          <ProtectedRoute>
            <Order/>
          </ProtectedRoute>
        }/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/dashboard' element={
          <ProtectedRouteAdmin>
            <Dashboard/>
          </ProtectedRouteAdmin>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/productinfo/:id' element={<ProductInfo/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/addproduct" element={
          <ProtectedRouteAdmin>
            <AddProduct/>
          </ProtectedRouteAdmin>
        } />
        <Route path="/updateproduct" element={
          <ProtectedRouteAdmin>
            <UpdateProduct/>
          </ProtectedRouteAdmin>
        } />
        <Route path='/*' element={<NoPage/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  )
}

export default App

//user

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'}/>
  }
}

//admin 
const ProtectedRouteAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin.user.email === 'atulmishra1997@hotmail.com') {
    return children
  } else {
    return <Navigate to={'/login'}/>
  }
}