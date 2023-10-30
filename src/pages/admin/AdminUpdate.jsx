import React, { useState } from 'react';
import Plate from '../../components/numPlateComps/Plate';
import Aside from '../../components/admin/Aside';
import { CgRemove } from 'react-icons/cg'
function AdminUpdate() {
    const [user, setUser] = useState({ name: "", plate: "", phone: "", vehicle: "" });
    const [usersList, setUsersList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleAddUser = () => {
        // Kullanıcıyı state listesine ekleyin
        setUsersList([...usersList, user]);

        // Kullanıcı bilgilerini sıfırlayın veya yeni bir kullanıcı oluşturun
        setUser({ name: "", plate: "", phone: "", vehicle: "" });
    };
    const handleRemoveUser = (index) => {
        // Kullanıcıyı state listesinden kaldırın
        const updatedUsersList = [...usersList];
        updatedUsersList.splice(index, 1);
        setUsersList(updatedUsersList);
    };


    return (
        <div className='h-screen flex'>
            <Aside />
            <div className='w-full flex justify-center gap-20'>
                <div className='grid-cols-1 grid h-80 w-[400px] placeholder:text-red-600 mt-10 '>
                    <input className='border border-red-600 bg-transparent outline-none rounded-xl my-2 placeholder:text-red-600 text-red-600 pl-4' type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
                    <input className='border border-red-600 bg-transparent outline-none rounded-xl my-2 placeholder:text-red-600 text-red-600 pl-4' type="text" name="plate" value={user.plate} onChange={handleChange} placeholder="Plate" />
                    <input className='border border-red-600 bg-transparent outline-none rounded-xl my-2 placeholder:text-red-600 text-red-600 pl-4' type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" />
                    <input className='border border-red-600 bg-transparent outline-none rounded-xl my-2 placeholder:text-red-600 text-red-600 pl-4' type="text" name="vehicle" value={user.vehicle} onChange={handleChange} placeholder="Vehicle" />
                    <button className='border border-red-600 bg-red-600 hover:bg-transparent rounded-xl my-2 outline-none text-gray-100 font-bold hover:text-red-600 duration-300' onClick={handleAddUser}>Add</button>
                </div>

                <div className=''>
                    <div className='w-[400px] px-10 grid md:grid-cols-1 max-h-[90%]  gap-4 gap-y-8  overflow-scroll mt-5  '>
                        <Plate name={user.name} plate={user.plate} phone={user.phone} />
                    </div>
                    <div className='w-[440px] px-10  max-h-[90%]  gap-4  h-[80%] overflow-scroll'>
                        {usersList.map((u, index) => (
                            <div className='flex gap-4 relative ' key={index}>

                                <div className='absolute w-[310px] '>
                                    <Plate plate={u.vehicle} />
                                </div>
                                <div className='hover:opacity-0 w-[310px]'>
                                    <Plate className=" " name={u.name} plate={u.plate} phone={u.phone} />
                                </div>
                                <button className=' ' onClick={() => handleRemoveUser(index)}><CgRemove size={24} color='red' /> </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminUpdate