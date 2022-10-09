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
        <Route path="/loading" element={ <Loading /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/:userId" element={ <Homepage /> } /> 
        <Route path="/account/:userId" element={ <Account /> } /> 
        <Route path="/profile/:userId" element={ <Profile /> } />
        <Route path="/event/create" element={ <Event /> } />
        <Route path="/event/edit/:eventId" element={ <EventEd /> } />
        <Route path="/event/:eventId" element={ <EventVue /> } />
      </Routes>
      

    </div>
  );
}

export default App;