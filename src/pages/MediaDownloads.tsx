
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, File, FileText, FileSpreadsheet, Filter, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface DownloadItem {
  id: number;
  title: string;
  description: string;
  fileType: "pdf" | "doc" | "xls" | "other";
  fileSize: string;
  date: string;
  category: string;
  url: string;
}

const categories = ["All", "Reports", "Forms", "Presentations", "Brochures"];

const downloadItems: DownloadItem[] = [
  {
    id: 1,
    title: "Annual Report 2022",
    description: "Comprehensive annual financial and performance report.",
    fileType: "pdf",
    fileSize: "3.2 MB",
    date: "January 20, 2023",
    category: "Reports",
    url: "#",
  },
  {
    id: 2,
    title: "Membership Form",
    description: "Form for new members to join the Sacco.",
    fileType: "doc",
    fileSize: "0.5 MB",
    date: "March 15, 2023",
    category: "Forms",
    url: "#",
  },
  {
    id: 3,
    title: "Investment Opportunities",
    description: "Presentation on investment opportunities with our Sacco.",
    fileType: "pdf",
    fileSize: "2.1 MB",
    date: "April 10, 2023",
    category: "Presentations",
    url: "#",
  },
  {
    id: 4,
    title: "Loan Application Form",
    description: "Form for members to apply for various loans.",
    fileType: "doc",
    fileSize: "0.7 MB",
    date: "February 5, 2023",
    category: "Forms",
    url: "#",
  },
  {
    id: 5,
    title: "Product Brochure",
    description: "Detailed brochure of our products and services.",
    fileType: "pdf",
    fileSize: "1.5 MB",
    date: "May 20, 2023",
    category: "Brochures",
    url: "#",
  },
  {
    id: 6,
    title: "Financial Report Q1 2023",
    description: "First quarter financial performance report.",
    fileType: "xls",
    fileSize: "0.9 MB",
    date: "April 30, 2023",
    category: "Reports",
    url: "#",
  },
];

const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case "pdf":
      return <File className="h-10 w-10 text-red-500" />;
    case "doc":
      return <FileText className="h-10 w-10 text-blue-500" />;
    case "xls":
      return <FileSpreadsheet className="h-10 w-10 text-green-500" />;
    default:
      return <File className="h-10 w-10 text-gray-500" />;
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

const MediaDownloads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = downloadItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-sacco-blue">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sacco-blue dark:text-white mb-6">
              <span className="flex items-center justify-center">
                <Download className="mr-3 h-10 w-10 text-sacco-orange" /> Downloads
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Download forms, reports, brochures, and other important documents.
            </p>
          </div>
          
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-sacco-orange focus:border-sacco-orange block w-full pl-10 p-2.5"
                  placeholder="Search downloads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="md:hidden">
                <Button 
                  onClick={() => setShowFilters(!showFilters)} 
                  variant="outline"
                  className="w-full flex items-center justify-center"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
              </div>
              
              <div className={`md:flex gap-2 ${showFilters ? 'flex flex-wrap' : 'hidden'}`}>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      ${selectedCategory === category ? 'bg-sacco-orange hover:bg-sacco-orange/90 text-white' : ''}
                    `}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {filteredItems.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="glass bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                >
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 flex-shrink-0">
                        {getFileIcon(item.fileType)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-sacco-blue dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-3">
                          <span>{item.fileSize}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                          <span>•</span>
                          <span className="bg-sacco-orange/10 text-sacco-orange px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-sacco-orange hover:bg-sacco-orange/90"
                      onClick={() => window.open(item.url, "_blank")}
                    >
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
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
                <Download className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4" />
                <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-2">No documents found</h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MediaDownloads;
