import React from 'react'
import nest from "../../assets/nest-js-icon.svg"
import express from "../../assets/express-js-icon.svg"
import react from "../../assets/react-js-icon.svg"

function Projects() {
  return <>
<div className='projects   lg:w-full sm:translate-x-[15%] lg:translate-x-[5%] md:w-1/2  items-center mx-auto mt-3 '>

    <div className=' project1 md:w-[30%]  md:mb-[50px] md:min-w-[300px]  '>
        <div className='rounded-3xl shadow-gray-600 shadow-2xl md:w-[60%] mb-5'>
            <a target='_blank' href="https://github.com/Ebtisamsaid/e-commerce-node.js">
                <img src={nest} alt="nestjspicture" />
            </a>
        </div>
        <a target='_blank' href="https://github.com/Ebtisamsaid/e-commerce-node.js" className='text-l font-medium'>
            E-commerce Nest.js Backend
        </a>
    </div>

    <div className=' project2 md:w-[30%] md:mb-[50px]  md:min-w-[300px]   mt-9 md:mt-0'>
        <div className='rounded-3xl shadow-gray-600 shadow-2xl md:w-[60%] md:h-[90%] mb-5 '>
            <a target='_blank' href="https://github.com/Ebtisamsaid/job-app" className='relative'>
                <img   src={express} alt="expresspicture" />
            </a>
        </div>
        <a target='_blank' href="https://github.com/Ebtisamsaid/job-app" className='text-l font-medium'>
            Job app Express.js Backend
        </a>
    </div>

    <div className=' project3  md:w-[30%] md:mb-[50px]  md:min-w-[300px]    mt-9 md:mt-0'>
        <div className='rounded-3xl shadow-gray-600 shadow-2xl   md:w-[60%] md:h-[90%] mb-5'>
            <a target='_blank' href="https://github.com/Ebtisamsaid/social-app" className='relative '>
                <img src={express} alt="expresspicture" />
            </a>
        </div>
        <a target='_blank' href="https://github.com/Ebtisamsaid/social-app" className='text-l font-medium '>
            Social app Backend
        </a>
    </div>
    <div className=' project4 md:w-[30%] md:min-w-[300px] md:mb-[50px]   mt-9 md:mt-4 '>
        <div className='rounded-3xl shadow-gray-600 shadow-2xl  md:w-[60%] md:h-[90%] mb-5'>
            <a target='_blank' href="https://github.com/Ebtisamsaid/freshcart2" className=' w-[50%]'>
                <img src={react} alt="expresspicture" />
            </a>
        </div>
        <a target='_blank' href="https://github.com/Ebtisamsaid/social-app" className='[text-l font-medium '>
          E-commerce Reactjs
        </a>
    </div>

    
    

</div>


  </>
}
export default Projects