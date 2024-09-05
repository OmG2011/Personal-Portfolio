import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from '../screens/HomePage.js'
import GPTHomepage from '../screens/GPTHomepage.js'
import Skillsets from '../screens/Skillsets';

function portfolioRoutes() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/Personal-Portfolio/' element={<GPTHomepage />} />
        <Route path='/Personal-Portfolio/cv' element={<Skillsets />} />
      </Routes>
    </div>
  );
}

export default portfolioRoutes; 