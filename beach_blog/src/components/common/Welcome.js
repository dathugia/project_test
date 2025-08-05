import "./Welcome.css";

const Welcome = () => {
  const lines = [
    "Welcome to Beauty Of Beaches",
    "Experience tropical elegance in paradise"
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        {lines.map((line, lineIndex) => (
          <h2 className="animated-line" key={lineIndex}>
            {line.split("").map((char, i) => (
              <span
                key={i}
                className="char"
                style={{
                  animationDelay: `${(lineIndex * 3) + (i * 0.1)}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        ))}
      </div>
    </section>
  );
};

export default Welcome;
