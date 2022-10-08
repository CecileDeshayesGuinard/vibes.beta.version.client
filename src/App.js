import './App.css';
import {Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import Loading from './pages/Loading';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Account from './pages/Account';
import Profile from './pages/Profile';
import Event from './pages/Event';
import EventEd from './pages/EventEd';
import EventVue from './pages/EventVue';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';


function App() {
  return (
    <div className="App">
      <Logo />

      <Routes> 
        <Route path="/loading" element={ <IsAnon><Loading /></IsAnon> } />
        <Route path="/signup" element={ <IsAnon><Signup /></IsAnon> } />
        <Route path="/login" element={ <IsAnon><Login /></IsAnon> } />
        <Route path="/:userId" element={ <IsPrivate><Homepage /></IsPrivate> } /> 
        <Route path="/account/:userId" element={ <IsPrivate><Account /></IsPrivate> } /> 
        <Route path="/profile/:userId" element={ <IsPrivate><Profile /></IsPrivate> } />
        <Route path="/event/create" element={ <IsPrivate><Event /></IsPrivate> } />
        <Route path="/event/edit/:eventId" element={ <IsPrivate><EventEd /></IsPrivate> } />
        <Route path="/event/:eventId" element={ <IsPrivate><EventVue /></IsPrivate> } />
      </Routes>
      

    </div>
  );
}

export default App;