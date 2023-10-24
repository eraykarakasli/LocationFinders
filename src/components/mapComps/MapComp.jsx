import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

function MapComp() {
  const dispatch = useDispatch()
  const { filteredUsers, loading } = useSelector((state) => state.locat)
  const api = useSelector((state) => state.api)
  const [zoom, setZoom] = useState(6)
  const [defaultCenter, setDefaultCenter] = useState({ lat: 41.00994, lng: 28.625046 })
  const [newLocat, setNewLocat] = useState([])
  
  const mapStyles = {
    height: "100%",
    width: "100%"
  };
  const eventHandler = (xzoom) => {
    setZoom(xzoom)
  }

  useEffect(() => {
     const newLocations = []
   
    if (!loading) {
     // console.log(filteredUsers, "konumlar")

      for (let index = 0; index < filteredUsers.length; index++) {
        newLocations.push(filteredUsers[index])
      }
    }
    setNewLocat(newLocations)
    
  }, [loading, filteredUsers])
 // console.log(newLocat,"deneme")

  return (
    
    <div className=' w-[90%]   max-w-[70%]  text-white bg-gray h-[80%]  mr-10'>
      
      <div className='flex justify-between'>
        <div className='flex gap-3'>
          <span className='text-md font-semibold'>Current Location:</span>
          <span className='font-bold'>{location[0]}, {location[1]}</span></div>
        <div className=' flex gap-3 h-10 mb-1'>
          <button onClick={() => eventHandler(5)} className='border p-2 rounded-sm bg-white text-black '>x1</button>
          <button onClick={() => eventHandler(10)} className='border p-2 rounded-sm bg-white text-black'>x2</button>
          <button onClick={() => eventHandler(15)} className='border p-2 rounded-sm bg-white text-black'>x3</button>
          <button onClick={() => eventHandler(17)} className='border p-2 rounded-sm bg-white text-black'>x4</button>
          <button onClick={() => eventHandler(20)} className='border p-2 rounded-sm bg-white text-black'>x5</button>
        </div>

      </div>

      <LoadScript googleMapsApiKey={api.api}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={zoom}
          center={defaultCenter}
        >

          {
            newLocat?.map((user, i) => (
//
              <Marker key={i}
                position={{ lat: user.location[0], lng: user.location[1] }}
                icon={{
                  url: `${user.vehicle == "otobus" && "../../../public/blue-bus.png" || user.vehicle == "servis" && "../../../public/yellow-bus.png" || user.vehicle == "minibus" && "../../../public/green-bus.png"}`,
                 
                }}
              />
            ))
          }



        </GoogleMap>
      </LoadScript>
     
    </div >
  )
}


export default MapComp
