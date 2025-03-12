
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-sacco-light-blue/80 to-white/80 dark:from-sacco-dark-blue/80 dark:to-sacco-blue/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl font-bold text-sacco-blue dark:text-white mb-6">
          Je, Unajua kuhusu Digital Sacco?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Anytime, anywhere on the phone. 
            Join us today by dialling *847#          
          </p>
          <div className="flex justify-center gap-4">
            <button className="glass bg-sacco-orange/90 text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
              Join Now
            </button>
            <button className="glass border-2 border-sacco-blue/20 dark:border-white/20 text-sacco-blue dark:text-white px-8 py-3 rounded-full hover:bg-sacco-blue/10 dark:hover:bg-white/10 transition-all transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
