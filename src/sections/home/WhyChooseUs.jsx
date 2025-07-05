import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  LuHandshake,
  LuBuilding2,
  LuStar,
  LuUsers,
  LuArrowUp,
} from "react-icons/lu";

const WhyChooseUs = () => {
  const services = [
    {
      icon: LuHandshake,
      title: "Find your home",
      description:
        "Discover your perfect property with our comprehensive search tools and expert guidance to find your dream home.",
      buttonText: "Find A Home",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: LuHandshake,
      title: "Sell a Property",
      description:
        "Get the best value for your property with our professional marketing strategies and experienced sales team.",
      buttonText: "Sell A Home",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: LuBuilding2,
      title: "Rent a Home",
      description:
        "Find the perfect rental property that fits your lifestyle and budget with our extensive rental portfolio.",
      buttonText: "Rent A Home",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
  ];

  // const clientAvatars = [
  //   "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  //   "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  //   "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  // ];

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
            <motion.div
              className="mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex items-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-0.5 bg-red-500"></div>
                  <h3 className="text-red-500 font-medium text-lg">
                    Why Choose Us
                  </h3>
                  <div className="w-8 h-0.5 bg-red-500"></div>
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Trusted by 1000+ Buyers
              </motion.h2>
            </motion.div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-slate-800 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-slate-600 leading-relaxed mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                >
                  {service.description}
                </motion.p>

                <motion.button
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  {service.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Scroll to Top Button */}
        {/* <motion.button
          className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <LuArrowUp className="w-6 h-6" />
        </motion.button> */}
      </div>

      {/* Decorative Elements */}
      {/* <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full border-4 border-red-500/20 border-dashed hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      /> */}

      {/* <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-red-500/10 backdrop-blur-sm hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      /> */}
    </section>
  );
};

export default WhyChooseUs;
