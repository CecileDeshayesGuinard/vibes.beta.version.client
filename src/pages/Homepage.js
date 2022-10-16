import { Link } from "react-router-dom";
import axios from "axios";
import Avatar from "../components/underComponents/Avatar";
import EventPlayer from "../components/EventPlayer";
import EventMaker from "../components/EventMaker";
import UserRequest from "../components/UserRequest";
import EventRequest from "../components/EventRequest";

function Homepage() {

  return (
  <div className="startPages">
    <div className="startPageBlock">
      <Avatar />
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
      <Link to="/logout">
        <button className="buttons buttonsWhite">Logout</button>
      </Link>
    </div>
  </div>
  );
}
   
export default Homepage;