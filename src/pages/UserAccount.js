import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const [list, setList] = useState("");

  const navigate = useNavigate();

  const { userId } = useParams();
  const storedToken = localStorage.getItem("authToken");

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleList = (e) => setList(e.target.value);

  useEffect(() => {
    axios
    .get(`${API_URL}/api/user/${userId}`, { headers: { Authorization: `Bearer ${storedToken}` }} )
    .then((response) => {

      const userData = response.data;
      handleUserName(userData.userName);
      handlePhoneNumber(userData.phoneNumber);
      handlePassword(userData.password);

    })
    .catch((error) => console.log(error));
  }, [userId]);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const reqBody = { userName, phoneNumber, password };

    axios.put(`${API_URL}/api/user/${userId}`, reqBody, { headers: { Authorization: `Bearer ${storedToken}` }} )
    .then((response) => {
      navigate(`/user/${userId}`)
    })
    .catch((error) => {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    })
  };

  const deleteAccount = () => {
    axios
      .delete(`${API_URL}/api/user/${userId}`)
      .then(() => {
        navigate("/loading");
      })
      .catch((err) => console.log(err));
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
        <button className="button buttonsWhite" type="submit">Mettre à jour !</button>
      </div>
    </form>
    <SearchContact />
    <h3>Mes listes !</h3>
    <button className="button buttonsWhite" id="contactList">Contacts</button>
    <SearchList />
    <div className="block">
    <h3>Créer une liste</h3>

    <input 
      type="text"
      name="list"
      value={list}
      placeholder="Nom de la liste a créer"
      onChange={handleList}
    />

    </div>
    <div className="logs">
        <button onClick={deleteAccount} className="button buttonsWhite">Effacer le Compte</button>
    </div>


    </div>

    </div>
  )
}

export default UserAccount;