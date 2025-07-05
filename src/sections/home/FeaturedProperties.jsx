import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { PropertyCard } from "../../components";

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState("View All");

  const tabs = ["View All", "Apartment", "Commercial", "Land Or Plot", "Farm"];

  const properties = [
    {
      id: "1",
      title: "Cozy Cottage",
      location: "39581 Rohan Estates, New York",
      price: 250800.0,
      bedrooms: 4,
      bathrooms: 2,
      sqft: 1500,
      imageUrl:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      forSale: true,
      type: "Apartment",
    },
    {
      id: "2",
      title: "Modern Villa",
      location: "42156 Sunset Boulevard, California",
      price: 850000.0,
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3200,
      imageUrl:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      forSale: true,
      type: "Apartment",
    },
    {
      id: "3",
      title: "Urban Loft",
      location: "789 Downtown Street, Chicago",
      price: 425000.0,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      imageUrl:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      forSale: true,
      type: "Commercial",
    },
    {
      id: "4",
      title: "Commercial Space",
      location: "123 Business District, Miami",
      price: 1200000.0,
      bedrooms: 0,
      bathrooms: 4,
      sqft: 5000,
      imageUrl:
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      forSale: true,
      type: "Commercial",
    },
    {
      id: "5",
      title: "Vacant Land",
      location: "456 Rural Road, Texas",
      price: 75000.0,
      bedrooms: 0,
      bathrooms: 0,
      sqft: 10000,
      imageUrl:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      forSale: true,
      type: "Land Or Plot",
    },
    {
      id: "6",
      title: "Farm Estate",
      location: "789 Country Lane, Montana",
      price: 350000.0,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2500,
      imageUrl:
        "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      forSale: true,
      type: "Farm",
    },
  ];

  const filteredProperties =
    activeTab === "View All"
      ? properties
      : properties.filter((property) => property.type === activeTab);
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Popular Properties Subtitle */}
            <motion.div
              className="flex items-center justify-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-red-500"></div>
                <span className="text-red-500 font-medium text-lg">
                  Popular Properties
                </span>
                <div className="w-8 h-0.5 bg-red-500"></div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Best Properties Sale
            </motion.h2>

            {/* Filter Tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-red-500 text-white shadow-lg"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {tab}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Property Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <PropertyCard {...property} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProperties.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-slate-400 text-lg">
                No properties found for "{activeTab}" category.
              </div>
            </motion.div>
          )}

          {/* View All Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Properties
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
