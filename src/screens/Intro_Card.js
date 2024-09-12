import React, { useState } from 'react';
import '../styles/Intro_Card.css';
const Intro_Card = () => {
  const [bgState, setBgState] = useState('video');
  const [button_text, setButton_Text] = useState("Stop Background!");

  const handleClick = () => {
    console.log(bgState, button_text)
    if (bgState === "bg-visible") {
      setBgState("bg-hidden")
      setButton_Text("Start Background!")
    }
    else {
      setBgState("bg-visible")
      setButton_Text("Stop Background!")
    }
  }

  return (
    <div className={`${bgState} d-flex justify-content-center align-items-center h-100 flex-column me-2`} style={{ border: '2px solid white', borderRadius: '20px'}}>
      <div className='d-flex' style={{ color: 'white' }}>
        <h1>I am </h1>
        <section class="animation">
          <div className="first"><h1>Om Goyal.</h1></div>
          <div className="second"><h1>a Web Developer!</h1></div>
          <div className="third"><h1>an Entrepreneur!</h1></div>
        </section>
      </div>
      <button onClick={handleClick}>{button_text}</button>
    </div>
  );
};

export default Intro_Card;
