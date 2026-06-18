import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-teal-500 shadow-md py-4' : 'bg-white py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-teal-500'}`}>
          Kid<span className={`font-light ${isScrolled ? 'text-white' : 'text-slate-900'}`}>rove</span>
        </div>

        {/* Navigation Links */}
        <div className={`hidden md:flex gap-8 font-medium ${isScrolled ? 'text-white' : 'text-slate-700'}`}>
          {['Find Activities', 'Blog', 'Kidrove Go', 'FAQ', 'Get In Touch'].map((link) => (
            <span key={link} className="cursor-pointer hover:opacity-75 transition-opacity">
              {link}
            </span>
          ))}
        </div>

        {/* Login Button */}
        <button className={`px-6 py-2 rounded-full font-semibold border transition-all ${isScrolled 
          ? 'bg-white text-teal-500 border-white hover:bg-slate-100' 
          : 'bg-teal-500 text-white border-transparent hover:bg-teal-600'}`}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;