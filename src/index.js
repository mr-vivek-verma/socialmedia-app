import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"
import { Provider } from "react-redux/es/exports";
import { store } from "./redux/store/store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
      <ToastContainer/>
    </Provider>
  </BrowserRouter>
);
