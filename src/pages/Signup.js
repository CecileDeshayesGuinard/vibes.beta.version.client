import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function Signup(props) {

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
      e.preventDefault(); // we stop the request to avoid post before the end of input edition

      const requestBody = { userName, phoneNumber, email, password }; // from Antoine's example, we've to create a variable to stock req.body
   
      axios.post(`${API_URL}/auth/signup`, requestBody) // axios post to the server
        .then((response) => {
          navigate('/login'); // redirection to login page
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        })
    };
    
    return (
      <div className="SignupPage">
  
        <form onSubmit={handleSignupSubmit}>

        <label>Pseudo:</label>
          <input 
            type="text"
            name="userName"
            value={userName}
            onChange={handleUserName}
          />

          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />

          <label>Telephone:</label>
          <input 
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
  
          <label>Password:</label>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
  
          <button type="submit">S'enregistrer !</button>
        </form>
  
        { errorMessage && <p className="error-message">{errorMessage}</p> }
  
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    )
  }
  
  export default Signup;