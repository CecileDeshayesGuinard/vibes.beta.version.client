import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Promise from "../components/Promise";

function Loading() {
    return (
    <div className="loading">
      <Logo />
      <Promise />
      <div className="logs">
        <Link to="/login">
          <button className="buttons">Login</button>
        </Link>
        <Link to="/signup">
          <button className="buttons">Signup</button>
        </Link>
      </div>
    </div>
    );
  }
   
  export default Loading;