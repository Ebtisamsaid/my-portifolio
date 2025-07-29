import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import Skills from './components/skills/Skills'
import Projects from './components/myprojects/Projects'

function App() {

  return (
    <>

  <div className="container box flex-col justify-between gap-2 items-center mx-auto relative 2xl:left-[-13%] ">

  <div className="home my-3 overflow-hidden mx-auto  bg-white 2xl:w-[150%] xl:w-[100%]  xl:h-[600px] lg:w-[90%] lg:h-[600px] md:w-[70%] md:h-[500px] w-[70%] h-[500px] p-4 rounded-lg shadow-md relative top-[100px]   ">
    <Home />
 
  </div>
<div className="container flex-col justify-center">
<h1 className='skilltitle text-4xl font-medium  relative left-[40%] top-[120px]  2xl:left-[70%] sm:left-[40%]  md:left-[45%] hire  '>Skills</h1>
 <div className=' skills overflow-hidden mx-auto bg-white 2xl:w-[150%] xl:w-[100%] xl:h-[600px] lg:w-[90%] lg:h-[600px] md:w-[70%] md:h-[600px] w-[70%] h-[550px] pb-4 rounded-lg relative top-[150px]   '>
 <Skills/>
 </div>
</div>
<div className="container  relative right-[10%] top-[350px] lg:top-[100px] xl:top-[300px] ">
 <h1 className='projtiltle overflow-hidden hire text-4xl 2xl:text-6xl mx-auto font-medium absolute top-[-15%]  2xl:left-[75%] left-[40%] md:top-[-20%] 2xl:top-[-15%] md:left-[50%] lg:top-[30%] lg:left-[50%] xl:left-[50%] xl:top-[-30%] '>My ptojects</h1>
<div id='projects' className='proj  mx-auto overflow-hidden bg-white 2xl:w-[150%] xl:w-[100%] xl:h-auto lg:w-[90%] lg:h-auto md:w-[70%]  w-[70%] md:h-auto   p-4 rounded-lg relative top-[-80px] left-[10%] md:top-[-100px] md:left-[10%] lg:top-[200px]  xl:top-[-240px] '>
  <Projects/>
</div>
</div>
  </div>
  
    </>
  )
}

export default App
