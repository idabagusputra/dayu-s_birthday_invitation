import EventCards from "@/components/EventsCard";
import config from "@/config/config";
import { motion } from "framer-motion";
import { Heart, Sparkles, Gift } from "lucide-react";

const SparkleEffect = () => {
  const sparkles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-300/50" />
        </motion.div>
      ))}
    </div>
  );
};

const CuteBubbles = () => {
  const bubbles = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {bubbles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-15, -35, -15],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Events() {
  return (
    <>
      {/* Event Section */}
      <section id="event" className="py-20 overflow-hidden relative">
        {/* Enhanced Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-rose-50/20 to-purple-50/30" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-pink-200/20 to-rose-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-tr from-purple-200/20 to-pink-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Elements */}
        <SparkleEffect />
        <CuteBubbles />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 py-5"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-rose-50 to-pink-50 text-rose-600 rounded-full border border-rose-200/50 shadow-lg backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Gift className="w-4 h-4" />
              </motion.div>
              <span className="text-sm font-medium">Acara Spesial</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-serif bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent leading-tight relative"
            >
              Kita Rayakan Bareng-bareng!
              <motion.span
                className="absolute -top-2 -right-2 text-3xl"
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎉
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Aku mau ngajak kalian semua teman-teman dan sahabat terbaik buat
              seru-seruan bareng di hari spesial ini
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block ml-1"
              >
                🎂
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block ml-1"
              >
                ✨
              </motion.span>
            </motion.p>

            {/* Enhanced Decorative Line */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-8"
            >
              <motion.div
                className="text-pink-400 text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎈
              </motion.div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-rose-400 fill-rose-300" />
              </motion.div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
              <motion.div
                className="text-pink-400 text-xl"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                🎈
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="backdrop-blur-md bg-white/70 p-8 md:p-12 rounded-3xl border-2 border-pink-200/50 shadow-2xl relative overflow-hidden"
              whileHover={{
                scale: 1.01,
                boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Cute corner decorations */}
              <div className="absolute top-4 left-4 text-pink-300/60 text-3xl">
                🎀
              </div>
              <div className="absolute top-4 right-4 text-pink-300/60 text-3xl">
                🎀
              </div>
              <div className="absolute bottom-4 left-4 text-rose-300/60 text-3xl">
                🌸
              </div>
              <div className="absolute bottom-4 right-4 text-rose-300/60 text-3xl">
                🌸
              </div>

              {/* Sparkle effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
              />

              <EventCards events={config.data.agenda} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
