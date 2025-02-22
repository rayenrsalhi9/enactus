import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../config/config";
import { redirect } from "react-router-dom";

export async function shareNewPost(post) {
    const postsColloectionRef = collection(db, "posts")

    try {
        await addDoc(postsColloectionRef, {
            title: post.title,
            location: post.location,
            description: post.description,
            bottles: Number(post.bottles),
            bags: Number(post.bags),
            other: Number(post.other),
            userID: auth.currentUser.uid,
            createdAt: serverTimestamp()
        })
        return redirect('/plastic')
    } catch(err) {
        return err
    }
}