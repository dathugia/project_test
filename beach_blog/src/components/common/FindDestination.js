import React, { useEffect, useState } from "react";
import "./FindDestination.css"; // Import your CSS for styling

const images = [
  "https://demo.deverust.com/coralbay/wp-content/uploads/sites/51/2025/04/IMG-BN7RZVD.jpg",
  "https://demo.deverust.com/coralbay/wp-content/uploads/sites/51/2025/04/IMG-KPEYUG9.jpg",
  "https://demo.deverust.com/coralbay/wp-content/uploads/sites/51/2025/04/IMG-ADJ2CMB.jpg",
  "https://demo.deverust.com/coralbay/wp-content/uploads/sites/51/2025/04/IMG-PNH2ZTG.jpg"
];

const FindDestination = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="slideshow">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
      <div className="hero-content">
        <h2 className="sub-heading">Welcome to BEACH BLOG</h2>
        <h1 className="main-heading">
          Experience tropical elegance at BEACH BLOG.
        </h1>

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            autoFocus
            placeholder="Enter your beach destination"
          />
          <button type="submit" className="btn">Find</button>
        </div>
          

      </div>
    </section>
  );
};

export default FindDestination;
