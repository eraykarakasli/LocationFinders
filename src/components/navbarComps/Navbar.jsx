import React from 'react'
import NavLeft from './navs/NavLeft'
import NavRight from './navs/NavRight'
import NavMid from './navs/NavMid'
import NavLeftMin from './navs/NavLeftMin'
import NavRightMin from './navs/NavRightMin'
function Navbar() {
  return (
    <div className='px-48 h-28   flex items-center  justify-between bg-gray-900 text-white'>
      <div className='flex justify-between w-full '>
        <NavLeft />
        <NavRight />
      </div>
      <div className='z-50 pr-80 bg-gray-900 w-full absolute xl:hidden h-28  flex items-center justify-between'>
          <NavLeftMin />
          <NavMid />
          <NavRightMin />
      </div>
    </div>
  )
}

export default Navbar