import React, { useEffect, useState } from "react";

const images = [
  "/src/assets/images/img-1.jpg",
  "/src/assets/images/img-2.jpg",
  "/src/assets/images/img-3.jpg",
];

const SliderComponent = () => {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">

      {images.map((img, i) => {

        const zoomClass = (i % 2 === 0) ? "animate-zoom-in" : "animate-zoom-out";

        return (
          <img
            key={i}
            src={img}
            className={`
              absolute top-0 left-0 w-full h-full object-cover
              transition-opacity duration-1000
              ${i === index ? `opacity-100 ${zoomClass}` : "opacity-0"}
            `}
          />
        );
      })}

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 px-4">
        <p className="text-lg">* This offer valid till 22 August</p>
        <p className="text-5xl font-black underline">Maldivs Island</p>
        <p>when an unknown printer took ar galley offer type area<br />year anddey make specimen book</p>
        <p className="text-2xl pb-7">
          Booking Start From <span className="font-semibold text-3xl">$299/</span>night
        </p>

        <button className="btn btn-primary">
          Take a Tour <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

    </div>
  );
};

export default SliderComponent;
