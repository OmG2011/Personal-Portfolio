import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HTML_Proj_1.css'; // We'll create this file for styling
import HTML from '../assets/HTML_Web.png'

function HTMLProj1(props) {

  const routeChange = () => {
    window.location.href = 'https://omg2011.github.io/HTML_Project/';
  };

  return (
    <div onClick={routeChange} className='h-100 me-5 w-100'>
      <img src={HTML} style={{ height: '100%', borderRadius: '10px', width: '100%' }} />
    </div>
  );
}

export default HTMLProj1;
