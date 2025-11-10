import React, { useEffect, useState } from 'react'
import useFetch from '../../../Hooks/useFetch'
import DataCard2 from './DataCard2'


const Section5 = () => {

    const [data, setData] = useState([])
    
    useEffect(()=>{
        fetch("/destination-2.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])


    const filterData = data? data.slice(0, 4) : []

  return (
    <div>
        <div className='py-20 bg-gray-100'>
            <div>
                <div className='text-center'>
                    <p className='text-purple-700 text-xl font-semibold pb-2'>Next Adventure Destination</p>
                    <p className='font-bold text-4xl pb-4'>Popular Travel Destinations <br />Available Worldwide</p>
                    <p className='text-lg text-gray-800 w-150 mx-auto'>Are you tired of the typical tourist destinations and looking to step out of your comfort zonetravel</p>
                </div>



                <div>
                    <div>
                        {
                            filterData.map(item=>(
                                // <DataCard2 key={item.id} id={item.id} location={item.location} img={item.image} />

                                <div>
                                    <div>
                                        <img src={item.image} />
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section5