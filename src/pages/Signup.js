import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function Signup() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  
  const handleUserName = (e) => setUserName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleSignupSubmit = (e) => {
    e.preventDefault(); // permet de retenir l'envoi POST
    const reqBody = { userName, phoneNumber, email, password };
 
    axios.post(`${API_URL}/auth/signup`, reqBody) // axios POST vers le server
      .then((response) => {
        navigate('/login'); // redirection vers la page login après validation du formulaire
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };
  
  return (
    <div className="startPages signup">
      <form onSubmit={handleSignupSubmit}>
        <div className="startBlock">
          <h3>Mes informations !</h3>

          <input 
            type="text"
            name="userName"
            value={userName}
            placeholder="Pseudo"
            onChange={handleUserName}
          />

          <input 
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleEmail}
          />

          <input 
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Téléphone"
            onChange={handlePhoneNumber}
          />
  
          <input 
            type="password"
            name="password"
            value={password}
            placeholder="Mot de passe"
            onChange={handlePassword}
          />

          { errorMessage && <p className="error-message">{errorMessage}</p> }

        </div>
          
        <div className="logs">
          <Link to="/loading">
            <button className="button buttonsBlack">Retour</button>
          </Link>
          <button className="button buttonsBlack" type="submit">Enregistrer !</button>
        </div>
      </form>
    </div>
  )
}
  
export default Signup;