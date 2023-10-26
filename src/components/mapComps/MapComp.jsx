import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function MapComp() {
  const { filteredUsers, loading } = useSelector((state) => state.locat)
  const api = useSelector((state) => state.api)
  const [zoom, setZoom] = useState(17)
  const [newLocat, setNewLocat] = useState([])
  const current = useSelector((state) => state.current)

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
      for (let index = 0; index < filteredUsers.length; index++) {
        newLocations.push(filteredUsers[index])
      }
    }
    setNewLocat(newLocations)
  }, [loading, filteredUsers])

  return (
    <div className='w-full  text-white bg-[#0D0D0D] h-screen'>
      <div className='flex h-12 items-center justify-between pr-4 '>

        <div className='flex justify-end w-full max-[430px]:hidden '>
          <div className='w-1/3 '> </div>
          <div className='w-1/3 text-white pl-32 font-semibold flex gap-2   justify-center items-center bg-black bg-opacity-30  px-8'>
            <a className='hover:text-red-600 duration-500' href="/">Anasayfa</a> &#x276F; <p className='text-red-600 '>Aracım Nerede?</p>
          </div>

          <div className=' flex gap-3 h-10 mb-1 pr-16 w-1/3 justify-end font-semibold text-gray-300 '>
            <button onClick={() => eventHandler(5)} className='text-gray-300 font-semibold border duration-500 border-gray-400 hover:text-red-600 hover:border-red-600 p-2 px-3 rounded-lg  '>x1</button>
            <button onClick={() => eventHandler(10)} className='text-gray-300 font-semibold border duration-500 border-gray-400 hover:text-red-600 hover:border-red-600 p-2 px-3 rounded-lg '>x2</button>
            <button onClick={() => eventHandler(15)} className='text-gray-300 font-semibold border duration-500 border-gray-400 hover:text-red-600 hover:border-red-600 p-2 px-3 rounded-lg '>x3</button>
            <button onClick={() => eventHandler(17)} className='text-gray-300 font-semibold border duration-500 border-gray-400 hover:text-red-600 hover:border-red-600 p-2 px-3 rounded-lg '>x4</button>
            <button onClick={() => eventHandler(20)} className='text-gray-300 font-semibold border duration-500 border-gray-400 hover:text-red-600 hover:border-red-600 p-2 px-3 rounded-lg '>x5</button>
          </div>
        </div>

      </div>
      <LoadScript googleMapsApiKey={api.api}>
        <GoogleMap
          options={{
            mapTypeControl: false,
          }}
          mapContainerStyle={mapStyles}
          zoom={zoom}
          center={{ lat: current.currentLoc[0], lng: current.currentLoc[1] }}>
          {newLocat?.map((user, i) => (
            <Marker onClick={{}} key={i}
              position={{ lat: user.location[0], lng: user.location[1] }}
              icon={{
                url: `${user.vehicle == "otobus" && "../../../public/blue-bus.png"
                  || user.vehicle == "servis" && "../../../public/yellow-bus.png"
                  || user.vehicle == "minibus" && "../../../public/green-bus.png"}`
              }} />))}
        </GoogleMap>
      </LoadScript>
    </div >
  )
}


export default MapComp
