import { useMemo } from "react";

function Snowfall() {
  const snowflakes = useMemo(() => {
    return Array.from({ length: 65 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 12,
      opacity: Math.random() * 0.55 + 0.25,
      drift: Math.random() * 80 - 40,
    }));
  }, []);

  return (
    <div className="snowfall-container" aria-hidden="true">
      {snowflakes.map((snow) => (
        <span
          key={snow.id}
          className="snowflake"
          style={{
            left: `${snow.left}%`,
            width: `${snow.size}px`,
            height: `${snow.size}px`,
            opacity: snow.opacity,
            animationDuration: `${snow.duration}s`,
            animationDelay: `${snow.delay}s`,
            "--snow-drift": `${snow.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Snowfall;
