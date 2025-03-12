import { motion } from "framer-motion";
import { Mail, Clock, CalendarClock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Careers = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-sacco-blue">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sacco-blue dark:text-white mb-6">
              CURRENT VACANCIES
            </h1>
          </div>

          <div className="max-w-4xl mx-auto glass bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-sacco-blue dark:text-white mb-6">
                NONE AT THE MOMENT
              </h2>

              <div className="my-10">
                <h3 className="text-xl font-semibold text-sacco-blue dark:text-white mb-4">
                  SEND CV TO
                </h3>
                <a
                  href="mailto:hr@digitalsacco.com"
                  className="text-xl md:text-2xl text-sacco-orange font-medium hover:underline flex items-center justify-center"
                >
                  <Mail className="mr-2 h-6 w-6" />
                  hr@digitalsacco.com
                </a>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  to be received by 18th September 2025
                </p>
              </div>
            </motion.div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-xl font-semibold text-sacco-blue dark:text-white mb-6 text-center">
                Why Work With Us?
              </h3>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="glass bg-white/60 dark:bg-sacco-blue/60 p-6 rounded-lg"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-medium text-sacco-blue dark:text-white mb-3">
                    Competitive Compensation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We offer competitive salaries and comprehensive benefits
                    packages to ensure our employees are well rewarded for their
                    contributions.
                  </p>
                </motion.div>

                <motion.div
                  className="glass bg-white/60 dark:bg-sacco-blue/60 p-6 rounded-lg"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-medium text-sacco-blue dark:text-white mb-3">
                    Career Growth
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We provide opportunities for professional development and
                    career advancement within our organization.
                  </p>
                </motion.div>

                <motion.div
                  className="glass bg-white/60 dark:bg-sacco-blue/60 p-6 rounded-lg"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-medium text-sacco-blue dark:text-white mb-3">
                    Inclusive Workplace
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We foster a diverse and inclusive environment where all
                    employees are respected and valued for their unique
                    perspectives.
                  </p>
                </motion.div>

                <motion.div
                  className="glass bg-white/60 dark:bg-sacco-blue/60 p-6 rounded-lg"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-medium text-sacco-blue dark:text-white mb-3">
                    Work-Life Balance
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We promote a healthy work-life balance through flexible
                    working arrangements and supportive policies.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join our talent pool to be notified about future opportunities
                that match your skills and interests.
              </p>
              <Button className="bg-sacco-orange hover:bg-sacco-orange/90">
                <Send className="mr-2 h-4 w-4" /> Join Talent Pool
              </Button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-10 p-6 glass bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="h-6 w-6 text-sacco-orange" />
              <h3 className="text-lg font-semibold text-sacco-blue dark:text-white">
                Application Process
              </h3>
            </div>
            <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300 ml-4">
              <li>Submit your CV and cover letter to hr@digitalsacco.com</li>
              <li>Initial screening of applications by our HR team</li>
              <li>First interview with HR and department representatives</li>
              <li>Technical assessment or task (if applicable)</li>
              <li>Final interview with senior management</li>
              <li>Reference checks and offer</li>
            </ol>

            <div className="flex items-center gap-4 mt-8 mb-4">
              <CalendarClock className="h-6 w-6 text-sacco-orange" />
              <h3 className="text-lg font-semibold text-sacco-blue dark:text-white">
                Recruitment Timeline
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Our typical recruitment process takes 3-4 weeks from application
              to offer. We aim to provide feedback to all candidates who reach
              the interview stage.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
