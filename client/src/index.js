import React from "react";
// import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login"
import Board from "./pages/Board"
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const login = ReactDOM.createRoot(document.getElementById("login"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
login.render(
 
    <Login />

);

