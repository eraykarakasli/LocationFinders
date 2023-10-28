import React from 'react'
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = 'Anasayfa - LocationFinder';
      }, []);
    return (
        <div className='h-screen'>
            <div className='flex justify-center h-[550px] mt-20'>
                {/* <img src="/src/assets/loc3.gif" alt="" /> */}
                <img src="https://i.giphy.com/media/WQZpXz8Y8eKgGIxrSP/giphy.webp" alt="" />
            </div>
            
        </div>
    )
}

export default Home