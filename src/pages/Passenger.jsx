import React, { useState } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { GiSteeringWheel } from 'react-icons/gi'
import { TbStairsDown } from 'react-icons/tb'
import Plate from '../components/numPlateComps/Plate';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function Passenger() {
    const { id } = useParams()
    const [count, setCount] = useState(40);
    const plates = useSelector((state) => state.user)
    const userData = plates.find((user) => user.plate == id);
    const passengers = userData.passengers
    const firstSeats = passengers.slice(0, 8);
    const secondSeats = passengers.slice(8, 16)
    const thirdSeats = passengers.slice(16, 24)
    while (thirdSeats.length < 8) {
        thirdSeats.push('Boş');
    }
   // console.log(thirdSeats)



    return (
        <div className='h-screen w-[100%] '>
            <div className='text-white text-3xl m-4 px-20 font-semibold grid grid-flow-col justify-between'>
                <div className='min-w-[400px]'>
                    <div className='py-6'>
                        Yolcu Oturma Düzeni :
                    </div>
                    <div className='text-red-700'>
                        Şoför İsim: <span className='text-gray-200'>{userData.name}</span>
                    </div>
                    <div className='text-red-700'>
                        Şoför Tel. No:  <span className='text-gray-200'>{userData.phone}</span>
                    </div>

                </div>
                <div className='mt-6 min-w-[250px] '>
                    <span className=''>Plaka: </span>
                   <div> <button className='w-[100%n]' ><Plate plate={id} /></button></div>
                </div>

            </div>
            <div className='flex w-full justify-center'>
                <div className='border rounded-t-3xl min-w-[240px] w-1/5  h-[750px] flex justify-between'>
                    <div className='p-2'>
                        <div className='text-white ml-2 '>
                            <GiSteeringWheel size={62} />
                            <div className='border w-full mt-2'></div>
                        </div>
                        <div className=''>
                            {
                                firstSeats?.map((passenger, i) => (
                                    <div key={i} className='border h-16 w-16 mt-4 text-center text-green-400 grid  rounded-t-2xl'>
                                        <BsPersonFill size={32} className='flex justify-center w-full' />
                                        <span className=''>
                                            {passenger}
                                        </span>
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                    <div className=''>
                        <div className='text-white m-2  flex justify-center'>
                            <TbStairsDown size={62} />
                        </div>
                        <div className='flex '>
                            <div className='mr-2'>
                                {
                                    secondSeats?.map((passenger, i) => (
                                        <div key={i} className='border h-16 w-16 mt-4 text-center text-green-400 grid  rounded-t-2xl'>
                                            <BsPersonFill size={32} className='flex justify-center w-full' />
                                            <span className=''>
                                                {passenger}
                                            </span>
                                        </div>
                                    ))
                                }

                            </div>
                            <div className='mr-2'>
                                {
                                    thirdSeats?.map((passenger, i) => (
                                        <div key={i} className='border h-16 w-16 mt-4 text-center text-green-400 grid  rounded-t-2xl'>
                                            {
                                                passenger === "Boş" ?
                                                    <> <BsPersonFill color='gray' size={32} className='flex justify-center w-full' />
                                                        <span className='text-white'>
                                                            {passenger}
                                                        </span>
                                                    </>
                                                    :
                                                    <>
                                                        <BsPersonFill size={32} className='flex justify-center w-full' />
                                                        <span className=''>
                                                            {passenger}
                                                        </span>
                                                    </>
                                            }

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Passenger