import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useGallery } from "./GalleryContext";

interface GalleryPhotoProps {
  alt: string;
  src: string;
  index: number;
}

const GalleryPhoto = ({ alt, src, index }: GalleryPhotoProps) => {
  const { images, currentIndex, setCurrentIndex } = useGallery();

  const isOpen = currentIndex === index;

  const [scale, setScale] = useState(1);

  // ---------------- NAVIGATION ----------------
  const nextImage = () => {
    setCurrentIndex((currentIndex! + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex! - 1 + images.length) % images.length);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  // ---------------- KEYBOARD ----------------
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // ---------------- BODY SCROLL LOCK ----------------
  useEffect(() => {
    document.body.style.overflow =
      currentIndex !== null ? "hidden" : "auto";
  }, [currentIndex]);

  // ---------------- RESET ON CHANGE ----------------
  useEffect(() => {
    setScale(1);
  }, [currentIndex]);

  // ---------------- PRELOAD ----------------
  useEffect(() => {
    if (currentIndex === null) return;
    const next = new Image();
    next.src = images[(currentIndex + 1) % images.length].src;
  }, [currentIndex]);

  // ---------------- ZOOM ----------------
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    setScale((prev) =>
      Math.min(Math.max(prev - e.deltaY * 0.001, 1), 4)
    );
  };

  const handleDoubleClick = () => {
    setScale((prev) => (prev === 1 ? 2 : 1));
  };

  // ---------------- PINCH ZOOM ----------------
  let lastDistance: number | null = null;

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];

      const distance = Math.hypot(
        t2.clientX - t1.clientX,
        t2.clientY - t1.clientY
      );

      if (lastDistance === null) {
        lastDistance = distance;
        return;
      }

      const delta = distance - lastDistance;
      lastDistance = distance;

      setScale((prev) =>
        Math.min(Math.max(prev + delta * 0.005, 1), 4)
      );
    }
  };

  const handleTouchEnd = () => {
    lastDistance = null;
  };

  // ---------------- GRID ITEM ----------------
  const content = (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onClick={() => setCurrentIndex(index)}
      className="overflow-hidden rounded-lg shadow-md cursor-pointer"
    >
      <div className="bg-gray-200 h-64">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </motion.div>
  );

  return (
    <>
      {content}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-6"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <div className="relative mx-auto w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex!].src}
                    alt={images[currentIndex!].alt}
                    onWheel={handleWheel}
                    onDoubleClick={handleDoubleClick}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    drag={scale === 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.3}
                    dragMomentum
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -100 || info.velocity.x < -500) nextImage();
                      else if (info.offset.x > 100 || info.velocity.x > 500) prevImage();
                    }}
                    className="mx-auto block w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition"
                    style={{ scale }}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                </AnimatePresence>

                {/* PREV */}
                <button
                  className="absolute left-2 top-1/2 z-20 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg hover:bg-white"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* NEXT */}
                <button
                  className="absolute right-2 top-1/2 z-20 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg hover:bg-white"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* CLOSE */}
                <button
                  className="absolute top-2 right-2 z-20 h-9 w-9 flex items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg hover:bg-white"
                  onClick={closeModal}
                  aria-label="Close viewer"
                >
                  <X size={16} />
                </button>
            </div>

              <div className="mt-3 flex flex-col items-center gap-2">
                <p className="text-sm text-white bg-black/70 px-3 py-1 rounded">
                  {images[currentIndex!].alt}
                </p>
                <div className="w-full overflow-x-auto">
                  <div className="flex items-center justify-center gap-2">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-14 w-20 object-cover rounded cursor-pointer transition border-2 ${
                      i === currentIndex
                        ? "border-blue-400 ring-2 ring-white"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  />
                ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPhoto;