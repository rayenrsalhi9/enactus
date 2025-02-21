import { signOut } from "firebase/auth";
import { auth } from "../config/config";

export async function signout(navigate) {
    try {
        await signOut(auth);
        navigate('/login?message=Logged out successfully.');
        return null
    } catch (error) {
        return error
    }
}