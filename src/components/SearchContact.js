import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./underComponents/SearchBar";
import Avatar from "./underComponents/Avatar";

const API_URL = "http://localhost:5005";

function SearchContact() {

  const [search, setSearch] = useState("")
  const [users, setUsers] = useState([]);
  const handleUsers = (e) => setSearch(e.target.value)

  const storedToken = localStorage.getItem("authToken");

  // Création d'une function pour l'api GET car un useEffect direct ne permet pas d'utiliser le headers / bearer
  const getUsers = () => {
    axios
      .get(
        `${API_URL}/api/users`, { headers: { Authorization: `Bearer ${storedToken}` }}
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

  // Pour un filtre sur 3 critères
  const nameFilter = 
    users.filter(e => {
    return e.userName.includes(search.toLowerCase())
  }) // Filtre par nom

  const emailFilter = 
  users.filter(e => {
  return e.email.includes(search.toLowerCase())
  }) // Filtre par email

  const phoneFilter = 
  users.filter(e => {
  return e.phoneNumber.includes(search.toLowerCase())
  }) // Filtre par numéro de téléphone
  // Amélioration : éviter le doublon entre l'email et le nom surtout en cas de forme reprenant le userName dans l'email


  return (
    <div>

      <SearchBar search={search} setSearch={setSearch} onChange={handleUsers} placeholder="Par nom, email ou numéro" />

      {search.length !== 0 &&
      <div className="freeLightningBlock">
        <div className="grid">

        {nameFilter.map((user) => (
        <div key={user._id}>
          <Avatar userPhoto={user.userPhoto} userName={user.userName} alt="User" />
        </div>
        ))}

        {emailFilter.map((user) => (
        <div key={user._id}>
          <Avatar userPhoto={user.userPhoto} userName={user.userName} alt="User" />
        </div>
        ))}

        {phoneFilter.map((user) => (
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

export default SearchContact;