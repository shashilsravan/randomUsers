import React from 'react';
import './App.css';
import Login from './components/Login';
import { useSelector } from 'react-redux'
import { selectUser } from './redux-helpers/userSlice';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDetails from './components/UserDetails';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
        {user ? <BrowserRouter>
          <Header user={user?.name} />
          <Routes>
            <Route path='/users/:id' element={<UserDetails />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter> 
        : <Login />}
        <ToastContainer />
    </div>
  );
}

export default App;
