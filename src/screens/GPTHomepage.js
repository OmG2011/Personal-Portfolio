import React from 'react';
import '../styles/GPTHomepage.css';
import object from '../assets/Web_Dev.png';
import backgroundVid from '../assets/Home_Video.mp4';
import TicTacToe from './TicTacToe';
import Intro_Card from './Intro_Card';
// import Second_Card from './Second_Card';
import FallingBoxes from './Falling_Boxes';
import Skillsets from './Skillsets';
import HTML_Proj_1 from './HTML_Proj_1';

function HomePage() {

  return (
    <div className='top'>
      <div className='first-div w-100'>
        <video
          className='background-video'
          src={backgroundVid}
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: '10vh',
            left: 0,
            width: '100%',
            height: '90vh',
            objectFit: 'cover',
            zIndex: '0'
          }}
        />
        <div className='inner-div h-100' style={{ position: 'relative', zIndex: 1 }}>
          <img className='abstract' src={object} alt='Abstract Image' />
          <h1 style={{ fontSize: '100px', zIndex: 2, color: 'white', marginLeft: '50px' }}>Om Goyal</h1>
        </div>
      </div>

      <div className='body-begin d-flex flex-column flex-lg-row p-2 w-100'>
        <div className='col-lg-6 col-12 h-100'>
          <Intro_Card />
        </div>

        <div className='col-lg-6 col-12 h-100'>
          {/* <Second_Card /> */}
          <HTML_Proj_1 />
        </div>
      </div>

      <div className='row m-2'>
        <div className='col-lg-3 col-12 p-4' style={{ border: '2px white solid', borderRadius: '20px' }}>
          <TicTacToe />
        </div>
        <div className='col-lg-3 col-12 p-4' style={{ border: '2px white solid', borderRadius: '20px' }}>
          <FallingBoxes />
        </div>
      </div>
      <Skillsets />
    </div>
  );
}

export default HomePage;
