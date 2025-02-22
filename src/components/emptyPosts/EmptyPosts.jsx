import Lottie from 'lottie-react'
import animationData from '../../animations/noPosts.json'
import './EmptyPosts.css'

export default function EmptyPosts() {
    return (
        <section className="empty-posts">
            <Lottie 
                animationData={animationData}
                loop={true}
                className='no-posts-icon'
            />
            <h1>No posts here yet...</h1>
            <p>Be the first to share something in this section! Start the conversation and make your mark. 🚀</p>
        </section>
    )
}
