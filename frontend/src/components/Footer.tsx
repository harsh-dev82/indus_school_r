import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* SCHOOL INFO */}
        <div className="animate-fadeIn">
          <h2 className="text-2xl font-bold mb-3">
            Indus Public School
          </h2>
          <p className="text-sm opacity-80 leading-relaxed">
            A premier institution dedicated to academic excellence,
            discipline, and holistic development of students.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="animate-fadeIn">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
            <li><NavLink to="/academics" className="hover:underline">Academics</NavLink></li>
            <li><NavLink to="/admissions" className="hover:underline">Admissions</NavLink></li>
            <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="animate-fadeIn">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm opacity-80">
            📍 Rohtak, Haryana, India
          </p>
          <p className="text-sm opacity-80 mt-1">
            📞 +91 XXXXX XXXXX
          </p>
          <p className="text-sm opacity-80 mt-1">
            ✉️ info@induspublicschool.com
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 py-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Indus Public School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
