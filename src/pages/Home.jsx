import React from 'react'
import { useEffect } from 'react';
import videoBg from '../assets/deneme.mp4'

function Home() {
    useEffect(() => {
        document.title = 'Anasayfa - LocationFinder';
    }, []);
    return (
        <div className='h-screen  '>
           
        </div>

    )
}

export default Home