import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdOutlineDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../../redux/features/location/themeSlice'

function NavLeft() {
  const dispatch = useDispatch()
 const theme = useSelector(state=> state.theme)

  const handleTheme = (event) => {
    event.preventDefault();
    dispatch(setTheme(!theme))
  }
  console.log(theme)
  return (
    <div className='flex items-center'>
      <a href='/' className='text-2xl divide-x flex items-center min-w-[350px]:text-md cursor-pointer' >
        <span className='text-red-600 px-2 font-semibold'><FaMapLocationDot /> </span>
        <span className='text-gray-400 px-2'>LocationFinder</span>
      </a>
      <button onClick={handleTheme}>
      {!theme ?   <MdOutlineDarkMode color='black' size={24} /> : <BsFillSunFill size={24} color='white'/>}
      </button>
    </div>
  )
}

export default NavLeft
