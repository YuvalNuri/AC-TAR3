import React from 'react'
import './styles/Reg.css';

export default function FCRegister() {


  return (
    <div className="form-container">
            <form id="register-form" >
                <h1>טופס הרשמה</h1>

                <label htmlFor="username">שם משתמש</label>
                <input type="text" id="username" name="username" maxLength="60"
                       pattern="[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]*"
                       required title="אנא הזן אותיות לועזיות, מספרים ותווים מיוחדים בלבד" />

                <label htmlFor="password">סיסמה</label>
                <input type="password" id="password" name="password"
                       pattern="(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{7,12}"
                       required title="הסיסמה חייבת להכיל בין 7 ל-12 תווים כולל אות גדולה, מספר ותו מיוחד" />

                <label htmlFor="confirmPassword">אימות סיסמה</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />

                <label htmlFor="profilePicture">תמונה</label>
                <input type="file" id="profilePicture" name="profilePicture" accept=".jpg, .jpeg" required />

                <label htmlFor="firstName">שם פרטי</label>
                <input type="text" id="firstName" name="firstName" pattern="[\u0590-\u05FF]+"
                       required title="אנא הזן טקסט בעברית בלבד" />

                <label htmlFor="lastName">שם משפחה</label>
                <input type="text" id="lastName" name="lastName" pattern="[\u0590-\u05FF]+"
                       required title="אנא הזן טקסט בעברית בלבד" />

                <label htmlFor="email">כתובת מייל</label>
                <input type="email" id="email" name="email"
                       pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$"
                       required title="אנא הזן כתובת מייל תקינה הכוללת רק אותיות לועזיות, תו @ אחד ו-.com בסוף" />

                <label htmlFor="birthDate">תאריך לידה</label>
                <input type="date" id="birthDate" name="birthDate" max="2006-12-31" required />

                <label htmlFor="city">עיר</label>
                <input type="text" id="city" name="city" list="cityList" autoComplete="on" required />
                <datalist id="cityList">
                    <option value="חיפה" />
                    <option value="תל אביב" />
                    <option value="ירושלים" />
                </datalist>

                <label htmlFor="streetName">שם רחוב</label>
                <input type="text" id="streetName" name="streetName" pattern="[\u0590-\u05FF ]+"
                       required title="אנא הזן שם רחוב בעברית בלבד" />

                <label htmlFor="houseNumber">מספר</label>
                <input type="number" id="houseNumber" name="houseNumber" min="0" required />

                <button type="submit">שלח</button>
            </form>
    </div>
  )
}
