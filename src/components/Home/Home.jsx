import React, { useEffect, useRef } from 'react'
import blob from "../../assets/blob.svg"
import Navbar from "../Navbar/Navbar.jsx";
import pic from "../../assets/pic.jpeg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import github from "../../assets/github.gif"


function Home() {
  // gsap.registerPlugin(useGSAP);
  const hire=useRef(null)
  useGSAP(()=>{
gsap.to(".hire",{
y:200,

 duration:10,
  ease:"bounce.inOut"
})
  },{scope:hire})
  return <>
  <Navbar/>
    <div className='flex-col md:flex  ' id='home'>
      <img src={pic} alt=" my pic"  className='w-40 h-40  md:w-65 md:h-65  object-cover border-4 border-double rounded-t-4xl rounded-b-4xl relative left-[50%] translate-x-[-50%] top-40 md:relative md:left-[70%] md:top-14 z-50'/>
      <img src={blob} alt=" blob pic" width="100%" height="100%" className=' relative left-[90%] bottom-[300px]  translate-x-[-50%] md:absolute  md:left-[85%] md:bottom-[1px]'/>
      <div className='flex justify-between gap-2.5 absolute left-[60%] text-3xl top-[85%]'>
       
       <a href="https://wa.me/01026352025" target='_blank' rel='noopener noreferre'> <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
       <a href="https://github.com/Ebtisamsaid" target='_blank'> <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>
        <a href="https://github.com/Ebtisamsaid" target='_blank'> <img width="48" height="48" src={github} alt="github"/></a>
       
      </div>
 <div className=' m-4 absolute top-[20%]'>

 <h1 className='text-xl md:text-4xl font-bold my-2 '> Hello, I'm Ebtisam 👋 </h1>
 <p className='text-xl md:text-3xl my-2 ms-6 font-semibold'>  Full-Stack Developer  </p>
 <p className='text-xl md:text-3xl my-2 ms-24 font-semibold'>Backend node.js</p>
 <button  className= 'hover:scale-x-[1.2] hover:bg-[#08BDBA]  translate-0.5 absolute md:left-[30%] left-[70px] top-[255px] ms-4 mt-5 border-2 border-[#08BDBA] rounded-full p-2'> <a ref={hire} target='-blank' className='text-[#0e6968] font-medium text-2xl hire hover:text-white' href="https://drive.google.com/file/d/1Ga751jU_DSEVMO4UmPJIwDkIIHkJSuBW/view?usp=sharing">Hire Me </a></button>
 </div>
    </div>
  </>
}

export default Home