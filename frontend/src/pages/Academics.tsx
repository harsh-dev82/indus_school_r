import banner from "../assets/gallery-banner.jpg";

const sections = [
  { id: "academics", title: "Academics", content: "Indus Public School is affiliated to CBSE Board in New Delhi till class XII. However, Class I to VIII follow a holistic school-based curriculum which is quite innovative and knowledgeable and also acceptable at International level too. This enhances and encourages the wider areas of learning." },
  { id: "curriculum", title: "Curriculum", content: "The school has a well-structured curriculum focusing on intellectual, emotional, social and physical development of the students." },
  { id: "calendar", title: "School Calendar", content: "The academic calendar outlines important school events, examinations and holidays throughout the year." },
  { id: "methods", title: "Teaching Methodologies", content: "We follow modern teaching methodologies including smart classrooms, experiential learning and project-based education." }
];

export default function Academics() {
  return (
    <div className="pt-24">

      {/* Banner */}
      <div className="h-[60vh] relative">
        <img src={banner} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 py-16">

        {/* Left Menu */}
        <div className="md:col-span-1 space-y-3">
          {sections.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block bg-gray-100 hover:bg-blue-100 px-5 py-3 rounded-lg transition text-gray-700"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-12">
          {sections.map(item => (
            <div id={item.id} key={item.id}>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
