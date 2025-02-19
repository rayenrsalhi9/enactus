import { signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, googleProvider, db } from "../config/config";
import { getSignUpErrorMessage } from "./signupErrors";

export async function googleLogin(navigate) {
    try {
        const userData = await signInWithPopup(auth, googleProvider)
        const user = userData.user
        
        await setDoc(doc(db, "users", user.uid), {
            firstName: user.displayName.split(' ')[0],
            lastName: user.displayName.split(' ')[1],
            email: user.email,
            city: '',
            phone: ''
        })

        navigate('/profile')
        return null
    } catch(err) {
        return getSignUpErrorMessage(err.code)
    }
}