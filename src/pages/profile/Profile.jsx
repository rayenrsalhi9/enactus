/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, Suspense } from 'react'
import { 
    redirect, 
    useLoaderData, 
    useNavigate,
    defer, 
    Await,
    Link,
    useSearchParams } from 'react-router-dom';

import { signout } from '../../utils/signout';
import { auth } from '../../config/config'
import { getUser } from '../../database/profile';

import Loading from '../../components/loading/Loading';
import SuccessMsg from '../../components/changesSuccess/SuccessMsg';
import defaultAvatar from '../../assets/default-avatar.png'
import './Profile.css'

export function loader() {
    return new Promise((resolve) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                resolve(redirect('/login?message=You have to log in to proceed'));
            } else {
                resolve(defer({ profile: getUser(user.uid) }));
            }
            unsubscribe();
        });
    });
}

export default function Profile() {
    const [user, setUser] = useState(auth.currentUser)
    const profileObject = useLoaderData()
    const [successMsg] = useSearchParams()
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="profile-container">
            <Suspense fallback={<Loading />}> 
                    <div className="wrapper">
                        {successMsg && <SuccessMsg msg={successMsg.get('message')} />}
                        <Await resolve={profileObject.profile}>
                            {profile => (
                                <div className="profile">
                                    <img src={defaultAvatar} alt="Profile Picture" />
                                    <div className="profile-info">
                                        <div>
                                            <label htmlFor="name">Name</label>
                                            <h2 id="name">
                                                {(profile.firstName && profile.lastName) ? `${profile.firstName} ${profile.lastName}` : user.displayName || 'Anonymous User'}
                                            </h2>
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <h2 id="email">{profile.email || user.email}</h2>
                                        </div>
                                        <div className="personal-info">
                                            <div>
                                                <label htmlFor="city">City</label>
                                                <h2 id="city">{profile.city || '--------'}</h2>
                                            </div>
                                            <div>
                                                <label htmlFor="phone">Phone number</label>
                                                <h2 id="phone">(+216) {profile.phone || '--------'}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Await>
                    <div className="edit-profile">
                        <Link to='/editProfile' className='edit-profile-btn'>Edit Profile</Link>
                        <button 
                            className='logout-btn'
                            onClick={() => signout(navigate)}
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}