import { type MatchOpponents } from "../../types/MatchOpponents";
import MatchOpp from "../../assets/images/Home/Team/match-image.png"

export default function MatchCardHome({ teamA, teamB, date }: MatchOpponents) {
  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full md:w-[286px] py-3">
      {/* Team Icons with VS */}
      <div className="relative flex flex-col items-start gap-5">
        <img src={MatchOpp} alt="" />
      </div>
      
      {/* Match Details */}
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <div className="flex flex-col items-start gap-2 w-full">
          <h3 className="w-full text-white text-center font-rajdhani text-[28px] leading-9">
            {teamA} vs {teamB}
          </h3>
          <p className="w-full text-center font-rajdhani text-sm leading-5"
            style={{ color: 'rgba(219, 31, 255, 0.5)' }}>
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}
