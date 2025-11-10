import React from 'react'

const Section1 = () => {
  return (
    <div>
        <div className='py-7'>
            <div className='flex px-35 gap-10 mx-auto w-full justify-between'>
                <div>
                    <img src="/src/assets/images/ima-b-1.jpg" className='rounded-lg' />
                </div>


                <div className='text-center flex flex-col justify-center items-center'>
                    <img src="/src/assets/icons/logo-2.png" className='pb-5' />
                    <p className='text-2xl text-purple-700'>Most Popular Tour</p>
                    <p className='font-semibold text-4xl'>Let’s Discover The World With <br />Our Excellent Eyes</p>
                    <p></p>
                </div>


                <div>
                    <img src="/src/assets/images/img-b-2.jpg" className='rounded-lg'  />
                </div>
            </div>




            <div className='flex px-50 gap-5 mx-auto w-full justify-between items-start py-2'>
                <div className='pt-15'>
                    <img src="/src/assets/images/img-b-3.jpg" className='rounded-lg w-100 ' />
                </div>


                <div className='text-center flex flex-col justify-center items-center'>
                    <p className='text-gray-500 w-150 pb-5'>Whether you’re looking for a romantic getawaamily-friendly solo journey to explore the world, a travel agency can provide tailored itinerary that exceeds your expectations</p>
                    <button className="btn btn-primary px-5 py-2 text-lg"> Take a Tour <i className="fa-solid fa-arrow-right"></i> </button>
                </div>


                <div className='pt-15'>
                    <img src="/src/assets/images/img-b-4.jpg" className='rounded-lg w-100  '  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1