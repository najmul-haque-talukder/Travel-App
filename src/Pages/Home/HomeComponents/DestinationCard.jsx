import React from 'react'

const DestinationCard = () => {
  return (
    <div>
        <div>
            <div className='grid grid-cols-4 gap-10 mx-20 z-30 px-10 py-7 border border-gray-200 bg-white rounded-md -translate-y-15 shadow-xl text-center'>
                <div className='flex text-black items-center gap-2 px-20 py-5 bg-gray-100 rounded-md'>
                    <i class="fa-solid fa-location-dot"></i>
                    <select className='outline-none'>
                        <option value="">Dhaka</option>
                        <option value="">Cumilla</option>
                        <option value="">Sylhet</option>
                        <option value="">Chandpur</option>
                        <option value="">Chittagong</option>
                        <option value="">Khulna</option>
                        <option value="">Barishal</option>
                        <option value="">Rangpur</option>
                        <option value="">Rajsahi</option>

                    </select>
                </div>



                <div className='flex text-black items-center gap-2 px-20 py-5 bg-gray-100 rounded-md'>
                    <i class="fa-solid fa-person-hiking"></i>
                    <select className='outline-none'>
                        <option value="">Trip Types</option>
                        <option value="">Single Days</option>
                        <option value="">1 Days</option>
                        <option value="">2 days</option>
                        <option value="">One Nights</option>
                        <option value="">5 Star Rooms</option>
                        <option value="">3 Star Rooms</option>
                        <option value="">7 Star Rooms</option>
                    </select>
                </div>




                <div className='flex text-black px-20 items-center gap-2 py-5 bg-gray-100 rounded-md'>
                    <i class="fa-solid fa-money-bill-wave"></i>
                    <select className='outline-none'>
                        <option value="">20$ to 50$</option>
                        <option value="">50$ to 100$</option>
                        <option value="">100$ to 150$</option>
                        <option value="">150$ to 200$</option>
                        <option value="">200$ to 300$</option>
                        <option value="">300$ to 500$</option>
                        <option value="">500$ to 1000$</option>
                    </select>
                </div>



                <div className='flex text-white px-20 items-center gap-2 py-5 bg-amber-500 hover:bg-white border border-gray-200 hover:text-black duration-400 rounded-md'>
                    <p><i class="fa-solid fa-search"></i> Search </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default DestinationCard