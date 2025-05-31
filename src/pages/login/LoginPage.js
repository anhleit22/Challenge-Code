import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
    const [stateButtonSubmit, setStateButtonSubmit] = useState(false);
    const handleSubmitCallOTP = ()=> {
        setStateButtonSubmit(true)
    }
    const handleSubmit = ()=> {
        setStateButtonSubmit(false)
    }
  return (
    <div className="body-container">
      <div className="profile-icon-placeholder">
        <i class="fa-regular fa-user icon-user"></i>
      </div>
      <h1>Welcome to Skipli AI</h1>
        {!stateButtonSubmit ? (
            <>
                <p className='login-note'>Enter a mobile phone number that you have access to. <br/> This number will be use to login to SkipliAI.</p>
                <div className="phone-input-container">
                <span >+1</span>
                <input type="text" className='phone-input'/>
                </div>
                <button onClick={handleSubmitCallOTP} className="send-code-button">Send Verification Code</button>
            </>
        ) : (
            <>
                <p>SkipliAI has sent an OTP code to: +1</p>
                <div className='phone-input-container'>
                <input type="text" placeholder="Enter your code here" className="phone-input" />
                </div>
                <button onClick={handleSubmit} className="send-code-button">Submit</button>
            </>
        )}
    </div>
  );
}

export default LoginPage;
