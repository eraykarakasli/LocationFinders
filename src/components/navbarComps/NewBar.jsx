import React, { useEffect, useState } from 'react'
import NavLeft from './navBarItems/NavLeft';
import NavRight from './navBarItems/NavRight';
import { useSelector } from 'react-redux';


function Navbar() {
    const theme = useSelector(state => state.theme)
    console.log(theme, "theme")
    return (
        <>
            <div className='border-b border-red-600'>
                <div className={` ${theme ? "bg-black " : " bg-white "}flex  z-30   justify-between h-20 px-20 items-center w-full `} >
                    <NavLeft />
                    <NavRight />
                </div>
            </div>
        </>
    )
}

export default Navbar