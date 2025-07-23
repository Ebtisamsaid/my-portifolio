import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import Skills from './components/skills/Skills'
import Projects from './components/myprojects/Projects'

function App() {

  return (
    <>

  <div className=" my-3 overflow-hidden bg-white w-[70%] h-[75%] p-4 rounded-lg shadow-md absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
    <Home />
 
  </div>
  <h1 className='text-4xl font-medium absolute left-[50%] translate-x-[-50%] top-[90%] hire'>Skills</h1>
 <div className=' bg-white w-[75%] h-[75%] p-4 rounded-lg absolute top-[140%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
 <Skills/>
 </div>
 <h1 className=' hire text-4xl font-medium absolute left-[50%] translate-x-[-50%] top-[190%]'>My ptojects</h1>
<div id='projects' className='bg-white w-[75%]  p-4 rounded-lg absolute  top-[200%]  left-[50%] translate-x-[-50%] '>
  <Projects/>
</div>
  
    </>
  )
}

export default App
