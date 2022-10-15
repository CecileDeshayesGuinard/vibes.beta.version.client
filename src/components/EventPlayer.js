import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function EventPlayer() {

  return (
    <div className="eventBlock">
    <h2>Je participe a :</h2>
      <div className="imgPart">
        <Link to="{/event/:eventId}">
          <img className="eventPhoto" src="#" alt="Evènement" />
        </Link>
        <p>Date</p>
      </div>
      <div className="eventNamePart">
        <h3>Event Name</h3>
        <p>Nombre de Participants</p>
      </div>
      <div className="hostPart">
        <Avatar />
      </div>
    </div>
  );
    
}
    
  export default EventPlayer;