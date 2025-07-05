// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuMapPin, LuBed, LuBath, LuSquare } from "react-icons/lu";
const PropertyCard = ({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  sqft,
  imageUrl,
  forSale = true,
  className = "",
}) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${className}`}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* For Sale Badge */}
        {forSale && (
          <motion.div
            className="absolute top-4 left-4 bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>For Sale</span>
          </motion.div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <motion.h3
          className="text-2xl font-bold text-slate-800 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Location */}
        <motion.div
          className="flex items-center space-x-2 text-slate-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <LuMapPin className="w-4 h-4 text-red-500" />
          <span className="text-sm">{location}</span>
        </motion.div>

        {/* Property Details */}
        <motion.div
          className="flex items-center justify-between py-4 border-t border-slate-200 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {bedrooms > 0 && (
            <div className="flex items-center space-x-2 text-slate-600">
              <LuBed className="w-4 h-4" />
              <span className="text-sm font-medium">Bed {bedrooms}</span>
            </div>
          )}

          {bathrooms > 0 && (
            <div className="flex items-center space-x-2 text-slate-600">
              <LuBath className="w-4 h-4" />
              <span className="text-sm font-medium">Bath {bathrooms}</span>
            </div>
          )}

          <div className="flex items-center space-x-2 text-slate-600">
            <LuSquare className="w-4 h-4" />
            <span className="text-sm font-medium">
              {formatNumber(sqft)} sqft
            </span>
          </div>
        </motion.div>

        {/* Price */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-3xl font-bold text-slate-800">
            {formatPrice(price)}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.button
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          View More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
