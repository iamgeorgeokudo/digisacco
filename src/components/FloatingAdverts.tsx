
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// List of loan products to display
const loanProducts = [
  {
    title: "Jipange Loan",
    description: "Plan for your future with our flexible Jipange loan. Apply today!",
    bgColor: "from-sacco-orange to-sacco-blue",
  },
  {
    title: "Emergency Loan",
    description: "Quick access to funds when you need them most. Low interest rates!",
    bgColor: "from-red-500 to-sacco-blue",
  },
  {
    title: "School Fee Loan",
    description: "Invest in education with our tailored school fee financing options.",
    bgColor: "from-blue-500 to-purple-500",
  },
  {
    title: "Biashara Loan",
    description: "Grow your business with our competitive Biashara loan packages.",
    bgColor: "from-green-500 to-teal-600",
  },
  {
    title: "Development Loan",
    description: "Build your dreams with our long-term development financing solutions.",
    bgColor: "from-yellow-500 to-orange-600",
  },
];

const FloatingAdverts = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Change advert every 10 seconds
  useEffect(() => {
    if (!isVisible || isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % loanProducts.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isVisible, isDismissed]);

  // Auto-show the advert after some time if it was dismissed
  useEffect(() => {
    if (!isDismissed) return;
    
    const timeout = setTimeout(() => {
      setIsDismissed(false);
      setIsVisible(true);
    }, 60000); // Show again after 1 minute

    return () => clearTimeout(timeout);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
    }, 500);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-4 right-4 z-50 max-w-xs w-full shadow-lg"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`glass bg-gradient-to-r ${loanProducts[currentAdIndex].bgColor} p-5 rounded-lg text-white`}>
            <button 
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
              aria-label="Close advert"
            >
              <X size={18} />
            </button>
            
            <h3 className="text-lg font-bold mb-2">
              {loanProducts[currentAdIndex].title}
            </h3>
            
            <p className="text-sm mb-3 text-white/90">
              {loanProducts[currentAdIndex].description}
            </p>
            
            <a 
              href={`/products#${loanProducts[currentAdIndex].title.toLowerCase().replace(' ', '-')}`}
              className="block text-center bg-white/20 hover:bg-white/30 text-white text-sm font-medium py-2 px-4 rounded-full transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingAdverts;
