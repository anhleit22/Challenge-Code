import React, { useState } from 'react';
import './LoginPage.css';
import { loginWithCodePhone } from '../../api/login';

function LoginPage() {
    const [stateButtonSubmit, setStateButtonSubmit] = useState(false);
    const [phone, setPhone] = useState(null);
    const handleSubmitCallOTP = async ()=> {
        let res = await login();
        if(res.status == 200){
            setStateButtonSubmit(true)
        }else{
            setStateButtonSubmit(false)
        }
    }
    const handleSubmit = ()=> {
        setStateButtonSubmit(false)
    }
    const login = async () => {
        try {
          if(phone){
            let data = {
              phone: phone
            }
            const res = await loginWithCodePhone(data)
            if(res){
              return res;
            }
          }
        } catch (error) {
          console.log(error);
        }
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
                <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="text" className='phone-input'/>
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
