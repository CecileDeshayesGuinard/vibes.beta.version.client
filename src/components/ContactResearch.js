import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./underComponents/SearchBar";
import Avatar from "./underComponents/Avatar";

const API_URL = "http://localhost:5005";

function ContactResearch() {

  const [search, setSearch] = useState("")
  const [user, setUser] = useState("");
   
  useEffect (() => {
    axios
      .get(
        `${API_URL}/api/users`
      )
      .then((response) => {
        console.log("resp", response);
        setUser(response.data.user);
      })
      .catch((err) => console.log("error to find users", err));
  }, [])

  const filteredUsers = user.filter(el => {
    console.log("name", el.name)
    console.log("userName", user)
    return el.name !== user;
  });
  setUser(filteredUsers)

  const searchUsers = user.filter((el) => {
    return el.userName.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="lightningBlock">
        <div id="grid">
          {searchUsers.map(function (el) {
            return <Avatar key={el.name} name={el.userName} email={el.email} image={el.userPhoto}  phone={el.phoneNumber} />
          })
          }
        </div>
      </div>
    </div>
  )
}

export default ContactResearch;