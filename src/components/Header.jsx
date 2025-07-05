import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  LuPhone,
  LuMail,
  LuFacebook,
  LuTwitter,
  LuInstagram,
  LuLinkedin,
  LuSearch,
  LuMenu,
  LuX,
  LuChevronDown,
  LuBuilding,
} from "react-icons/lu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pages", href: "#", hasDropdown: true },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: LuFacebook, href: "/" },
    { icon: LuTwitter, href: "/" },
    { icon: LuInstagram, href: "/" },
    { icon: LuLinkedin, href: "/" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="bg-slate-800/80 py-2 px-4 hidden md:block">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm">
              <motion.div
                className="flex items-center space-x-2 text-slate-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LuMail className="w-4 h-4 text-red-500" />
                <span>example@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-slate-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <LuPhone className="w-4 h-4 text-red-500" />
                <span>044 (123) 456 789</span>
              </motion.div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center space-x-1">
                <LuBuilding className="w-8 h-8 text-red-500" />
                <div className="text-white">
                  <div className="font-bold text-xl">PILLER</div>
                  <div className="text-xs text-slate-400 -mt-1">
                    Real Estate Solution
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.hasDropdown && <LuChevronDown className="w-4 h-4" />}
                  </a>
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        <a
                          href="#"
                          className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700"
                        >
                          Page 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700"
                        >
                          Page 2
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Search and Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                className="text-slate-300 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <LuSearch className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="lg:hidden text-slate-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {isMenuOpen ? (
                  <LuX className="w-6 h-6" />
                ) : (
                  <LuMenu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="px-4 pt-2 pb-3 space-y-1 bg-slate-800/95 backdrop-blur-sm">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Contact Info */}
        <div className="px-4 py-3 border-t border-slate-700 bg-slate-800/95">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-slate-300">
              <LuMail className="w-4 h-4 text-red-500" />
              <span className="text-sm">example@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <LuPhone className="w-4 h-4 text-red-500" />
              <span className="text-sm">044 (123) 456 789</span>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
