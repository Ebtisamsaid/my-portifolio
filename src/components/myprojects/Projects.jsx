import React from 'react'
import nest from "../../assets/nest-js-icon.svg"
import express from "../../assets/express-js-icon.svg"
import react from "../../assets/react-js-icon.svg"

function Projects() {
  return <>
<div className='flex flex-wrap  justify-between mx-auto mt-3 '>

    <div className='md:w-[30%] md:min-w-[300px]  ms-20 '>
        <div className='rounded-3xl shadow-gray-600 shadow-2xl w-[60%]'>
            <a target='_blank' href="https://github.com/Ebtisamsaid/e-commerce-node.js">
                <img src={nest} alt="nestjspicture" />
            </a>
        </div>
        <a target='_blank' href="https://github.com/Ebtisamsaid/e-commerce-node.js" className='text-l font-medium'>
            E-commerce Nest.js Backend
        </a>
    </div>

    <div className='md:w-[30%] md:min-w-[300px] ms-20 md:ms-0 mt-9 md:mt-0'>
        <div className='rounded-3xl shadow-gray-600 shadow-2xl md:w-[60%] md:h-[90%]  '>
            <a target='_blank' href="https://github.com/Ebtisamsaid/job-app" className='relative md:top-12'>
                <img   src={express} alt="expresspicture" />
            </a>
        </div>
        <a target='_blank' href="https://github.com/Ebtisamsaid/job-app" className='text-l font-medium'>
            Job app Express.js Backend
        </a>
    </div>

    <div className='w-[30%] min-w-[300px] ms-20 md:ms-0 mt-9 md:mt-0'>
        <div className='rounded-3xl shadow-gray-600 shadow-2xl  w-[60%] h-[90%] '>
            <a target='_blank' href="https://github.com/Ebtisamsaid/social-app" className='md:relative md:top-12'>
                <img src={express} alt="expresspicture" />
            </a>
        </div>
        <a target='_blank' href="https://github.com/Ebtisamsaid/social-app" className='text-l font-medium'>
            Social app Backend
        </a>
    </div>
    <div className='w-[30%] min-w-[300px] ms-20 mt-9 md:mt-0'>
        <div className='rounded-3xl shadow-gray-600 shadow-2xl  w-[60%] h-[90%] '>
            <a target='_blank' href="https://github.com/Ebtisamsaid/freshcart2" className=' w-[50%]'>
                <img src={react} alt="expresspicture" />
            </a>
        </div>
        <a target='_blank' href="https://github.com/Ebtisamsaid/social-app" className='text-l font-medium '>
          E-commerce Reactjs
        </a>
    </div>

    
    

</div>


  </>
}
export default Projects