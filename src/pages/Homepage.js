import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import EventPlayer from "../components/EventPlayer";

function Homepage() {
    return (
    <div className="startPages">
      <div className="pageBlock homepage">
        <Avatar />
        <EventPlayer />
      </div>
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
   
  export default Homepage;