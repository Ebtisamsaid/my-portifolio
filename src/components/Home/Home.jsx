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
    gsap.from(".pic",{
      opacity:0,
      x:50,
      duration:5,
      ease:"back"
    })
gsap.to(".button",{
y:10,
yoyo:true,

 duration:2,
 repeat:-1,
  ease:"power1"
}),
gsap.from(".title1",{
  opacity:0,
  y:100,
  duration:5,
  ease:"back"
}),
gsap.from(".title2",{
  opacity:0,
  y:100,
  delay:1.5,
  duration:5,
    ease:"back"
})

  },[])
  return <>
  <Navbar/>
    <div className=' md:flex sm:flex-col  ' id='home'>
      <img src={pic} alt=" my pic" loading='lazy' className= 'pic absolute 2xl:top-[25%] w-[150px] h-[150px]  2xl:w-[300px] 2xl:h-[300px] left-[50%] translate-x-[-50%] translate-y-[20px] sm:left-[50%] sm:top-[20%]   sm:translate-x-[-50%] sm:w-[150px] sm:h-[150px]  lg:w-[200px]  lg:h-[200px] lg:absolute lg:left-[75%] lg:top-[30%] object-cover border-4 border-double rounded-full z-50'/>
      <img  src={blob} alt=" blob pic" width="100%" height="100%" className='blob absolute left-[40%] top-[-15%]  xl:top-[-65%] xl:left-[60%] xl:w-[60%] md:left-[40%] sm:left-[60%] sm:top-[-30%] lg:left-[40%] lg:bottom-[-40%]  '/>
      <div/>
      <div className='social absolute top-[85%] left-[20%]  2xl:translate-x-[200px] 2xl:translate-y-[-30px]  xl:top-[80%] xl:left-[40%] sm:top-[80%] sm:left-[50%] lg:top-[70%] lg:left-[18%] flex  mt-3 ms-2 m-2 '>
       
       <a href="https://wa.me/01026352025" target='_blank' rel='noopener noreferre'> <img className='2xl:w-[100px] 2xl:h-[100px] icon' src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
       <a href="https://github.com/Ebtisamsaid" target='_blank'> <img className='2xl:w-[100px] 2xl:h-[100px] icon' src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>
        <a href="https://github.com/Ebtisamsaid" target='_blank'> <img className='2xl:w-[100px] 2xl:h-[100px] icon' src={github} alt="github"/></a>
       
      </div>

<div className='titles m-4 absolute 2xl:left-[20%] sm:top-[50%] lg:top-[30%] top-[45%]'>

<h1 className='title1 text-xl xl:text-7xl md:text-4xl font-bold my-2 '> Hello, I'm Ebtisam 👋 </h1>
<p className=' title2 text-xl md:text-3xl xl:text-5xl my-2 ms-6 font-semibold'>  Backend node.js Developer  </p>
{/* <p className='text-xl md:text-3xl my-2 ms-24 font-semibold '>Backend node.js</p> */}
</div>

 <button  className= 'button top-[70%] left-[25%] 2xl:top-[430px]   hover:scale-x-[1.2] hover:bg-[#08BDBA] xl:w-[300px] absolute md:left-[70px] sm:top-[76%] sm:left-[10%] lg:top-[55%] lg:left-[20%] ms-4 mt-5 border-2 border-[#08BDBA] rounded-full p-2'> <a ref={hire} target='-blank' className=' text text-[#0e6968] font-medium text-2xl hire hover:text-white 2xl:text-3xl' href="https://drive.google.com/file/d/1Ga751jU_DSEVMO4UmPJIwDkIIHkJSuBW/view?usp=sharing">Hire Me </a></button>

    </div>
  </>
}

export default Home