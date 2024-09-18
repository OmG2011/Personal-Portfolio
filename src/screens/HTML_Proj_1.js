import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HTML_Proj_1.css'; // We'll create this file for styling

function HTMLProj1(props) {
  let navigate = useNavigate();
  
  const routeChange = () => {
    window.location.href = 'https://omg2011.github.io/HTML_Project/';
  };

  return (
    <div
      className="html-proj-card d-flex justify-content-center align-items-center h-100 flex-column me-2"
      onClick={routeChange}
    >
      <iframe
        style={{ height: '100%', width: '100%' }}
        src="https://omg2011.github.io/HTML_Project/"
        title="My Project"
      />
    </div>
  );
}

export default HTMLProj1;
