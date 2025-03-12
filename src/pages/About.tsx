
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurStory from "@/components/about/OurStory";
import VisionMission from "@/components/about/VisionMission";
import CompanyValues from "@/components/about/CompanyValues";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-sacco-blue">
      <Navbar />
      <OurStory />
      <VisionMission />
      <CompanyValues />
      <Footer />
    </div>
  );
};

export default About;
