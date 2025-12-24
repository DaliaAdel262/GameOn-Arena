import Hero from "../../components/Hero/Hero";
import TeamSection from "../../components/TeamSection/TeamSection";
import MatchesSection from "../../components/MatchesSection/MatchesSection";
import MerchSection from "../../components/MerchSection/MerchSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-dark-bg">
      {/* Main Hero Section with Background */}
      <div className="relative w-full gradient-landing-bg">
        <Hero />
      </div>
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Matches Section */}
      <MatchesSection />
      
      {/* Merchandise Section */}
      <MerchSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
