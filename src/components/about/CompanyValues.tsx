
import { Check } from "lucide-react";

const CompanyValues = () => {
  const coreValues = [
    "Democratic governance",
    "Inclusiveness",
    "Autonomy and development",
    "Participation",
    "Corporate social responsibility",
    "Building partnerships",
    "Mutual respect",
    "Fairness and justice",
    "Transparency",
    "Environmental responsibility",
    "Accountability"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sacco-light-blue/80 dark:from-sacco-blue dark:to-sacco-dark-blue/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-sacco-blue dark:text-white mb-12">
          Company Values
        </h2>
        <div className="glass p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-sacco-blue dark:text-white mb-6">
            Core Values
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-200"
              >
                <Check className="w-5 h-5 text-sacco-orange" />
                <span>{value}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-sacco-blue dark:text-white">
              Our strategic pillars are <span className="text-sacco-orange">accessibility, confidentiality, affordability, integrity</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
