import { signInWithPopup } from "firebase/auth";
import { setDoc,getDoc, doc } from "firebase/firestore";
import { auth, googleProvider, db } from "../config/config";
import { getSignUpErrorMessage } from "./signupErrors";

export async function googleLogin(navigate) {
    try {
        const userData = await signInWithPopup(auth, googleProvider)
        const user = userData.user

        await saveUserToFirebase(user)

        navigate('/profile')
        return null
    } catch(err) {
        return getSignUpErrorMessage(err.code)
    }
}

async function saveUserToFirebase(user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
        // User does not exist, so create a new document
        await setDoc(userRef, {
            firstName: user.displayName ? user.displayName.split(' ')[0] : '',
            lastName: user.displayName ? user.displayName.split(' ')[1] : '',
            email: user.email,
            city: '',
            phone: ''
        });
}}