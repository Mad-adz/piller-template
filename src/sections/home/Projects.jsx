import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuChevronLeft, LuChevronRight, LuBuilding2 } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const projects = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "189 Properties",
      location: "Jersey, New York",
      overlay: "from-black/60 to-black/20",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "225 Properties",
      location: "Cape Town, South Africa",
      overlay: "from-black/60 to-black/20",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "143 Properties",
      location: "Los Angeles, New York",
      overlay: "from-black/60 to-black/20",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "321 Properties",
      location: "Seoul, South Korea",
      overlay: "from-black/60 to-black/20",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "212 Properties",
      location: "Seoul, South Korea",
      overlay: "from-black/60 to-black/20",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "189 Properties",
      location: "Jersey, New York",
      overlay: "from-black/60 to-black/20",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "225 Properties",
      location: "Cape Town, South Africa",
      overlay: "from-black/60 to-black/20",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "143 Properties",
      location: "Los Angeles, New York",
      overlay: "from-black/60 to-black/20",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "321 Properties",
      location: "Seoul, South Korea",
      overlay: "from-black/60 to-black/20",
    },
    {
      id: 10,
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      properties: "212 Properties",
      location: "Seoul, South Korea",
      overlay: "from-black/60 to-black/20",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-900 relative overflow-hidden">
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-0.5 bg-red-500"></div>
              <LuBuilding2 className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-semibold text-lg uppercase tracking-wide">
                Our Projects
              </span>
              <LuBuilding2 className="w-5 h-5 text-red-500" />
              <div className="w-8 h-0.5 bg-red-500"></div>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover Our Premium
            <br />
            <span className="text-red-500">Property Locations</span>
          </motion.h2>

          <motion.p
            className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore our carefully curated portfolio of luxury properties across
            prime global locations. Each project represents our commitment to
            excellence and innovation in real estate development.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: ".projects-swiper-button-prev",
              nextEl: ".projects-swiper-button-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              420: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 32,
              },
            }}
            onSwiper={setSwiperInstance}
            className="projects-carousel"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={project.image}
                    alt={project.location}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.overlay} group-hover:from-black/70 transition-all duration-300`}
                  ></div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <motion.div
                      className="text-sm font-medium mb-2 opacity-90 text-red-400"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      {project.properties}
                    </motion.div>
                    <motion.div
                      className="text-xl md:text-2xl font-bold leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {project.location}
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <motion.button
            className="projects-swiper-button-prev absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            onClick={() => swiperInstance?.slidePrev()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <LuChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          <motion.button
            className="projects-swiper-button-next absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            onClick={() => swiperInstance?.slideNext()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <LuChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      {/* <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full border-4 border-red-500/20 border-dashed hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-red-500/10 backdrop-blur-sm hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .projects-carousel .swiper-pagination {
          bottom: -50px !important;
        }
        .projects-carousel .swiper-pagination-bullet {
          background: #64748b !important;
          opacity: 0.5 !important;
          width: 12px !important;
          height: 12px !important;
        }
        .projects-carousel .swiper-pagination-bullet-active {
          background: #ef4444 !important;
          opacity: 1 !important;
        }
        .projects-carousel .swiper-pagination-bullet-dynamic {
          transition: all 0.3s ease !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;
