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
        <div className='h-screen overflow-scroll'>
        <Aside />
        <div className='w-full flex justify-center'>
            <div className='w-[70%]  grid md:grid-cols-1 lg:grid-cols-2 '>
                <div className='grid-cols-1 max-w-[450px] grid h-80 w-[70%] placeholder:text-white mt-10 '>
                    <input className='border border-white bg-transparent outline-none rounded-xl my-2 placeholder:text-white text-red-600 pl-4' type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
                    <input className='border border-white bg-transparent outline-none rounded-xl my-2 placeholder:text-white text-red-600 pl-4' type="text" name="plate" value={user.plate} onChange={handleChange} placeholder="Plate" />
                    <input className='border border-white bg-transparent outline-none rounded-xl my-2 placeholder:text-white text-red-600 pl-4' type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" />
                    <input className='border border-white bg-transparent outline-none rounded-xl my-2 placeholder:text-white text-red-600 pl-4' type="text" name="vehicle" value={user.vehicle} onChange={handleChange} placeholder="Vehicle" />
                    <button className='border border-white bg-red-600 hover:bg-transparent rounded-xl my-2 outline-none text-gray-100 font-bold hover:text-red-600 duration-300' onClick={handleAddUser}>Add</button>
                </div>

                <div className='w-full'>
                    <div className='lg:w-[320px] md:w-[280px]  px-2 h-40  grid md:grid-cols-1 max-h-[90%]  gap-4 gap-y-8  overflow-scroll mt-5  '>
                        <Plate name={user.name} plate={user.plate} phone={user.phone} />
                    </div>
                    <div className='w-[300px] sm:w-[300px] px-2   max-h-[700px] h-auto overflow-scroll'>
                        {usersList.map((u, index) => (
                            <div className='flex    relative py-4 ' key={index}>
                                <div className=' w-[310px]'>
                                    <Plate className=" " name={u.name} plate={u.plate} phone={u.phone} />
                                </div>
                                <button className=' ' onClick={() => handleRemoveUser(index)}><CgRemove size={24} color='red' /> </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AdminUpdate