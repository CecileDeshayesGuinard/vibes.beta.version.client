import { Link } from "react-router-dom";
import axios from "axios";
import Avatar from "../components/underComponents/Avatar";
import EventPlayer from "../components/EventPlayerSection";
import EventMaker from "../components/EventMakerSection";
import Request from "../components/Request";
import Invitations from "../components/InvitationsSection";

function Homepage() {

  return (
  <div className="startPages">
    <div className="startPageBlock homepage">
      <Avatar />
      <h3>Je participe a :</h3>
      <EventPlayer />
      <h3>Mes évènements :</h3>
      <EventMaker />
      <h3>Demandes de connexion !</h3>
      <Request />
      <Invitations />
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