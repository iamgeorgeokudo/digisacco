import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const faqItems: FAQItem[] = [
  {
    question: "Can I be able to withdraw my savings anytime I want?",
    answer: (
      <>
        <p>
          No. Savings are not withdrawable. A member can only withdraw the loan
          amount borrowed any time. This is according to the Co-Operative
          Society Act governing BOSA Sacco's in Kenya on which we operates
          under. We receive non-withdrawable savings from our members.
        </p>
        <p className="mt-2">
          Member's savings are only withdrawable when he/she has requested for
          account closure
        </p>
      </>
    ),
  },
  {
    question: "How different are you from other Sacco's?",
    answer: (
      <>
        <p>
          Our Sacco is BOSA Sacco (Back Office Sacco). We don’t offer over the
          counter service (front office services) as other Sacco’s does. We only
          receive non-withdrawable savings/deposits from members with intention
          of borrowing or just saving Closure of an account takes up to 60
          working day and the savings are refunded fully at no cost/charge We
          don’t have physical branches all over Kenya in major towns. But we are
          physically present to any member who dials *847# any time and from any
          where We are totally paperless in all our operations (account opening,
          saving, loan borrowing and withdrawal) Our members don’t have a common
          bond.
        </p>
        <p className="mt-2">
          Any member can join as long as you have a registered SIM card
        </p>
      </>
    ),
  },
  {
    question:
      "Who controls your operation (or what Act governs your operations)",
    answer: (
      <>
        <p>
          Our operation is controlled by The Ministry of Industry, Investment
          and Trade under state department of trade. We follow and work with the
          provisions of the Co-Operatives Society Act and Rules made there
          under. Our registration number is CS/18199.
        </p>
        <p className="mt-2">
          A copy of the same can be sent to you on request
          (info@digitalsacco.com)
        </p>
      </>
    ),
  },
  {
    question: "Do you have offices in other towns within Kenya?",
    answer: (
      <>
        <p>
          We don’t have physical branches all over Kenya in major towns. But we
          are physically present to any member who dials *847# any time and from
          any where{" "}
        </p>
        <p className="mt-2">
          How do I register/ become a member? By dialing *847#
        </p>
      </>
    ),
  },

  {
    question: "How do I save into my account?",
    answer: (
      <>
        <p>
          Go To M-PESA, Select Lipa Na M-PESA, Select Pay Bill, Enter Business
          No 542431, Enter Phone Number As The Account No., Enter Amount, Enter
          M-PESA PIN, Confirm The Transaction,
        </p>
        <p className="mt-2">OK</p>
      </>
    ),
  },
  {
    question:
      "Can I change my monthly contribution and other detail like next of kin?",
    answer: (
      <>
        <p>
          Yes you can, by dialing *847# and choose option 8 and five
          respectively
        </p>
        <p className="mt-2"></p>
      </>
    ),
  },
  {
    question: "Is there penalty for late monthly contribution?",
    answer:
      "No. Late monthly contribution is never charged/ attracts no charges",
  },
  {
    question:
      "Can I contribute more or less my pledge per month without any penalties?",
    answer:
      "YES. You can save as much as you can and also as little as you can get/ no penalties on either case",
  },
  {
    question:
      "What is the difference between digital wallet and Sacco account?",
    answer:
      "A digital wallet is a mobile-based platform for making transactions, while a Sacco account is a savings account with our cooperative society that earns dividends and gives you access to loans.",
  },
  {
    question: "Do you have loans?",
    answer:
      "Yes, we offer various types of loans including emergency loans, development loans, education loans, and more. Visit our products page for more details on our loan offerings.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-sacco-blue">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sacco-blue dark:text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, membership,
              and operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className={`mb-4 overflow-hidden rounded-lg glass ${
                  activeIndex === index
                    ? "bg-white/80 dark:bg-sacco-blue/80"
                    : "bg-gray-100/80 dark:bg-sacco-blue/50"
                } shadow-md backdrop-blur-md border border-gray-200 dark:border-gray-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-sacco-blue dark:text-white">
                    {item.question}
                  </span>
                  <ChevronUp
                    className={`w-5 h-5 text-sacco-orange transition-transform duration-300 ${
                      activeIndex === index ? "" : "transform rotate-180"
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
