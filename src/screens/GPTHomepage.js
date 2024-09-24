import React, { useEffect, useRef } from 'react';
import '../styles/GPTHomepage.css';
import object from '../assets/Web_Dev.png';
import backgroundVid from '../assets/Home_Video.mp4';
import TicTacToe from './TicTacToe';
import IntroCard from './Intro_Card';
import FallingBoxes from './Falling_Boxes';
import HTMLProj1 from './HTML_Proj_1';
import Social_Media from './Social_Media';
import { useNavigate } from 'react-router-dom';
import Netflix from './Netflix';
import AmaltaasWebsite from './AmaltaasWebsite';

function HomePage() {
  const boxesRef = useRef([]);

  let navigate = useNavigate();
  const routeChange = () => {
    let url = "https://omg2011.github.io/HTML_Project/";
    window.open(url, '_blank');
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('float-box');
        }
      });
    });

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      if (boxesRef.current) {
        boxesRef.current.forEach((box) => observer.unobserve(box));
      }
    };
  }, []);

  // JavaScript to add 'show' class when element is in viewport
  document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.body-content'); // Target the body content cards
    const windowHeight = window.innerHeight;

    elements.forEach(function (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) { // Adjust this threshold as needed
        element.classList.add('show'); // Add 'show' class when in view
      } else {
        element.classList.remove('show'); // Remove class when scrolled out of view
      }
    });
  });


  return (
    <div className='top'>
      {/* First Section */}
      <div className='first-div w-100' style={{ position: 'relative', height: '95vh' }}>
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
          <h1 style={{ fontSize: '100px', marginLeft: '50px', zIndex: '2' }}>Om Goyal</h1>
        </div>
      </div>

      {/* Body Content Section */}
      <div className='body-begin d-flex flex-column flex-lg-row p-2 w-100'>
        <div className='col-lg-6 col-12 body-content'>
          <IntroCard />
        </div>
        <div className='col-lg-6 col-12 body-content' onClick={routeChange}>
          <HTMLProj1 />
        </div>
      </div>

      {/* Games Section */}
      <div className='row m-2'>
        <div ref={(el) => (boxesRef.current[0] = el)} className='col-lg-3 col-12 p-4 body-content' style={{ border: '2px white solid', borderRadius: '20px', marginBottom: '20px' }}>
          <TicTacToe />
        </div>
        <div ref={(el) => (boxesRef.current[1] = el)} className='col-lg-3 col-12 p-4 body-content' style={{ border: '2px white solid', borderRadius: '20px', marginBottom: '20px' }}>
          <FallingBoxes />
        </div>
        <div ref={(el) => (boxesRef.current[0] = el)} className='col-lg-6 col-12 body-content' style={{ border: '2px white solid', borderRadius: '20px', marginBottom: '20px' }}>
          <Social_Media />
        </div>
      </div>

      <div className='body-begin d-flex flex-column flex-lg-row p-2 w-100'>
        <div ref={(el) => (boxesRef.current[0] = el)} className='col-lg-6 col-12 body-content' style={{ border: '2px white solid', borderRadius: '20px', marginBottom: '20px' }}>
          <Netflix />
        </div>
        <div ref={(el) => (boxesRef.current[0] = el)} className='col-lg-6 col-12 body-content' style={{ border: '2px white solid', borderRadius: '20px', marginBottom: '20px' }}>
          <AmaltaasWebsite />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
