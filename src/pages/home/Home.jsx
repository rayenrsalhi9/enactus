import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <section className="home">
            <h1>Connect, Chat, and Give Plastic a Second Life!</h1>
            <p>Join a community dedicated to recycling and sustainability. Chat with others, exchange plastics, and contribute to a greener future-one conversation at a time!</p>
            <Link to='/signup' className='home-button'>Find Nearby Plastics</Link>
        </section>
    )
}
