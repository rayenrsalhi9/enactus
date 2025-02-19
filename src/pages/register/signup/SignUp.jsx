import { Form, Link } from 'react-router-dom'
import './SignUp.css'

export default function SignUp() {
    return (
        <section className="signup">
            <Form method='post' className='signup-form'>
                <h1>Sign Up</h1>
                <p>Create your account to get started</p>
                
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" id="firstName" name="firstName" placeholder='first name' />
                    </div>
                    <div className="form-group">
                        <input type="text" id="lastName" name="lastName" placeholder='last name' />
                    </div>
                </div>
                
                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder='email'/>
                </div>
                
                <div className="form-group">
                    <input type="password" id="password" name="password" placeholder='password'/>
                </div>
                
                <div className="form-group">
                    <input type="text" id="city" name="city" placeholder='city'/>
                </div>
                
                <div className="form-group">
                    <input type="number" id="phone" name="phone" placeholder='phone number'/>
                </div>

                <p>Already have an account? <Link to='/login'>Login now</Link></p>
                
                <button type="submit">Sign Up</button>
            </Form>
        </section>
    )
}
