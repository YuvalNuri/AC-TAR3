import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FCRegister from './FCComps/FCRegister'
import FCLogIn from './FCComps/FCLogIn'
import FCProfile from './FCComps/FCProfile'
import { Link, Route, Routes } from 'react-router-dom'
import FCSystemAdmin from './FCComps/FCSystemAdmin'


function App() {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(false);

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

  const updateLS = () => {
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
  }

  useEffect(() => {
    updateLS()
  }, [users]);

  const GetUserFromReg = (userE) => {
    setUsers(prevU => [...prevU, userE]);
  }

  const HandleEdit = (userU) => {
    const userIn = users.findIndex(u => u.email == userU.email);
    const upUsers = [...users];
    upUsers[userIn] = { ...userU };
    setUsers(upUsers);
  }

  const HandleAdmin = (isAdmin) => {
    setAdmin(isAdmin);
    console.log(admin);
  }

  const DeleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
  };

return (
  <div>
    <Link to="/register">Register</Link> |{"\t"}
    <Link to={admin ? "/systemAdmin" : "/profile"}>{admin ? "System Admin" : "Profile"}</Link> |{"\t"}
    <Link to="/login">LogIn</Link>
    <Routes>
      <Route path="/register" element={<FCRegister users={users} sendUser2Main={GetUserFromReg} />} />
      <Route path="/systemAdmin" element={<FCSystemAdmin users={users} SendEmail2Delete={DeleteUser} SendUpUser={HandleEdit}/>} />
      <Route path="/profile" element={<FCProfile users={users} SendUpUser={HandleEdit} />} />
      <Route path="/login" element={<FCLogIn users={users} SendIfAdmin={HandleAdmin} />} />
    </Routes>
  </div>
)
}

export default App
