import { doc, getDoc } from "firebase/firestore"
import { db } from "../config/config"
import { getUser } from "./profile"

export async function getPostDetails(postID) {

    // getting post details from database
    const postRef = doc(db, "posts", postID)
    const postSnapshot = await getDoc(postRef)
    const postObject = {...postSnapshot.data(), id: postSnapshot.id}
    //console.log(postObject)

    // getting user details from database
    const userObject = await getUser(postObject.userID)
    //console.log(userObject)

    // combining user and post details in one object
    const details = {...postObject, ...userObject}
    //console.log(details)
    //console.log(new Date(details.createdAt.seconds * 1000).toLocaleDateString())

    return details
}