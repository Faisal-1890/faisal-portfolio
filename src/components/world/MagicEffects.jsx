import { motion } from "framer-motion";

const particles = [
  { x: 8, y: 20, delay: 0 },
  { x: 17, y: 68, delay: 1.2 },
  { x: 25, y: 34, delay: 0.5 },
  { x: 36, y: 18, delay: 1.8 },
  { x: 44, y: 70, delay: 0.8 },
  { x: 53, y: 28, delay: 1.5 },
  { x: 62, y: 76, delay: 0.3 },
  { x: 71, y: 18, delay: 2 },
  { x: 80, y: 55, delay: 0.7 },
  { x: 91, y: 28, delay: 1.4 },
  { x: 13, y: 85, delay: 2.2 },
  { x: 29, y: 82, delay: 0.9 },
  { x: 48, y: 12, delay: 1.1 },
  { x: 68, y: 88, delay: 0.4 },
  { x: 86, y: 78, delay: 1.7 },
  { x: 95, y: 65, delay: 0.2 },
];

function MagicEffects() {
  return (
    <div className="magic-effects" aria-hidden="true">
      {/* Floating magical particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="magic-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, 8, -5, 0],
            opacity: [0.25, 1, 0.4],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 4 + (index % 4),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Golden fireflies */}
      {particles.slice(0, 8).map((particle, index) => (
        <motion.span
          key={`firefly-${index}`}
          className="magic-firefly"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, 18, -12, 0],
            y: [0, -18, 10, 0],
            opacity: [0.1, 0.9, 0.2],
          }}
          transition={{
            duration: 6 + index,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default MagicEffects;
