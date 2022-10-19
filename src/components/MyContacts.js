import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "./underComponents/Avatar";

const API_URL = "http://localhost:5005";

function MyContact() {

  const [users, setUsers] = useState([]);

  const storedToken = localStorage.getItem("authToken");

  const { userId } = useParams();

  // Création d'une function pour l'api GET car un useEffect direct ne permet pas d'utiliser le headers / bearer
  const getUsers = () => {
    axios
      .get(
        `${API_URL}/api/user/${userId}`, { headers: { Authorization: `Bearer ${storedToken}` }}
      )
      .then((response) => {
        console.log("contact response", response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log("error to find users", err));
  };

  // Récupération de la liste des utilisateurs depuis le serveur
  useEffect(()=> {
    getUsers();
  }, [] );

  const _idFilter = 
    userId.contacts.filter(e => {
    return e.user_id
  }) // Filtre par id dans la liste contacts


  return (
    <div>
      {users.length !== 0 &&
      <div className="freeLightningBlock">
        <div className="grid">
        {_idFilter.map((user) => (
        <div key={user._id}>
          <Avatar userPhoto={user.userPhoto} userName={user.userName} alt="User" />
        </div>
        ))}
        </div>
      </div>
      }
    </div>
  )
}

export default MyContact;