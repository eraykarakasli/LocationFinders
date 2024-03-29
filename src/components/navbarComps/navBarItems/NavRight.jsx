import React, { useState } from 'react'
import { useSelector } from 'react-redux';


function NavRight() {

    const theme = useSelector(state => state.theme)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="xl:hidden text-gray-400">
                <button onClick={toggleDropdown} className="text-xl rounded-lg focus:outline-none text-white bg-red-600 p-1 px-2   hover:bg-red-500">☰</button>
                {isDropdownOpen && (
                    <div className={`${theme ? " bg-white text-black" : "bg-white text-black"} absolute z-20 h-screen   w-full left-0 top-20 rounded-md shadow-md py-8 px-5`}>
                        <div className='grid place-items-start mt-6'>
                            <a href="/" className="flex text-red-500   py-2">Anasayfa</a>
                            <a href="/locationmap" className="flex hover:text-red-500   py-2">Aracım Nerede ?</a>
                            <a href='/plates' className="flex hover:text-red-500   py-2">Yolcular</a>
                            <a href="/contact" className="flex hover:text-red-500  py-2">İletişim</a>
                            <a href='/login' className="flex hover:text-red-500   py-2">Giriş yap</a>
                            <a href='/register' className="flex hover:text-red-500   py-2">Kayıt Ol</a>
                        </div>
                    </div>
                )}
            </div>

            <div className='max-[1280px]:hidden  text-white flex gap-12 text-sm font-bold h-28 items-center'>
                <a href='/' className='text-red-500 cursor-pointer' >Anasayfa</a>
                <a href='/locationmap' className='hover:text-red-500 duration-500'>Aracım Nerede?</a>
                <a href='/plates' className="flex hover:text-red-500 duration-500  py-2">Yolcular</a>
                <a className='hover:text-red-500 duration-500' href="/contact">İletişim</a>
                <div className='flex gap-3'>
                    <a href='/login' className="flex hover:text-red-500 duration-500  py-2">Giriş yap</a>
                    <a href='/register' className="flex  font-semibold border duration-500 border-white hover:text-red-600 hover:border-red-600 p-2 rounded-lg  py-2">Kayıt Ol</a>
                </div>
            </div>
        </div>
    )
}

export default NavRight