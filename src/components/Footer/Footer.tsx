import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full h-auto md:h-[142px] px-4 md:px-[60px] py-[60px] flex items-center justify-center gap-[60px] border-t border-primary-purple bg-dark-bg">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[60px] h-full">
        <Link 
          to="/privacy" 
          className="text-white text-center font-rajdhani text-xl leading-7 hover:text-secondary-pink transition-colors"
        >
          Privacy Policy
        </Link>
        
        <Link 
          to="/terms" 
          className="text-white text-center font-rajdhani text-xl leading-7 hover:text-secondary-pink transition-colors"
        >
          Terms of Service
        </Link>
        
        <Link 
          to="/contact" 
          className="text-white text-center font-rajdhani text-xl leading-7 hover:text-secondary-pink transition-colors"
        >
          Contact Us
        </Link>
        
        <Link 
          to="/social" 
          className="text-white text-center font-rajdhani text-xl leading-7 hover:text-secondary-pink transition-colors"
        >
          Follow us on Social Media
        </Link>
      </div>
    </footer>
  );
}
