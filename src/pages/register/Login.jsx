import googleIcon from '../../assets/google-icon.png'
import facebookIcon from '../../assets/facebook-icon.png'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    return (
        <section className='login-container'>
            <form method='post' className='login'>

                <h1>Sign in to your account</h1>

                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='email' 
                />

                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='password' 
                />

                <button>Login</button>
            </form>   
            <span>OR</span>
            <button className="google-login">
                <img src={googleIcon} alt="google icon" />     
                Continue with Google
            </button>     
            <button className="facebook-login">
                <img src={facebookIcon} alt="facebook icon" />
                Continue with Facebook
            </button>    
            <p>Dont have an account ?<Link to=''>Create an account now.</Link></p>
        </section>
    )
}
