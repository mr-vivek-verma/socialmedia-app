// import { useDispatch, useSelector } from "react-redux";
// import { auth } from "../../firebase";
// import { logout, selectUser } from "../../redux/slice/userSlice";
// import "./Header.css";
// import {Link} from "react-router-dom"
// import { useState } from "react";

// function Header() {
//   const dispatch = useDispatch();
//   const [isAuth,setIsAuth] = useState("false")

//   const logoutOfApp = () => {
//     // dispatch to the store with the logout action
//     dispatch(logout());
//     // sign out function from firebase
//     auth.signOut();
//   };

//   const user = useSelector(selectUser);

//   return (
//     <div className="topnav">
//     <Link to="/">Home</Link>
//     <Link to="/post">Post</Link>
//     {!isAuth && <Link to="/login">Login</Link>}
//       {/* <button onClick={logoutOfApp}>Logout</button> */}
//     </div>
//   );
// }

// export default Header;
