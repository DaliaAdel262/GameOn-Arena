import bg from "../../assets/images/Home/Hero/hero-bg.png";
import SkewedRectangle from "../ui/SkewedRectangle";
import LivestreamOpponents from "../../assets/images/Home/Hero/livestream-opponents.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center app-cont md:app-cont-md lg:app-cont-lg">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-10">
        <img 
          src={bg}
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 w-full h-full z-20"
          style={{
            background: 'linear-gradient(180deg, rgba(56, 11, 145, 0.40) 0.01%, rgba(56, 11, 145, 0.40) 0.19%, rgba(56, 11, 145, 0.40) 0.74%, rgba(56, 11, 144, 0.40) 1.7%, rgba(55, 11, 143, 0.41) 3.11%, rgba(54, 11, 141, 0.42) 5%, rgba(53, 11, 138, 0.44) 7.41%, rgba(51, 11, 134, 0.46) 10.38%, rgba(49, 11, 128, 0.49) 13.92%, rgba(46, 10, 121, 0.53) 18.1%, rgba(42, 10, 112, 0.58) 22.92%, rgba(37, 10, 100, 0.64) 28.45%, rgba(32, 9, 87, 0.71) 34.7%, rgba(25, 9, 71, 0.79) 41.71%, rgba(18, 9, 53, 0.89) 49.53%, #090820 58.17%)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 px-4 pt-[300px] pb-0 md:px-[170px] md:pt-[360px]">
        <h1 className="w-full max-w-[856px] text-white text-center text-4xl md:text-5xl font-bold leading-tight">
          GAME ON
        </h1>
        <p className="w-full max-w-[856px] text-white text-center font-rajdhani text-2xl md:text-[28px] leading-9">
          WATCH YOUR FAVORITE CHAMPIONS COMPETE
        </p>
      </div>
      
      {/* VS Match Banner */}
      <div className="relative z-10 w-full px-4 md:px-[40px] py-8 md:py-12">
        <div className="w-full flex flex-col gap-12">
          
          {/* VS Banner */}
          <div className="relative w-full flex items-center justify-center">
            <SkewedRectangle>
              <div className="absolute bottom-0 flex items-center justify-center z-10 w-full h-full">
                <img src={LivestreamOpponents} alt="" />
              </div>
            </SkewedRectangle>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <p className="text-white text-center font-rajdhani text-lg leading-7">
              There's an ongoing livestream happening right now. Don't miss it!
            </p>
            <Link to="/live">
              <button className="gradient-btn px-5 py-2 rounded-10 text-white text-base leading-6 hover:opacity-90 transition-opacity">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
