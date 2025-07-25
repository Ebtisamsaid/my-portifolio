import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import Skills from './components/skills/Skills'
import Projects from './components/myprojects/Projects'

function App() {

  return (
    <>

  <div className=" my-3 overflow-hidden bg-white w-[70%] h-[500px] p-4 rounded-lg shadow-md relative top-[150px] left-[50%] translate-x-[-50%]">
    <Home />
 
  </div>
  <h1 className=' text-4xl font-medium  translate-y-[600%] translate-x-[50%] hire  '>Skills</h1>
 <div className='overflow-hidden bg-white w-[75%] h-[550px] pb-4 rounded-lg relative  translate-y-[50%]  left-[50%] translate-x-[-50%]'>
 <Skills/>
 </div>
 <h1 className='overflow-hidden hire text-4xl font-medium translate-y-[750%] translate-x-[50%]'>My ptojects</h1>
<div id='projects' className=' bg-white w-[75%] h-[500px]   p-4 rounded-lg absolute  top-[230%]  left-[50%] translate-x-[-50%] '>
  <Projects/>
</div>
  
    </>
  )
}

export default App
