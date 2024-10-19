import React, { useState } from 'react';
import './Signup.css';
import phone_img from '../../assets/signup.png';
import profileImage from '../../assets/author1.jpg';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/actions/authActions'; // Import signup action from actions
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState(null); // Store the image file
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    termsAgreed: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Store the file itself for backend submission
    }
  };

  // Handle form submission
// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  if (formData.termsAgreed) {
    // Create FormData to handle image and other fields
    const userData = new FormData();
    userData.append('fullname', formData.fullname);
    userData.append('email', formData.email);
    userData.append('password', formData.password);
    userData.append('profilePic', image); // Append image file with the correct key
    
    // Dispatch signup action
    dispatch(signup(userData));
    
    // Navigate to login page
    navigate('/login');
  } else {
    alert('Please agree to the terms and privacy policy');
  }
};


  return (
    <div className='signup'>
      <div className='signup-left'>
        <h2>Social Media shared today, tomorrow or by location</h2>
        <div className='signup-img'>
          <img src={phone_img} alt="Signup visual" />
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
                src={image ? URL.createObjectURL(image) : profileImage}
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
              className='checkbox'
              type="checkbox"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={(e) =>
                setFormData({ ...formData, termsAgreed: e.target.checked })
              }
            />
            <label className='lbl-checkbox'>
              I agree to the <span>terms</span> and <span>Privacy policy</span>
            </label>
          </div>

          <button type="submit">Create account</button>
        </form>
        <p>Already have an account? <span onClick={() => navigate('/login')}>Log in</span></p>
      </div>
    </div>
  );
};

export default Signup;
