import { Route, Router } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import NavBar from './Components/Shared/NavBar/NavBar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar></NavBar>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
          <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
