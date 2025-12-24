import { useState } from "react";
import banner from "../assets/gallery-banner.jpg";

const menu = [
  { key: "academics", label: "Academics" },
  { key: "curriculum", label: "Curriculum" },
  { key: "calendar", label: "School Calendar" },
  { key: "methods", label: "Teaching Methodologies" },
  { key: "staff", label: "Teaching Staff" },
  { key: "students", label: "Student Details" },
];

const content: any = {
  academics: {
    title: "Academics",
    text: `Indus Public School is affiliated to CBSE Board in New Delhi till class XII.
    However, Class I to VIII follow a holistic school based curriculum which is
    innovative and internationally accepted.`,
  },
  curriculum: {
    title: "Curriculum",
    text: `Our curriculum is designed to ensure intellectual, emotional and social
    development of every child.`,
  },
  calendar: {
    title: "School Calendar",
    text: `The academic calendar provides a yearly overview of important dates,
    examinations and holidays.`,
  },
  methods: {
    title: "Teaching Methodologies",
    text: `Indus follows a comprehensive curriculum updated yearly. Teachers are
    dynamic mentors using verbal, non-verbal, visual and performance based
    teaching methods to impart knowledge.`,
  },
  staff: {
    title: "Teaching Staff",
    text: `Our teaching staff is highly qualified, trained and dedicated to nurture
    young minds.`,
  },
  students: {
    title: "Student Details",
    text: `We encourage students to explore, discover, and demonstrate their learning
    through multi-sensory experiences.`,
  },
};

export default function Academics() {
  const [active, setActive] = useState("academics");

  return (
    <div className="pt-24">

      {/* Banner */}
      <div className="h-[55vh] w-full">
        <img src={banner} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6 py-16">

        {/* Left Menu */}
        <div className="bg-gray-100 rounded-lg p-4 space-y-2">
          {menu.map(item => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                active === item.key
                  ? "bg-white shadow text-blue-700 font-semibold"
                  : "hover:bg-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            {content[active].title}
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {content[active].text}
          </p>
        </div>

      </div>
    </div>
  );
}
