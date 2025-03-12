
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import BackOfficeActivities from "@/components/home/BackOfficeActivities";
import HowToJoinPayment from "@/components/home/HowToJoinPayment";
import DisappearingAds from "@/components/home/DisappearingAds";
import Footer from "@/components/Footer";
import { Users, Heart, DollarSign, Clock5, RefreshCwOff, ChevronsUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white/90 dark:bg-sacco-blue/90 backdrop-blur-xl">
      <Navbar />
      <HeroSection />
      <DisappearingAds />
      <BackOfficeActivities />
      <HowToJoinPayment />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-sacco-light-blue/80 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sacco-blue mb-12">
            Why Choose Digital Sacco
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass bg-white/40 p-8 rounded-xl text-center transform hover:scale-105 transition-all">
              <Clock5 className="h-16 w-16 text-sacco-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-sacco-blue mb-2">
              Available & convenient
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
              Save and borrow anywhere, anywhere. Get a loan as soon as you complete the application process
              </p>
            </div>
            <div className="glass bg-white/40 p-8 rounded-xl text-center transform hover:scale-105 transition-all">
              <RefreshCwOff className="h-16 w-16 text-sacco-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-sacco-blue mb-2">
                Paperless
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
              All transactions are done on phone. Attractive dividends every financial year
              </p>
            </div>
            <div className="glass bg-white/40 p-8 rounded-xl text-center transform hover:scale-105 transition-all">
              <ChevronsUp className="h-16 w-16 text-sacco-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-sacco-blue mb-2">
              Fast & convenient
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
              Best-in-class interest rates for savings and loans. Ability to save & pay in installments before due  date at members comfort & covenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
