import { motion } from "framer-motion";
import { Calendar, Clock, Heart, Sparkles, Gift } from "lucide-react";
import { useState, useEffect } from "react";

// Mock config data for demo
const config = {
  data: {
    groomName2: "Pawpaw's Birthday",
    dateday: "2025-07-12",
    time: "16:00 - 19:00 WITA",
  },
};

const formatEventDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 20 + 15,
        delay: Math.random() * 2,
      };
      setHearts((prev) => [...prev.slice(-4), newHeart]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 1, 0],
            rotate: 360,
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: 8,
            delay: heart.delay,
            ease: "easeOut",
          }}
          className="absolute text-pink-400/30"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
};

const SparkleEffect = () => {
  const sparkles = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-300/60" />
        </motion.div>
      ))}
    </div>
  );
};

const CuteBubbles = () => {
  const bubbles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {bubbles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 bg-gradient-to-br from-pink-200/40 to-rose-300/40 rounded-full"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [-10, -30, -10],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const LandingPage = ({
  onOpenInvitation = () => console.log("Opening invitation..."),
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen relative overflow-hidden"
  >
    {/* Enhanced Decorative Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50/50 to-purple-50/30" />

    {/* Animated gradient orbs */}
    <motion.div
      className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transform: "translate(50%, -50%)" }}
    />

    <motion.div
      className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-purple-200/30 to-pink-300/30 rounded-full blur-3xl"
      animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.4, 0.2, 0.4],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transform: "translate(-50%, 50%)" }}
    />

    {/* Floating Elements */}
    <FloatingHearts />
    <SparkleEffect />
    <CuteBubbles />

    {/* Main Content */}
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Enhanced Card Container */}
        <motion.div
          className="backdrop-blur-md bg-white/70 p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-pink-200/50 shadow-2xl relative overflow-hidden"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Cute corner decorations */}
          <div className="absolute top-3 left-3 text-pink-300/60 text-2xl">
            🎀
          </div>
          <div className="absolute top-3 right-3 text-pink-300/60 text-2xl">
            🎀
          </div>
          <div className="absolute bottom-3 left-3 text-rose-300/60 text-2xl">
            🌸
          </div>
          <div className="absolute bottom-3 right-3 text-rose-300/60 text-2xl">
            🌸
          </div>

          {/* Enhanced Top Decorative Line with cute elements */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <motion.div
              className="text-pink-400 text-xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎈
            </motion.div>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            <motion.div
              className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            <motion.div
              className="text-pink-400 text-xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              🎈
            </motion.div>
          </div>

          {/* Enhanced Couple Names with cute styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="space-y-4 text-center mb-8">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-serif bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent leading-tight mb-4 relative"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {config.data.groomName2}
                <motion.span
                  className="absolute -top-2 -right-2 text-2xl"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎂
                </motion.span>
              </motion.h1>

              {/* Cute divider with heart */}
              <div className="flex items-center justify-center gap-3 mb-7">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-rose-300" />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-300" />
                </motion.div>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-rose-300" />
              </div>
            </div>
          </motion.div>

          {/* Enhanced Date and Time with cute icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col gap-4 mb-6 sm:mb-8 items-center"
          >
            <motion.div
              className="inline-flex flex-col items-center space-y-2 bg-gradient-to-br from-white/90 to-pink-50/90 px-6 py-4 rounded-2xl border border-pink-200/50 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Calendar className="w-6 h-6 text-rose-500" />
              </motion.div>
              <p className="text-gray-700 font-medium text-center leading-relaxed">
                {formatEventDate(config.data.dateday)}
              </p>
            </motion.div>

            <motion.div
              className="inline-flex flex-col items-center space-y-2 bg-gradient-to-br from-white/90 to-purple-50/90 px-6 py-4 rounded-2xl border border-purple-200/50 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Clock className="w-6 h-6 text-purple-500" />
              </motion.div>
              <p className="text-gray-700 font-medium">{config.data.time}</p>
            </motion.div>
          </motion.div>

          {/* Enhanced Open Invitation Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenInvitation}
              className="group relative w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 overflow-hidden"
            >
              {/* Button sparkle effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />

              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="w-5 h-5" />
                </motion.span>
                <span>Buka Undangan</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-xl"
                >
                  ✨
                </motion.span>
              </span>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);

export default LandingPage;
