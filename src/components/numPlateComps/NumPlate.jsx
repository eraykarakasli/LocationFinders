import React from 'react'
import Plate from './Plate'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setLocation } from '../../redux/features/location/locationSlice'
import './plate.css'
import { AiOutlineSearch } from 'react-icons/ai'
import FilterComp from '../mapComps/FilterComp'
import { useState } from 'react'
import { useEffect } from 'react'
import { setCurrentLoc } from '../../redux/features/location/currentLocSlice'
import Buttons from '../comps/Buttons'

function NumPlate() {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filter)
    const [filterSearch, setFilterSearch] = useState("")
    const [plate, setPlate] = useState(false)
    const [filterPlate, setFilterPlate] = useState([])
    const user = useSelector(state => state.user)

    const handleChange = (e) => {
        setFilterSearch(e.target.value)
    }
    useEffect(() => {
        const filteredUsers = [];
        for (let index = 0; index < user.length; index++) {
            if (user[index].town == filter.town && user[index].vehicle == filter.vehicle) {
                filteredUsers.push(user[index]);
            } else if (user[index].town == filter.town && filter.vehicle == "hepsi") {
                filteredUsers.push(user[index]);
            } else if (filter.town == "hepsi" && filter.vehicle == "hepsi" && filterSearch == user[index].name) {
                filteredUsers.push(user[index]);
            } else if ((filter.town == "hepsi" && filter.vehicle == "hepsi" || filter.vehicle == "" || filter.town == "")
                && (user[index].name.toLowerCase().includes(filterSearch.toLowerCase())
                    || user[index].town.toLowerCase().includes(filterSearch.toLowerCase())
                    || user[index].plate.toLowerCase().includes(filterSearch.toLowerCase())
                    || user[index].phone.toLowerCase().includes(filterSearch.toLowerCase()))) {
                filteredUsers.push(user[index]);
            }
        }
        setFilterPlate(filteredUsers);
        dispatch(setLocation(filteredUsers))
        dispatch(setLoading(false))
    }, [filter, filterSearch])
    console.log(filterPlate)
    return (
        <div className=''>
            <div className='flex items-center pl-20 h-12 max-[430px]:pl-28  w-full ' onClick={()=> setPlate(!plate)}>
                <button className='text-gray-300 font-semibold border border-gray-400 hover:text-red-600 hover:border-red-600 duration-500 p-2 rounded-lg'>Araçları Görüntüle</button>
            </div>
            
            {plate &&
                <div>
                    <div className='text-white  pt-5  flex justify-center bg-[#232323] bg-opacity-80 h-screen'>

                        <div className=' w-96 '>
                            <div className='gap-5 justify-between px-4 '>
                                <div className='w-auto '>
                                    <FilterComp />
                                </div>
                                <div className='flex items-center rounded-lg bg-[#232323] bg-opacity-40  w-auto mt-2 border border-gray-400'>
                                    <input
                                        onChange={handleChange}
                                        className='w-full  h-12 p-4 rounded-lg text-white outline-none placeholder:text-white bg-[#626263] bg-opacity-20'
                                        type="text"
                                        placeholder='Arama Yapınız...'
                                        value={filterSearch} />
                                    <AiOutlineSearch color='white' size={28} />
                                </div>
                            </div>
                            <div className='px-10 grid md:grid-cols-1 max-h-[90%]  gap-4 gap-y-8 h-[80%] overflow-scroll mt-5 '>
                                {filterPlate.map((plate, i) => (
                                    <button
                                        key={i}
                                        onClick={() => (dispatch(setCurrentLoc([plate.location[0], plate.location[1]])), setPlate(false))}>
                                        <Plate plate={plate.plate} name={plate.name} phone={plate.phone} />
                                    </button>))}
                            </div>

                        </div>
                    </div>
                </div>
                }
        </div>
    )
}

export default NumPlate