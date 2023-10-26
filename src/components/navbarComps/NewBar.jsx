import React, { useEffect, useState } from 'react'
import NavLeft from './navBarItems/NavLeft';
import NavRight from './navBarItems/NavRight';
import SocialMedia from './navBarItems/SocialMedia';


function Navbar() {

    return (
        <>
            <div className=''>
                <div className="flex  z-30   justify-between bg-black h-20 px-20 items-center w-full ">
                    <NavLeft />
                    <NavRight />
                </div>
            </div>
        </>
    )
}

export default Navbar