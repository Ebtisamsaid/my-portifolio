import React from 'react'
import {Link} from "react-scroll"

function Navbar() {
  return <>
<div className=' container mx-auto relative z-50'>
<div className='flex  justify-between  div'>
    <div>
    <h1 className='text-3xl 2xl:text-4xl font-semibold hire logo'> <strong className='text-amber-700 text-4xl 2xl:text-5xl hire logo2'>dev </strong >Ebtisam</h1>
    </div>
    <div className='hidden md:flex menu1'> 
        <ul className='list-none flex justify-center 2xl:justify-around items-center '>
        <li className='text-2xl font-medium mx-2 2xl:text-4xl menu'><Link to='home' smooth={true} duration={600} className='cursor-pointer'>Home</Link> </li>
            <li className='text-2xl font-medium mx-2 2xl:text-4xl menu'> <Link to='skills' smooth={true} duration={500} className='cursor-pointer'>Skills</Link> </li>
            <li className='text-2xl font-medium mx-2 2xl:text-4xl menu'><Link to='projects' smooth={true} duration={500} className='cursor-pointer'>MyProjects</Link></li>
            {/* <li className='text-2xl font-medium mx-2'><Link to='Contact' smooth={true} duration={500} className='cursor-pointer'>Contact</Link></li> */}
        </ul>
            
      
    </div>

</div>
</div>

  </>
}

export default Navbar