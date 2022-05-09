import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import AddItems from './Components/Pages/AddItems/AddItems';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import ManageItems from './Components/Pages/ManageItems/ManageItems';
import MyItems from './Components/Pages/MyItems/MyItems';
import NotFound from './Components/Pages/NotFound/NotFound';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import Register from './Components/Pages/Register/Register';
import Footer from './Components/Sheared/Footer/Footer';
import NavBar from './Components/Sheared/NavBar/NavBar';
import PrivateRoute from './Components/Sheared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/inventory/:id" element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }/>
          <Route path="/manageItems" element={
            <PrivateRoute>
              <ManageItems />
            </PrivateRoute>
          }/>
          <Route path="/addItems" element={
            <PrivateRoute>
              <AddItems />
            </PrivateRoute>
          }/>
          <Route path="/myItems" element={
            <PrivateRoute>
              <MyItems />
            </PrivateRoute>
          }/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
