import React from 'react'
import './styles/profile.css';


export default function FCProfile() {
    return (
        <div className="user-card">
            <div className="user-card-header">
                <img
                    src="https://via.placeholder.com/80"
                    alt="User Avatar"
                    className="user-avatar"
                />
                <div className="user-details">
                    <h2 className="user-name">פלוני אלמוני</h2>
                    <p className="user-email">ploni@gmail.com<span role="img" aria-label="email">✉️</span> </p>
                    <p className="user-address"> המדבר 35, ראשון לציון<span role="img" aria-label="location">📍</span></p>
                    <p className="user-birthdate">05 בינואר 1980<span role="img" aria-label="birthday">🎂</span></p>
                    <div className="user-card-actions">
                        <button className="update-button">עדכן פרטים</button>
                        <button className="delete-button">למחוק</button>
                        <button className="copy-button">העתק</button>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
