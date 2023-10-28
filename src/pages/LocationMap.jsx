import React from 'react'
import NumPlate from '../components/numPlateComps/NumPlate'
import MapComp from '../components/mapComps/MapComp'
import { useEffect } from 'react';

function LocationMap() {
  useEffect(() => {
    document.title = 'Aracım Nerede? - LocationFinder';
  }, []);
  return (
    <div className='h-screen  w-full   flex'>
      <div className='w-full  relative'>
        <div className=' absolute z-10  h-screen '>
          <NumPlate />
        </div>
        <div className=''>
          <MapComp />
        </div>
      </div>
    </div>
  )
}

export default LocationMap