import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { PiSquaresFourBold } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";

const PropertyCard = ({
  image,
  type,        // "Rent" or "Sell"
  price,
  priceUnit,   // "/ month" or just "" (for Sell)
  title,
  location,
  area,
  beds,
  baths,
  garages,
}) => {
  return (
    <div className="rounded-3xl  bg-white overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          
        <img src={image} alt={title} className="w-full  object-cover transition duration-500 ease-in-out rounded-3xl hover:scale-[1.2] " />
        </div>
        <div className="absolute top-4 left-4 bg-white text-xs font-medium px-3 py-1 rounded-full shadow">
          {type}
        </div>
        <div className="absolute top-4 right-4 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          ${price} {priceUnit}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-0 space-y-2">
        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-black  Inter400">{title}</h3>
        <p className="text-sm text-black flex items-center gap-1">
          <MdLocationOn className="text-lg" />
          {location}
        </p>

        <div className="flex flex-wrap gap-2 text-sm text-black mt-3">
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
            <PiSquaresFourBold />
            {area} sqft
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
            <FaBed />
            {beds}
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
            <FaBath />
            {baths}
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
            <FaCar />
            {garages}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;