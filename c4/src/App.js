import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";

function App() {

  const isLogin = useSelector((store)=>store.Login.Login)
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        {isLogin?<Link className="nav-logout" to="/logout">
          Logout
        </Link> : <Link className="nav-login" to="/login">
          Login
        </Link>}
        
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element = {<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;