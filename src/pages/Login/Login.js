import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { Formik, Form } from "formik";
import * as yup from "yup";
import CustomErrorMessage from "../../components/Validation/CustomErrorMessage";

const validationSchema = yup.object({
  email: yup.string().required("email is Required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "must contain 8 caharacter,special,upper and lower case and atleast 1 number"
    )
    .required("Password is Required!"),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
      // returns  an auth object after a successful authentication
      // userAuth.user contains all our user details
      .then((userAuth) => {
        // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        
        navigate("../Home");
      })
      //will display the error
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <div className="login">
        <Formik
          validationSchema={validationSchema} //passing prpos
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(loginToApp) =>{
            // console.log(loginToApp);
          }}
        >
          {({ value }) => (
            <Form>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
              <CustomErrorMessage value="email" />
              <br />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
              <CustomErrorMessage value="password" />
              <br />
              <button type="submit" onClick={loginToApp}>
                Sign In
              </button>
            </Form>
          )}
        </Formik>

        <p className="b_register">
          Don't have an account?
          <button className="login__register">
            <Link to="/register">Register now</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
