
import { useState } from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAdverts from "@/components/FloatingAdverts";

const Elections = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center text-sacco-blue mb-8">
              Digital Sacco 2025 Delegates Elections
            </h1>
            
            <p className="mb-8 text-gray-700 dark:text-gray-300 text-center">
              Digital Sacco Delegates election is scheduled to be held in the month of April 2025.
            </p>
            
            <div className="bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl rounded-xl p-8 mb-8 glass">
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                If you wish to represent your county, click below links:
              </p>
              
              <a 
                href="/Delegate.docx" 
                download
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors w-full md:w-auto mb-6"
              >
                <FileDown size={20} />
                Click here to download the NOMINATION FORM
              </a>
              
              <h2 className="text-xl font-semibold text-sacco-orange mt-10 mb-4">
                ALTERNATIVE SUBMISSION OF NOMINATION FORM & OTHER REQUIRED DOCUMENTS
              </h2>
              
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                To submit your duly filled form together with other required documents, kindly use below e-mail address to send them.
              </p>
              
              <a 
                href="mailto:elections@digitalsacco.com" 
                className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                elections@digitalsacco.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <FloatingAdverts />
    </div>
  );
};

export default Elections;
