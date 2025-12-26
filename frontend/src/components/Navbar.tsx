import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-2 text-sm transition-all duration-300
     ${isActive ? "text-blue-700 font-semibold" : "text-gray-700"}
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
     after:bg-blue-700 after:transition-all after:duration-300
     hover:after:w-full`;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-xl py-3"
          : "bg-white/90 backdrop-blur-md shadow-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-bold tracking-wide">
            IPS
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold text-blue-700 leading-tight">
            Indus Public School
          </h1>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/academics" className={linkClass}>Academics</NavLink>
          <NavLink to="/admissions" className={linkClass}>Admissions</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/notices" className={linkClass}>News & Events</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <NavLink
            to="/admissions"
            className="px-5 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold shadow hover:shadow-lg hover:scale-105 transition"
          >
            Admission Open
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-700 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg border-t"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Academics", "/academics"],
              ["Admissions", "/admissions"],
              ["Gallery", "/gallery"],
              ["Notices", "/notices"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-700"
              >
                {label}
              </NavLink>
            ))}

            <NavLink
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-md bg-blue-700 text-white font-semibold shadow"
            >
              Admission Open
            </NavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
