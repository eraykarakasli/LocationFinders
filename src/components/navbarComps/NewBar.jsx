import React, { useEffect, useState } from 'react'
import NavLeft from './navBarItems/NavLeft';
import NavRight from './navBarItems/NavRight';
import { useSelector } from 'react-redux';


function Navbar() {
    const theme = useSelector(state => state.theme)
    
    return (
        <>
            <div className='border-b border-red-600'>
                <div className={` ${theme ? "bg-gradient-to-r from-[#00ffdc] via-[#3f3f9f] to-[#1d5bbf] " : " bg-gradient-to-r from-[#ff0000] via-[#374344] to-[1d35bf]  "} flex gap-4  z-30   justify-between h-20 px-20 items-center w-full `} >
                    <NavLeft />
                    <NavRight />
                </div>
            </div>
        </>
    )
}

export default Navbar