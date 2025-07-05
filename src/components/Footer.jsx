import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  LuBuilding,
  LuPhone,
  LuMail,
  LuMapPin,
  LuFacebook,
  LuTwitter,
  LuInstagram,
  LuLinkedin,
  LuYoutube,
  LuDownload,
  LuSmartphone,
} from "react-icons/lu";

const Footer = () => {
  const featuredHouses = [
    { icon: LuBuilding, label: "Villa", href: "#" },
    { icon: LuBuilding, label: "Commercial", href: "#" },
    { icon: LuBuilding, label: "Farm Houses", href: "#" },
    { icon: LuBuilding, label: "Apartments", href: "#" },
    { icon: LuBuilding, label: "Flats", href: "#" },
  ];

  const quickLinks = [
    { icon: LuBuilding, label: "Strategy Services", href: "#" },
    { icon: LuBuilding, label: "Management", href: "#" },
    { icon: LuBuilding, label: "Privacy & Policy", href: "#" },
    { icon: LuBuilding, label: "Sitemap", href: "#" },
    { icon: LuBuilding, label: "Term & Conditions", href: "#" },
  ];

  const supportLinks = [
    { icon: LuBuilding, label: "Help Center", href: "#" },
    { icon: LuBuilding, label: "FAQs", href: "#" },
    { icon: LuBuilding, label: "Contact Us", href: "#" },
    { icon: LuBuilding, label: "Ticket Support", href: "#" },
    { icon: LuBuilding, label: "Live Chat", href: "#" },
  ];

  const socialLinks = [
    { icon: LuFacebook, href: "#", label: "Facebook" },
    { icon: LuTwitter, href: "#", label: "Twitter" },
    { icon: LuInstagram, href: "#", label: "Instagram" },
    { icon: LuLinkedin, href: "#", label: "LinkedIn" },
    { icon: LuYoutube, href: "#", label: "YouTube" },
  ];
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center space-x-2">
                  <LuBuilding className="w-10 h-10 text-red-500" />
                  <div className="text-white">
                    <div className="font-bold text-2xl">PILLER</div>
                    <div className="text-sm text-slate-400 -mt-1">
                      Real Estate Solution
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.p
                className="text-slate-300 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Pillar is a luxury to the resilience, adaptability, Spacious
                modern villa living room with centrally placed swimming pool
                blending indooroutdoor.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200">
                  <LuPhone className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>+00 (123) 456 789 012</span>
                </div>

                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200">
                  <LuMail className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>infomail123@domain.com</span>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <LuMapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <div>West 2nd lane, Inner circular road,</div>
                    <div>New York City</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            {/* Featured Houses */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Featured Houses
              </h3>
              <div className="space-y-4">
                {featuredHouses.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 text-slate-300 hover:text-red-500 transition-colors duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-200" />
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <div className="space-y-4">
                {quickLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 text-slate-300 hover:text-red-500 transition-colors duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-200" />
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Support</h3>
              <div className="space-y-4">
                {supportLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 text-slate-300 hover:text-red-500 transition-colors duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-200" />
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* <motion.div
            className="mt-16 pt-8 border-t border-slate-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
              <motion.div
                className="flex items-center space-x-4 bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LuBuilding className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    Need to Home
                  </div>
                  <div className="text-slate-400">buy or sell?</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LuDownload className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-slate-400 text-sm">Download on the</div>
                  <div className="text-white font-semibold text-lg">
                    App Store
                  </div>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-slate-900 rounded-md flex items-center justify-center">
                    <div className="text-white text-xs font-bold">QR</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LuSmartphone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-slate-400 text-sm">GET IT ON</div>
                  <div className="text-white font-semibold text-lg">
                    Google Play
                  </div>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-slate-900 rounded-md flex items-center justify-center">
                    <div className="text-white text-xs font-bold">QR</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div> */}
        </div>

        <motion.div
          className="border-t border-slate-800 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                © 2025 PILLER Real Estate Solution. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
