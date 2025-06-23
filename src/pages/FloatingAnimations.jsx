import { motion } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";
import { useState, useEffect } from "react";

// Floating Balloons Component
const FloatingBalloons = () => {
  const balloons = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    emoji: ["🎈", "🎀", "🎂", "🧁", "🍰", "🎁"][i],
    color: [
      "text-pink-400",
      "text-purple-400",
      "text-rose-400",
      "text-yellow-400",
      "text-blue-400",
      "text-green-400",
    ][i],
    size: Math.random() * 20 + 25,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className={`absolute ${balloon.color}`}
          style={{
            left: `${balloon.initialX}%`,
            top: `${balloon.initialY}%`,
            fontSize: `${balloon.size}px`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4 + balloon.id * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: balloon.id * 0.8,
          }}
        >
          {balloon.emoji}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Sparkle Effect
const EnhancedSparkles = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 16 + 8,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        >
          <Sparkles
            className="text-yellow-300/70"
            style={{ width: sparkle.size, height: sparkle.size }}
          />
        </motion.div>
      ))}

      {/* Static sparkles with different icons */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`static-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        >
          {i % 3 === 0 ? (
            <Star className="w-4 h-4 text-yellow-400/60 fill-yellow-300/40" />
          ) : i % 3 === 1 ? (
            <Sparkles className="w-3 h-3 text-pink-400/60" />
          ) : (
            <Heart className="w-3 h-3 text-rose-400/60 fill-rose-300/40" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Floating Cute Elements
const FloatingCuteElements = () => {
  const cuteElements = [
    { emoji: "🌸", delay: 0 },
    { emoji: "🦋", delay: 1 },
    { emoji: "🌺", delay: 2 },
    { emoji: "🌷", delay: 3 },
    { emoji: "🌹", delay: 4 },
    { emoji: "🌻", delay: 5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {cuteElements.map((element, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 2) * 70}%`,
          }}
          animate={{
            y: [-15, -30, -15],
            x: [-8, 8, -8],
            rotate: [-10, 10, -10],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 5 + i * 0.3,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};

// Magical Bubbles
const MagicalBubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-pink-200/30 via-purple-200/20 to-rose-200/30 backdrop-blur-sm border border-white/20"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            y: [-20, -50, -20],
            x: [-10, 15, -10],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Floating Hearts
const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 25 + 20,
        delay: Math.random() * 2,
        emoji: ["💖", "💕", "💗", "💓", "💝"][Math.floor(Math.random() * 5)],
      };
      setHearts((prev) => [...prev.slice(-6), newHeart]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0, rotate: 0, scale: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
            rotate: 360,
            scale: [0, 1, 1, 0],
            x: [0, 30, -20, 10, 0],
          }}
          transition={{
            duration: 8,
            delay: heart.delay,
            ease: "easeOut",
          }}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
};

// Main FloatingAnimations Component
const FloatingAnimations = ({ variant = "full" }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-purple-50/20 to-rose-50/30" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-rose-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translate(25%, -25%)" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-300/20 to-pink-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.4, 0.2, 0.4],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ transform: "translate(-25%, 25%)" }}
      />

      {/* All floating elements */}
      {variant === "full" && (
        <>
          <FloatingBalloons />
          <EnhancedSparkles />
          <FloatingCuteElements />
          <MagicalBubbles />
          <FloatingHearts />
        </>
      )}

      {variant === "minimal" && (
        <>
          <EnhancedSparkles />
          <MagicalBubbles />
        </>
      )}

      {variant === "cute" && (
        <>
          <FloatingCuteElements />
          <FloatingHearts />
          <FloatingBalloons />
        </>
      )}
    </div>
  );
};

export default FloatingAnimations;
