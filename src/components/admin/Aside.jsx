import React from 'react';

function Aside() {
    return (
        <div className='w-60 bg-black bg-opacity-30 h-full relative border-e border-red-600'>
            <ul>
                <li className='py-1 border-b flex justify-center hover:border-y border-red-600 text-red-600 font-bold '><a href='/admin/add'>Araç Ekle</a></li>
                <li className='py-1 border-b flex justify-center hover:border-y border-red-600 text-red-600 font-bold '><a href='/admin/update'>Araç Düzenle</a></li>
                <li className='py-1 border-b flex justify-center hover:border-y border-red-600 text-red-600 font-bold '><a href='/admin/list'>Araç Listesi</a></li>
            </ul>
            <div className='text-red-600 hover:cursor-pointer absolute bottom-0 left-0 right-0 text-center p-2 border-t-red-600 border-t '>
                Logout
            </div>
        </div>
    );
}

export default Aside;
