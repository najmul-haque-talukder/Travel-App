import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className='w-full flex flex-col lg:flex-row bg-indigo-950 rounded-xl overflow-hidden'>

        <div className='w-full lg:w-auto'>
          <img 
            src="/src/assets/images/banner-img.jpg" 
            className='w-full lg:w-250 h-60 lg:h-auto object-cover'
          />
        </div>

        <div className='w-full mx-auto my-auto text-white text-center py-8 lg:py-0 px-4'>
          <p className='text-2xl font-semibold pb-2'>Enjoy Summer Deals</p>
          <p className='text-4xl font-bold pb-5'>Up to 40% Discount!</p>
          <button className="btn btn-primary px-5 py-2 text-lg">
            See Details <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Banner
