import React from 'react'
import './styles/Reg.css';

export default function FCLogIn() {
    return (
        <div className="form-container">
            <form id="logIn-form" >
                <h1>התחברות למערכת</h1>
                <label htmlFor="username">שם משתמש</label>
                <input type="text" id="username-log" name="username-log" maxLength="60"
                       pattern="[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]*"
                       required title="אנא הזן אותיות לועזיות, מספרים ותווים מיוחדים בלבד" />

                <label htmlFor="password">סיסמה</label>
                <input type="password" id="password-log" name="password-log"
                       pattern="(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{7,12}"
                       required title="הסיסמה חייבת להכיל בין 7 ל-12 תווים כולל אות גדולה, מספר ותו מיוחד" />
                <button type="submit">שלח</button>
            </form>
        </div>

    )
}
