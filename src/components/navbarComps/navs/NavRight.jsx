import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function NavRight() {
    const [search, setSearch] = useState("false")
    const toggleSearch = () => {
        setSearch(!search)
    }
    return (
        <div className='flex gap-5'>
            {
                search ? <div onClick={toggleSearch} className='flex items-center outline-none w-[300px] border rounded-lg h-9 p-2 opacity-70 focus:bg-white'>
                    <AiOutlineSearch size={24} />
                    <input className='outline-none w-[300px] bg-transparent rounded-2 h-9 p-2' type="text" placeholder='Search or jump to...' />
                </div> :

                    <div className='absolute left-0 p-2  w-11/12 bg-white border rounded-lg h-9 mx-16'>
                        <AiOutlineSearch size={24} color='black' />
                        <input className='outline-none absolute top-0 left-8 text-black  w-full bg-transparent rounded-2 h-9 p-2' type="text" placeholder='Search or jump to...' />
                    </div>

            }
            {
             search ?  ""  :  <div onClick={() => setSearch(true)} className='absolute left-0 top-20 h-full  w-full text-orange-500'> </div>
            }


            <a href='/login' className='hover:text-gray-500 duration-400 flex items-center' type="button">Giriş Yap</a>
            <a href='/register' className='border hover:text-gray-500 flex items-center hover:border-gray-400 duration-400 rounded-lg p-1 px-3' type="button">Kayıt Ol</a>
        </div>
    )
}

export default NavRight