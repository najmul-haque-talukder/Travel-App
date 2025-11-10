import React from 'react';

const DestinationCard = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 -translate-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 bg-white border border-gray-200 rounded-md shadow-xl text-center p-5 md:p-7">
        
        {/* Location */}
        <div className="flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-gray-100 rounded-md text-black">
          <i className="fa-solid fa-location-dot"></i>
          <select className="outline-none w-full">
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

        {/* Trip Type */}
        <div className="flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-gray-100 rounded-md text-black">
          <i className="fa-solid fa-person-hiking"></i>
          <select className="outline-none w-full">
            <option value="">Trip Types</option>
            <option value="">Single Days</option>
            <option value="">1 Day</option>
            <option value="">2 Days</option>
            <option value="">One Night</option>
            <option value="">5 Star Rooms</option>
            <option value="">3 Star Rooms</option>
            <option value="">7 Star Rooms</option>
          </select>
        </div>

        {/* Budget */}
        <div className="flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-gray-100 rounded-md text-black">
          <i className="fa-solid fa-money-bill-wave"></i>
          <select className="outline-none w-full">
            <option value="">20$ to 50$</option>
            <option value="">50$ to 100$</option>
            <option value="">100$ to 150$</option>
            <option value="">150$ to 200$</option>
            <option value="">200$ to 300$</option>
            <option value="">300$ to 500$</option>
            <option value="">500$ to 1000$</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex justify-center items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-amber-500 hover:bg-white hover:text-black border border-gray-200 rounded-md transition-colors duration-300 text-white cursor-pointer">
          <p><i className="fa-solid fa-search"></i> Search</p>
        </div>

      </div>
    </div>
  );
};

export default DestinationCard;
