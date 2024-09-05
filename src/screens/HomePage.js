import React, { useEffect, useRef, useState } from 'react';
import '../styles/HomePage.css'
// import useMousePosition from './MousePosition';
import axios from 'axios';
// import car from '../assets/car.gif'
import ReactCardFlip from 'react-card-flip';
import object from '../assets/Web_Dev.png'
// import bg from '../assets/Abstract_Background.jpeg'
import backgroundVideo from '../assets/Home_Background.mp4'
import backgroundVid from '../assets/Home_Video.mp4'
import object_2 from '../assets/Web_dev.gif'
import TicTacToe from './TicTacToe';


function HomePage() {
  const date = new Date();

  const [bgState, setBgState] = useState('video');
  const [button_text, setButton_Text] = useState("Stop Background!");
  // const mousePosition = useMousePosition();
  const [isInsideBox, setIsInsideBox] = useState(false);
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState([
    { "title": "England 2-1 Slovakia (Jun 30, 2024) Game Analysis" },
    { "title": "‘Two and a Half Men’ Alum Angus T. Jones Spotted In Rare Public Outing" },
    { "title": "Panthers celebrate Stanley Cup with parade and rally" }
  ])
  const [isFlipped, setIsFlipped] = useState(false)
  const [typingText, setTypingText] = useState('');
  const txt = 'Name: Om Goyal'; // The text
  const speed = 100; // The speed/duration of the effect in milliseconds

  const boxRef = useRef(null);

  const handleClick = () => {
    console.log(bgState, button_text)
    if (bgState === "video") {
      setBgState("picture")
      setButton_Text("Start Background!")
    }
    else {
      setBgState("video")
      setButton_Text("Stop Background!")
    }
  }

  const handleCardClick = () => {
    setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }))
    console.log(isFlipped)
  }

  const handleMouseMove = (e) => {
    if (boxRef.current && boxRef.current.contains(e.target)) {
      setIsInsideBox(true);
      console.log("Inside the Box", isInsideBox)
      const rect = boxRef.current.getBoundingClientRect();
      setLocalMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    } else {
      setIsInsideBox(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // API Key for News Articles. f31c5d2236724f26b0da498dbdb8d25d

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('https://api.thenewsapi.com/v1/news/top?api_token=MU0NJavg0McOlzqS4PIn4aYdlyaNErb1bHy7wJi1&locale=us&limit=3');
        setNews(response.articles);
      } catch (error) {
        console.error(error.message)
      }
      console.log(news)
      setLoading(false);
    }

    if (date.getMinutes() === 30 && date.getSeconds() === 0 && date.getMilliseconds() == 0) {
      fetchNews();
    }
  }, []);

  useEffect(() => {
    let i = 0;
    let typingInterval;

    const typeWriter = () => {
      if (i < txt.length) {
        setTypingText(prevText => prevText + txt.charAt(i));
        i++;
        typingInterval = setTimeout(typeWriter, speed);
      }
    };

    typingInterval = setTimeout(typeWriter, speed);

    // Cleanup function to clear the timeout
    return () => clearTimeout(typingInterval);
  }, []); // Empty dependency array ensures this runs only once


  return (
    <div className='top'>


      {/* <div className='first-div w-100'>
        <div className='inner-div h-100'>
          <img className='abstract' src={object} alt='Abstract Image' />
          <h1 style={{ fontSize: '100px', zIndex: 1 }}>Om Goyal</h1>
        </div>
      </div> */}

      <div className='first-div w-100'>
        {(
          <video
            className='background-video'
            // src={backgroundVideo}
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
        )}
        <div className='inner-div h-100' style={{ position: 'relative', zIndex: 1 }}>
          <img className='abstract' src={object} alt='Abstract Image' />
          <h1 style={{ fontSize: '100px', zIndex: 2, color: 'white', marginLeft: '50px' }}>Om Goyal</h1>
        </div>
        <h1 style={{ zIndex: '2', color: 'white' }}>Something</h1>
        <h1>Something-2</h1>
      </div>

      <div className='body-begin d-flex justify-content-center w-100 p-2 pb-0'>
        {/* <video className='background-video' src={background_vid} autoPlay muted loop /> */}
        <div className={`${bgState} col-lg-6 col-12 d-flex justify-content-center align-items-center h-100 me-1`}>
          <h1>I am </h1>
          <section class="animation">
            <div className="first"><h1>Om Goyal.</h1></div>
            <div className="second"><h1>a Web Developer!</h1></div>
            <div className="third"><h1>an Entrepreneur!</h1></div>
          </section>
          <button onClick={handleClick}>{button_text}</button>
        </div>

        <div className='col-lg-6 col-12'>
          <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' infinite>
            <div className='box_2 d-flex justify-content-center align-items-center' ref={boxRef} onClick={handleCardClick}>
              {!isInsideBox ? (
                <h1>Enter the Box!</h1>
              ) : (
                <p className='m-0' style={{ position: 'absolute', color: 'black', left: localMousePosition.x + 'px', top: localMousePosition.y + 20 + 'px', backgroundColor: 'white', borderRadius: '10px', padding: '4px', userSelect: 'none', overflow: 'hidden' }}>You can't escape me!</p>
              )}
            </div>
            <div className='box_2 d-flex justify-content-center align-items-center' onClick={handleCardClick}>
              <div style={{ fontSize: '24px' }}>
                {/* <p id='typing' data-text="Name: Om Goyal"></p> */}
                {/* <p className='typing' data-text="Age: 24 Years Old">Age: 24 Years Old</p>
                <p className='typing' data-text="Current Company: Plutocrat Simulations Tech Pvt. Ltd.">Current Company: Plutocrat Simulations Tech Pvt. Ltd.</p>
                <p className='typing' data-text='Role: Lead Developer'>Role: Lead Developer</p>
                <p className='typing' data-text='Looking for Opportunities in Full-Stack Development!'>Looking for Opportunities in Full-Stack Development!</p> */}
              </div>
            </div>
          </ReactCardFlip>
        </div>



        {/* <div className="box_2 d-flex justify-content-center align-items-center w-100" ref={boxRef} onClick={handleCardClick}>
          {!isInsideBox ? (
            <h1>Enter the Box!</h1>
          ) : (
            <p className='m-0' style={{ position: 'absolute', color: 'black', left: localMousePosition.x + 'px', top: localMousePosition.y + 20 + 'px', backgroundColor: 'white', borderRadius: '10px', padding: '4px', userSelect: 'none', overflow: 'hidden' }}>You can't escape me!</p>
          )}
        </div> */}


      </div>

      <div className='container-fluid '>
        <div className='row mt-3 d-flex justify-content-center'>
          <div className='col-lg-3 col-12 h-100 me-2' style={{ borderRadius: '10px', border: 'solid 1px white', width: '25%', minHeight: '20vh', overflow: 'auto ' }}>
            {/* <h1 className='m-0 mb-2' style={{ textAlign: 'center', color: 'white' }}>News Headlines!</h1>
            <ul style={{ color: 'white' }}>
              {news.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul> */}
            <TicTacToe />
          </div>
          <div className='hover_turn col-lg-3 col-12 h-100 me-2' style={{ borderRadius: '10px', border: 'solid 1px white', width: '23%' }}>
            <h1>Hello World!</h1>
          </div>
          {/* <div className='col-lg-3 col-12 h-100 me-2' style={{ borderRadius: '10px', border: 'solid 1px white', width: '23%' }}>
            <h1>Hello World!</h1>
          </div> */}
          <div className="flip-card col-lg-3 col-12" style={{ width: '23%' }}>
            <div className="flip-card-inner">
              <div className="flip-card-front " style={{ borderRadius: '10px', border: 'solid 1px white' }}>
                <h1>Hello World!</h1>
              </div>
              <div className="flip-card-back d-flex justify-content-center align-items-center h-100" style={{ borderRadius: '10px', border: 'solid 1px white' }}>
                <h1>BACKEND</h1>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-12 h-100 me-2' style={{ borderRadius: '10px', border: 'solid 1px white', width: '26%' }}>
            <p id='typing' style={{ fontSize: '32px', color: 'white' }}>{typingText}</p>
          </div>
        </div>
      </div>


      {/* <div className='smaller-cards d-flex w-100 justify-content-center p-2 h-100'>
        <div className='small_1 col-lg-3 col-sm-6 me-1 d-flex flex-column justify-content-center align-items-center'>
          <h1 className='m-0 mb-2' style={{ textAlign: 'center', color: 'white' }}>News Headlines!</h1>
          <ul style={{ color: 'white' }}>
            {news.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className='small_1 col-lg-3 col-sm-6 d-flex justify-content-center align-items-center me-1'>
          <h1 className='m-0'>2</h1>
        </div>
        <div className='small_1 col-lg-3 col-sm-6 d-flex justify-content-center align-items-center me-1'>
          <h1 className='m-0'>3</h1>
        </div>
        <div className='small_1 col-lg-3 col-sm-6 d-flex justify-content-center align-items-center'>
          <h1 className='m-0'>4</h1>
        </div>
      </div> */}

    </div >
  );
}

export default HomePage;