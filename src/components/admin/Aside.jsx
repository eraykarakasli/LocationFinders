import React from 'react';

function Aside() {
    return (
        <div className='w-full bg-black bg-opacity-30 h-12 flex items-center  relative border-b  border-red-600'>
            <ul className='flex w-full justify-center gap-10'>
                <li className='py-1  flex justify-center hover:border-y  text-red-600 font-bold '><a href='/admin/add'>Araç Ekle</a></li>
                <li className='py-1  flex justify-center hover:border-y  text-red-600 font-bold '><a href='/admin/update'>Araç Düzenle</a></li>
                <li className='py-1  flex justify-center hover:border-y  text-red-600 font-bold '><a href='/admin/list'>Araç Listesi</a></li>
            </ul>
            <div className='flex w-40 text-red-600 font-bold cursor-pointer'>
                Çıkış Yap
            </div>
        </div>
    );
}

export default Aside;
