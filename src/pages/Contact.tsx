
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all the required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-sacco-blue">
      <Navbar />
      
      <div className="relative pt-20">
        <div className="w-full h-64 bg-sacco-light-blue dark:bg-sacco-dark-blue">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-sacco-blue dark:text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Stay in touch with us
            </motion.h1>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-16 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="glass p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-sacco-blue dark:text-white mb-6">Contacts</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Please contact us using the details below. For additional information on the loans
              offered by Digital Sacco, please visit the appropriate page on our site.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-sacco-orange/10 rounded-full">
                  <Mail className="h-6 w-6 text-sacco-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-sacco-blue dark:text-white">Email us:</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@digitalsacco.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-sacco-orange/10 rounded-full">
                  <Phone className="h-6 w-6 text-sacco-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-sacco-blue dark:text-white">Contact us:</h3>
                  <p className="text-gray-600 dark:text-gray-300">0703-012-200 or 0110-934-043</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-sacco-orange/10 rounded-full">
                  <MapPin className="h-6 w-6 text-sacco-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-sacco-blue dark:text-white">Where to find us:</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nairobi, mombasa road, next to cabanas<br />
                    bus stop, red complex, 2<sup>nd</sup> floor
                  </p>
                </div>
              </div>
            </div>
            
 
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="glass p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-sacco-blue dark:text-white mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-sacco-blue/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sacco-orange"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sacco-blue dark:text-white mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-sacco-blue/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sacco-orange"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sacco-blue dark:text-white mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-sacco-blue/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sacco-orange"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sacco-blue dark:text-white mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-sacco-blue/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sacco-orange resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-sacco-orange text-white rounded-md hover:bg-sacco-orange/90 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Submit</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div 
          className="mt-16 glass p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-sacco-blue dark:text-white mb-6">Our location</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7383197237264!2d36.82620601475774!3d-1.315690599037093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e6c882173d%3A0x71cd58227a503e9d!2sRed%20Commercial%20Complex!5e0!3m2!1sen!2ske!4v1613987331059!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Digital Sacco Location"
            ></iframe>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
