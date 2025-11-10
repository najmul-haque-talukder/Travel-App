import React from 'react';

const DataCart = ({
  id,
  title,
  location,
  duration,
  price,
  discountBg,
  label,
  labelBg,
  discount,
  image
}) => {
  return (
    <div>
      <div>
        <div key={id} className="relative">
          <div className="bg-white rounded-lg shadow-md hover:scale-102 duration-700 cursor-pointer">
            <img
              src={image}
              className="w-120 h-70 rounded-t-lg bg-cover"
              alt={title}
            />
            <div className="py-3 px-5 h-35">
              <p className="text-lg font-semibold py-1">{title}</p>
              <p>
                <i className="fa-solid fa-location-dot py-1"></i> {location}
              </p>
              <p>
                <i className="fa-solid fa-clock py-1"></i> {duration}
              </p>
            </div>
            <div className="flex justify-between items-end">
              <p className="py-4 px-6 text-white bg-indigo-700 rounded-bl-lg rounded-tr-2xl">
                <span className="text-2xl font-semibold">${price}</span>/person
              </p>
              <p className="py-5 px-4 cursor-pointer">View Details</p>
            </div>
            <div className="absolute top-4 left-0">
              <p className={`text-white ${labelBg} py-1 w-30 text-center rounded-r-full`}>
                {label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCart;
