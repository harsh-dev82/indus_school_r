import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import HomeBanner from "../components/HomeBanner";
import beyondImg from "../assets/beyond academics.jpg";
import activitiesImg from "../assets/activities.jpg";

const quickLinks = [
  {
    title: "Our Achievements",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/more_img1.jpg",
    link: "http://www.ipsrohtak.edu.in/downloads/files/n56ea60556e792.pdf",
    external: true,
  },
  {
    title: "Beyond Academics",
    image: beyondImg,
    link: "/beyond-academics",
  },
  {
    title: "Parents Login",
    image: "https://ipsrohtak.edu.in/templates/indus-rtk/images/more_img3.jpg",
    link: "http://ideateinfotech.com/ipsrohtak/",
    external: true,
  },
  {
    title: "Activities",
    image: activitiesImg,
    link: "/activities",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <main className="pt-24 overflow-hidden">

      {/* ================= HERO ================= */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <HomeBanner />
      </motion.div>

      {/* ================= INTRO ================= */}
      <section className="py-28 bg-gradient-to-b from-blue-50 via-white to-white">
        <motion.div
          className="container-section text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Welcome to <span className="text-gradient">Indus Public School</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A place where academic excellence, discipline, and strong moral
            values shape confident learners and responsible future leaders.
          </p>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <NavLink to="/admissions" className="btn-primary">
              Apply for Admission
            </NavLink>

            <NavLink to="/about" className="btn-outline">
              Learn More
            </NavLink>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-white">
        <motion.div
          className="container-section"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Choose Indus Public School?</h2>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            We provide a nurturing environment that balances academics,
            character building, and all-round development.
          </p>

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
              <motion.div
                key={i}
                className="card text-center"
                variants={fadeUp}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= ADMISSION CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl"></div>

        <motion.div
          className="container-section text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
          }}
        >
          <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Admissions Open for 2025–26
          </motion.h2>

          <motion.p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
            Secure your child’s future with quality education, strong values,
            and a supportive learning environment.
          </motion.p>

          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/admissions"
              className="inline-block bg-white text-blue-700 px-12 py-4 rounded-full font-semibold shadow-xl transition"
            >
              Enquire Now
            </NavLink>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= QUICK LINKS ================= */}
      <section className="py-20 bg-gray-50">
        <motion.div
          className="container-section"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group"
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 text-center border-t">
                  <a
                    href={item.link}
                    target={item.external ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold text-lg hover:text-blue-900 transition"
                  >
                    {item.title}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default Home;
