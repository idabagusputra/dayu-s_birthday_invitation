import EventCards from "@/components/EventsCard";
import config from "@/config/config";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Events() {
  return (
    <>
      {/* Event Section */}
      <section id="event" className="py-0 overflow-hidden">
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
            className="text-center space-y-4 mb-5"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-rose-500 font-medium mb-2"
            ></motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
            >
              Kita Rayakan Bareng-bareng!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 max-w-md mx-auto"
            >
              Aku mau ngajak kalian semua teman-teman dan sahabat terbaik buat
              seru-seruan bareng di hari spesial ini 🎂✨
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-6"
            >
              <div className="h-[1px] w-12 bg-rose-200" />
              <div className="text-rose-400">
                <Heart className="w-4 h-4" fill="currentColor" />
              </div>
              <div className="h-[1px] w-12 bg-rose-200" />
            </motion.div>
          </motion.div>

          {/* Dress Code Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-10"
          >
            <div className="flex justify-between items-center w-full bg-pink-50 px-6 py-4 rounded-full border border-rose-200">
              <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
              <span className="text-gray-700 font-medium text-center flex-1">
                Dress Code:{" "}
                <span className="text-pink-600 font-semibold">Pink</span>
              </span>
              <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
            </div>
          </motion.div>

          {/* Events Grid
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <EventCards events={config.data.agenda} />
          </motion.div> */}
        </motion.div>
      </section>
    </>
  );
}
