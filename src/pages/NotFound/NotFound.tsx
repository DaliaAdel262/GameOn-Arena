import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-dark-bg flex flex-col">
      
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-white font-syncopate text-6xl md:text-8xl font-bold mb-6">
            404
          </h1>
          <h2 className="text-white font-rajdhani text-3xl md:text-4xl mb-4">
            Page Not Found
          </h2>
          <p className="text-white/70 font-rajdhani text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-block gradient-btn px-8 py-3 rounded-full text-white font-rajdhani text-lg hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>

    </div>
  );
}
