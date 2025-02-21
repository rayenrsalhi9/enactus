/* eslint-disable react-refresh/only-export-components */
import { Suspense } from 'react'
import Loading from '../../components/loading/Loading'
import { Await, defer, useLoaderData } from 'react-router-dom'
import Post from './post/Post'
import { getPosts } from '../../utils/getPosts'
import './Plastic.css'

export async function loader() {
    return defer({ posts: getPosts()})
}

export default function Plastic() {
    const postsObject = useLoaderData()
    
    return (
        <Suspense fallback={<Loading />}>
            <Await resolve={postsObject.posts}>
                {posts => (
                    <section className='plastic-container'>
                        <h1>Recent Plastic Reports</h1>
                        <div className="posts-container">
                            {posts.map(post => <Post key={post.id} post={post}/>)}
                        </div>
                    </section>
                )}
            </Await>
        </Suspense>
    )
}
