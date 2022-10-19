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

  // Récupération de la liste dépendantes de l'utilisateur connecté
  useEffect (() => {
    axios
      .get(
        `${API_URL}/api/list` // Voir avec Antoine pour obtenir les listes de l'utilsateur connecté
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
    return e.userList.includes(search.toLowerCase())
  })


  return (
    <div>
      {search.length > 0 &&
      <div>
        <div className="grid">
        {listsFilter.map((userList) => (
        <div key={userList._id}>
          <UserLists onChange={userList.user} alt="List" />
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
          <Avatar userPhoto={userList.list.userPhoto} userName={userList.list.userName} alt="User" />
        </div>
        ))}
        </div>
      </div>
      }
    </div>
  )
}

export default SearchList;