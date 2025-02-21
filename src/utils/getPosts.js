import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/config'

export async function getPosts() {
    const postsCollectionRef = collection(db, "posts")

    try {
        const data = await getDocs(postsCollectionRef)
        const posts = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        return posts
    } catch (err) {
        return err
    }
}