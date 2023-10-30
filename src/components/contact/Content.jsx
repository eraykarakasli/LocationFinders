import React from 'react'
import FormContact from './FormContact'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import { useSelector } from 'react-redux'

function Content() {
    const theme = useSelector(state => state.theme)

    return (
        <div className=' h-auto '>
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

            <div className='w-full  xl:grid-cols-2 grid grid-cols-1 justify-items-center p-40 text-white justify-center '>
                <div className='2xl:min-w-[500px] w-[350px] h-[500px] py-10'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1515.7654114645816!2d34.953064739377254!3d40.551953619732664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4086d5542348b965%3A0x70ac7d1107eab66b!2sAras%20I%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1698337522810!5m2!1str!2str" className='w-full h-full rounded-lg'  ></iframe>
                    <div className='flex items-center gap-1 text-md font-thin justify-between text-red-600'>
                       <span className='flex items-center gap-1'> <AiOutlinePhone className='my-2' size={20}  /> <span><a href="tel:+900000000000">0(000) 000 00 00</a></span></span>
                       {/* /////Bu bağlantı, "destek@example.com" e-posta adresine bir e-posta göndermek için kullanılır. Kullanıcı bu bağlantıya tıkladığında, yerel e-posta istemcisinde yeni bir ileti oluşturmak için varsayılan e-posta istemcisini kullanabilir. */}
                       <span className='flex items-center gap-1'> <AiOutlineMail className='my-2' size={20}  /> <span></span><a href="mailto:destek@example.com">info@admin.com</a></span>

                        </div>
                </div>
                <div className=' 2xl:min-w-[500px] w-[350px] h-[500px]'>
                    <FormContact  />
                </div>
            </div>
        </div>
    )
}

export default Content