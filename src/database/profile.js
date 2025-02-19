import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/config";

export async function getUser(id) {
    const userRef = doc(db, 'users', id)
    const userSnapshot = await getDoc(userRef)
    const userObject = {...userSnapshot.data(), id: userSnapshot.id}
    return userObject
}