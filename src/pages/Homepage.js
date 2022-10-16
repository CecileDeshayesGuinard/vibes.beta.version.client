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
    <div className="pageBlock homepage">
      <Avatar />
      <EventPlayer />
      <EventMaker />
      <Request />
      <Invitations />
    </div>
    <div className="logs">
      <Link to="/logout">
        <button className="buttons">Logout</button>
      </Link>
    </div>
  </div>
  );
}
   
export default Homepage;