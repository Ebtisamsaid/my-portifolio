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
      <img src={pic} alt=" my pic"  className= 'pic xl:w-[30%] sm:w-[40%] sm:relative sm:top-[300px] sm:left-[50%] sm:translate-x-[-50%] lg:relative  object-cover border-4 border-double rounded-t-4xl rounded-b-4xl z-50'/>
      <img  src={blob} alt=" blob pic" width="100%" height="100%" className='blob 2xl:relative 2xl:bottom-[900px] xl:relative xl:bottom-[800px] lg:relative lg:left-[40%] lg:bottom-[730px] md:relative md:bottom-[550px] sm:relative sm:bottom-[440px] sm:left-[200px]  '/>
      <div className='social 2xl:right-[300px] 2xl:relative 2xl:bottom-[800px] 2xl:justify-center xl:relative xl:bottom-[460px] flex justify-between gap-2.5  text-3xl lg:relative lg:bottom-[300px]   mt-3 ms-2 m-2 '>
       
       <a href="https://wa.me/01026352025" target='_blank' rel='noopener noreferre'> <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
       <a href="https://github.com/Ebtisamsaid" target='_blank'> <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>
        <a href="https://github.com/Ebtisamsaid" target='_blank'> <img width="48" height="48" src={github} alt="github"/></a>
       
      </div>

<div className=' m-4 absolute top-[20%]'>

<h1 className='text-xl md:text-4xl font-bold my-2 '> Hello, I'm Ebtisam 👋 </h1>
<p className='text-xl md:text-3xl my-2 ms-6 font-semibold'>  Backend node.js Developer  </p>
{/* <p className='text-xl md:text-3xl my-2 ms-24 font-semibold '>Backend node.js</p> */}
</div>

 <button  className= 'button  2xl:relative 2xl:bottom-[900px] 2xl:left-[700px] xl:relative xl:bottom-[600px] xl:left-[280px] lg:relative lg:bottom-[450px] lg:left-[230px] md:relative md:left-[160px] sm:relative sm:bottom-[150px] z-40 sm:left-[100px]  hover:scale-x-[1.2] hover:bg-[#08BDBA] md:w-[30%] w-[50%] ms-4 mt-5 border-2 border-[#08BDBA] rounded-full p-2'> <a ref={hire} target='-blank' className='text-[#0e6968] font-medium text-2xl hire hover:text-white' href="https://drive.google.com/file/d/1Ga751jU_DSEVMO4UmPJIwDkIIHkJSuBW/view?usp=sharing">Hire Me </a></button>

    </div>
  </>
}

export default Home