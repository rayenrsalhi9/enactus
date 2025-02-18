/* eslint-disable react-refresh/only-export-components */
import googleIcon from '../../assets/google-icon.png'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/config'
import { googleLogin } from '../../utils/googleLogin'

import { 
    Link, 
    Form, 
    useNavigation,
    useActionData, 
    useSearchParams,
    redirect,
    useNavigate
} from 'react-router-dom'

import { getSignUpErrorMessage } from '../../utils/signupErrors'

import './Signup.css'

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    try {
        await createUserWithEmailAndPassword(auth, email, password)
        return redirect('/profile')
    } catch (err) {
        return getSignUpErrorMessage(err.code)
    }
}

export default function Signup() {

    const navigation = useNavigation()
    const errorMessage = useActionData()
    const [searchParams] = useSearchParams()

    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        await googleLogin(navigate);
    };

    return (
        <section className='login-container'>
            <Form method='post' className='login' replace>

                <h1>Create an account</h1>

                {
                    searchParams && 
                    <h4 className='error-message'>
                        {searchParams.get('message')}
                    </h4>
                }

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

                <button disabled={navigation.state === 'submitting'}>
                    {
                        navigation.state === 'submitting' ?
                        'Signing in...' :
                        'Sign up' 
                    }
                </button>

                {errorMessage && <h4 className='error-message'>{errorMessage}</h4>}
            </Form>   
            <span>OR</span>
            <button className="google-login" onClick={handleGoogleLogin}>
                <img src={googleIcon} alt="google icon" />     
                Continue with Google
            </button>   
            <p>Already have a GreenT account ?<Link to=''>Login now</Link></p>
        </section>
    )
}
