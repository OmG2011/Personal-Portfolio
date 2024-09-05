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
        <Route path='/' element={<GPTHomepage />} />
        <Route path='/CV' element={<Skillsets />} />
      </Routes>
    </div>
  );
}

export default portfolioRoutes; 