
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rocket, CreditCard, DollarSign, Percent, HandCoins, BookOpenText, ArrowUpFromLine, Handshake, Factory} from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoanProduct {
  id: string;
  title: string;
  icon: JSX.Element;
  requirements: string[];
}

const shortTermLoans: LoanProduct[] = [
  {
    id: "jipange",
    title: "Jipange Loan",
    icon: <Rocket className="h-12 w-12 text-sacco-blue dark:text-white" />,
    requirements: [
      "Qualify when a minimum of ksh 500 is saved",
      "No guarantors required",
      "5% intrest rate",
      "Loan offered is 90% of total savings",
      "Repayment period of 1 month"
    ]
  },
  {
    id: "emergency",
    title: "Emergency Loan",
    icon: <HandCoins className="h-12 w-12 text-sacco-blue dark:text-white" />,
    requirements: [
      "Qualify when a minimum of ksh 500 is saved",
      "No guarantors required",
      "Interest rate of 5% per month",
      "Loan offered is 80% of total savings",
      "Repayment period of upto 3 months"
    ]
  },
  {
    id: "jisort",
    title: "Jisort Loan",
    icon: <CreditCard className="h-12 w-12 text-sacco-blue dark:text-white" />,
    requirements: [
      "Qualify after 2 months of saving",
      "Requires guarantors if amount borrowed exceeds savings balance",
      "Interest rate of 4% per month",
      "Maximum loan offer is upto 2x of savings",
      "Repayment period of upto 2 months"
    ]
  }
];

const longTermLoans: LoanProduct[] = [
  {
    id: "school",
    title: "School fee loan",
    icon: <BookOpenText className="h-12 w-12 text-sacco-blue dark:text-white" />,
    requirements: [
      "Qualify after 3 months of saving",
      "Requires guarantors/ self-guaranteed if amount borrowed is less than your savings",
      "Interest rate of 1% per month",
      "Maximum loan offer is upto 3x of saving",
      "Maximum repayment period of 12 months"
    ]
  },
  {
    id: "development",
    title: "Development Loan",
    icon: <ArrowUpFromLine className="h-12 w-12 text-sacco-blue dark:text-white" />,
    requirements: [
      "Qualify after 3 months of saving",
      "Requires guarantors/ self-guaranteed if amount borrowed is less than your savings",
      "Interest rate of 1% per month",
      "Maximum loan offer is upto 3x of saving",
      "Maximum repayment period of 48 months"
    ]
  },
  {
    id: "biashara",
    title: "Biashara Loan",
    icon: <Handshake className="h-12 w-12 text-sacco-blue dark:text-white" />,
    requirements: [
      "Qualify after 3 months of saving",
      "Requires guarantors/ self-guaranteed if amount borrowed is less than your savings",
      "Interest rate of 1% per month",
      "Maximum loan offer is upto 4x of saving",
      "Maximum repayment period of 48 months"
    ]
  },
  {
    id: "investment",
    title: "Investment Loan",
    icon: <Factory className="h-12 w-12 text-sacco-blue dark:text-white" />,
    requirements: [
      "Qualify after 3 months of saving",
      "Requires guarantors/ self-guaranteed if amount borrowed is less than your savings",
      "Interest rate of 1% per month",
      "Maximum loan offer is upto 5x of savings",
      "Maximum repayment period of 48 months"
    ]
  },
  // ... Add other long term loans similarly
];

const Products = () => {
  const [activeTab, setActiveTab] = useState<'short' | 'long'>('short');

  return (
    <div className="min-h-screen bg-white dark:bg-sacco-blue">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-sacco-blue dark:text-white mb-12 animate-fade-in">
            Our Loan Products
          </h1>

          <div className="flex justify-center space-x-4 mb-12">
            <Button
              variant={activeTab === 'short' ? 'default' : 'outline'}
              onClick={() => setActiveTab('short')}
              className="min-w-[200px]"
            >
              Short Term Loans
            </Button>
            <Button
              variant={activeTab === 'long' ? 'default' : 'outline'}
              onClick={() => setActiveTab('long')}
              className="min-w-[200px]"
            >
              Long Term Loans
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'short' ? shortTermLoans : longTermLoans).map((loan, index) => (
              <div
                key={loan.id}
                id={loan.id}
                className="glass p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-sacco-light-blue dark:bg-sacco-dark-blue">
                    {loan.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-sacco-blue dark:text-white">{loan.title}</h3>
                  <ul className="space-y-3 text-left w-full">
                    {loan.requirements.map((req, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-200">
                        <span className="text-sacco-orange">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center glass p-8 rounded-xl animate-fade-in">
            <h2 className="text-2xl font-bold text-sacco-blue dark:text-white mb-4">
              You can also save in Digital Sacco and get a higher loan limit
            </h2>
            <p className="text-sacco-orange text-lg">
              Do this by dialing *847*25#
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
