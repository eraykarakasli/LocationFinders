import React from 'react'
import Plate from '../components/numPlateComps/Plate'
import { useSelector, useDispatch } from 'react-redux'

function Plates() {
    const plates = useSelector((state)=> state.user)
    
    
    return (
        <div className='h-auto min-h-screen '>
            <div className='p-10 grid gap-6 overflow-auto xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>
                {
                    plates.map((plate, i) => (

                        <div key={i} className='relative flex items-center '>
                            <button className='w-[100%]'><Plate plate={plate.plate} /></button>
                            <a href={`/passengers/${plate.plate}`} className=' absolute opacity-0 hover:opacity-100 sm:h-16 md:h-24 lg:h-24 xl:h-24 2xl:h-16 border-4 transform transition-transform hover:scale-105 my-3 max-w-[350px] w-[100%] border-black rounded-md  flex justify-center items-center font-bold'>
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