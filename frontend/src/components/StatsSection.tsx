import { FaUserGraduate, FaChalkboardTeacher, FaSchool } from "react-icons/fa";

const stats = [
  { icon: <FaUserGraduate />, value: "2500+", label: "Students" },
  { icon: <FaChalkboardTeacher />, value: "120+", label: "Teachers" },
  { icon: <FaSchool />, value: "20+", label: "Years of Excellence" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((item, i) => (
          <div key={i} className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-blue-700 text-4xl mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-3xl font-bold">{item.value}</h3>
            <p className="text-gray-500 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
