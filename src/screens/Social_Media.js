import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HTML_Proj_1.css'; // We'll create this file for styling
import social_media from '../assets/Social_Media_Frontend.png'

function Social_Media() {
  let navigate = useNavigate();

  const routeChange = () => {
    window.location.href = 'https://omg2011.github.io/Social_Media/';
  };

  return (
    <div onClick={routeChange} className='h-100 w-100'>
      <img src={social_media} style={{ height: '100%', borderRadius: '10px', width: '100%' }} />
    </div>
  );
}

export default Social_Media;
