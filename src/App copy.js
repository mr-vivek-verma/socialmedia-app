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
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState("false");
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  // check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      {/* <Header /> */}

      <nav>
      <Link to="/">Banner</Link>
        <Link to="/home">Home</Link>
        <Link to="/post">Post</Link>

        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={signUserOut}>Logout</button>
        )}
      </nav>

      <Routes>
        <Route exact path="/" element={<Banner />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route exact path="/post/edit" element={<Postform />} />
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
