import { getApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { Router } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import NavBar from './Components/Shared/NavBar/NavBar';

const auth = getAuth(getApp);

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar></NavBar>
      </Router>
    </AuthProvider>
  );
}

export default App;
