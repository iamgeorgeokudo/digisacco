import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Moon, Sun, ChevronDown, Image, Download, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentHover, setCurrentHover] = useState<string | null>(null);
  const [showMediaMenu, setShowMediaMenu] = useState(false);
  const [showBoardMenu, setShowBoardMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const mediaMenuRef = useRef<HTMLDivElement>(null);
  const boardMenuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mediaMenuRef.current && !mediaMenuRef.current.contains(event.target as Node)) {
        setShowMediaMenu(false);
      }
      if (boardMenuRef.current && !boardMenuRef.current.contains(event.target as Node)) {
        setShowBoardMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
    setCurrentHover(null);
    setShowMediaMenu(false);
    setShowBoardMenu(false);
  }, [location.pathname]);

  // Handle dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Determine if a route is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Handle dropdown link click in mobile menu
  const handleMobileMenuLinkClick = (path: string) => {
    setIsMenuOpen(false);
    setShowMediaMenu(false);
    setShowBoardMenu(false);
  };

  // Handle mobile dropdown header click - both toggle dropdown and navigate
  const handleMobileDropdownClick = (path: string, toggleFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
    toggleFunction(current => !current);
    navigate(path);
  };

  return (
    <nav className="glass bg-white/80 dark:bg-sacco-blue/80 backdrop-blur-xl shadow-sm fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-sacco-blue/50 transition-colors mr-3"
            >
              <Menu className="h-6 w-6 text-sacco-blue dark:text-white" />
            </button>
            
            <Link to="/" className="flex items-center">
              <img src="/sacco_favicon.png" alt="Digital Sacco" className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold text-sacco-blue dark:text-white"><span className="text-sacco-orange"></span></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-sacco-orange' 
                  : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
              }`}
            >
              
            </Link>
            
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-sacco-orange' 
                  : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
              }`}
            >
              ABOUT US
            </Link>
            
            <Link 
              to="/products" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/products') 
                  ? 'text-sacco-orange' 
                  : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
              }`}
            >
              PRODUCTS
            </Link>
            
            <Link 
              to="/services" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-sacco-orange' 
                  : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
              }`}
            >
              SERVICES
            </Link>
            
            <div 
              ref={boardMenuRef}
              className="relative group"
            >
              <Link 
                to="/board-members"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/board-members') || isActive('/delegates')
                    ? 'text-sacco-orange' 
                    : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
                }`}
              >
                BOARD MEMBERS
              </Link>
              
              <div className="absolute left-0 mt-0 w-60 hidden group-hover:block glass bg-white/90 dark:bg-sacco-blue/90 backdrop-blur-xl shadow-lg rounded-md overflow-hidden border dark:border-gray-700 z-50 animate-fade-in">
                <div className="py-1">
                  <Link 
                    to="/board-members" 
                    className="block px-4 py-2 text-sacco-blue dark:text-white hover:bg-gray-100 dark:hover:bg-sacco-blue/50 hover:text-sacco-orange transition-colors"
                  >
                    Board Members
                  </Link>
                  <Link 
                    to="/delegates-2015-2022" 
                    className="block px-4 py-2 text-sacco-blue dark:text-white hover:bg-gray-100 dark:hover:bg-sacco-blue/50 hover:text-sacco-orange transition-colors"
                  >
                    Delegates Lists 2015-2022
                  </Link>
                  <Link 
                    to="/delegates-2022-2023" 
                    className="block px-4 py-2 text-sacco-blue dark:text-white hover:bg-gray-100 dark:hover:bg-sacco-blue/50 hover:text-sacco-orange transition-colors"
                  >
                    Delegate List 2022-2023
                  </Link>
                  <Link 
                    to="/delegates-2024" 
                    className="block px-4 py-2 text-sacco-blue dark:text-white hover:bg-gray-100 dark:hover:bg-sacco-blue/50 hover:text-sacco-orange transition-colors"
                  >
                    Nominated Delegates 2024
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/careers"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/careers')
                  ? 'text-sacco-orange' 
                  : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
              }`}
            >
              CAREERS
            </Link>
            
            <Link 
              to="/tenders"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/tenders')
                  ? 'text-sacco-orange' 
                  : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
              }`}
            >
              TENDERS
            </Link>
            
            <div 
              ref={mediaMenuRef}
              className="relative group"
            >
              <Link 
                to="/media/gallery"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/media')
                    ? 'text-sacco-orange' 
                    : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
                }`}
              >
                MEDIA
              </Link>
              
              <div className="absolute left-0 mt-0 w-40 hidden group-hover:block glass bg-white/90 dark:bg-sacco-blue/90 backdrop-blur-xl shadow-lg rounded-md overflow-hidden border dark:border-gray-700 z-50 animate-fade-in">
                <div className="py-1">
                  <Link 
                    to="/media/gallery" 
                    className="flex items-center px-4 py-2 text-sacco-blue dark:text-white hover:bg-gray-100 dark:hover:bg-sacco-blue/50 hover:text-sacco-orange transition-colors"
                  >
                    <Image className="w-4 h-4 mr-2" /> Gallery
                  </Link>
                  <Link 
                    to="/media/downloads" 
                    className="flex items-center px-4 py-2 text-sacco-blue dark:text-white hover:bg-gray-100 dark:hover:bg-sacco-blue/50 hover:text-sacco-orange transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" /> Downloads
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/faq"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/faq')
                  ? 'text-sacco-orange' 
                  : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
              }`}
            >
              FAQ
            </Link>
            
            <Link 
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-sacco-orange' 
                  : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
              }`}
            >
              CONTACT US
            </Link>
            
            <Link 
              to="/elections"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/elections')
                  ? 'text-sacco-orange' 
                  : 'text-sacco-blue dark:text-white hover:text-sacco-orange'
              }`}
            >
              ELECTIONS
            </Link>
          </div>
          
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-sacco-blue/50 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5 text-sacco-blue" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 glass bg-white/90 dark:bg-sacco-blue/90 backdrop-blur-xl border-t dark:border-gray-700">
            <div className="flex justify-end px-4 mb-2">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100/50 dark:hover:bg-sacco-blue/50 transition-colors"
              >
                <X className="h-5 w-5 text-sacco-blue dark:text-white" />
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors px-4 py-2">HOME</Link>
              <Link to="/about" className="text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors px-4 py-2">ABOUT US</Link>
              <Link to="/products" className="text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors px-4 py-2">PRODUCTS</Link>
              <Link to="/services" className="text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors px-4 py-2">SERVICES</Link>
              
              <div className="px-4 py-2">
                <button 
                  className="flex items-center text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors"
                  onClick={() => handleMobileDropdownClick('/board-members', setShowBoardMenu)}
                >
                  BOARD MEMBERS <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${showBoardMenu ? 'rotate-180' : ''}`} />
                </button>
                
                {showBoardMenu && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-sacco-orange">
                    <Link 
                      to="/board-members" 
                      className="block text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors"
                      onClick={() => handleMobileMenuLinkClick('/board-members')}
                    >
                      Board Members
                    </Link>
                    <Link 
                      to="/delegates-2015-2022" 
                      className="block text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors"
                      onClick={() => handleMobileMenuLinkClick('/delegates-2015-2022')}
                    >
                      Delegates Lists 2015-2022
                    </Link>
                    <Link 
                      to="/delegates-2022-2023" 
                      className="block text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors"
                      onClick={() => handleMobileMenuLinkClick('/delegates-2022-2023')}
                    >
                      Delegate List 2022-2023
                    </Link>
                    <Link 
                      to="/delegates-2024" 
                      className="block text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors"
                      onClick={() => handleMobileMenuLinkClick('/delegates-2024')}
                    >
                      Nominated Delegates 2024
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/careers" className="text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors px-4 py-2">CAREERS</Link>
              <Link to="/tenders" className="text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors px-4 py-2">TENDERS</Link>
              
              <div className="px-4 py-2">
                <button 
                  className="flex items-center text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors"
                  onClick={() => handleMobileDropdownClick('/media/gallery', setShowMediaMenu)}
                >
                  MEDIA <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${showMediaMenu ? 'rotate-180' : ''}`} />
                </button>
                
                {showMediaMenu && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-sacco-orange">
                    <Link 
                      to="/media/gallery" 
                      className="flex items-center text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors"
                      onClick={() => handleMobileMenuLinkClick('/media/gallery')}
                    >
                      <Image className="w-4 h-4 mr-2" /> Gallery
                    </Link>
                    <Link 
                      to="/media/downloads" 
                      className="flex items-center text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors"
                      onClick={() => handleMobileMenuLinkClick('/media/downloads')}
                    >
                      <Download className="w-4 h-4 mr-2" /> Downloads
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/faq" className="text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors px-4 py-2">FAQ</Link>
              <Link to="/contact" className="text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors px-4 py-2">CONTACT US</Link>
              <Link to="/elections" className="text-sacco-blue dark:text-white hover:text-sacco-orange transition-colors px-4 py-2">ELECTIONS</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;