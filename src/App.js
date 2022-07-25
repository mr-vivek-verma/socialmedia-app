import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/slice/userSlice";
import { auth, onAuthStateChanged } from "./firebase";
import { signOut } from "firebase/auth";
// import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Post from "./pages/Post/Post";
import Postform from "./pages/Postform";
import Banner from "./pages/Banner/Banner";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Banner />} />
        <Route exact path="/home" element={<Home />} />
        
        {/* {!user ? (
          // display the login form
          <Route exact path="/" element={<Login />} />
        ) : (
          // display the rest of the app
          <div className="app__body">
            <div>
              <h1>Hello {user.displayName}!</h1>
              <p>{user.email}</p>
            </div>
          </div>
        )} */}
      </Routes>
    </>
  );

  
}

export default App;
