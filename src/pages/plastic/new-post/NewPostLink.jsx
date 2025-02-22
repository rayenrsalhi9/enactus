import addPost from '../../../assets/plastic-post/addPost.png'
import { Link } from 'react-router-dom'
import './NewPostLink.css'

export default function NewPostLink() {
    return (
        <section className="new-post-link-container">
            <Link to='/newPost' className='new-post-link'>
                <img src={addPost} alt="add post image" />
                <p>Got plastic waste? Create a now report...</p>
            </Link>
        </section>
    )
}
