import React from 'react'

function Plate(props) {
    return (
        <div className='sm:h-30 md:h-32 lg:h-28 xl:h-24 2xl:h-20 border-4 transform transition-transform hover:scale-105 my-3  w-[100%] border-black rounded-md  flex justify-center items-center font-bold'>
            <div className='w-full flex h-full '>
                <div className='bg-gray-300 rounded-md text-lg  text-black  h-auto w-[100%]  font-extrabold gap-2 text-[12px] '>

                    <div className='h-1/3'>
                        <span>{props.name} </span>
                    </div>

                    <div className='h-1/3'>
                        <span>{props.plate}</span>
                    </div>

                    <div className='h-1/3 '>
                        <span>{props.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plate