import React from 'react'

const Section4 = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 gap-10 lg:gap-0'>
          
          <div className='w-full lg:w-1/2'>
            <p className='text-xl text-indigo-800 pb-2'>Dream Your next Trip</p>
            <p className='text-4xl font-semibold pb-4'>discover when even <br />you want to go</p>
            <p className='text-lg lg:w-150 pb-4'>
              Whether you’re looking for a romantic getawaamily-friendly solo journey to explore the world, 
              a travel agency can provide tailored itinerary that exceeds your expectations.
            </p>

            <div className='flex items-center gap-3 pb-6'>
              <i className="fa-solid fa-earth-americas text-blue-800 text-7xl"></i>
              <div>
                <p className='font-semibold text-2xl'>Best Travel Agency</p>
                <p>e you tired of the typical tourist destinatio and <br />looking step out of your comfort</p>
              </div>
            </div>

            <div className='flex items-center gap-3 pb-16'>
              <i className="fa-solid fa-suitcase-rolling text-blue-800 text-7xl"></i>
              <div>
                <p className='font-semibold text-2xl'>Secure Journey With Us</p>
                <p>Are you tired of the typical tourist destinatio and <br />looking step out of your comfort</p>
              </div>
            </div>

            <button className="btn btn-primary px-8 py-4 text-lg">
              Take a Tour <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className='w-full lg:w-auto flex items-center justify-center'>
            <div className='flex items-center'>
              <div className='translate-x-10 lg:translate-x-35'>
                <img src="/src/assets/images/section-b-2.png" alt="" className='w-40 sm:w-56 lg:w-auto' />
              </div>

              <div>
                <img src="/src/assets/images/section-b-1.jpg" className='rounded-lg w-48 sm:w-64 lg:w-auto' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section4
