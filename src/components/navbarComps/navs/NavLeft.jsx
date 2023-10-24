import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { FaMapLocationDot } from 'react-icons/fa6'

function NavLeft() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsDropdownOpen3(false);
        setIsDropdownOpen2(false);
    };

    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
        setIsDropdownOpen3(false);
        setIsDropdownOpen(false);
    };

    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
        setIsDropdownOpen2(false);
        setIsDropdownOpen(false);

    };

    return (
        <div className='flex gap-5 items-center'>
            <a href="/" className='text-xl font-bold '><FaMapLocationDot size={48} color='white' /></a>
            <div className="">
                <a href='/' onClick={toggleDropdown} className="text-md flex items-center  hover:text-gray-400 duration-500">
                    Anasayfa
                </a>
            </div>
            <div className="">
                <a href='/locationmap' className="text-md flex items-center  hover:text-gray-400 duration-500">
                    Konum Bul
                </a>
            </div>

            {/* <div className="">
                <button onClick={toggleDropdown2} className="text-md flex items-center focus:outline-none hover:text-gray-400 duration-500">
                    Solution <RiArrowDropDownLine size={28} />
                </button>
                {isDropdownOpen2 && (
                    <div className="absolute text-md  bg-slate-100 top-16 mt-1 w-36 bg-opacity-20 text-white border font-semibold border-white rounded-md shadow-md py-2 ">
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 1</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 2</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 3</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 4</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 5</a>
                    </div>
                )}
            </div> */}

            {/* <div className="">
                <button onClick={toggleDropdown3} className="text-md flex items-center focus:outline-none hover:text-gray-400 duration-500">
                    Open Source <RiArrowDropDownLine size={28} />
                </button>
                {isDropdownOpen3 && (
                    <div className="absolute text-md bg-opacity-20 text-white bg-slate-100 top-16 mt-1 w-36  border font-semibold border-white rounded-md shadow-md py-2 ">
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 1</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 2</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 3</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 4</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 5</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 6</a>
                    </div>
                )}
            </div> */}
            
            <a className='flex items-center hover:text-gray-400 duration-500' href="/plates">Yolcular</a>
        </div>
    )
}

export default NavLeft