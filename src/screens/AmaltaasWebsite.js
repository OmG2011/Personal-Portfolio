import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HTML_Proj_1.css'; // We'll create this file for styling
import Amaltaas from '../assets/Amaltaas.png'

function AmaltaasWebsite() {  

  const routeChange = () => {
    window.location.href = 'https://omg2011.github.io/the_amaltaas_fort/index.html';
  };

  return (
    <div onClick={routeChange} className='h-100 w-100'>
      <img src={Amaltaas} style={{ height: '100%', borderRadius: '10px', width: '100%' }} />
    </div>
  );
}

export default AmaltaasWebsite;
