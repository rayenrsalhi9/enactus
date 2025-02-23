/* eslint-disable react-refresh/only-export-components */

import { Link, redirect, defer, Await, useLoaderData } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '../../../components/loading/Loading'

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

import { getPostDetails } from '../../../database/postDetails'
import { auth } from '../../../config/config'

import './PostDetails.css'

export function loader({params}) {
    return new Promise((resolve) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                resolve(redirect('/login?message=You have to log in to proceed'));
            } else {
                resolve(defer({ details: getPostDetails(params.id) }));
            }
            unsubscribe();
        });
    });
}

export default function PostDetails() {
    const detailsObject = useLoaderData()
    return (
        <Suspense fallback={<Loading />}>
            <Await resolve={detailsObject.details}>
                {
                    details => (
                        <section className="details">
                            <div className="back-to-all-posts-link">
                                <img src={backArrow} alt="back arrow" />
                                <Link to='..' relative='path'>Back to all posts</Link>
                            </div>
                            <div className="details-content">
                                <div className="user-details">
                                    <h1 className='title'>Post Owner</h1>
                                    <img src={userIcon} alt="user icon" className='user-icon' />
                                    <h2>{details.lastName} {details.firstName}</h2>
                                    <div className="user-info">
                                        <img src={emailIcon} alt="email icon" />
                                        <p>{details.email}</p>
                                    </div>
                                    <div className="user-info">
                                        <img src={locationIcon} alt="location icon" />
                                        <p>{details.city}</p>
                                    </div>
                                    <div className="user-info">
                                        <img src={phoneIcon} alt="phone icon" />
                                        <p>(+216) {details.phone}</p>
                                    </div>
                                    <button className='contact-user-btn'>Contact User</button>
                                </div>
                                <div className="post-details">
                                    <h1 className='title'>Post details</h1>
                                    <div className="post-info">
                                        <img src={locationIcon} alt="location icon" />
                                        <p>{details.location}</p>
                                    </div>
                                    <div className="post-info">
                                        <p>
                                            <b>Posted on : </b>{new Date(details.createdAt.seconds * 1000).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="post-info title">
                                        <h2>{details.title}</h2>
                                    </div>
                                    <div className="post-info description">
                                        <p>{details.description}</p>
                                    </div>
                                    <div className="post-info quantites">
                                        <div className="icon">
                                            <img src={bottleIcon} alt="bottle icon" />
                                            <p>Bottles</p>
                                            <p className="quantity">{details.bottles}</p>
                                        </div>
                                        <div className="icon">
                                            <img src={bagIcon} alt="bag icon" />
                                            <p>Plastic Bags</p>
                                            <p className="quantity">{details.bags}</p>
                                        </div>
                                        <div className="icon">
                                            <img src={mixedIcon} alt="mixed materials icon" />
                                            <p>Other Materials</p>
                                            <p className="quantity">{details.other}</p>
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
            </Await>
        </Suspense>
    )
}
