
import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

const categories = ["All", "County-Visit", "AGM", ];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "2022 AGM: The Board Members",
    date: "June 15, 2022",
    category: "AGM",
    image: "/2022.jpg",
  },
  {
    id: 2,
    title: "2022 AGM: The Board Members with Delegates",
    date: "June 15, 2022",
    category: "AGM",
    image: "/delegates.jpg",
  },

  {
    id: 3,
    title: "2019 Member Training Forum: Bomet county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/bomet1.jpg",
  },
  
  {
    id: 4,
    title: "2019 Member Training Forum: Bomet county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/bomet2.jpg",
  },

  {
    id: 5,
    title: "2019 Member Training Forum: Bomet county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/bomet3.jpg",
  },

  {
    id: 6,
    title: "2019 Member Training Forum: Bomet county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/bomet4.jpg",
  },

  {
    id: 7,
    title: "2019 Member Training Forum: Bungoma county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/bungoma1.jpg",
  },
  {
    id: 8,
    title: "2019 Member Training Forum: Bungoma county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/bungoma2.jpg",
  },

  {
    id: 9,
    title: "2019 Member Training Forum: Bungoma county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/bungoma3.jpg",
  },

  {
    id: 10,
    title: "2019 Member Training Forum: Bungoma county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/bungoma4.jpg",
  },

  {
    id: 11,
    title: "2019 Member Training Forum: Busia county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/busia1.jpg",
  },
  {
    id: 12,
    title: "2019 Member Training Forum: Busia county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/busia2.jpg",
  },
  {
    id: 12,
    title: "2019 Member Training Forum: Kakamega county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kach1.jpg",
  },
  {
    id: 13,
    title: "2019 Member Training Forum: Kakamega county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kach2.jpg",
  },
  {
    id: 14,
    title: "2019 Member Training Forum: Kakamega county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kach3.jpg",
  },
  {
    id: 15,
    title: "2019 Member Training Forum: Kakamega county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kach4.jpg",
  },
  {
    id: 16,
    title: "2019 Member Training Forum: Kakamega county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kach5.jpg",
  },
  {
    id: 17,
    title: "2019 Member Training Forum: Kakamega county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kach6.jpg",
  },
  {
    id: 18,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho1.jpg",
  },
  {
    id: 20,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho2.jpg",
  },
  {
    id: 21,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho3.jpg",
  },
  {
    id: 22,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho4.jpg",
  },
  {
    id: 23,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho5.jpg",
  },
  {
    id: 24,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho6.jpg",
  },
  {
    id: 25,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho7.jpg",
  },
  {
    id: 26,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho8.jpg",
  },
  {
    id: 27,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho9.jpg",
  },
  {
    id: 28,
    title: "2019 Member Training Forum: Kericho county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kericho10.jpg",
  },
  {
    id: 29,
    title: "2019 Member Training Forum: Kisii county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kisii1.jpg",
  },
  {
    id: 30,
    title: "2019 Member Training Forum: Kisii county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kisii2.jpg",
  },
  {
    id: 31,
    title: "2019 Member Training Forum: Kisii county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kisii3.jpg",
  },
  {
    id: 32,
    title: "2019 Member Training Forum: Kisii county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kisii4.jpg",
  },
  {
    id: 33,
    title: "2019 Member Training Forum: Kisii county visit",
    date: "June 15, 2022",
    category: "County-Visit",
    image: "/kisii5.jpg",
  },
];

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

const MediaGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
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
                <ImageIcon className="mr-3 h-10 w-10 text-sacco-orange" /> Gallery
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse through our collection of images from various events, activities, and milestones.
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
                  placeholder="Search gallery..."
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
                  className="glass bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                  variants={itemVariants}
                >
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-sacco-blue dark:text-white">
                        {item.title}
                      </h3>
                      <span className="bg-sacco-orange/10 text-sacco-orange text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {item.date}
                    </p>
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
                <ImageIcon className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4" />
                <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-2">No images found</h3>
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

export default MediaGallery;
