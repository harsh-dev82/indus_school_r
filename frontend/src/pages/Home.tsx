import HomeBanner from "../components/HomeBanner";
import { NavLink } from "react-router-dom";

const quickLinks = [
  {
    title: "Our Achievements",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/more_img1.jpg",
    link: "http://www.ipsrohtak.edu.in/downloads/files/n56ea60556e792.pdf",
  },
  {
    title: "Beyond Academics",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/more_img2.jpg",
    link: "/sports-and-games",
  },
  {
    title: "Parents Login",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/more_img3.jpg",
    link: "http://ideateinfotech.com/ipsrohtak/",
    external: true,
  },
  {
    title: "Activities",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/more_img4.jpg",
    link: "/activities",
  },
];

export default function Home() {
  return (
    <div className="pt-24 overflow-hidden">

      {/* ================= HERO / BANNER ================= */}
      <HomeBanner />

      {/* ================= INTRO SECTION ================= */}
      <section className="relative py-28 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-6 text-center animate-fadeIn">

          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-6 leading-tight">
            Welcome to <span className="text-blue-600">Indus Public School</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A place where academic excellence, discipline, and strong moral
            values shape confident learners and responsible future leaders.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <NavLink
              to="/admissions"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-strong hover:scale-105 transition"
            >
              Apply for Admission
            </NavLink>

            <NavLink
              to="/about"
              className="px-10 py-4 rounded-full border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Why Choose Indus Public School?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a nurturing environment that balances academics,
              character building, and all-round development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Qualified Faculty",
                desc: "Highly experienced and dedicated teachers focused on conceptual clarity and student growth.",
              },
              {
                title: "Modern Infrastructure",
                desc: "Smart classrooms, well-equipped labs, library, and a secure campus environment.",
              },
              {
                title: "Holistic Development",
                desc: "Equal emphasis on academics, sports, cultural activities, and discipline.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-soft p-10 text-center hover:shadow-strong transition animate-zoomIn"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ADMISSION CTA ================= */}
      <section className="relative py-28 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center animate-fadeIn">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Admissions Open for 2025–26
          </h2>

          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
            Secure your child’s future with quality education, strong values,
            and a supportive learning environment.
          </p>

          <NavLink
            to="/admissions"
            className="inline-block px-12 py-4 bg-white text-blue-700 rounded-full font-semibold shadow-strong hover:scale-105 transition"
          >
            Enquire Now
          </NavLink>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickLinks.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-strong transition-all duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center border-t">
                <a
                  href={item.link}
                  target={item.external ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-block text-primary font-semibold text-lg hover:text-secondary transition"
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
