import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../context/auth.context';

function Login() {

  const API_URL = "localhost://5005"  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState(undefined); // envoi du message d'erreur concernant l'email
  const navigate = useNavigate();

  // const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLogSubmit = (e) => {
    e.preventDefault();
    const reqBody = { email, password };
 
    axios.post(`${API_URL}/api/sessions`, reqBody)
      .then((response) => {
        console.log('JWT token', response.data.authToken );

        // storeToken(response.data.authToken); // enregistrement du token dans le browser
        // authenticateUser(); 

        navigate('/'); // si l'authentification est réussi, redirection vers la homepage                         
      })
      .catch((error) => {
        const errorResponse = error.response.data.message; // affiche le message d'erreur depuis le server
        seterrorMessage(errorResponse);
      })
  };

    return (
    <div className="startPages login">

      <form onSubmit={handleLogSubmit}>
        <div className="lightningBlock startPageBlock">
          <h2>Pret pour l'expérience ?</h2>
          <h3>Connectez-vous !</h3>

          <input 
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleEmail}
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
              <button className="button buttonsWhite">Retour</button>
            </Link>
            <button className="button buttonsWhite" type="submit">Connexion !</button>
        </div>
      </form>
    </div>
    );
  }
   
  export default Login;