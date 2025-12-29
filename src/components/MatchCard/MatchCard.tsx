import React from "react";
import MatchOpp from "../../assets/images/Matches/MatchOpponents.png";

export default function MatchCard() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-primary-purple rounded-[10px] overflow-hidden">
        {/* Date */}
        <div className="lg:col-span-2 py-2.5 px-4 flex flex-col items-center justify-center gap-2.5 bg-dark-bg">
          <h3 className="text-base sm:text-2xl font-semibold leading-tight">
            JAN 25
          </h3>
          <span className="font-astonpoliz text-xs sm:text-sm leading-4">
            2:20 PM
          </span>
        </div>

        {/* Teams and Scores */}
        <div className="lg:col-span-10 bg-secondary-pink flex items-center justify-between py-4 lg:py-6 px-2 sm:px-4 relative min-h-[90px]">
          {/* Team A */}
          <div className="flex flex-row-reverse items-center gap-2 sm:gap-4 flex-1">
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold truncate">
              Team A
            </p>
            <span className="text-base sm:text-xl md:text-2xl font-bold px-2 sm:px-4 border-r-2 border-white">
              0
            </span>
          </div>

          {/* VS Image */}
          <div className="flex-shrink-0 px-2 sm:px-4">
            <img
              src={MatchOpp}
              alt="VS"
              className="w-16 h-16 sm:w-40 sm:h-40 lg:w-auto lg:h-auto object-contain"
            />
          </div>

          {/* Team B */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1">
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold truncate">
              Team B
            </p>
            <span className="text-base sm:text-xl md:text-2xl font-bold px-2 sm:px-4 border-l-2 border-white">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
