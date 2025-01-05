import React, { useState } from 'react'
import './styles/Reg.css';

export default function FCLogIn(props) {
    console.log(props);

    const admin = { username: "admin", password: "ad12343211ad" };
    const [data, setData] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    const ChgUserName = (event) => {
        setData(prevD => ({...prevD, username: event.target.value }));
        setIsAdmin(data.username==admin.username);
        console.log(isAdmin);
    }

    const ChgPassword = (event) => {
        setData(prevD => ({...prevD, password: event.target.value }));
    }

    const LoginUser = (event) => {
        event.preventDefault(); // למנוע רענון של הדף
        console.log(props);

        const user = props.users.find(u => u.username == data.username);
        if (user) { //if username found in users array
            if (user.password == data.password) {
                alert("Welcome " + user.username);
                sessionStorage.setItem('connected', JSON.stringify(user));
            }
            else {
                alert("Incorrect password!");
            }
        } else {
            if (data.username==admin.username && data.password == admin.password) {
                props.SendIfAdmin(true);
                sessionStorage.setItem('connected', JSON.stringify(data));
                alert("Welcome " + user.username);
            }
            else {
                props.SendIfAdmin(false);
                alert("Username not found!");
            }
        }
        event.target.reset();
    };

    return (
        <div className="form-container">
            <form id="logIn-form" onSubmit={LoginUser}>
                <h1>התחברות למערכת</h1>
                <label htmlFor="username">שם משתמש</label>
                <input type="text" id="username-log" name="usernameLog" maxLength="60"
                    onChange={ChgUserName}
                    pattern="^[A-Za-z0-9._%+\-]+$"
                    required title="אנא הזן אותיות לועזיות, מספרים ותווים מיוחדים בלבד" />

                <label htmlFor="password">סיסמה</label>
                <input type="password" id="password-log" name="passwordLog"
                    onChange={ChgPassword}
                    pattern={!isAdmin ? "^(?=.*\d).{7,12}$" : "(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\\d).{7,12}"}
                    required
                    title={!isAdmin ? "" : "הסיסמה חייבת להכיל בין 7 ל-12 תווים כולל אות גדולה, מספר ותו מיוחד"} />
                <button type="submit">שלח</button>
            </form>
        </div>

    )
}
