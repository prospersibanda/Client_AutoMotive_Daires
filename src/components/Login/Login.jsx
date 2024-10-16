import React from 'react'
import './Login.css'
import phone_img from '../../assets/signup.png'

const Login = () => {
  return (
    <div className='Login'>
        <div className='Login-left'>
            <h2>Social Media shared today, tomorrow or by location</h2>
            <div className='Login-img'>
              <img src={phone_img} alt="" />
            </div>
        </div>

        <div className='Login-right'>
          <h2>AutoMotive Daires</h2>
          <div className='head'>
            <h1>Login</h1>
            <p>Every mile tells a Story</p>
          </div>
          <div className='input-field'>
            <p>Email Address*</p>
            <input type="text" />
          </div>
          <div className='input-field'>
            <p>Password*</p>
            <input type="text" />
          </div>
          <div className='forgot'>
            <p>Forgot Password?</p>
          </div>
          <button>Login</button>
          <p>Don't have an account? <span>Sign up</span></p>
        </div>
    </div>
  )
}

export default Login