import React from 'react';
import '../styles/GPTHomepage.css';
import object from '../assets/Web_Dev.png';
import backgroundVid from '../assets/Home_Video.mp4';
import TicTacToe from './TicTacToe';
import IntroCard from './Intro_Card'
// import Second_Card from './Second_Card';
import FallingBoxes from './Falling_Boxes';
import Skillsets from './Skillsets';
import HTMLProj1 from './HTML_Proj_1';

function HomePage() {

  return (
    <div className='top'>
      {/* First Section */}
      <div className='first-div w-100' style={{ position: 'relative', height: '90vh' }}>
        <video
          className='background-video'
          src={backgroundVid}
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '0'
          }}
        />
        <div className='inner-div' style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1, height: '100%' }}>
          <img className='abstract' src={object} alt='abstract' />
          <h1 style={{ fontSize: '100px', marginLeft: '50px', zIndex: 2 }}>Om Goyal</h1>
        </div>
      </div>

      {/* Body Content Section */}
      <div className='body-begin d-flex flex-column flex-lg-row p-2 w-100'>
        <div className='col-lg-6 col-12'>
          <IntroCard />
        </div>
        <div className='col-lg-6 col-12'>
          {/* <Second_Card /> */}
          <HTMLProj1 />
        </div>
      </div>

      {/* Games Section */}
      <div className='row m-2'>
        <div className='col-lg-3 col-12 p-4' style={{ border: '2px white solid', borderRadius: '20px', marginBottom: '20px' }}>
          <TicTacToe />
        </div>
        <div className='col-lg-3 col-12 p-4' style={{ border: '2px white solid', borderRadius: '20px', marginBottom: '20px' }}>
          <FallingBoxes />
        </div>
      </div>

      {/* Skillsets Section */}
      <Skillsets />
    </div>
  );
}

export default HomePage;
