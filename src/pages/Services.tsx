
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Users, BanknoteIcon, UserPlus, UserX, Share2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "How to Nominate a guarantor",
    icon: <UserPlus className="w-12 h-12 text-sacco-orange" />,
    steps: [
      "Dial *847#",
      "Select your loan",
      "Select nominate a guarantor",
      "Enter his/her mobile number",
      "Reply with 'Y' if you have to add another guarantor & 'N' if you don't have to",
      "Enter your pin number",
      "Press ok"
    ]
  },
  {
    title: "How to Guarantee a loan",
    icon: <BanknoteIcon className="w-12 h-12 text-sacco-orange" />,
    steps: [
      "Dial *847#",
      "Select a loan",
      "Select either nominate guarantor",
      "Confirm nomination",
      "Enter amount you want to guarantee",
      "Enter loan transaction ID",
      "Enter your pin",
      "Press ok"
    ]
  },
  {
    title: "How to join a group",
    icon: <Users className="w-12 h-12 text-sacco-orange" />,
    steps: [
      "Dial *847#",
      "Select option 6 (Group)",
      "Select option 3 (Join a group)",
      "Then follow the instructions as prompted"
    ]
  },
  {
    title: "How to create a group",
    icon: <UserPlus className="w-12 h-12 text-sacco-orange" />,
    steps: [
      "Dial *847#",
      "Select option 6 (Group)",
      "Select option 1 (Create a group)",
      "Follow the instructions as prompted",
      "Then follow the instructions as prompted"
    ]
  },
  {
    title: "How to Cancel a loan",
    icon: <UserX className="w-12 h-12 text-sacco-orange" />,
    steps: [
      "Dial *847#",
      "Select option 5 (Guarantors)",
      "Select option 3 (Cancel loan)",
      "Then choose the loan you want cancelled"
    ]
  },
  {
    title: "How to Invite your friends",
    icon: <Share2 className="w-12 h-12 text-sacco-orange" />,
    steps: [
      "Dial *847#",
      "Select option 7 (Invite Friends)",
      "Enter your friends mobile number"
    ]
  },
  {
    title: "How to repay a loan",
    icon: <CreditCard className="w-12 h-12 text-sacco-orange" />,
    steps: [
      "Dial *847#",
      "Select repay loan (option 2)",
      "Choose whether to repay from your E-wallet or from m-pesa"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-sacco-blue">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-sacco-blue dark:text-white mb-6">
              All you can do with *847#
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of digital services designed to make your financial journey seamless and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="p-4 rounded-full bg-sacco-light-blue dark:bg-sacco-dark-blue mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-sacco-blue dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-left">
                  {service.steps.map((step, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-700 dark:text-gray-200">
                      <span className="text-sacco-orange mt-1">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center glass p-8 rounded-xl animate-fade-in">
            <h2 className="text-2xl font-bold text-sacco-blue dark:text-white mb-4">
              Want to learn more about our loan products?
            </h2>
            <Link to="/products">
              <Button className="bg-sacco-orange hover:bg-sacco-orange/90">
                View Our Products
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
