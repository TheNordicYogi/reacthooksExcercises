import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(() =>{
    console.log("use Effect");
    window.addEventListener('resize', checkSize)
    return () =>{
      console.log("cleanup");
      window.removeEventListener('resize', checkSize)
    }
  },[size])
 
console.log('render');

  return <>
  <h1>window</h1>
  <h2>{size}</h2>
  </>
};

export default UseEffectCleanup;
