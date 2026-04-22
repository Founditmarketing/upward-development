import { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const REVIEWS = [
  {
    id: 1,
    text: "Lucas is exceptional: attentive, respectful, and genuinely invested in the outcome. He approaches your project like it's personal to him, which builds tremendous trust and peace of mind. They treat every project with care and attention to detail, as if it were their own.",
    author: "Allen Burleson",
  },
  {
    id: 2,
    text: "We hired Upward Development to clear a few acres and we're very satisfied with the work. Clear communication throughout and didn't leave until we gave them the ok. Looking forward to hiring them again!",
    author: "Monica Miller",
  },
  {
    id: 3,
    text: "We used Upward Development to head up a million dollar addition to an event venue we own in south Lake Charles. They were wonderful to work with. They got there early and stayed late. Before they would make any changes to our original plans they made sure we knew the cost involved.",
    author: "DeWanna Tarver",
  },
  {
    id: 4,
    text: "I hired Upward Development to build a shop for me. They met every time line that they promised me. Their quality of work definitely did not disappoint. Their price beat everyone around. Very professional and took time to explain anything that I had questions about.",
    author: "Joshua Daniels",
  },
  {
    id: 5,
    text: "An amazing group of hard workers that are exceptional in their quality of work and in getting the job done in a timely manner. You do not have to stand over them to make sure they're doing what they are supposed to be doing, and they take much pride in their work.",
    author: "Z Bellemin",
  },
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
