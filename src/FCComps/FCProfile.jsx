import React, { useEffect, useState } from 'react'
import './styles/profile.css';
import FCEditDetails from './FCEditDetails';


export default function FCProfile(props) {

    const [user, setUser] = useState(null);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('connected') !=undefined) {
            setUser(JSON.parse(sessionStorage.getItem('connected')));
            console.log(user);         
        }    
    }, []);

    const LogOutUser = (email) =>{
        let u=JSON.parse(sessionStorage.getItem('connected'));
        if(email==u.email){
            sessionStorage.clear();
            setUser(null);
        }
    }

    const handleSave = (updatedU) => {
        sessionStorage.setItem('connected',JSON.stringify(updatedU));
        setUser(updatedU);
        setShowEdit(false);
        props.SendUpUser(updatedU);
    }

    return (
    
        <div className="user-card">
            {user ? (
                <>
                <div className="user-card-header">
                    <img
                        src={user.profilePicture}
                        alt="User Avatar"
                        className="user-avatar"
                    />
                    <div className="user-details">
                        <h2 className="user-name">{user.username}</h2>
                        <p className="user-email">{user.email}<span role="img" aria-label="email">✉️</span> </p>
                        <p className="user-address">{user.streetName} {user.houseNumber}, {user.city}<span role="img" aria-label="location">📍</span></p>
                        <p className="user-birthdate">{user.birthDate}<span role="img" aria-label="birthday">🎂</span></p>
                        <div className="user-card-actions">
                            <button className="edit-button" onClick={() =>setShowEdit(!showEdit)}>עדכן פרטים</button>
                            <a href="https://games.yo-yoo.co.il/games_play.php?game=1836"><button className="game-button">למשחק</button></a>
                            <button className="logOut-button" onClick={() => LogOutUser(user.email)}>התנתק</button>
                        </div>
                    </div>
                </div>
                {showEdit && 
                    <FCEditDetails user={user} users={props.users} SendUpdatedUser={handleSave}/>
                }
                </>
            ) : (
                    <p>יש להתחבר למערכת</p>
                )}
            </div>
    );
}
