import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
function NavRightMin() {
  return (
    <div>
         <div className='flex gap-5'>
           
            <a href='/login' className='hover:text-gray-500 duration-400 flex items-center' type="button">Giriş Yap</a>
            <a href='/register' className='border hover:text-gray-500 flex items-center hover:border-gray-400 duration-400 rounded-lg p-1 px-3' type="button">Kayıt Ol</a>
        </div>
    </div>
  )
}

export default NavRightMin