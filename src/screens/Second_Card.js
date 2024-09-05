import React, { useState, useRef, useEffect } from 'react';
import '../styles/Second_Card.css';
import ReactCardFlip from 'react-card-flip';

function Second_Card() {
  // State to manage if the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // State to track if the mouse is inside the box
  const [isInsideBox, setIsInsideBox] = useState(false);

  // State to track the mouse position within the box
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });

  // Reference to the box element
  const boxRef = useRef(null);

  // Handle card flip on click
  const handleCardClick = () => {
    setIsFlipped(prevState => !prevState);
  };

  // Handle mouse movement to track position inside the box
  const handleMouseMove = (e) => {
    if (boxRef.current && boxRef.current.contains(e.target)) {
      setIsInsideBox(true);
      const rect = boxRef.current.getBoundingClientRect();
      setLocalMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    } else {
      setIsInsideBox(false);
    }
  };

  // Add mousemove event listener to track mouse position globally
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='second_card_main_div' style={{ height: '100%'}}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front side of the card */}
        <div className="box_2 d-flex justify-content-center align-items-center" ref={boxRef} onClick={handleCardClick}>
          {!isInsideBox ? (
            <h1>Enter the Box!</h1>
          ) : (
            <p
              className="tooltip-text"
              style={{
                left: `${localMousePosition.x}px`,
                top: `${localMousePosition.y + 20}px`,
              }}
            >
              You can't escape me!
            </p>
          )}
        </div>

        {/* Back side of the card */}
        <div className="box_2 d-flex justify-content-center align-items-center" onClick={handleCardClick}>
          <div className="back-content">
            <h1>You've flipped the card!</h1>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Second_Card;
