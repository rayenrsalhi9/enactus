/* eslint-disable react-refresh/only-export-components */
import { Suspense } from 'react'
import { 
    Await, 
    useLoaderData, 
    Form, 
    redirect,
    useNavigation, 
    useActionData} from 'react-router-dom'

import Loading from '../../components/loading/Loading'
import { auth, db } from '../../config/config'
import { doc, updateDoc } from 'firebase/firestore'

import defaultAvatar from '../../assets/default-avatar.png'
import './Edit.css'

export async function action({ request }) {
    const formData = await request.formData()
    const { city, phone } = Object.fromEntries(formData)

    if (!city || !phone) return 'All fields are required'
    
    const docRef = doc(db, "users", auth.currentUser.uid)

    try {
        await updateDoc(docRef, {
            city,
            phone
        })
        return redirect('/profile?message=Changes have been applied successfully.')
    } catch(err) {
        return err
    }
}

export default function Edit() {
    const profileObject = useLoaderData()
    const navigation = useNavigation()
    const errorMessage = useActionData()
    return (
        <section className="edit-container">
            <Suspense fallback={<Loading />}>
                <Await resolve={profileObject.profile}>
                    {
                        profile => (
                            <div className="wrapper">
                                <Form method='post'>
                                    <div className="edit">
                                        <img src={defaultAvatar} alt="Profile Picture" />
                                        <div className="profile-info">
                                            <div className="personal-info names">
                                                <div>
                                                    <label htmlFor="firstName">First name</label>
                                                    <h2>{profile.firstName}</h2>
                                                </div>
                                                <div>
                                                    <label htmlFor="lastName">Last name</label>
                                                    <h2>{profile.lastName}</h2>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email">Email</label>
                                                <h1>{profile.email}</h1>
                                            </div>
                                            <div className="personal-info">
                                                <div>
                                                    <label htmlFor="city">City</label>
                                                    <input type="text" name='city' defaultValue={profile.city} />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone">Phone number</label>
                                                    <input type="number" name="phone" defaultValue={profile.phone} />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    {
                                        errorMessage && 
                                        <h3 className="error-message">{errorMessage}</h3>
                                    }
                                    
                                    <div className="edit-profile">
                                        <button 
                                            className='edit-profile-btn'
                                            disabled={navigation.state === 'submitting'}
                                        >
                                            {
                                                navigation.state === 'submitting' ?
                                                'Applying changes...' : 'Apply changes'
                                            }
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        )
                    }
                </Await>
            </Suspense>
        </section>
    )
}
