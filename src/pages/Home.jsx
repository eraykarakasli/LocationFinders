import React from 'react'
import { useEffect } from 'react';
import videoBg from '../assets/deneme.mp4'

function Home() {
    useEffect(() => {
        document.title = 'Anasayfa - LocationFinder';
    }, []);
    return (
        <div className='h-screen  '>

            <section className='w-full h-full relative '>
               
                <h1 className='w-full h-full z-50 flex justify-center text-[250px] font-bold text-white mix-blend-multiply'>LocationFinder</h1>
            </section>
        </div>

    )
}

export default Home