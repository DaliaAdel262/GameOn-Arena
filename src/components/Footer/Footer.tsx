import { Link } from "react-router-dom";
import { Dot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-[60px] py-[60px] flex flex-col items-center justify-center gap-6 border-t border-primary-purple bg-dark-bg">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[60px]">
        <Link 
          to="/privacy" 
          className="text-primary-purple text-center font-rajdhani text-xl leading-7 hover:text-secondary-pink transition-colors"
        >
          Privacy Policy
        </Link>
        
        <Link 
          to="/terms" 
          className="text-primary-purple text-center font-rajdhani text-xl leading-7 hover:text-secondary-pink transition-colors"
        >
          Terms of Service
        </Link>
        
        <Link 
          to="/contact" 
          className="text-primary-purple text-center font-rajdhani text-xl leading-7 hover:text-secondary-pink transition-colors"
        >
          Contact Us
        </Link>
        
        <Link 
          to="/social" 
          className="text-primary-purple text-center font-rajdhani text-xl leading-7 hover:text-secondary-pink transition-colors"
        >
          Follow us on Social Media
        </Link>
      </div>

      {/* Website Credit */}
      <div className="flex items-center justify-center gap-1 text-secondary-pink font-rajdhani text-sm">
        <span>Website by Dalia Adel</span>
        <Dot size={20} />
        <a 
          href="https://www.linkedin.com/in/dalia-adel-877a43220" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-secondary-pink-light transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}