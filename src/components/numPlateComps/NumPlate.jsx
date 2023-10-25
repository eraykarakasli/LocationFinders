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

function NumPlate() {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filter)
    const [filterSearch, setFilterSearch] = useState("")
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

    return (
        <div className='text-white h-auto w-auto flex justify-center  mx-4 '>
            <div className='h-auto w-auto '>
                <div className='flex gap-5 justify-between'>
                    <div className='w-auto'>
                        <FilterComp />
                    </div>
                    <div className='flex items-center rounded-lg bg-white  w-auto '>
                        <input
                            onChange={handleChange}
                            className='w-full h-12 p-4 rounded-lg text-black outline-none  '
                            type="text"
                            placeholder='Arama Yapınız...'
                            value={filterSearch} />
                        <AiOutlineSearch color='black' size={28}/>
                    </div>
                </div>
                <div className='max-h-[750px] grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  md:h-[450px] lg:h-[650px] 2xl:h-[750px] gap-4 gap-y-8 h-[98%] overflow-scroll px-2 mt-5 '>
                    {filterPlate.map((plate, i) => (
                        <button
                            key={i}
                            onClick={() => dispatch(setCurrentLoc([plate.location[0], plate.location[1]]))}>
                            <Plate plate={plate.plate} />
                        </button>))}
                </div>
            </div>
        </div>
    )
}

export default NumPlate