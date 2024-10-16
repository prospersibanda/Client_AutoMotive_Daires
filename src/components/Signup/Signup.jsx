import React, { useState } from 'react';
import './Signup.css';
import phone_img from '../../assets/signup.png';
import profileImage from '../../assets/author1.jpg'
import { useDispatch } from 'react-redux'; // Import useDispatch from Redux
import { signup } from '../../store/authReducer'; // Import signup action
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // For navigation after signup

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.termsAgreed) {
      dispatch(signup({ ...formData, profileImage: image })); // Dispatch signup action
      navigate('/login'); // Redirect to login after successful signup
    } else {
      alert('Please agree to the terms and privacy policy');
    }
  };

  return (
    <div className='signup'>
      <div className='signup-left'>
        <h2>Social Media shared today, tomorrow or by location</h2>
        <div className='signup-img'>
          <img src={phone_img} alt="" />
        </div>
      </div>

      <div className='signup-right'>
        <h2>AutoMotive Diaries</h2>
        <div className='head'>
          <h1>Create account</h1>
          <p>Every mile tells a Story</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="image-uploader">
            <div className="image-placeholder">
              <img
                src={image || profileImage}
                alt="Profile"
                className="profile-image"
              />
              <div className="edit-overlay">
                <label htmlFor="imageUpload">
                  <FaEdit className="edit-icon" />
                </label>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }} // Hide the file input button
                />
              </div>
            </div>
          </div>

          <div className='input-field'>
            <p>Full name*</p>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className='input-field'>
            <p>Email Address*</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='input-field'>
            <p>Password*</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="checkbox"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={(e) =>
                setFormData({ ...formData, termsAgreed: e.target.checked })
              }
            />
            <label>I agree to the <span>terms </span>and <span>Privacy policy</span></label>
          </div>

          <button type="submit">Create account</button>
        </form>
        <p>Already have an account? <span onClick={() => navigate('/login')}>Log in</span></p> {/* Navigate to login */}
      </div>
    </div>
  );
};

export default Signup;
