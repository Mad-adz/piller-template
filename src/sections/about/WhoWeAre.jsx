// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  LuMessageCircle,
  LuUsers,
  LuBriefcase,
  LuShield,
  LuPhone,
  LuBuilding,
  LuStar,
} from "react-icons/lu";

const WhoWeAre = () => {
  const services = [
    {
      icon: LuMessageCircle,
      title: "Quality Services",
      description: "Deals with issues in the exhaust system, ensuring",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: LuUsers,
      title: "Clients Feedback",
      description: "Ensuring the exhaust system deals issues properly.",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: LuBriefcase,
      title: "Space Belongings",
      description: "Ensuring that issues in the system are dealt with.",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: LuShield,
      title: "Personal Liability",
      description: "Exhaust system deals with all issues efficiency.",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
  ];
  return (
    <section className="py-16 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container">
        <div className="w-full px-2 sm:px-3 lg:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* <div className="relative w-full max-w-lg mx-auto lg:mx-0"> */}
              <div className="relative w-full grid grid-cols-12 gap-4 md:gap-6">
                <div className="col-span-3 flex flex-col gap-6">
                  {/* Top Left Image */}
                  <motion.div
                    // className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl shadow-lg z-10"
                    className="w-full h-32 md:h-40 overflow-hidden rounded-2xl shadow-lg z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="Modern Luxury House 1"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Top Right Image */}
                  <motion.div
                    // className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl shadow-lg z-10"
                    className="w-full h-32 md:h-40 overflow-hidden rounded-2xl shadow-lg z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="Modern Luxury House 2"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="col-span-6 relative h-full">
                  {/* Main Large Center Image with Pool */}
                  <motion.div
                    // className="relative mt-16 md:mt-20 mb-16 md:mb-20 mx-8 md:mx-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full h-full"
                  >
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl h-full">
                      <img
                        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                        alt="Main Property with Pool"
                        className="w-full h-80 md:h-120 object-cover"
                      />

                      {/* Circular Logo Overlay */}
                      {/* <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-red-500">
                        <div className="text-center">
                          <LuBuilding className="w-6 h-6 md:w-8 md:h-8 text-red-500 mx-auto mb-1" />
                          <div className="text-xs font-bold text-slate-800 leading-tight">
                            REAL ESTATE
                            <br />
                            <span className="text-red-500">LUBUILDING</span>
                          </div>
                        </div>
                      </div>
                    </motion.div> */}
                    </div>
                  </motion.div>
                </div>
                <div className="col-span-3 flex flex-col justify-end gap-6">
                  {/* Bottom Left Image */}
                  <motion.div
                    // className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl shadow-lg z-10"
                    className="w-full h-32 md:h-40 overflow-hidden rounded-2xl shadow-lg z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="Luxury Villa Interior"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Bottom Right Image */}
                  <motion.div
                    // className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl shadow-lg z-10"
                    className="w-full h-32 md:h-40 overflow-hidden rounded-2xl shadow-lg z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="Modern Architecture"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-0.5 bg-red-500"></div>
                    <span className="text-red-500 font-semibold text-lg uppercase tracking-wide">
                      Who We Are
                    </span>
                    <div className="w-8 h-0.5 bg-red-500"></div>
                  </div>
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Discover Our Luxury
                  <br />
                  Property, with Full
                  <br />
                  <span className="text-slate-600">Amenities</span>
                </motion.h2>

                <motion.p
                  className="text-slate-600 text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Simply scan the QR code on the right with your phone's camera,
                  then click the
                  <br />
                  prompt to open the app download page.
                </motion.p>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon
                        className={`w-6 h-6 ${service.iconColor}`}
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 space-y-6 sm:space-y-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.button
                  className="bg-slate-800 hover:bg-slate-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>More About Us</span>
                  <LuBuilding className="w-5 h-5" />
                </motion.button>

                <motion.div
                  className="text-right"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="text-sm text-slate-600 mb-1">
                        Free Consulting
                      </div>
                      <div className="text-xl font-bold text-slate-800">
                        +00 (123) 456789 00
                      </div>
                    </div>
                    <motion.div
                      className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <LuPhone className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
