import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuChevronLeft, LuChevronRight, LuStar, LuQuote } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "Perfect place for a business trip! The location was convenient, and the Wi-Fi was reliable. I had everything I needed, from a quiet workspace in the room to a great breakfast in the morning.",
      name: "Marshell Jack",
      role: "Property owner",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 4.8,
      logo: "REAL ESTATE",
      quoteColor: "text-red-500",
    },
    {
      id: 2,
      quote:
        "Perfect place for a business trip! The location was convenient, and the Wi-Fi was reliable. I had everything I needed, from a quiet workspace in the room to a great breakfast in the morning.",
      name: "Walter Deckow",
      role: "Property owner",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 4.8,
      logo: "Alpha House",
      logoSubtext: "Company slogan",
      quoteColor: "text-slate-400",
    },
    {
      id: 3,
      quote:
        "Perfect place for a business trip! The location was convenient, and the Wi-Fi was reliable. I had everything I needed, from a quiet workspace in the room to a great breakfast in the morning.",
      name: "Carlos Bauch",
      role: "Property owner",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 4.8,
      logo: "Real Estate",
      quoteColor: "text-slate-400",
    },
    {
      id: 4,
      quote:
        "Exceptional service and attention to detail. The team went above and beyond to ensure our property transaction was smooth. Highly recommend.",
      name: "Sarah Johnson",
      role: "Property investor",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 4.9,
      logo: "Prime Properties",
      quoteColor: "text-slate-400",
    },
    {
      id: 5,
      quote:
        "Outstanding experience from start to finish. The property selection was excellent and the negotiation process was handled with great expertise. Couldn't be happier with the results.",
      name: "Michael Chen",
      role: "Home buyer",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 4.7,
      logo: "Elite Homes",
      quoteColor: "text-slate-400",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-red-500 font-semibold text-lg uppercase tracking-wide">
                Testimonials
              </span>
              <div className="w-8 h-0.5 bg-red-500"></div>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What Our Client Says
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".testimonials-swiper-button-prev",
              nextEl: ".testimonials-swiper-button-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                centeredSlides: true,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.5,
                centeredSlides: false,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 32,
              },
            }}
            onSwiper={setSwiperInstance}
            className="testimonials-carousel py-20 h-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="h-full my-10">
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="flex justify-start mb-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <LuQuote
                      className={`w-12 h-12 ${testimonial.quoteColor} fill-current`}
                    />
                  </motion.div>

                  <motion.p
                    className="text-slate-700 text-lg leading-relaxed mb-8 min-h-[120px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    "{testimonial.quote}"
                  </motion.p>

                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-slate-200"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-slate-500 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <LuStar className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-bold text-sm">
                        {testimonial.rating}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <motion.button
            className="testimonials-swiper-button-prev absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-slate-50 text-slate-700 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-slate-200"
            onClick={() => swiperInstance?.slidePrev()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <LuChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          <motion.button
            className="testimonials-swiper-button-next absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-slate-50 text-slate-700 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-slate-200"
            onClick={() => swiperInstance?.slideNext()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <LuChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .testimonials-carousel .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonials-carousel .swiper-pagination-bullet {
          background: #64748b !important;
          opacity: 0.5 !important;
          width: 12px !important;
          height: 12px !important;
        }
        .testimonials-carousel .swiper-pagination-bullet-active {
          background: #ef4444 !important;
          opacity: 1 !important;
        }
        .testimonials-carousel .swiper-pagination-bullet-dynamic {
          transition: all 0.3s ease !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
