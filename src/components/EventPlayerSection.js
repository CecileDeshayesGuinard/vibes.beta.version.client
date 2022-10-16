import Meteo from "./underComponents/Meteo";
import Temperature from "./underComponents/Temperature";

function EventPlayerSection() {

  return (
    <div className="block">
      <div className="eventPart player">
      <h3>Event Name</h3>
        <div className="infoPart">
          <div className="imagePart">
            <img className="smallEventPhoto" src="#" name="eventPicture" alt="Evènement" />
          </div>
          <div className="meteoPart">
            <Meteo />
            <Temperature />
          </div>
        </div>
        <div className="promoPart">
          <p>organizer</p>
          <p>Nb Pers.</p>
        </div>
      </div>
    </div>
  );
    
}
    
  export default EventPlayerSection;