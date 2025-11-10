import React from 'react';

const Section1 = () => {
  return (
    <div className="py-7">

      {/* FIRST ROW */}
      <div className="flex flex-col lg:flex-row px-5 lg:px-35 gap-8 mx-auto w-full justify-between items-center lg:items-start">

        <div>
          <img
            src="/src/assets/images/ima-b-1.jpg"
            className="rounded-lg w-full max-w-xs lg:max-w-none"
          />
        </div>

        <div className="text-center flex flex-col justify-center items-center">
          <img src="/src/assets/icons/logo-2.png" className="pb-5 w-28 lg:w-auto" />
          <p className="text-purple-700 text-xl lg:text-2xl">Most Popular Tour</p>

          <p className="font-semibold text-2xl lg:text-4xl">
            Let’s Discover The World With <br className="hidden lg:block" /> Our Excellent Eyes
          </p>
        </div>

        <div>
          <img
            src="/src/assets/images/img-b-2.jpg"
            className="rounded-lg w-full max-w-xs lg:max-w-none"
          />
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="flex flex-col lg:flex-row px-5 lg:px-50 gap-8 mx-auto w-full justify-between items-center lg:items-start py-5">

        <div className="pt-0 lg:pt-15">
          <img
            src="/src/assets/images/img-b-3.jpg"
            className="rounded-lg w-full max-w-xs lg:max-w-[300px]"
          />
        </div>

        <div className="text-center flex flex-col justify-center items-center">
          <p className="text-gray-500 max-w-sm lg:max-w-[550px] pb-5">
            Whether you’re looking for a romantic getaway, family-friendly trip,
            or a solo journey to explore the world, a travel agency can provide a
            tailored itinerary that exceeds your expectations
          </p>

          <button className="btn btn-primary px-5 py-2 text-lg">
            Take a Tour <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="pt-0 lg:pt-15">
          <img
            src="/src/assets/images/img-b-4.jpg"
            className="rounded-lg w-full max-w-xs lg:max-w-[300px]"
          />
        </div>
      </div>

    </div>
  );
};

export default Section1;
