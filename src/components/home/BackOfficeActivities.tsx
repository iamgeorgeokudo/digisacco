
import { HandCoins, PiggyBank, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BackOfficeActivities = () => {
  return (
    <section className="py-20 bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-sacco-blue dark:text-white mb-12">
          Back Office Sacco Activities
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          <div className="glass bg-white/40 dark:bg-sacco-dark-blue/40 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6 h-48 overflow-hidden rounded-lg">
              <img 
                src="/short_term.jpg" 
                alt="Short Term Loan" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-sacco-blue dark:text-white mb-4">
              Short Term Loan Facilities
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Quick access to funds for immediate needs with flexible repayment options
            </p>
            <HandCoins className="text-sacco-orange h-12 w-12 mb-4" />
          </div>
          <div className="glass bg-white/40 dark:bg-sacco-dark-blue/40 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6 h-48 overflow-hidden rounded-lg">
              <img 
                src="/long_term.jpg" 
                alt="Long Term Loan" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-sacco-blue dark:text-white mb-4">
              Long Term Loan Facilities
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Strategic financing solutions for long-term investments and goals
            </p>
            <PiggyBank className="text-sacco-orange h-12 w-12 mb-4" />
          </div>
        </div>
        <div className="text-center">
          <Link to="/products" className="inline-flex items-center text-sacco-orange hover:text-sacco-blue dark:hover:text-white transition-colors">
            Know More <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BackOfficeActivities;
