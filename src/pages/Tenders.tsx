
import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Clock, AlertCircle, Clipboard, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Tender {
  id: number;
  title: string;
  description: string;
  publishDate: string;
  closingDate: string;
  status: "open" | "closed" | "upcoming";
  documentUrl: string;
}

const tenders: Tender[] = [
  {
    id: 1,
    title: "Supply and Installation of Core Banking System",
    description: "Seeking qualified vendors to supply and install a comprehensive core banking system that will streamline our operations and enhance service delivery.",
    publishDate: "June 1, 2023",
    closingDate: "July 15, 2023",
    status: "closed",
    documentUrl: "#",
  },
  {
    id: 2,
    title: "Provision of Security Services",
    description: "Inviting bids from reputable security firms to provide 24-hour security services at our headquarters and branch offices across the country.",
    publishDate: "August 10, 2023",
    closingDate: "September 20, 2023",
    status: "closed",
    documentUrl: "#",
  },
  {
    id: 3,
    title: "Supply of Office Stationery and Materials",
    description: "Looking for suppliers for various office stationery and materials on a quarterly basis for our operations.",
    publishDate: "October 5, 2023",
    closingDate: "November 10, 2023",
    status: "closed",
    documentUrl: "#",
  },
  {
    id: 4,
    title: "Website Redesign and Development",
    description: "Seeking a web development agency to redesign and develop our corporate website with enhanced features and integrations.",
    publishDate: "January 15, 2024",
    closingDate: "February 28, 2024",
    status: "closed",
    documentUrl: "#",
  },
  {
    id: 5,
    title: "Provision of Audit Services",
    description: "Inviting proposals from audit firms for the provision of external audit services for the financial year 2024.",
    publishDate: "March 1, 2024",
    closingDate: "April 15, 2024",
    status: "closed",
    documentUrl: "#",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "open":
      return (
        <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
          <span className="flex items-center">
            <Clock className="mr-1 h-3 w-3" /> Open
          </span>
        </Badge>
      );
    case "closed":
      return (
        <Badge className="bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">
          <span className="flex items-center">
            <AlertCircle className="mr-1 h-3 w-3" /> Closed
          </span>
        </Badge>
      );
    case "upcoming":
      return (
        <Badge className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
          <span className="flex items-center">
            <Clock className="mr-1 h-3 w-3" /> Upcoming
          </span>
        </Badge>
      );
    default:
      return null;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Tenders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTenders = tenders.filter(tender => 
    tender.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    tender.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-sacco-blue">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sacco-blue dark:text-white mb-6">
              Tenders are posted below
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse through our current, upcoming, and past tender opportunities.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="glass bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-sacco-orange focus:border-sacco-orange block w-full pl-10 p-2.5"
                  placeholder="Search tenders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-sacco-blue/80 glass backdrop-blur-xl rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-sacco-blue dark:text-white flex items-center">
                  <Clipboard className="mr-2 h-6 w-6 text-sacco-orange" />
                  Current Tenders
                </h2>
                <Badge className="bg-sacco-orange text-white">
                  {filteredTenders.length} tenders
                </Badge>
              </div>
              
              {filteredTenders.length > 0 ? (
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredTenders.map((tender) => (
                    <motion.div
                      key={tender.id}
                      className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0"
                      variants={itemVariants}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-sacco-blue dark:text-white">
                              {tender.title}
                            </h3>
                            {getStatusBadge(tender.status)}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {tender.description}
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center">
                              <span className="font-medium mr-1">Published:</span> {tender.publishDate}
                            </span>
                            <span className="flex items-center">
                              <span className="font-medium mr-1">Closing:</span> {tender.closingDate}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Button 
                            className="bg-sacco-orange hover:bg-sacco-orange/90 w-full md:w-auto"
                            onClick={() => window.open(tender.documentUrl, "_blank")}
                          >
                            <FileText className="mr-2 h-4 w-4" /> 
                            View Details
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AlertCircle className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4" />
                    <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-2">No tenders found</h3>
                    <p className="text-gray-500 dark:text-gray-500">
                      There are no tenders matching your search criteria at the moment.
                    </p>
                  </motion.div>
                </div>
              )}
            </div>
            
            <div className="mt-8 p-6 glass bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-sacco-blue dark:text-white mb-3">How to Apply for Tenders</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All applications should be submitted in sealed envelopes clearly marked with the tender title and reference number to our headquarters or via email to info@digitalsacco.com.
              </p>
              <div className="flex items-center">
                <a href="#" className="text-sacco-orange hover:underline flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Tender Application Guidelines
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tenders;
