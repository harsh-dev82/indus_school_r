const features = [
  {
    title: "Smart Classrooms",
    desc: "Technology-enabled learning environment.",
  },
  {
    title: "Sports & Activities",
    desc: "Physical fitness with discipline & teamwork.",
  },
  {
    title: "Experienced Faculty",
    desc: "Highly qualified and dedicated teachers.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
