import './AuthPage.css'

// LOGIN AND REGISTER
const TestPage = () => {

    return (
        <div className='main-container'>
            
            <div className="auth-container">
                <div className="register">
                    <form action="#">
                        <h1>Create Account</h1>
                        <input type="text" name="firstname" placeholder="First Name" required />
                        <input type="text" name="lastname" placeholder="Last Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <button>Sign Up</button>
                    </form>
                </div>

                <div className="login">
                    <form action="#">
                        <h1>Sign In</h1>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <a href="#">Forget your password?</a>
                        <button id="signIn">Sign in</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-left">
                            <h1>Welcome back!</h1>
                            <p>The only way to predict the future is to create it.</p>
                            <button>Sign In</button>
                        </div>
                        <div className="overlay-right">
                            <h1>Hey there!</h1>
                            <p>Enter your personal information and begin this exciting journey with us.</p>
                            <button id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage