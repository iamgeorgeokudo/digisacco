
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sacco-blue text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Download our app</h3>
          <Link to="https://play.google.com/store" target="_blank" className="inline-block hover:opacity-80 transition-opacity">
            <img
              src="/Untitled.jpeg"
              alt="Get it on Google Play"
              className="h-12"
            />
          </Link>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">About us</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-sacco-orange transition-colors">About Organization</Link></li>
            <li><Link to="/services" className="hover:text-sacco-orange transition-colors">Our Services</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Loan products</h3>
          <ul className="space-y-2">
            <li><Link to="/products#jipange" className="hover:text-sacco-orange transition-colors">Jipange loan</Link></li>
            <li><Link to="/products#emergency" className="hover:text-sacco-orange transition-colors">Emergency loan</Link></li>
            <li><Link to="/products#jisort" className="hover:text-sacco-orange transition-colors">Student/jisort loan</Link></li>
            <li><Link to="/products#school" className="hover:text-sacco-orange transition-colors">School fee loan</Link></li>
            <li><Link to="/products#biashara" className="hover:text-sacco-orange transition-colors">Biashara loan</Link></li>
            <li><Link to="/products#development" className="hover:text-sacco-orange transition-colors">Development loan</Link></li>
            <li><Link to="/products#investment" className="hover:text-sacco-orange transition-colors">Investment loan</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li><Link to="/news" className="hover:text-sacco-orange transition-colors"></Link></li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <Link to="https://facebook.com" className="hover:text-sacco-orange transition-colors">
              <Facebook size={24} />
            </Link>
            <Link to="https://twitter.com" className="hover:text-sacco-orange transition-colors">
              <Twitter size={24} />
            </Link>
            <Link to="https://instagram.com" className="hover:text-sacco-orange transition-colors">
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10">
        <p className="text-center text-sm">Copyright © 2025 Digital Sacco - Powered by Digital Sacco</p>
      </div>
    </footer>
  );
};

export default Footer;
