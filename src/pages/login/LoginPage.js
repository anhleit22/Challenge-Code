import React, { useState } from 'react';
import './LoginPage.css';
import { loginWithCodePhone, validateCode } from '../../api/login';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../LoginProvider';


function LoginPage() {
    const [stateButtonSubmit, setStateButtonSubmit] = useState(false);
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const { user, setUser, id , setID, phoneAPI ,setPhoneAPI } = useLogin();

    const navigate = useNavigate();

    const handleSubmitCallOTP = async ()=> {
        setLoading(true); 
        let res = await login();
        setLoading(false); 
        if(res && res.status == 200){
            setStateButtonSubmit(true)
        }else{
            setStateButtonSubmit(false)
        }
    }
    const handleSubmit = async ()=> {
      if(!code){
        alert('Please enter your code')
        return;
      }
       setLoading(true); 
       let res = await validatePhoneWithCode()
       if(res && res.status == 200){
        setUser(true);
        setID(res.data.data.id);
        setPhoneAPI(res.data.data.phone)
        navigate('/');
       }else{
          alert('Your code is incorrect')
          setUser(false);
       }
       setLoading(false); 
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
    const validatePhoneWithCode = async () => {
        try { 
          let data = {
            phone: phone,
            code: code
          }
          const res = await validateCode(data)
          if(res){
            return res;
          }
        } catch (error) {
          console.log(error);
        }
    }
  return (
    <div className="body-container">
      <div className="profile-icon-placeholder">
        <i className="fa-regular fa-user icon-user"></i>
      </div>
      <h1>Welcome to Skipli AI</h1>
        {!stateButtonSubmit ? (
            <>
                <p className='login-note'>Enter a mobile phone number that you have access to. <br/> This number will be use to login to SkipliAI.</p>
                <div className="phone-input-container">
                <span>+1</span>
                <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="text" className='phone-input'/>
                </div>
                <button onClick={handleSubmitCallOTP} className="send-code-button" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Verification Code'}
                </button>
            </>
        ) : (
            <>
                <p>SkipliAI has sent an OTP code to: +1 {phone}</p>
                <div className='phone-input-container'>
                <input onChange={(e)=>setCode(e.target.value)} value={code} type="text" placeholder="Enter your code here" className="phone-input" />
                </div>
                <button onClick={handleSubmit} className="send-code-button"> {loading ? 'Sending...' : 'Submit'}</button>
            </>
        )}
    </div>
  );
}

export default LoginPage;
