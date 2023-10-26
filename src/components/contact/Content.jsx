import React from 'react'
import FormContact from './FormContact'

function Content() {
    return (
        <div className='bg-[#121212] h-auto '>
            <div className='bg-caravan  bg-no-repeat    w-auto'>
                {/* <div className='bg-black bg h-full  opacity-40'></div>
            
                <div className=' left-1/2 transform -translate-x-1/2 -mt-40 absolute'>
                    <p className='text-white font-bold text-3xl flex justify-center'>İLETİŞİM</p>
                    <div className='text-white font-semibold text-sm -mb-20 mt-10 flex gap-2  bg-black bg-opacity-30 p-4 px-8'>
                        <a className='hover:text-red-600' href="/">ANASAYFA</a> &#x276F; <p className='text-red-600'>İLETİŞİM</p>
                    </div>
                </div> */}

                <div>
                    <div className='text-white font-semibold -mb-20 flex gap-2 justify-center bg-black bg-opacity-30 p-4 px-8'>
                        <a className='hover:text-red-600 duration-500' href="/">Anasayfa</a> &#x276F; <p className='text-red-600'>İletişim</p>
                    </div>
                </div>
            </div>

            <div className='w-full  flex  p-40 text-white justify-center gap-20'>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1515.7654114645816!2d34.953064739377254!3d40.551953619732664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4086d5542348b965%3A0x70ac7d1107eab66b!2sAras%20I%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1698337522810!5m2!1str!2str" width="500" height="500" ></iframe>
                </div>
                <div>
                    <FormContact />
                </div>
            </div>
        </div>
    )
}

export default Content