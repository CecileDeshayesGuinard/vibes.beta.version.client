import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "../components/underComponents/Avatar";
import SearchContact from "../components/SearchContact";
import SearchList from "../components/SearchList";

const API_URL = "http://localhost:5005";

function UserAccount() {

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const reqBody = { userName, phoneNumber, password };


    axios.put(`${API_URL}/api/user/:id'`, reqBody)
    .then((response) => {
      navigate('/');
    })
    .catch((error) => {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    })
  };

  
  return (
    <div className="startPages">
      <div className="startPageBlock">
    <Avatar />
    <form onSubmit={handleSignupSubmit}>
      <div className="lightningBlock">
      <h3>Mes informations !</h3>

        <input 
          type="text"
          name="userName"
          value={userName}
          placeholder="Pseudo"
          onChange={handleUserName}
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

      <SearchContact />

      <SearchList />


      <div className="logs">
        <button className="button buttonsWhite" type="submit">Enregistrer !</button>
      <Link to="/loading">
        <button className="button buttonsWhite">Effacer le Compte</button>
      </Link>
      </div>

    </form>
    </div>

    </div>
  )
}

export default UserAccount;