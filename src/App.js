import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './assets/styles/login.module.css';
// import CryptoJS from 'crypto-js';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailOrUsername = document.getElementById('emailOrUsername').value;
    const password = document.getElementById('password').value;

    // const encryptData = (data, key) => {
    //   const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    //   return encryptedData;
    // };

    // const encryptionKey = 'b297b9b3641d990cd69bb96331fdea044982c23f4f9d2b4bbd612d6447846e22';

    // const dataToEncrypt = {
    //   emailOrUsername: emailOrUsername,
    //   password: password,
    // };

    // const encryptedData = encryptData(dataToEncrypt, encryptionKey);

    try {
      // const response = await fetch('http://127.0.0.1:3000/loginAuth', {
        const response = await fetch('https://superheroapiserver-oe55-dev.fl0.io/loginAuth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailOrUsername, password }),
      });
      if (response.ok) {
        setLoggedIn(true);
        navigate('/main');
      } else {
        console.log(response);
        alert('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred during authentication:', error);
      alert('An error occurred during authentication. Please try again later.');
    }

    if (loggedIn) {
      navigate('/main');
      return null;
    }
  }
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>
        Super<span>Hero.</span>
      </h2>
      <br />
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <label htmlFor="emailOrUsername">Username or email</label>
        <input type="text" id="emailOrUsername" name="emailOrUsername" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <div className={styles.toSignUp}>
          <p>
            Don't have an account yet? <Link to="/register">Sign Up Here</Link>
          </p>
        </div>
        <br />
        <div className={styles.buttonContainer}>
          <button type="submit">
            <span>Sign In</span>
          </button>
        </div>
      </form>
      <p className={styles.forgotPassword}>-or-</p>
      <div className={styles.buttonContainer}>
        {/* <button type="button" onClick={() => window.location.href = 'http://127.0.0.1:3000/auth/google'}> */}
          <button type="button" onClick={() => window.location.href = 'https://superheroapiserver-oe55-dev.fl0.io/auth/google'}>
          <span>
            <img className={styles.googleImg}
              src="https://img.freepik.com/iconos-gratis/google_318-278809.jpg?w=2000"
              alt=""
            />
            <abbr className={styles.continueWithGoogleButton}>Continue with Google</abbr>
          </span>
        </button>
      </div>
    </div>
  );
}
export default App;