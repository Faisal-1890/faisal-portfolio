import { useEffect, useState } from "react";
import "./OwlAnimation.css";

const messages = [
  "Hello!",
  "Welcome!",
  "Explore!",
  "Magic!",
  "Dream!",
  "Smile!",
  "Amazing!",
  "Keep Going!",
  "Thanks!",
];

function OwlAnimation() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const value = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setProgress(Math.min(Math.max(value, 0), 1));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((previous) => (previous + 1) % messages.length);
    }, 3500);

    return () => clearInterval(messageTimer);
  }, []);

  const left = 5 + progress * 75;
  const top = 12 + progress * 55;

  return (
    <div
      className="owl-flight"
      style={{
        left: `${left}%`,
        top: `${top}%`,
      }}
      aria-hidden="true"
    >
      <div className="owl-speech">{messages[messageIndex]}</div>

      <img
        src="/images/white-owl.png"
        alt="Flying magical white owl"
        className="flying-owl"
      />

      <div className="owl-magic-trail">✨ · ✦ · ✨</div>
    </div>
  );
}

export default OwlAnimation;
