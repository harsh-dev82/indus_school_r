import { useEffect, useState } from "react";
import "./HomeCarousel.css";

const images = [
  "/images/home3.jpg",
  "/images/home6.jpg",
  "/images/home1.jpg",
  "/images/home4.jpg",
  "/images/home5.jpg",
  "/images/home2.jpg"
];

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}
