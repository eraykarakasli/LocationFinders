import React from 'react'
import NumPlate from '../components/numPlateComps/NumPlate'
import MapComp from '../components/mapComps/MapComp'

function LocationMap() {
  return (
    <div className=' h-[1500px]  justify-between w-full pt-6  flex gap-10 '>
      <div className='w-full flex max-h-[850px]'>
        <div className='w-2/5'>
          <NumPlate />
        </div>
        <div className='w-3/5'>
          <MapComp />
        </div>
      </div>



    </div>
  )
}

export default LocationMap