import SmallAvatar from "./underComponents/SmallAvatar";
import Meteo from "./underComponents/Meteo";
import Temperature from "./underComponents/Temperature";

function EventPlayerSection() {

  return (
    <div className="eventBlock">
      <h3>Je participe a :</h3>
      <div className="imgPart">
        <img className="EventPic" src="#" name="eventPicture" alt="Evènement" />
      </div>
      <div className="eventNamePart">
        <h3>Event Name</h3>
        <p>Nombre de Participants</p>
      <div className="meteo">
        <Meteo />
        <Temperature />
      </div>
      </div>
      <div className="hostPart">
        <SmallAvatar />
      </div>
    </div>
  );
    
}
    
  export default EventPlayerSection;