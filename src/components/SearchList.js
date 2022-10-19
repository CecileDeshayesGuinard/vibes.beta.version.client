import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from "./underComponents/Avatar";
import UserLists from "./underComponents/UserLists";

const API_URL = "http://localhost:5005";

function SearchList() {

  const [search, setSearch] = useState("")
  const [userLists, setLists] = useState([]);
  const handleListName = (e) => setSearch(e.target.value)

  const storedToken = localStorage.getItem("authToken");

  // Récupération de la liste dépendantes de l'utilisateur connecté
  useEffect (() => {
    axios
      .get(
        `${API_URL}/api/list`, { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        console.log("list response", response.data);
        setLists(response.data);
      })
      .catch((err) => console.log("error to find users", err));
  }, [])

  // Filtre par id du propriétaire de la liste
  const listsFilter = 
    userLists.filter(e => {
    return e.list.includes(search.toLowerCase())
  })


  return (
    <div>
      {search.length !== 0 &&
      <div>
        <div className="grid">
        {listsFilter.map((list) => (
        <div key={list._id}>
          <UserLists name={list.name}   />
        </div>
        ))}
        </div>
      </div>
      }
      {search.length !== 0 &&
      <div className="freeLightningBlock">
        <div className="grid">
        {listsFilter.map((userList) => (
        <div key={userList._id}>
          <Avatar userPhoto={userList.list.userPhoto} setSearch={setSearch} userName={userList.list.userName} onChange={handleListName} alt="User" />
        </div>
        ))}
        </div>
      </div>
      }
      {search.length === 0 &&
      <div>
        <p>⛔️ Vous n'avez pas créé de listes !</p>
      </div> 
      }
    </div>
  )
}

export default SearchList;