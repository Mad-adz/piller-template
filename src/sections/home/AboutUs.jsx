// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { LuPhone, LuArrowRight } from "react-icons/lu";

const AboutUs = () => {
  const features = [
    {
      text: "Pontificate the client proactively",
      icon: LuArrowRight,
    },
    {
      text: "Does the selected item have a waiting list?",
      icon: LuArrowRight,
      hasIndicator: true,
    },
    {
      text: "Instant 24-hour Emergency",
      icon: LuArrowRight,
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute -top-8 left-[20%] md:-top-8 md:-left-8 z-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-red-500">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-800 mb-1">
                    697k+
                  </div>
                  <div className="text-sm text-slate-600 transform origin-center whitespace-nowrap">
                    LISTED PROPERTIES
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern Luxury House"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              {/* <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <LuPhone className="w-6 h-6 text-red-500 mr-3" />
                <span className="text-red-500 font-semibold text-lg uppercase tracking-wide">
                  Who We Are
                </span>
              </motion.div> */}

              <motion.div
                className="flex items-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-0.5 bg-red-500"></div>
                  <h3 className="text-red-500 font-medium text-lg">
                    About Us
                  </h3>
                  <div className="w-8 h-0.5 bg-red-500"></div>
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Where Finding A House
                <br />
                <span className="text-slate-600">Feels Like Home</span>
              </motion.h2>

              <motion.p
                className="text-slate-600 text-lg leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                At our core, we believe finding a home should feel comforting,
                not complicated. That's why we offer trusted listings, expert
                support, and a seamless experience tailored to your needs and
                dreams.
              </motion.p>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="text-slate-700 text-lg font-medium">
                    {feature.text}
                  </span>
                  {/* {feature.hasIndicator && (
                    <motion.div
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )} */}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button
                className="group bg-slate-800 hover:bg-slate-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mb-6 sm:mb-0 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>ABOUT US MORE</span>
                <LuPhone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </motion.button>

              <motion.div
                className="text-right"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">
                      Call Us 24/7
                    </div>
                    <div className="text-2xl font-bold text-slate-800">
                      +208-6666-0112
                    </div>
                  </div>
                  <motion.div
                    className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 15 }}
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

      {/* Background Decorative Elements */}
      {/* <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full border-4 border-orange-200 border-dashed opacity-30 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      /> */}

      {/* <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-blue-200/30 hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      /> */}
    </section>
  );
};

export default AboutUs;
