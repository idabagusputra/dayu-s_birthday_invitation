import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Hero from "@/pages/Hero";
import Events from "@/pages/Events";
import Location from "@/pages/Location";
import Wishes from "@/pages/Wishes";
import Gifts from "@/pages/Gifts";

// Main Invitation Content with Full Page Animation
export default function MainContent() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Floating Hearts Animation Component
  const FloatingHearts = () => {
    const hearts = Array.from({ length: 12 }, (_, i) => i);

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        {hearts.map((i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * windowSize.width,
              y: windowSize.height + 100,
            }}
            animate={{
              opacity: [0, 0.6, 0.8, 0.4, 0],
              scale: [0, 1, 1.2, 1, 0.5],
              x: Math.random() * windowSize.width,
              y: -150,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Heart
              className={`w-${Math.floor(Math.random() * 3) + 4} h-${Math.floor(Math.random() * 3) + 4} ${
                i % 4 === 0
                  ? "text-rose-400/70"
                  : i % 4 === 1
                    ? "text-pink-400/70"
                    : i % 4 === 2
                      ? "text-red-400/70"
                      : "text-purple-400/70"
              }`}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  // Sparkle Effects Animation Component
  const SparkleEffect = () => {
    const sparkles = Array.from({ length: 15 }, (_, i) => i);

    return (
      <div className="fixed inset-0 pointer-events-none z-5">
        {sparkles.map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0.8, 0],
              rotate: [0, 180, 360, 540],
              opacity: [0, 1, 0.7, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          >
            <Sparkles
              className={`w-${Math.floor(Math.random() * 2) + 3} h-${Math.floor(Math.random() * 2) + 3} ${
                i % 3 === 0
                  ? "text-yellow-300/80"
                  : i % 3 === 1
                    ? "text-amber-300/80"
                    : "text-orange-300/80"
              }`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  // Floating Bubbles Animation Component
  const FloatingBubbles = () => {
    const bubbles = Array.from({ length: 8 }, (_, i) => i);

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        {bubbles.map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-white/20 to-pink-200/30 backdrop-blur-sm border border-white/30"
            style={{
              width: `${Math.random() * 60 + 40}px`,
              height: `${Math.random() * 60 + 40}px`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{
              y: windowSize.height + 100,
              opacity: 0,
            }}
            animate={{
              y: -200,
              opacity: [0, 0.6, 0.8, 0.4, 0],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-rose-50/50 to-purple-50/30 z-0" />

      {/* Large Animated Gradient Orbs */}
      <motion.div
        className="fixed top-0 right-0 w-96 h-96 md:w-[500px] md:h-[500px] bg-gradient-to-br from-pink-200/40 to-rose-300/40 rounded-full blur-3xl z-5"
        animate={{
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.3, 0.6, 0.4, 0.3],
          x: [0, -50, 50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translate(30%, -30%)" }}
      />

      <motion.div
        className="fixed bottom-0 left-0 w-96 h-96 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-purple-200/40 to-pink-300/40 rounded-full blur-3xl z-5"
        animate={{
          scale: [0.9, 1, 1.1, 0.9],
          opacity: [0.4, 0.2, 0.5, 0.4],
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translate(-30%, 30%)" }}
      />

      <motion.div
        className="fixed top-1/2 left-1/2 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-yellow-200/30 to-orange-300/30 rounded-full blur-3xl z-5"
        animate={{
          scale: [1, 0.8, 1.3, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Floating Animation Components - Lower z-index to not interfere with iframe */}
      <FloatingHearts />
      <SparkleEffect />
      <FloatingBubbles />

      {/* Content Sections with proper spacing and z-index */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="relative">
          <Hero />
        </section>

        {/* Events Section */}
        <section className="relative mt-12 sm:mt-16 lg:mt-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Events />
          </div>
        </section>

        {/* Location Section - Higher z-index for iframe compatibility */}
        <section className="relative mt-12 sm:mt-16 lg:mt-20 px-4 z-30">
          <div className="max-w-4xl mx-auto relative z-30">
            <Location />
          </div>
        </section>

        {/* Gifts Section - Uncomment when needed */}
        {/* <section className="relative mt-12 sm:mt-16 lg:mt-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Gifts />
          </div>
        </section> */}

        {/* Wishes Section */}
        <section className="relative mt-12 sm:mt-16 lg:mt-20 pb-12 sm:pb-16 lg:pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Wishes />
          </div>
        </section>
      </div>

      {/* Additional Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-15">
        {/* Corner decorative elements */}
        <motion.div
          className="absolute top-10 left-10 text-4xl opacity-60"
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎀
        </motion.div>

        <motion.div
          className="absolute top-20 right-16 text-3xl opacity-60"
          animate={{
            rotate: [0, -15, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🌸
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-16 text-3xl opacity-60"
          animate={{
            rotate: [0, 20, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🎈
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-10 text-4xl opacity-60"
          animate={{
            rotate: [0, -10, 10, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          ✨
        </motion.div>
      </div>
    </div>
  );
}
