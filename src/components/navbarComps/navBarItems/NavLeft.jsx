import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'

function NavLeft() {
 
  return (
    <div >
        <a href='/' className='text-2xl divide-x flex items-center min-w-[350px]:text-md cursor-pointer'>
            <span className='text-red-600 px-2 font-semibold'><FaMapLocationDot /> </span>
            <span className='text-gray-300 px-2'>LocationFinder</span>
        </a>
    </div>
  )
}

export default NavLeft