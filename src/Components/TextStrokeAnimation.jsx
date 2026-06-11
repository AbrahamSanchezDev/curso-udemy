import React, { useRef } from 'react';

export default function TextStrokeAnimation({ text }) {
  const svgRef = useRef(null);

  const setAnimationName = (element, animationName) => {
    if (element) {
      element.style.animationName = animationName;
    }
  };

  const handleClick = () => {
    const textAnimation = svgRef.current;
    setAnimationName(textAnimation, "none");
    requestAnimationFrame(() => {
      setTimeout(() => setAnimationName(textAnimation, ""), 0);
    });
  };

  const theText = () => {
    return text ? text : "Worlds Dev!";
  };

  return (
    <>
      <main className='text-container'>
        <svg ref={svgRef} className='text-stroke' width="100%" height="100%">
          {/* Changed x="50%" and textAnchor="middle" to dynamically center the text 
            regardless of what screen size or word length is passed in.
          */}
          <text className='animation-text' x="50%" y="70%" textAnchor="middle">
            {theText()}
          </text>
        </svg>
      </main>
      <button className='reset' onClick={handleClick}>Reset the Animation</button>
    </>
  );
}