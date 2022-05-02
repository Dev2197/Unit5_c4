
import { useDispatch } from "react-redux";
import { isLoggedin } from "../Redux/Login/action";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {

    const dispatch = useDispatch()
    const [user,setUser] = useState({
        name : "",
        password : ""
    })
    

    // const handleLogin = ()=>{
    //     dispatch(isLoggedin(true))
    //     setUser({...formdata,[e.target.name]:e.target.value});
    // }

    
    return (
        
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={(e)=>setUser({...user,user.name:e.target.value})}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e)=>e.target.value}
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" onClick={handleLogin}>
         <Link className="nav-login" to="/orders">
          Login
            </Link>
            </button>
      </div>
    );
  };