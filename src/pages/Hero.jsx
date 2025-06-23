import { Calendar, Clock, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import config from "@/config/config";
import { formatEventDate } from "@/lib/formatEventDate";
import { safeBase64 } from "@/lib/base64";

export default function Hero() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("guest");

    if (guestParam) {
      try {
        const decodedName = safeBase64.decode(guestParam);
        setGuestName(decodedName);
      } catch (error) {
        console.error("Error decoding guest name:", error);
        setGuestName("");
      }
    }
  }, []);

  const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, [targetDate]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8"
      >
        {Object.keys(timeLeft).map((interval, index) => (
          <motion.div
            key={interval}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4 + index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.2)",
            }}
            className="flex flex-col items-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-rose-100/50 shadow-lg relative overflow-hidden"
          >
            {/* Sparkle effect */}
            <motion.div
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              className="absolute top-1 right-1"
            >
              <Sparkles className="w-3 h-3 text-yellow-300/60" />
            </motion.div>

            <motion.span
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              {timeLeft[interval] || 0}
            </motion.span>
            <span className="text-xs text-gray-500 capitalize font-medium">
              {interval}
            </span>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const FloatingHearts = () => {
    const hearts = Array.from({ length: 8 }, (_, i) => i);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: typeof window !== "undefined" ? window.innerHeight : 800,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: -100,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Heart
              className={`w-${Math.floor(Math.random() * 2) + 6} h-${Math.floor(Math.random() * 2) + 6} ${
                i % 3 === 0
                  ? "text-rose-400/60"
                  : i % 3 === 1
                    ? "text-pink-400/60"
                    : "text-red-400/60"
              }`}
              fill="currentColor"
            />
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

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-5 text-center relative overflow-hidden"
      >
        {/* Enhanced Decorative Background */}
        <div className="absolute inset-0" />

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mx-auto"
          >
            <motion.span
              className="px-6 py-2 text-sm bg-gradient-to-r from-rose-50 to-pink-50 text-rose-600 rounded-full border border-rose-200/50 shadow-lg backdrop-blur-sm"
              animate={{
                boxShadow: [
                  "0 4px 6px -1px rgba(236, 72, 153, 0.1)",
                  "0 10px 15px -3px rgba(236, 72, 153, 0.2)",
                  "0 4px 6px -1px rgba(236, 72, 153, 0.1)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ Tanggal Acara Ada di Bagian Event ya! ✨
            </motion.span>
          </motion.div>

          <div className="space-y-4">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-4xl sm:text-6xl font-serif bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent leading-tight relative"
            >
              {config.data.groomName}
              <motion.span
                className="absolute -top-2 -right-2 text-3xl"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎂
              </motion.span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative max-w-md mx-auto"
          >
            <motion.div
              className="absolute inset-0 "
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)",
              }}
            />

            <div className="relative px-6 sm:px-8 py-8 sm:py-6 rounded-3xl shadow-2xl">
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

              <div className="space-y-6 text-center">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-white/90 to-pink-50/90 px-6 py-3 rounded-2xl border border-pink-200/50 shadow-lg"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Calendar className="w-5 h-5 text-rose-500" />
                    </motion.div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {formatEventDate(config.data.date, "full")}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-white/90 to-purple-50/90 px-6 py-3 rounded-2xl border border-purple-200/50 shadow-lg"
                  >
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    >
                      <Clock className="w-5 h-5 text-purple-500" />
                    </motion.div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {config.data.time}
                    </span>
                  </motion.div>
                </div>

                {/* Enhanced divider with cute elements */}
                <div className="flex items-center justify-center gap-3">
                  <motion.div
                    className="text-pink-400 text-xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎈
                  </motion.div>
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
                  <motion.div
                    className="text-pink-400 text-xl"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    🎈
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="space-y-3"
                >
                  <p className="text-gray-500 font-serif italic text-sm">
                    Kepada Teman Tercinta
                  </p>
                  <motion.p
                    className="text-rose-500 font-semibold font-serif text-lg leading-tight"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(236, 72, 153, 0)",
                        "0 0 10px rgba(236, 72, 153, 0.3)",
                        "0 0 0px rgba(236, 72, 153, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {guestName ? guestName : "Dayu's Lovely Friends"}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <CountdownTimer targetDate={config.data.date} />

          <div className="pt-6 relative">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                className="w-12 sm:w-16 h-12 sm:h-16 text-rose-500 mx-auto drop-shadow-lg"
                fill="currentColor"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
