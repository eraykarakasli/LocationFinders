import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiOutlineBars } from 'react-icons/ai'

function NavLeftMin() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <div>
        <div className="">
                <button onClick={toggleDropdown} className="text-md flex items-center focus:outline-none hover:text-gray-400 duration-500">
                    <AiOutlineBars size={28}/> <RiArrowDropDownLine size={28} />
                </button>
                {isDropdownOpen && (
                    <div className="absolute text-md  bg-slate-100 top-16 mt-1 w-36 bg-opacity-20 text-white border font-semibold border-white rounded-md shadow-md py-2 ">
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 1</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 2</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 3</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 4</a>
                        <a href="#" className="flex hover:text-blue-600  px-5 py-2">ITEM 5</a>
                    </div>
                )}
            </div> 
    </div>
  )
}

export default NavLeftMin