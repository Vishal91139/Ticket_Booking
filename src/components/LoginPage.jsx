import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
  }

  const [userName, setuserName] = useState('')
  const [signupEmail, setsignupEmail] = useState('')
  const [signupPswd, setsignupPswd] = useState('')
  const [loginEmail, setloginEmail] = useState('')
  const [loginPswd, setloginPswd] = useState('')

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={(e)=>submitHandler(e)} >
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input value={userName} onChange={(e)=>{setuserName(e.target.value)}} type="text" name="txt" placeholder="User name" required />
          <input value={signupEmail} onChange={(e)=>{setsignupEmail(e.target.value)}} type="email" name="email" placeholder="Email" required />
          <input value={signupPswd} onChange={(e)=>{setsignupPswd(e.target.value)}} type="password" name="pswd" placeholder="Password" required />
          <button>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={(e)=>submitHandler(e)} >
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input value={loginEmail} onChange={(e)=>{setloginEmail(e.target.value)}} type="email" name="email" placeholder="Email" required />
          <input value={loginPswd} onChange={(e)=>{setloginPswd(e.target.value)}} type="password" name="pswd" placeholder="Password" required />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
