import { Link, NavLink } from 'react-router-dom'
import login from '../../assets/login.svg'
import './Header.css'

export default function Header() {
    return (
        <header>
            <Link to='/' className='logo'>#GreenT</Link>
            <nav>
                <NavLink to='profile'>My Profile</NavLink>
                <NavLink to='about'>Our mission</NavLink>
                <NavLink to='plastic'>Find Plastics</NavLink>
                <Link to='signup'>
                    <img src={login} alt="login icon" />
                </Link>
            </nav>
        </header>
    )
}