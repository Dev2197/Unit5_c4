
import { useDispatch } from "react-redux";
import { isLoggedin } from "../Redux/Login/action";
import { Link } from "react-router-dom";

export const Login = () => {

    const dispatch = useDispatch()
    

    const handleLogin = ()=>{
        dispatch(isLoggedin(true))
        
    }

    
    return (
        
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
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