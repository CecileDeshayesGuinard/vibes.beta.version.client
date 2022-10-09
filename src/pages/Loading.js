import { Link } from "react-router-dom";
import Promise from "../components/Promise";

function Loading() {

  return (
  <div className="startPages loading">
    <Promise />
    <div className="logs">
      <Link to="/login">
        <button className="button buttonsWhite">Se connecter</button>
      </Link>
      <Link to="/signup">
        <button className="button buttonsWhite">Mon Compte</button>
      </Link>
    </div>
  </div>
  );
}
 
export default Loading;