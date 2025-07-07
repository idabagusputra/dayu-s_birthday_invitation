import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import {
  Calendar,
  Clock,
  ChevronDown,
  User,
  MessageCircle,
  Send,
  Smile,
  CheckCircle,
  XCircle,
  HelpCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Wishes() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [newWish, setNewWish] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attendance, setAttendance] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [wishes, setWishes] = useState([]);

  const API_URL = "https://686b720be559eba908729006.mockapi.io/wishes";

  const formatEventDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const loadFromCloud = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network error");

      const data = await response.json();
      return data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } catch (error) {
      console.error("Gagal memuat data dari MockAPI:", error);
      const savedWishes = localStorage.getItem("wishes");
      return savedWishes ? JSON.parse(savedWishes) : [];
    }
  };

  const saveToCloud = async (wish) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wish),
      });
      if (!response.ok) throw new Error("Gagal menyimpan");
    } catch (error) {
      console.error("Gagal menyimpan ke cloud:", error);
      localStorage.setItem("wishes", JSON.stringify([wish]));
    }
  };

  useEffect(() => {
    const loadWishes = async () => {
      setIsLoading(true);
      const loadedWishes = await loadFromCloud();
      setWishes(loadedWishes);
      setIsLoading(false);
    };
    loadWishes();
  }, []);

  const options = [
    { value: "attending", label: "Ya, saya akan hadir" },
    { value: "not-attending", label: "Tidak, saya tidak bisa hadir" },
    { value: "maybe", label: "Mungkin, saya akan konfirmasi nanti" },
  ];

  const handleSubmitWish = async () => {
    if (!newWish.trim() || !name.trim()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newWishObj = {
      name,
      message: newWish,
      attending: attendance || "attending",
      timestamp: new Date().toISOString(),
    };

    await saveToCloud(newWishObj);
    setWishes((prev) => [newWishObj, ...prev]);

    setNewWish("");
    setName("");
    setAttendance("");
    setIsSubmitting(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const getAttendanceIcon = (status) => {
    switch (status) {
      case "attending":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case "not-attending":
        return <XCircle className="w-4 h-4 text-rose-500" />;
      case "maybe":
        return <HelpCircle className="w-4 h-4 text-amber-500" />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <section id="wishes" className="min-h-screen relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
              <p className="text-gray-500">Memuat pesan...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <section id="wishes" className="min-h-screen relative overflow-hidden">
        {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-rose-500 font-medium"
            >
              Kirimkan Doa dan Harapan Terbaik Anda
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800"
            >
              Pesan dan Doa
            </motion.h2>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-rose-200" />
              <MessageCircle className="w-5 h-5 text-rose-400" />
              <div className="h-[1px] w-12 bg-rose-200" />
            </motion.div>
          </motion.div>

          {/* Wishes list */}
          <div className="max-w-2xl mx-auto space-y-6">
            {wishes.length === 0 ? (
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-rose-200 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  Belum ada pesan. Jadilah yang pertama!
                </p>
              </div>
            ) : (
              <div className="overflow-hidden">
                <div className="animate-marquee flex gap-6">
                  {wishes.concat(wishes).map((wish, index) => (
                    <motion.div
                      key={`${wish.timestamp}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="group relative w-[280px] flex-shrink-0"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />
                      <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-100/50 shadow-md">
                        <div className="flex items-start space-x-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                            {wish.name[0]?.toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium text-gray-800 text-sm truncate">
                                {wish.name}
                              </h4>
                              {getAttendanceIcon(wish.attending)}
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500 text-xs">
                              <Clock className="w-3 h-3" />
                              <time className="truncate">
                                {formatEventDate(wish.timestamp)}
                              </time>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                          {wish.message}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Wishes Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg">
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                      <User className="w-4 h-4" />
                      <span>Nama Kamu</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Masukan nama kamu..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 text-gray-700"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>Apakah kamu hadir?</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 text-left flex items-center justify-between"
                    >
                      <span
                        className={
                          attendance ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {attendance
                          ? options.find((opt) => opt.value === attendance)
                              ?.label
                          : "Pilih kehadiran..."}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-rose-100"
                        >
                          {options.map((option) => (
                            <motion.button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setAttendance(option.value);
                                setIsOpen(false);
                              }}
                              whileHover={{ backgroundColor: "#fff1f2" }}
                              className={`w-full px-4 py-2.5 text-left ${
                                attendance === option.value
                                  ? "bg-rose-50 text-rose-600"
                                  : "text-gray-700"
                              }`}
                            >
                              {option.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>Harapan kamu</span>
                    </div>
                    <textarea
                      placeholder="Kirimkan harapan dan doa untuk kedua mempelai..."
                      className="w-full h-32 p-4 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 resize-none"
                      value={newWish}
                      onChange={(e) => setNewWish(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Smile className="w-5 h-5" />
                    <span className="text-sm">Berikan Doa Anda</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmitWish}
                    className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium ${
                      isSubmitting
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-rose-500 hover:bg-rose-600"
                    }`}
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting ? "Sedang Mengirim..." : "Kirimkan Doa"}
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
