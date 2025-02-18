import { useEffect, useState } from 'react'
import { auth } from '../../config/config'
import './Profile.css'

export default function Profile() {
    const [user, setUser] = useState(auth.currentUser)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <section className="profile">
            <h1>Welcome !</h1>
            <p>{user?.email || 'User'}</p>
            <p>{user?.displayName}</p>
            <p>{user?.photoURL}</p>
        </section>
    )
}
