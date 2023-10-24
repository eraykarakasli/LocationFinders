import React from 'react'
import NumPlate from '../components/numPlateComps/NumPlate'
import MapComp from '../components/mapComps/MapComp'
import FilterComp from '../components/mapComps/FilterComp'

function LocationMap() {
  return (
    <div className=' h-screen  justify-between w-[100%] pt-6  flex  '>
      
      <NumPlate />
      <MapComp />
    </div>
  )
}

export default LocationMap