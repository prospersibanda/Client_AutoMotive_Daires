import React from 'react';
import errorImage from '../assets/404.png';
import './styles/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className='not-found'>
        <img src={errorImage} alt="" />
    </div>
  )
}

export default NotFoundPage