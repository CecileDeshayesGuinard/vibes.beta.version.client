import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "../components/underComponents/Avatar";
import EventPlayer from "../components/EventPlayer";
import EventMaker from "../components/EventMaker";
import UserRequest from "../components/UserRequest";
import EventRequest from "../components/EventRequest";

const API_URL = "http://localhost:5005";

function Homepage() {

  const storedToken = localStorage.getItem("authToken");
  const { userId } = useParams();

  const logout = () => {
    localStorage.removeItem(storedToken)
  }


  return (
  <div className="startPages">
    <div className="startPageBlock">
      <Link to={`/account/${userId}`}>
        <Avatar />
      </Link>
      <h3>Je participe a :</h3>
      <EventPlayer />
      <h3>Mes évènements :</h3>
      <EventMaker />
      <h3>Demandes de connexion !</h3>
      <UserRequest />
      <h3>Invitations !</h3>
      <EventRequest />
    </div>
    <div className="logs">
      <button onClick={logout} className="button buttonsWhite">Logout</button>
    </div>
  </div>
  );
}
   
export default Homepage;