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
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" />
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                </div>

                <p>Already have an account? <Link to='/signup'>Login now</Link> </p>
                
                <button type="submit">Sign Up</button>
            </Form>
        </section>
    )
}
