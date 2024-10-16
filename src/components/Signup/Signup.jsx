import React from 'react'
import './Signup.css'
import phone_img from '../../assets/signup.png'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup'>
        <div className='signup-left'>
            <h2>Social Media shared today, tomorrow or by location</h2>
            <div className='signup-img'>
              <img src={phone_img} alt="" />
            </div>
        </div>

        <div className='signup-right'>
          <h2>AutoMotive Daires</h2>
          <div className='head'>
            <h1>Create account</h1>
            <p>Every mile tells a Story</p>
          </div>
          <div className='input-field'>
            <p>Full name*</p>
            <input type="text" />
          </div>
          <div className='input-field'>
            <p>Email Address*</p>
            <input type="text" />
          </div>
          <div className='input-field'>
            <p>Password*</p>
            <input type="text" />
          </div>
          <div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">I agree to the <span>terms </span>and <span>Privacy policy</span></label>
            </div>
          </div>
          <button>Create account</button>
          <p>Already have an account? <span onClick={useNavigate('/login')}>Log in</span></p>
        </div>
    </div>
  )
}

export default Signup