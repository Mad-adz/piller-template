import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuBriefcase, LuHouse, LuStar, LuUsers, LuPlay } from "react-icons/lu";

const Achievements = () => {
  const achievements = [
    {
      icon: LuBriefcase,
      value: "28+",
      label: "Years of Business",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: LuHouse,
      value: "58+",
      label: "Properties Sold",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: LuStar,
      value: "25k",
      label: "5 Stars Reviews",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: LuUsers,
      value: "98%",
      label: "Happy Customers",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
  ];
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden pb-12 lg:pb-0">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side - Curved Property Image (5 columns) */}
        <motion.div
          className="lg:col-span-6 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Curved Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Property Image with Curved Right Edge */}
            <div
              className="relative overflow-hidden video-clip"
              // style={{
              //   clipPath: "ellipse(85% 100% at 0% 50%)",
              // }}
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury Modern Property"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/60"></div>
            </div>

            {/* Video Play Button */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl cursor-pointer group hover:bg-white transition-all duration-300">
                <LuPlay className="w-8 h-8 md:w-10 md:h-10 text-slate-800 ml-1 group-hover:text-red-500 transition-colors duration-300 fill-current" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Center - Content and Stats (4 columns) */}
        <motion.div
          className="lg:col-span-6 space-y-8 px-4 md:px-8 lg:pl-0 lg:pr-10 xl:pr-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Section Header */}
          <div className="text-center lg:text-left">
            <motion.div
              className="flex items-center justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-red-500"></div>
                <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">
                  Property Values
                </span>
                <div className="w-8 h-0.5 bg-red-500"></div>
              </div>
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Market Your
              <br />
              Property with Pillar
            </motion.h2>
          </div>

          {/* Achievement Stats Grid - 2x2 */}
          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-10 h-10 md:w-12 md:h-12 ${achievement.iconBg} rounded-lg flex items-center justify-center mb-3 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <achievement.icon
                    className={`w-5 h-5 md:w-6 md:h-6 ${achievement.iconColor}`}
                  />
                </motion.div>

                {/* Value */}
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
                  {achievement.value}
                </div>

                {/* Label */}
                <div className="text-slate-600 text-xs md:text-sm font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Professional Agent (3 columns) */}
        {/* <motion.div
            className="lg:col-span-3 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                alt="Professional Real Estate Agent"
                className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />

              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-slate-800 mb-1">
                    Professional Agent
                  </div>
                  <div className="text-slate-600 text-sm mb-3">
                    Expert Property Marketing
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <LuStar
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      4.9
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-6 right-6 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <LuHouse className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div> */}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Achievements;
