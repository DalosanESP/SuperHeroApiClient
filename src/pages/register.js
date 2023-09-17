import { Link } from 'react-router-dom';

function Register() {

  const continueWithGoogleButton = {
    'vertical-align': '5px',
  };

  const superHeroLogo = {
    color: 'white', 
    textAlign: 'center'
  }

  return (
    <div class="login-container">
        <div class="login-content">
            <h2 class="app-header-title" style={superHeroLogo}>Super<span>Hero.</span></h2>
            <br/>
            <form id="newUserForm" action="http://localhost:3000/newUser" method="POST">
                <div class="form-group">
                    <label for="text">Username</label>
                    <input type="text" id="username" name="username" required/>
                </div>
                <div class="form-group">
                    <label for="text">Email</label>
                    <input type="text" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                {/* <div class="form-group">
                    <label for="password">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                </div> */}
                <div class="toSignUp">
                    <p>Do you have an account? <Link to="/login">Sign In Here</Link></p>
                </div>
                <br/>
                <div class="buttonContainer">
                    <button type="submit"><span>Sign Up</span></button>
                </div>
            </form>
            <p class="forgot-password">-or-</p>
        </div>
        <div class="buttonContainer" onclick="redirectToGoogle()">
            <button type="submit">
                <span> <img src="https://img.freepik.com/iconos-gratis/google_318-278809.jpg?w=2000" alt=""/><e
                        style={continueWithGoogleButton}>Continue with Google</e></span>
            </button>
        </div>
    </div>
  )
}
export default Register;