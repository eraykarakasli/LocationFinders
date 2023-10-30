import React from 'react'
import { useSelector } from 'react-redux'
import Aside from '../../components/admin/Aside';
import { CgRemove } from 'react-icons/cg'
import { AiFillEdit } from 'react-icons/ai'

function AdminList() {
    const user = useSelector(state => state.user)
    const theme = useSelector(state => state.theme)
    console.log(theme)

    const handleEdit = (id) => {
        // Düzenleme işlemi için yapılacak işlemleri burada gerçekleştirin.
        console.log(`Düzenleme işlemi için ID: ${id}`);
    };

    const handleDelete = (id) => {
        // Kaldırma işlemi için yapılacak işlemleri burada gerçekleştirin.
        console.log(`Kaldırma işlemi için ID: ${id}`);
    };

    return (
        <div className='min-h-screen flex'>
            <div className=''>
                <Aside />
            </div>
            <div className={`${theme ? "text-white" : "text-black"} w-full bg-black bg-opacity-10 h-[80%] overflow-scroll`}>
                <div className='flex'>
                    <span className='w-1/12 border text-center '>ID</span>
                    <span className='w-4/12 border text-center'>İsim</span>
                    <span className='w-2/12 border text-center'>Araç</span>
                    <span className='w-2/12 border text-center'>Plaka</span>
                    <span className='w-2/12 border text-center'>Telefon</span>
                    <span className='w-1/12 border text-center'>Düzenle</span>
                    <span className='w-1/12 border text-center'>Çıkar</span>
                </div>
                {user.map((user, i) => (
                    <div key={i} className='flex '>
                        <span className='w-1/12 border border-red-600 text-center'>{i}</span>
                        <span className='w-4/12 border border-red-600 text-center'>{user.name}</span>
                        <span className='w-2/12 border border-red-600 text-center'>{user.vehicle}</span>
                        <span className='w-2/12 border border-red-600 text-center'>{user.plate}</span>
                        <span className='w-2/12 border border-red-600 text-center'>{user.phone}</span>
                        <span className='w-1/12 border border-red-600 text-center'>
                            <button onClick={() => handleEdit(item.id)}><AiFillEdit size={24} color='green' /></button>
                        </span>
                        <span className='w-1/12 border border-red-600 text-center'>
                            <button onClick={() => handleDelete(item.id)}><CgRemove color='red' size={24} /></button>
                        </span>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default AdminList