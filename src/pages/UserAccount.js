import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "../components/underComponents/Avatar";
import SearchContact from "../components/SearchContact";
import SearchList from "../components/SearchList";

const API_URL = "http://localhost:5005";

function UserAccount() {

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const [list, setList] = useState("");

  const navigate = useNavigate();

  const { userId } = useParams();
  const storedToken = localStorage.getItem("authToken");

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleFileUpload = (e) => {

 
    const uploadData = new FormData();
 
    uploadData.append("userPhoto", e.target.files[0]);
 
     // tu n'as pas besoin de service: fais juste une requete axios classique directement comme a la ligne 48
     axios
     .post(`${API_URL}/api/upload/`, uploadData, { headers: { Authorization: `Bearer ${storedToken}` }} ) // il faut qd meme que tu transmette uploadData (l'object dans lequel est ton image)
     .then(response => {
       setUserPhoto(response.userPhoto);
     })
     .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleList = (e) => setList(e.target.value);

  useEffect(() => {
    axios
    .get(`${API_URL}/api/users/${userId}`, { headers: { Authorization: `Bearer ${storedToken}` }} )
    .then((response) => {

      const userData = response.data;
      handleUserName(userData.userName);
      handlePhoneNumber(userData.phoneNumber);
      handlePassword(userData.password);
      handleFileUpload(userData.userPhoto);

    })
    .catch((error) => console.log(error));
  }, [userId]);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const reqBody = { userName, phoneNumber, password, userPhoto };

    axios
    .put(`${API_URL}/api/users/${userId}`, reqBody, { headers: { Authorization: `Bearer ${storedToken}` }} )
    .then((response) => {
      const successDescription = response.response.data.message;
      setSuccessMessage(successDescription);
      navigate(`/account/${userId}`)
    })
    .catch((error) => {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    })
  };

  const deleteAccount = () => {
    axios
    .delete(`${API_URL}/api/users/${userId}`, { headers: { Authorization: `Bearer ${storedToken}` }})
    .then(() => {
      navigate("/loading");
    })
    .catch((err) => console.log(err));
  };  
  
  return (
    <div className="startPages">
      <div className="startPageBlock">
    <Avatar />
    <form onSubmit={handleSignupSubmit} method="post">
      <div className="lightningBlock">
      <h4>Mes informations !</h4>

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

        <input 
          type="file"
          name="userPhoto"
          accept=".jpg, .jpeg, .png, .svg"
          value={userPhoto}
          onChange={(e) => handleFileUpload(e)}
        />

        { successMessage && <p className="error-message">{successMessage}</p> }
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
      <Link to={`/${userId}`}>
        <button className="button buttonsWhite">Homepage</button>
      </Link>
        <button onChange={deleteAccount} className="button buttonsWhite">Effacer le Compte</button>
    </div>


    </div>

    </div>
  )
}

export default UserAccount;