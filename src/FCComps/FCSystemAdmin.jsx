import React, { useState } from 'react'
import './styles/admin.css';
import FCEditDetails from './FCEditDetails';


export default function FCSystemAdmin(props) {

    const [showEdit, setShowEdit] = useState("");

    const handleSave = (updatedU) => {
        setShowEdit(updatedU);
        setShowEdit("");
        props.SendUpUser(updatedU);
    }

    return (
        <div>
            <div className="system-admin-container">
                <h2>מנהל מערכת</h2>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>שם משתמש</th>
                            <th>שם מלא</th>
                            <th>תאריך לידה</th>
                            <th>כתובת</th>
                            <th>אימייל</th>
                            <th>פעולות</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.map((user) => (
                            <tr key={user.email}>
                                    <td>{user.username}</td>
                                    <td>{user.firstName} {user.lastName}</td>
                                    <td>{user.birthDate}</td>
                                    <td>{user.city}, {user.streetName} {user.houseNumber}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button
                                            className="edit-btn"
                                            onClick={() => setShowEdit(user)}
                                        >
                                            עריכת פרטי משתמש
                                        </button>
                                        <button
                                            className="delete-btn"
                                            onClick={() => props.SendEmail2Delete(user)}
                                        >
                                            מחיקת משתמש
                                        </button>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showEdit!="" &&
                                    <FCEditDetails user={showEdit} users={props.users} SendUpdatedUser={handleSave} />
                                }
            </div>
        </div>
    )
}
