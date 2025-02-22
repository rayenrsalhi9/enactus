import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../config/config'

export async function getPosts() {
    const postsCollectionRef = collection(db, "posts")

    try {
        const q = query(postsCollectionRef, orderBy("createdAt", "desc"))
        const data = await getDocs(q)
        const posts = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        return posts
    } catch (err) {
        return err
    }
}