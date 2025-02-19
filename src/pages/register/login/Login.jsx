/* eslint-disable react-refresh/only-export-components */
import googleIcon from '../../../assets/google-icon.png'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/config'
import { googleLogin } from '../../../utils/googleLogin'

import { 
    Link, 
    Form, 
    useNavigation,
    useActionData, 
    useSearchParams,
    redirect,
    useNavigate
} from 'react-router-dom'

import { getSignUpErrorMessage } from '../../../utils/signupErrors'

import './Login.css'

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

export default function Login() {

    const navigation = useNavigation()
    const errorMessage = useActionData()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        await googleLogin(navigate);
    };

    return (
        <section className="login-container">
            <Form method="post" className="login" replace>
                <h1>Sign In to Your Dashboard</h1>
                
                {
                    searchParams &&
                    <div id="error-message" className="error-message">{searchParams.get('message')}</div>
                }
                
                <div className="form-group">
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                
                <div className="form-group">
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
                
                <button 
                    type="submit" 
                    id="login-button"
                    disabled={navigation.state === 'submitting'}
                >
                    {
                        navigation.state === 'submitting' ?
                        'Logging in...' :
                        'Login'
                    }
                </button>
                
                {
                    errorMessage &&
                    <div id="submit-error" className="error-message">{errorMessage}</div>
                }
            </Form>
            
            <div className="divider">
                <span>OR</span>
            </div>
            
            <button className="google-login" onClick={handleGoogleLogin}>
                <img src={googleIcon} alt="Google icon" />
                Continue with Google
            </button>
            
            <p className="login-link">
                Dont have an account? <Link to="/signup">Create one now.</Link>
            </p>
        </section>
    )
}
