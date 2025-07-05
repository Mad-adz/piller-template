import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuHouse, LuChevronRight } from "react-icons/lu";

const PanoramicBanner = ({
  title,
  breadcrumbs,
  backgroundImage = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
  className = "",
}) => {
  return (
    <section
      className={`relative h-[360px] md:h-[480px] lg:h-[500px] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${backgroundImage}')`,
        }}
      />

      {/* Parallax Effect Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Breadcrumb Navigation */}
        <motion.nav
          className="flex items-center justify-center space-x-2 text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {/* Breadcrumb Item */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {/* Home Icon for first item */}
                {index === 0 && (
                  <LuHouse className="w-5 h-5 md:w-6 md:h-6 text-white mr-2" />
                )}

                {/* Breadcrumb Link/Text */}
                {crumb.href && !crumb.isActive ? (
                  <motion.a
                    href={crumb.href}
                    className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {crumb.label}
                  </motion.a>
                ) : (
                  <span
                    className={`font-medium ${
                      crumb.isActive ? "text-red-400" : "text-white"
                    }`}
                  >
                    {crumb.label}
                  </span>
                )}
              </motion.div>

              {/* Separator */}
              {index < breadcrumbs.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <LuChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.nav>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
};

export default PanoramicBanner;
