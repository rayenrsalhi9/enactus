import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '../../animations/lottieflow-404-12-3-000000-easey.json'
import './NotFound.css'

export default function NotFound() {
    return (
        <section className="not-found">
            <Lottie 
                animationData={animationData} 
                loop={true}
                style={{ width: 300, height: 300 }}
            />
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to='/'>Return to home page</Link>
        </section>
    )
}
