
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Board member data
const boardDirectors = [
  {
    name: "DR. ALEXENDAR NJUE",
    position: "CHAIRMAN",
    image: "/NJUE.png",
  },
  {
    name: "MR. JAMES MUKHANA OKOTH",
    position: "VICE CHAIRMAN",
    image: "/vice.jpg",
  },
  {
    name: "Ms.SELINE ATIENO",
    position: "SECRETARY",
    image: "/seline.jpeg",
  },
  {
    name: "MR.SAMMY KAVUKU",
    position: "TREASURER",
    image: "/AV.png",
  },
  {
    name: "MR.DAVID OMONDI LIKOR",
    position: "MEMBER",
    image: "/DAVID.jpeg",
  },
  {
    name: "Ms. GLADYS KEMUMA ONCHAGA",
    position: "MEMBER",
    image: "/glad.jpeg",
  },
 
  {
    name: "Ms. ANN GRACE WANGUI",
    position: "MEMBER",
    image: "/grace.jpeg",
  },
  {
    name: "PST. STEPHEN KOECH",
    position: "MEMBER",
    image: "/AV.png",
  },
 
  {
    name: "MR CHARLES MIRUKA",
    position: "MEMBER",
    image: "/AV.png",
  },
];

const supervisoryCommittee = [
  {
    name: "JUSTUS MWIRICHIA",
    position: "CHAIRMAN",
    image: "/JUSTUS.jpg",
  },
  {
    name: "MS. LINDA KISAKA",
    position: "MEMBER",
    image: "/LINDA.jpeg",
  },
  {
    name: "MS. CAROLINE NYANCHAMA ",
    position: "MEMBER",
    image: "AV.png",
  }
];

// Animation variants
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

const BoardMembers = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-sacco-blue">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sacco-blue dark:text-white mb-6">
              Our Leadership
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated individuals who guide our Sacco's vision and ensure we maintain the highest standards of service delivery and financial stewardship.
            </p>
          </div>
          
          {/* Board of Directors Section */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-sacco-orange relative inline-block">
                BOARD OF DIRECTORS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-sacco-orange rounded-full"></span>
              </h2>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {boardDirectors.map((member, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="relative mb-4 mx-auto w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-lg border-4 border-sacco-orange shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-sacco-blue dark:text-white mt-4">
                    {member.name}
                  </h3>
                  <p className="text-sacco-orange font-medium mt-1">{member.position}</p>
                  <div className="w-16 h-1 bg-sacco-orange mx-auto mt-4 rounded-full"></div>
                </motion.div>
              ))}
            </motion.div>
          </section>
          
          {/* Supervisory Committee Section */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-sacco-orange relative inline-block">
                SUPERVISORY COMMITTEE
                <span className="absolute bottom-0 left-0 w-full h-1 bg-sacco-orange rounded-full"></span>
              </h2>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {supervisoryCommittee.map((member, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="relative mb-4 mx-auto w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-lg border-4 border-sacco-orange shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-sacco-blue dark:text-white mt-4">
                    {member.name}
                  </h3>
                  <p className="text-sacco-orange font-medium mt-1">{member.position}</p>
                  <div className="w-16 h-1 bg-sacco-orange mx-auto mt-4 rounded-full"></div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BoardMembers;
