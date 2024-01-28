import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [activeForm, setActiveForm] = useState('signIn');
  const [signInData, setSignInData] = useState({ username: '', password: '' });
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: '' });
  const showSignInForm = () => {
    setActiveForm('signIn');
    setSignInData({ username: '', password: '' }); // Clear sign-in form
  };
  const showSignUpForm = () => {
    setActiveForm('signUp');
    setSignUpData({ username: '', email: '', password: '', confirmPassword: '' }); // Clear sign-up form
  };
  const showForgotPasswordForm = () => {
    setActiveForm('forgotPassword');
    setForgotPasswordData({ email: '' }); // Clear forgot password form
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleForgotPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData({ ...forgotPasswordData, [name]: value });
  };
  const signIn = () => {
    // Check if username and password are filled
    if (!signInData.username || !signInData.password) {
      alert('Please fill in all fields!');
      return;
    }
    // Implement sign-in logic here (frontend only)
    console.log('Sign In button clicked');
    alert('Logged In Successfully!');
  };
  const signUp = () => {
    // Check if password and confirm password match
    if (signUpData.password !== signUpData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Check if all fields are filled
    for (const key in signUpData) {
      if (signUpData[key] === '') {
        alert('Please fill in all fields!');
        return;
      }
    }
    // Implement sign-up logic here (frontend only)
    console.log('Sign Up button clicked');
    alert('Successfully Registered!');
    setSignUpData({ username: '', email: '', password: '', confirmPassword: '' }); // Clear sign-up form
    showSignInForm(); // After successful registration, go back to sign-in form
  };
  const sendResetLink = () => {
    // Check if email is filled
    if (!forgotPasswordData.email) {
      alert('Please fill in your email!');
      return;
    }
    // Implement forgot password logic here (frontend only)
    console.log('Send Reset Link button clicked');
    alert('Reset Link Sent to Your Email!');
    setForgotPasswordData({ email: '' }); // Clear forgot password form
    showSignInForm(); // After sending reset link, go back to sign-in form
  };
  const renderForm = () => {
    switch (activeForm) {
      case 'signIn':
        return (
          <form>
            <h2>Sign In</h2>
            <label htmlFor="signInUsername">Username:</label>
            <input type="text" id="signInUsername" name="username" value={signInData.username} onChange={handleSignInChange} required />

            <label htmlFor="signInPassword">Password:</label>
            <input type="password" id="signInPassword" name="password" value={signInData.password} onChange={handleSignInChange} required />

            <button type="button" onClick={signIn}>Sign In</button>
            <p>Don't have an account? <span onClick={showSignUpForm} style={{ cursor: 'pointer', color: '#2196F3' }}>Sign Up</span></p>
            <p><span onClick={showForgotPasswordForm} style={{ cursor: 'pointer', color: '#2196F3' }}>Forgot Password?</span></p>
          </form>
        );
      case 'signUp':
        return (
          <form>
            <h2>Sign Up</h2>
            <label htmlFor="signUpUsername">Username:</label>
            <input type="text" id="signUpUsername" name="username" value={signUpData.username} onChange={handleSignUpChange} required />

            <label htmlFor="signUpEmail">Email:</label>
            <input type="email" id="signUpEmail" name="email" value={signUpData.email} onChange={handleSignUpChange} required />

            <label htmlFor="signUpPassword">Password:</label>
            <input type="password" id="signUpPassword" name="password" value={signUpData.password} onChange={handleSignUpChange} required />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={signUpData.confirmPassword} onChange={handleSignUpChange} required />

            <button type="button" onClick={signUp}>Sign Up</button>
            <p>Already have an account? <span onClick={showSignInForm} style={{ cursor: 'pointer', color: '#2196F3' }}>Sign In</span></p>
          </form>
        );
      case 'forgotPassword':
        return (
          <form>
            <h2>Forgot Password</h2>
            <label htmlFor="forgotEmail">Email:</label>
            <input type="email" id="forgotEmail" name="email" value={forgotPasswordData.email} onChange={handleForgotPasswordChange} required />

            <button type="button" onClick={sendResetLink}>Send Reset Link</button>
            <p>Remembered your password? <span onClick={showSignInForm} style={{ cursor: 'pointer', color: '#2196F3' }}>Sign In</span></p>
          </form>
        );
      default:
        return null;
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {renderForm()}
    </div>
  );
};

export default App;
