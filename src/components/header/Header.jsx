import { Link } from 'react-router-dom'
import login from '../../assets/login.svg'
import './Header.css'

export default function Header() {
    return (
        <header>
            <Link to='/' className='logo'>#GreenT</Link>
            <nav>
                <Link to=''>My Profile</Link>
                <Link to=''>Our mission</Link>
                <Link to=''>Find Plastics</Link>
                <Link to='login'>
                    <img src={login} alt="login icon" />
                </Link>
            </nav>
        </header>
    )
}