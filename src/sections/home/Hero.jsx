import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import {
  LuArrowRight,
  LuPlay,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const heroSlides = [
    {
      id: 1,
      backgroundImage:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Discover Real Estate",
      subtitle: "Piller",
      highlight: "Dream Home",
      description:
        "Find your perfect property with our expert real estate solutions. We provide comprehensive services to help you discover and secure your dream home.",
      stats: [
        { value: "250+", label: "Properties Sold" },
        { value: "15+", label: "Years Experience" },
        { value: "99%", label: "Client Satisfaction" },
      ],
    },
    {
      id: 2,
      backgroundImage:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Luxury Living",
      subtitle: "Premium",
      highlight: "Properties",
      description:
        "Experience the finest in luxury real estate. Our premium properties offer unmatched elegance, comfort, and sophistication for discerning clients.",
      stats: [
        { value: "150+", label: "Luxury Homes" },
        { value: "20+", label: "Prime Locations" },
        { value: "100%", label: "Premium Service" },
      ],
    },
    {
      id: 3,
      backgroundImage:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Modern Architecture",
      subtitle: "Contemporary",
      highlight: "Design",
      description:
        "Discover cutting-edge architectural marvels that blend innovation with functionality. Our modern properties represent the future of urban living.",
      stats: [
        { value: "80+", label: "Modern Designs" },
        { value: "10+", label: "Award Winning" },
        { value: "95%", label: "Energy Efficient" },
      ],
    },
    {
      id: 4,
      backgroundImage:
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Smart",
      subtitle: "Investment",
      highlight: "Choices",
      description:
        "Maximize your returns with strategic real estate investments. Our expert team identifies high-potential properties for long-term growth.",
      stats: [
        { value: "300+", label: "Successful Deals" },
        { value: "25%", label: "Average ROI" },
        { value: "500+", label: "Happy Investors" },
      ],
    },
  ];

  const currentSlide = heroSlides[activeSlide];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Swiper Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="w-full h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${slide.backgroundImage}')`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <LuChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <LuChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight">
                    <span className="block">{currentSlide.title}</span>
                    <span className="block mt-2">
                      {currentSlide.subtitle}{" "}
                      <span className="text-red-500">
                        {currentSlide.highlight}
                      </span>
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${activeSlide}`}
                  className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {currentSlide.description}
                </motion.p>
              </AnimatePresence>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Property</span>
                  <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LuPlay className="w-5 h-5" />
                  <span>Watch Video</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`stats-${activeSlide}`}
                  className="grid grid-cols-3 gap-8 pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {currentSlide.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Content - Decorative Elements */}
            {/* <div className="hidden lg:block relative">
              <motion.div
                className="absolute top-20 right-20 w-32 h-32 rounded-full border-4 border-white/70 border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white/50 backdrop-blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute top-1/2 right-1/2 w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div> */}
          </div>
        </div>

        {/* Slide Indicators */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperInstance?.slideToLoop(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "bg-red-500 scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
