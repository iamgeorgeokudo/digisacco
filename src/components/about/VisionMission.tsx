
import { Target, Briefcase, Rocket } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-white dark:bg-sacco-blue">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-xl text-center">
            <div className="flex justify-center mb-6">
              <Target className="w-12 h-12 text-sacco-orange" />
            </div>
            <h2 className="text-2xl font-bold text-sacco-blue dark:text-white mb-4">
              Our Objectives
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              To mobilize funds, increase level of savings and investments for the benefit of members and their families thereby improving socio-economic welfare
            </p>
          </div>

          <div className="glass p-8 rounded-xl text-center">
            <div className="flex justify-center mb-6">
              <Briefcase className="w-12 h-12 text-sacco-orange" />
            </div>
            <h2 className="text-2xl font-bold text-sacco-blue dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              To facilitate savings and affordable credit in an efficient and transparent manner in order to promote members welfare by enabling them digital use and control their finances for economic prosperity
            </p>
          </div>

          <div className="glass p-8 rounded-xl text-center">
            <div className="flex justify-center mb-6">
              <Rocket className="w-12 h-12 text-sacco-orange" />
            </div>
            <h2 className="text-2xl font-bold text-sacco-blue dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              To be a regional leading sacco of excellence in service delivery whose members continue to realize economic independence and prosperity in a Digital platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
