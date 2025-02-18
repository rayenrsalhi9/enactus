import { useEffect, useState } from 'react'
import { auth } from '../../config/config'
import './Profile.css'
import { redirect } from 'react-router-dom'

export async function loader() {
    if (!auth.currentUser) {
        return redirect('/login?message=You have to log in to proceed')
    }
    return null
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
        <section className="profile">
            <h1>Welcome !</h1>
            <p>{user?.email || 'User'}</p>
            <p>{user?.displayName}</p>
            <p>{user?.photoURL}</p>
        </section>
    )
}
