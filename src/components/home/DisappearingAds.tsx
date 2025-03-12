
import { useState, useEffect } from 'react';

const ads = [
  {
    title: "Emergency Loan",
    description: "Qualify when a minimum of ksh 500 is saved at Interest rate of 5% per month",
    bgColor: "from-sacco-orange to-sacco-blue",
  },
  {
    title: "Long-term Investment Plans",
    description: "Grow your wealth with our high-yield investment options, ranging from SCHOOL FEE,DEVELOPMENT, BIASHARA and INVESTMENT loans",
    bgColor: "from-sacco-blue to-sacco-dark-blue",
  },
  {
    title: "Special Offer",
    description: "🎉 Get 5% intrest rate on your JIPANGE loan application! Limited time only.",
    bgColor: "from-sacco-orange to-sacco-dark-blue",
  },
];

const DisappearingAds = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000); // Change ad every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className={`glass bg-gradient-to-r ${ads[currentAdIndex].bgColor} p-8 rounded-xl shadow-lg text-white animate-fade-in`}>
          <h3 className="text-2xl font-bold mb-4">
            {ads[currentAdIndex].title}
          </h3>
          <p className="mb-6">
            {ads[currentAdIndex].description}
          </p>
          <div className="flex justify-center">
            <button className="glass bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisappearingAds;
