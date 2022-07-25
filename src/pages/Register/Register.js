import React, { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "../../firebase";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import CustomErrorMessage from "../../components/Validation/CustomErrorMessage";
import "./Register.css";

const validationSchema = yup.object({
  name: yup.string().required("Name is Required!"),
  email: yup.string().required("email is Required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "must contain 8 caharacter,special,upper and lower case and atleast 1 number"
    )
    .required("Password is Required!"),
});
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const registerToApp = (e) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    signInWithEmailAndPassword(auth, email, password)
      // returns  an auth object after a successful authentication
      // userAuth.user contains all our user details
      .then((userAuth) => {
        // store the user's information in the redux state
        dispatch(
          register({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      });
    //will display the error
    //   .catch((err) => {
    //     alert(err);
    //   });
  };

  // A quick check on the name field to make it mandatory
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      // Update the newly created user with a display name
      updateProfile(userAuth.user, {
        displayName: name,
      }).then(
        // Dispatch the user information
        dispatch(
          register({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
          })
        )
      );
      //   .catch((error) => {
      //     console.log("user not updated");
      //   });
    });
    //   .catch((err) => {
    //     alert(err);
    //   });
  };

  return (
    <div>
      <div className="login">
        <Formik
          validationSchema={validationSchema} //passing prpos
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {({ value }) => (
            <Form>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name (required for registration!)"
                type="text"
              />
              <CustomErrorMessage value="name" />
              <br />

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

              {/* <button type="submit" onClick={registerToApp}>
            Register
          </button> */}
              <button className="login__register" onClick={register}>
                Register Now
              </button>
            </Form>
          )}
        </Formik>

        {/* <p className="b_register">
          <button className="login__register" onClick={register}>
            Register Now
          </button>
        </p> */}
      </div>
    </div>
  );
};

export default Register;
