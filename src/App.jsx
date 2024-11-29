import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Login from "./Components/login";
import SignUp from "./Components/register";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Components/Profile";

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <ToastContainer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
