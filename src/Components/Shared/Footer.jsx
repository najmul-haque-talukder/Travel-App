import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div>
      <div className='bg-indigo-950 py-20 text-gray-300 '>
        <div className='flex items-start justify-between px-20 border-b border-gray-500 pb-7'>
          <div>
            <img src="/src/assets/icons/logo-white.png" className='pb-7' />
            <p className='w-80 pb-3'>Pharetra maecenas felisey vestibulum convallis mollis nullam congue sittle rivers of Finland Quebec.</p>


            <div className='flex'>
              <input type="text" placeholder='Enter your mail' className='outline-none py-3 px-7 bg-white text-gray-600 rounded-l-lg'  />
              <button className='bg-indigo-600 py-3 px-4 rounded-r-lg'><i className='fa-solid fa-arrow-right'></i></button>
            </div>

            <div className='flex gap-3 text-center pt-8'>
              <div className=' flex h-12 w-12 justify-center items-center rounded-full bg-white/50'>
                <i className=' text-white fa-brands text-center  fa-facebook text-2xl'></i>
              </div>

              <div className=' flex h-12 w-12 justify-center items-center rounded-full bg-white/50'>
                <i className=' text-white fa-brands text-center  fa-instagram text-2xl'></i>
              </div>

              <div className=' flex h-12 w-12 justify-center items-center rounded-full bg-white/50'>
                <i className=' text-white fa-brands text-center  fa-whatsapp text-2xl'></i>
              </div>

              <div className=' flex h-12 w-12 justify-center items-center rounded-full bg-white/50'>
                <i className=' text-white fa-brands text-center  fa-github text-2xl'></i>
              </div>

              <div className=' flex h-12 w-12 justify-center items-center rounded-full bg-white/50'>
                <i className=' text-white fa-brands text-center  fa-youtube text-2xl'></i>
              </div>
            </div>
          </div>


          <div>
            <p className='font-semibold text-white text-xl pb-7'>Quick Links</p>
            <ul>
              <Link to={"/"}><li className='pb-3 hover:text-white cursor-pointer'>Home</li></Link>
              <Link to={"/about"}><li className='pb-3 hover:text-white cursor-pointer'>About Us</li></Link>
              <Link to={"/contacts"}><li className='pb-3 hover:text-white cursor-pointer'>Contacts</li></Link>
              <Link to={"/blog"}><li className='pb-3 hover:text-white cursor-pointer'>Blog</li></Link>
              <Link to={"/destination"}><li className='pb-3 hover:text-white cursor-pointer'>Destination</li></Link>
            </ul>
          </div>



          <div>
            <p className='font-semibold text-white text-xl pb-7'>Information</p>
            <ul>
              <li className='pb-3 hover:text-white cursor-pointer'><i className='fa-solid fa-location-dot'></i> Rampura, Dhaka, Bangladesh</li>
              <li className='pb-3 hover:text-white cursor-pointer'><i className='fa-solid fa-phone'></i> +01611039425</li>
              <li className='pb-3 hover:text-white cursor-pointer'><i className='fa-solid fa-clock'></i> Mon – Sat: 8 am – 5 pm, Sunday: <span className='font-semibold'>CLOSED</span></li>
            </ul>
          </div>



          <div>
            <p className='font-semibold text-white text-xl pb-7'>Trip Pages</p>
            <ul>
              <li className='pb-3 hover:text-white cursor-pointer'>Trip</li>
              <li className='pb-3 hover:text-white cursor-pointer'>Packege</li>
              <li className='pb-3 hover:text-white cursor-pointer'>Destination</li>
              <li className='pb-3 hover:text-white cursor-pointer'>Discount</li>
              <li className='pb-3 hover:text-white cursor-pointer'>Hype</li>
              <li className='pb-3 hover:text-white cursor-pointer'>Wishlist</li>
            </ul>

          </div>
        </div>

        <p className='text-center pt-5 text-gray-400'>Copyright, Rights & Reversed by &copy; Najmul Haque Talukder</p>
      </div>
    </div>
  )
}

export default Footer