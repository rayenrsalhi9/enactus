import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/config";
import { getSignUpErrorMessage } from "./signupErrors";

export async function googleLogin(navigate) {
    try {
        await signInWithPopup(auth, googleProvider)
        navigate('/profile')
        return null
    } catch(err) {
        return getSignUpErrorMessage(err.code)
    }
}