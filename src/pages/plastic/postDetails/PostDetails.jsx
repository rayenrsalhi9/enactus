
import { Link } from 'react-router-dom'

import backArrow from '../../../assets/post-details/arrow-left.png'
import userIcon from '../../../assets/post-details/user.png'

import emailIcon from '../../../assets/post-details/email.gif'
import phoneIcon from '../../../assets/post-details/phone.gif'
import locationIcon from '../../../assets/post-details/location.gif'

import bottleIcon from '../../../assets/plastic-post/bottle.png'
import bagIcon from '../../../assets/plastic-post/bag.png'
import mixedIcon from '../../../assets/plastic-post/mixedMaterial.png'

import comment from '../../../assets/post-details/comment.svg'
import share from '../../../assets/post-details/share.svg'
import save from '../../../assets/post-details/save.svg'
import ellipsis from '../../../assets/post-details/ellipsis.svg'

import './PostDetails.css'

export default function PostDetails() {
    return (
        <section className="details">
            <div className="back-to-all-posts-link">
                <img src={backArrow} alt="back arrow" />
                <Link to='..' relative='path'>Back to all posts</Link>
            </div>
            <div className="details-content">
                <div className="user-details">
                    <h1 className='title'>Post Owner</h1>
                    <img src={userIcon} alt="user icon" className='user-icon' />
                    <h2>Essalhi Rayene</h2>
                    <div className="user-info">
                        <img src={emailIcon} alt="email icon" />
                        <p>rayen.rsalhi9@gmail.com</p>
                    </div>
                    <div className="user-info">
                        <img src={locationIcon} alt="location icon" />
                        <p>ElBassatine, ElKef</p>
                    </div>
                    <div className="user-info">
                        <img src={phoneIcon} alt="phone icon" />
                        <p>(+216) 92840380</p>
                    </div>
                    <button className='contact-user-btn'>Contact User</button>
                </div>
                <div className="post-details">
                    <h1 className='title'>Post details</h1>
                    <div className="post-info">
                        <img src={locationIcon} alt="location icon" />
                        <p>ElBassatine, ElKef</p>
                    </div>
                    <div className="post-info">
                        <p><b>Posted on : </b>22 février 2025 à 22:01:13 UTC+1</p>
                    </div>
                    <div className="post-info title">
                        <h2>Plastic bags to throw</h2>
                    </div>
                    <div className="post-info description">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid labore. Dolor, quas eius quod quaerat odio, sit similique libero, eos voluptatem maiores facilis omnis esse asperiores officia beatae porro?</p>
                    </div>
                    <div className="post-info quantites">
                        <div className="icon">
                            <img src={bottleIcon} alt="bottle icon" />
                            <p>Bottles</p>
                            <p className="quantity">21</p>
                        </div>
                        <div className="icon">
                            <img src={bagIcon} alt="bag icon" />
                            <p>Plastic Bags</p>
                            <p className="quantity">21</p>
                        </div>
                        <div className="icon">
                            <img src={mixedIcon} alt="mixed materials icon" />
                            <p>Other Materials</p>
                            <p className="quantity">21</p>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <button>
                            <img src={comment} alt="comment icon" />
                            Comment
                        </button>
                        <button>
                            <img src={share} alt="share icon" />
                            Share
                        </button>
                        <button>
                            <img src={save} alt="save icon" />
                            Save
                        </button>
                        <button>
                            <img src={ellipsis} alt="more options icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
