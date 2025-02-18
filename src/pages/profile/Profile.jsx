/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react'
import { auth } from '../../config/config'
import { redirect } from 'react-router-dom'
import defaultAvatar from '../../assets/default-avatar.png'  
import './Profile.css'

export function loader(auth) {
    if (!auth.currentUser) {
        return redirect('/login?message=You have to log in to proceed')
    }
}

export default function Profile() {
    const [user, setUser] = useState(auth.currentUser)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="profile-container">
            <div className="wrapper">
                <div className="profile">
                    <img src={defaultAvatar} alt="Profile Picture" />
                    <div className="profile-info">
                        <div>
                            <label htmlFor="name">Name</label>
                            <h2 id="name">{user.displayName}</h2>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <h2 id="email">{user.email}</h2>
                        </div>
                        <div className="personal-info">
                            <div>
                                <label htmlFor="city">City</label>
                                <h2 id="city">Le kef, Tunisia</h2>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone number</label>
                                <h2 id="phone">(+216) 99999999</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit-profile">
                    <button>Edit Profile</button>
                </div>
            </div>
        </div>
    )
}
