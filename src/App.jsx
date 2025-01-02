import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FCRegister from './FCComps/FCRegister'
import FCLogIn from './FCComps/FCLogIn'
import FCProfile from './FCComps/FCProfile'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    if (localStorage.getItem("users") != undefined) {
      setUsers(JSON.parse(localStorage.getItem("users")));
    }
    else {
      setUsers([]);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
    <Routes>
      <Route path="/register" element={<FCRegister/>}/>
      <Route path="/register" element={<FCProfile/>}/>
      <Route path="/register" element={<FCLogIn/>}/>
    </Routes>
    </div>
  )
}

export default App
