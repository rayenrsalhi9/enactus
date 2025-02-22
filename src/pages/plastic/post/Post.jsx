import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import bottle from '../../../assets/plastic-post/bottle.png'
import bag from '../../../assets/plastic-post/bag.png'
import mixedMaterial from '../../../assets/plastic-post/mixedMaterial.png'
import locationMark from '../../../assets/plastic-post/location.png'
import './Post.css'

export default function Post({ post }) {
    return (
        <Link to={`${post.id}`}>
            <div className='post'>
                <div className="title">
                    <h3> {post.title} </h3>
                    <div className="location">
                        <img src={locationMark} alt="location mark" />
                        <p>{post.location}</p>
                    </div>
                </div>
                <div className="content">
                    <p className="description">{post.description}</p>
                    <div className="icons">
                        <div className="icon">
                            <img src={bottle} alt="bottle icon" />
                            <p className="name">bottles</p>
                            <p className='quantity'>{post.bottles}</p>
                        </div>
                        <div className="icon">
                            <img src={bag} alt="bag icon" />
                            <p className="name">bags</p>
                            <p className='quantity'>{post.bags}</p>
                        </div>
                        <div className="icon">
                            <img src={mixedMaterial} alt="mixed materials icon" />
                            <p className="name">mixed materials</p>
                            <p className='quantity'>{post.other}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

Post.propTypes = {
    post: PropTypes.object
}