import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HTML_Proj_1.css'; // We'll create this file for styling
import netflix from '../assets/Netflix.png'

function Netflix() {
  let navigate = useNavigate();

  const routeChange = () => {
    window.location.href = 'https://omg2011.github.io/Social_Media/';
  };

  return (
    <div onClick={routeChange} className='h-100 w-100'>
      <img src={netflix} style={{ height: '100%', borderRadius: '10px', width: '100%' }} />
    </div>
  );
}

export default Netflix;
