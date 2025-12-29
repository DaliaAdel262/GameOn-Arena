import Hero from "../../components/Hero/Hero";
import TeamSection from "../../components/TeamSection/TeamSection";
import MatchesSection from "../../components/MatchesSection/MatchesSection";
import MerchSection from "../../components/MerchSection/MerchSection";

export default function Index() {
  return (
    <div className="w-full">
      {/* Main Hero Section with Background */}
      <div className="relative w-full">
        <Hero />
      </div>
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Matches Section */}
      <MatchesSection />
      
      {/* Merchandise Section */}
      <MerchSection />
    </div>
  );
}
