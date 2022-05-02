import { Home } from "./Home";
import { useDispatch } from "react-redux";
import { isLoggedin } from "../Redux/Login/action";

export const Logout = () => {
    // Logout component, just log user out and take him to `/` homepage
    const dispatch = useDispatch()
    // suggestion: if you are storing anyting in redux it's a good idea to
    // empty it before loggin out. eg: order
    dispatch(isLoggedin(false))
  
    return (
        <Home />
    );
  };