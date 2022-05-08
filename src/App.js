import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog/Blog';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import AddItems from './Components/Pages/AddItems/AddItems';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import ManageItems from './Components/Pages/ManageItems/ManageItems';
import MyItems from './Components/Pages/MyItems/MyItems';
import NotFound from './Components/Pages/NotFound/NotFound';
import OurInventory from './Components/Pages/OurInventory/OurInventory';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import Register from './Components/Pages/Register/Register';
import Footer from './Components/Sheared/Footer/Footer';
import NavBar from './Components/Sheared/NavBar/NavBar';
import PrivateRoute from './Components/Sheared/PrivateRoute/PrivateRoute';
// import PrivateRoute from './Components/Sheared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      {/* <Fragment> */}
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/ourInventory" element={<OurInventory/>}/>
          <Route path="/manageItems" element={<ManageItems />}/>    
          <Route path="/addItems" element={<AddItems />}/>
          <Route path="/myItems" element={<MyItems />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/inventory/:id" element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }/>
          {/* <Route path="/welldone" element={<Welldone />}/> */}
          <Route path="/*" element={<NotFound />}/>
        </Routes>
        <Footer></Footer>
      {/* </Fragment> */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
