import { useState } from "react";
import "./FacilitiesCarousel.css";

const data = [
  {
    title: "CLASSROOMS",
    desc: "Interactive Smart-Class is a revolutionary teaching-learning system that comes from India’s largest and most respected education company, ‘ExtraMarks Educational Private Ltd.",
    img: "/facilities/class-rooms.jpg",
    color: "#4CB760CF"
  },
  {
    title: "SPORTS",
    desc: "Physical activity is central to student life with world class sports facilities.",
    img: "/facilities/sports-fac.jpg",
    color: "#F48120BA"
  },
  {
    title: "LABORATORIES",
    desc: "Modern physics, chemistry and biology labs for hands-on learning.",
    img: "/facilities/laborarities.jpg",
    color: "#034693BA"
  },
  {
    title: "TRANSPORT",
    desc: "Students can avail the school transport according to the availability of seats. The routes of the school buses are drawn up and the parents should contact the school transport in charge for necessary details.",
    img: "/facilities/transport.jpg",
    color: "#c36aa2cf"
  },
  {
    title: "COMPUTER-LAB",
    desc: "School has established two modern ICT labs featuring the latest hardware and software along with high speed Internet connectivity.",
    img: "/facilities/computer-lab.jpg",
    color: "#469b9bcf"
  },
  {
    title: "SCHOOL-CLINIC",
    desc: "Medical check up of students is done regularly and a record is maintained. Parents are informed if the attendant finds that a child needs special medical attention. Thereafter the parents are expected to keep the school doctor informed about the action taken.",
    img: "/facilities/school-clinic.jpg",
    color: "#c0be38cf"
  },
  {
    title: "SCIENCE-LAB",
    desc: "To provide in depth knowledge on wide–ranging theories on physics, Indus Public School has a well-designed Physics Laboratory which provides facilities to the students to conduct various activities, experiments and projects.",
    img: "/facilities/science-lab.jpg",
    color: "#c02323cf"
  },
  {
    title: "HOSTEL-FOOD",
    desc: "The child stays in the hostel from Monday to Saturday afternoon. Weekend with parents emphasising quality time at home. Meals are provided to students in the dining hall which caters to 500 students at a time.",
    img: "/facilities/hostel-food.jpg",
    color: "#8962d1cf"
  },
  {
    title: "SMART CLASSROOMS",
    desc: "Interactive Smart-Class is a revolutionary teaching-learning system that comes from India’s largest and most respected education company, ‘Educomp’. With over 3000 progressive schools empowered nationwide, it represents a new age movement in education.",
    img: "/facilities/smart-class.jpg",
    color: "#c6b63acf"
  }
];

export default function FacilitiesCarousel() {
  const [opened, setOpened] = useState(null);

  return (
    <section className="facilities">

      {/* Cards Carousel */}
      <div className="track">
        {data.map((item, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setOpened(item)}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="overlay" style={{ background: item.color }}>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Card Container */}
      {opened && (
        <div className="expanded">
          <img src={opened.img} alt={opened.title} />
          <div className="expanded-text">
            <h2>{opened.title}</h2>
            <p>{opened.desc}</p>
          </div>
        </div>
      )}

    </section>
  );
}