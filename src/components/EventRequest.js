import SmallAvatarPic from "./underComponents/SmallAvatarPic";
import SmallEventPhoto from "./underComponents/SmallEventPhoto";

function EventRequest() {

  return ( 
    <div className="freeLightningBlock">
      <div className="innerLightning">
        <div className="imagePart">
          <SmallEventPhoto />
        </div>
        <div className="smallAvatarBlock">
          <SmallAvatarPic />
        </div>
      </div>
    </div>
  );
}
    
export default EventRequest;