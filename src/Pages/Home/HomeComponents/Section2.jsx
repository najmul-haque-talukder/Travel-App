import useFetch from '../../../Hooks/useFetch';
import DataCart from './DataCart';

const Section2 = () => {
  const data = useFetch("/Database/destination.json");
  const cutData = data ? data.slice(0, 12) : [];

  return (
    <div className="relative bg-gray-200 py-16 md:py-24 px-4 md:px-10 lg:px-20">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="font-semibold text-purple-700 text-xl md:text-2xl">Most Popular Tour Packages</p>
        <p className="font-bold text-2xl md:text-3xl mt-2">Something Amazing Waiting For You</p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
        {cutData.map((item) => (
          <DataCart
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            duration={item.duration}
            price={item.price}
            label={item.label}
            labelBg={item.labelbg}
            discount={item.discount}
            discountBg={item.discountBg}
            image={item.image}
          />
        ))}
      </div>

      {/* Decorative Images */}
      <img
        src="/src/assets/icons/shape-1.png"
        alt=""
        className="absolute top-0 right-2 w-16 h-16 md:w-24 md:h-24"
      />
      <img
        src="/src/assets/icons/shape-2.png"
        alt=""
        className="absolute bottom-0 left-2 w-16 h-16 md:w-24 md:h-24"
      />

    </div>
  );
};

export default Section2;
