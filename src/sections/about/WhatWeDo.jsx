import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuHouse, LuHandshake, LuBuilding2 } from "react-icons/lu";

const WhatWeDo = () => {
  const benefits = [
    {
      id: "01",
      icon: LuHouse,
      title: "Find your perfect new home",
      description:
        "Velox surgo clarus tantillus confido carus video lumen cedo virtus spes decerno.",
      buttonText: "Find A Home",
      iconColor: "text-red-500",
    },
    {
      id: "02",
      icon: LuHandshake,
      title: "You build wealth effortlessly",
      description:
        "Altus cedo tantillus video patrocinor valeo carus subseco vestrum credo virtus.",
      buttonText: "Sell A Home",
      iconColor: "text-red-500",
    },
    {
      id: "03",
      icon: LuBuilding2,
      title: "You rent and love it like your own",
      description:
        "Tantillus certe patrocinor video adipisci valeo carus. Subseco vestrum taedium.",
      buttonText: "Rent A Home",
      iconColor: "text-red-500",
    },
  ];
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* What We Do Subtitle */}
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-0.5 bg-red-500"></div>
              <span className="text-red-500 font-semibold text-lg uppercase tracking-wide">
                What We Do
              </span>
              <div className="w-8 h-0.5 bg-red-500"></div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Benefits For You
          </motion.h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Large Number Background */}
              <motion.div
                className="absolute top-6 right-6 text-8xl md:text-9xl font-bold text-gray-100 leading-none select-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              >
                {benefit.id}
              </motion.div>

              {/* Icon */}
              <motion.div
                className="relative z-10 mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                  <benefit.icon
                    className={`w-8 h-8 md:w-10 md:h-10 ${benefit.iconColor}`}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="relative z-10 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
              >
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Button */}
                <motion.button
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-md group-hover:bg-red-50 group-hover:text-red-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  {benefit.buttonText}
                </motion.button>
              </motion.div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
