import googleIcon from '../../assets/google-icon.png'
import facebookIcon from '../../assets/facebook-icon.png'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/config'
import { Link, Form, useNavigation, redirect } from 'react-router-dom'
import './Login.css'

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    try {
        await createUserWithEmailAndPassword(auth, email, password)
        return redirect('/profile')
    } catch (err) {
        return err
    }
}

export default function Login() {

    const navigation = useNavigation()

    return (
        <section className='login-container'>
            <Form method='post' className='login'>

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

                <button disabled={navigation.state === 'submitting'}>Login</button>
            </Form>   
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
