import React from 'react'

function Plate(props) {
    return (
        <div className='sm:h-16 md:h-24 lg:h-24 xl:h-24 2xl:h-16 border-4 transform transition-transform hover:scale-105 my-3 max-w-[350px] w-[100%] border-black rounded-md  flex justify-center items-center font-bold'>
            <div className='w-full flex h-full'>
                <div className='bg-gray-200 rounded-md text-black h-auto w-[100%] min-w-fit flex justify-center items-center  font-extrabold gap-2 text-[28px]'>
                    {props.plate}
                </div>
            </div>
        </div>
    )
}

export default Plate