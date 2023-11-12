import React from 'react'


export default function TextStrokeAnimation({text}) {

  const setAnimationName = (element, animationName) =>{
    if(element){
      element.style.animationName = animationName;
    }
  }

  const handleClick = () =>{
     const textAnimation = document.querySelector(".text-stroke");
     setAnimationName(textAnimation,"none");
     requestAnimationFrame(() =>{
      setTimeout(()=> setAnimationName(textAnimation,""),0);
     });
  }

  const theText = ()=>{
     return  text ? text:"Worlds Dev!";
  }
  return (
    <>
      <main className='text-container'>
        <svg className='text-stroke' viewBox='0 0 500 100' width="80%" height="100%">
          <text className='text' x="20" y="75">{theText()}</text>
        </svg>
      </main>
      <button className='reset' onClick={handleClick}>Reset the Animation</button>
    </>
  )
}
