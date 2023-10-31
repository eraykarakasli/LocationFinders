import React from 'react'
import Plate from '../components/numPlateComps/Plate'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

function Plates() {
    const user = useSelector((state) => state.user)

    useEffect(() => {
        document.title = 'Araçlar - LocationFinder';
      }, []);
    return (
        <div className='h-auto min-h-screen '>
            <div className='text-white font-semibold flex gap-2 justify-center items-center bg-black bg-opacity-30 p-4 px-8'>
                <a className='hover:text-red-600 duration-500' href="/">Anasayfa</a> &#x276F; <p className='text-red-600 '>Araçlar</p>
            </div>
            <div className='p-10 grid gap-6 overflow-auto xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>
                {
                    user.map((plate, i) => (

                        <div key={i} className='relative flex items-center '>
                            <button className='w-[100%] '><Plate plate={plate.plate} name={plate.name} phone={plate.phone} /></button>
                            <a href={`/passengers/${plate.plate}`} className='w-[240px] absolute opacity-0 hover:opacity-100 sm:h-30 md:h-32 lg:h-28 xl:h-24 2xl:h-20 border-4 transform transition-transform hover:scale-105 my-3 max-w-[350px] border-black rounded-md  flex justify-center items-center font-bold'>
                                <div className='w-full flex h-full'>
                                    <div className='bg-gray-200 rounded-md text-center  text-black h-auto w-[100%] min-w-fit flex justify-center items-center  font-extrabold gap-2 text-2xl'>
                                        {plate.name}
                                    </div>
                                </div>
                            </a>
                        </div>



                    ))
                }
            </div>
        </div>
    )
}

export default Plates