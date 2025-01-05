import React, { useState } from 'react'

import './styles/Reg.css';

export default function FCEditDetails(props) {

    const [userData, setUserData] = useState({ ...props.user }); // עותק לעריכה מהנתונים המקוריים

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value, // שמירת קובץ או ערך
        }));

    };

    const EditUser = (event) => {
        event.preventDefault(); // למנוע רענון של הדף

        if (userData.username=="admin" || props.users.some(user => user.username === userData.username && user.email!=userData.email)) {

            alert('שם משתמש זה תפוס! נסה שנית');
            return;
        }

        if ('confirmPassword' in userData) {
            if (userData.password !== userData.confirmPassword) {
                alert('הסיסמאות אינן תואמות.');
                return;
            }
            else {
                delete userData.confirmPassword;
            }
        }

        // בדיקה אם העיר שנבחרה מופיעה ברשימה
        const validCities = ['חיפה', 'תל אביב', 'ירושלים'];
        if (!validCities.includes(userData.city)) {
            alert('אנא בחר עיר מתוך הרשימה.');
            return;
        }

        const file = userData.profilePicture;
        if (file && file instanceof Blob) { // אם יש קובץ והקובץ הוא מסוג Blob
            const reader = new FileReader();
            reader.onload = () => {
                setUserData(prevU => ({
                    ...prevU,
                    profilePicture: reader.result // שמירת התמונה כ-Base64
                }));
                props.SendUpdatedUser({ ...userData, profilePicture: reader.result });
            };
            reader.readAsDataURL(file); // קריאת הקובץ
        } else {
            props.SendUpdatedUser(userData); // אם לא נבחרה תמונה, רק שומרים את המידע
        }
    }

    return (
        <div className="form-container">
            <form id="edit-form" onSubmit={EditUser}>
                <h1>טופס עדכון פרטים</h1>

                <label htmlFor="username">שם משתמש</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    maxLength="60"
                    value={userData.username}
                    onChange={handleChange}
                    pattern="^[A-Za-z0-9._%+\-]+$"
                    required
                    title="אנא הזן אותיות לועזיות, מספרים ותווים מיוחדים בלבד"
                />

                <label htmlFor="password">סיסמה</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    pattern="(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{7,12}"
                    required
                    title="הסיסמה חייבת להכיל בין 7 ל-12 תווים כולל אות גדולה, מספר ותו מיוחד"
                />

                <label htmlFor="confirmPassword">אימות סיסמה</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="profilePicture">תמונה</label>
                <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    accept=".jpg, .jpeg"
                    onChange={handleChange}
                />

                <label htmlFor="firstName">שם פרטי</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    pattern="[\u0590-\u05FF]+"
                    required
                    title="אנא הזן טקסט בעברית בלבד"
                />

                <label htmlFor="lastName">שם משפחה</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    pattern="[\u0590-\u05FF]+"
                    required
                    title="אנא הזן טקסט בעברית בלבד"
                />

                <label htmlFor="email">כתובת מייל</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    disabled
                />

                <label htmlFor="birthDate">תאריך לידה</label>
                <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={userData.birthDate}
                    onChange={handleChange}
                    max="2006-12-31"
                    required
                />

                <label htmlFor="city">עיר</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    list="cityList"
                    value={userData.city}
                    onChange={handleChange}
                    required
                />
                <datalist id="cityList">
                    <option value="חיפה" />
                    <option value="תל אביב" />
                    <option value="ירושלים" />
                </datalist>

                <label htmlFor="streetName">שם רחוב</label>
                <input
                    type="text"
                    id="streetName"
                    name="streetName"
                    value={userData.streetName}
                    onChange={handleChange}
                    pattern="[\u0590-\u05FF ]+"
                    required
                    title="אנא הזן שם רחוב בעברית בלבד"
                />

                <label htmlFor="houseNumber">מספר</label>
                <input
                    type="number"
                    id="houseNumber"
                    name="houseNumber"
                    value={userData.houseNumber}
                    onChange={handleChange}
                    min="0"
                    required
                />

                <button type="submit">עדכון</button>
            </form>
        </div>
    )
}
