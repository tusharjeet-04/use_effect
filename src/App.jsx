import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const[widthCount,setWidthCount] = useState(window.screen.width)
  console.log(widthCount)

const updatedWidth = ()=>{
  console.log(window.innerWidth);
  setWidthCount(window.innerWidth)
}

useEffect(()=>{
  window.addEventListener('resize',updatedWidth)

  return()=>{
    window.removeEventListener('resize',updatedWidth)
  }
})
  return (
    <>
    <p>This is made by using useEffect, to see the changes please inspect, and apply mobile view</p>
    <p>The actual size of the window:</p>
    <h1>{widthCount}</h1>
    </>
  )
}

export default App