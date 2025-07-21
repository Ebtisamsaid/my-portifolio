import React from 'react'
import {Link} from "react-scroll"

function Navbar() {
  return <>
<div className=' container relative z-50'>
<div className='flex justify-between'>
    <div>
    <h1 className='text-3xl font-semibold hire'> <strong className='text-amber-700 text-4xl hire'>dev </strong >Ebtisam</h1>
    </div>
    <div className='hidden md:flex'> 
        <ul className='list-none flex justify-center items-center'>
        <li className='text-2xl font-medium mx-2'><Link to='home' smooth={true} duration={600} className='cursor-pointer'>Home</Link> </li>
            <li className='text-2xl font-medium mx-2'> <Link to='skills' smooth={true} duration={500} className='cursor-pointer'>Skills</Link> </li>
            <li className='text-2xl font-medium mx-2'><Link to='projects' smooth={true} duration={500} className='cursor-pointer'>MyProjects</Link></li>
            {/* <li className='text-2xl font-medium mx-2'><Link to='Contact' smooth={true} duration={500} className='cursor-pointer'>Contact</Link></li> */}
        </ul>
            
      
    </div>

</div>
</div>

  </>
}

export default Navbar