import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';

interface Review {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export default function ReviewSlider() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch reviews');
        }
        
        if (data.reviews && data.reviews.length > 0) {
          // Filter out reviews without text and sort by rating
          const validReviews = data.reviews.filter((r: Review) => r.text && r.rating >= 4);
          setReviews(validReviews.length > 0 ? validReviews : data.reviews);
        } else {
          setError('No reviews found.');
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (loading) {
    return (
      <div className="p-6 bg-white border border-gray-100 rounded-sm shadow-sm mt-8 flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-white border border-gray-100 rounded-sm shadow-sm mt-8">
        <div className="flex items-center gap-2 mb-2">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-gray-300 text-gray-300" />)}
        </div>
        <p className="font-bold text-lg mb-2">Google Reviews</p>
        <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-sm border border-amber-200">
          {error}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          To display real reviews, configure GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in the environment variables.
        </p>
      </div>
    );
  }

  if (reviews.length === 0) return null;

  const currentReview = reviews[currentIndex];

  return (
    <div className="p-6 bg-white border border-gray-100 rounded-sm shadow-sm mt-8 relative overflow-hidden">
      <MessageSquareQuote className="absolute top-4 right-4 w-12 h-12 text-gray-100" />
      
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < currentReview.rating ? 'fill-primary text-primary' : 'fill-gray-200 text-gray-200'}`} 
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prevReview} className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextReview} className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative h-[120px] mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <p className="text-gray-700 italic line-clamp-4 text-sm">
              "{currentReview.text}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3 relative z-10 border-t border-gray-100 pt-4">
        {currentReview.profile_photo_url ? (
          <img 
            src={currentReview.profile_photo_url} 
            alt={currentReview.author_name} 
            className="w-10 h-10 rounded-full"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {currentReview.author_name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-bold text-sm text-gray-900">{currentReview.author_name}</p>
          <p className="text-xs text-gray-500">{currentReview.relative_time_description}</p>
        </div>
      </div>
    </div>
  );
}
