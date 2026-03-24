import { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const REVIEWS = [
  {
    id: 1,
    text: "Upward Development completely transformed our property. The steel building was erected seamlessly and the team is highly professional.",
    author: "John D.",
  },
  {
    id: 2,
    text: "Best dirt work in Lake Charles! They cleared our land in record time and the house pad was absolutely perfect.",
    author: "Sarah M.",
  },
  {
    id: 3,
    text: "Their communication and reliability are unmatched. Finding dependable contractors can be tough, but they earned every one of these 5 stars.",
    author: "Michael R.",
  }
];

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <div className="bg-white border border-gray-100 rounded-sm shadow-sm mt-8 relative overflow-hidden flex flex-col h-[280px]">
      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
        </div>
        <div className="flex gap-2">
          <button onClick={prevReview} className="p-1.5 bg-white hover:bg-gray-100 border border-gray-200 rounded-full transition-colors shadow-sm">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button onClick={nextReview} className="p-1.5 bg-white hover:bg-gray-100 border border-gray-200 rounded-full transition-colors shadow-sm">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="p-6 flex-grow relative flex items-center justify-center text-center bg-white">
        <Quote className="absolute top-4 left-4 w-10 h-10 text-gray-50" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full relative z-10"
          >
            <p className="text-gray-700 italic mb-4 line-clamp-4 leading-relaxed">"{REVIEWS[currentIndex].text}"</p>
            <p className="font-bold text-gray-900 text-sm tracking-wide uppercase">- {REVIEWS[currentIndex].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <a 
          href="https://www.google.com/maps/place/Upward+Development+LLC/data=!4m2!3m1!1s0x0:0x27212f6dae1db28c?sa=X&ved=1t:2428&ictx=111" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary font-bold hover:text-primary-dark transition-colors flex items-center justify-center gap-1 w-full text-sm uppercase tracking-wider"
        >
          Read all Google Reviews <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
