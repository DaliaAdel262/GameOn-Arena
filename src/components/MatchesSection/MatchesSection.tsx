import { type MatchOpponents } from "../../types/MatchOpponents";
import MatchCardHome from "../MatchCardHome/MatchCardHome";

export default function MatchesSection() {
  const matches: MatchOpponents[] = [
    {
      teamA: "Team A",
      teamB: "Team B",
      date: "Jan 25, 3 PM",
      teamAIcon: "https://api.builder.io/api/v1/image/assets/TEMP/d2728c89bc174bba1a58148a4708a160a1f94c57?width=256",
      teamBIcon: "https://api.builder.io/api/v1/image/assets/TEMP/299e9625d24a9cf13bd9ccd46c3e7cb3824ae9f3?width=296"
    },
    {
      teamA: "Team A",
      teamB: "Team B",
      date: "Jan 25, 3 PM",
      teamAIcon: "https://api.builder.io/api/v1/image/assets/TEMP/d2728c89bc174bba1a58148a4708a160a1f94c57?width=256",
      teamBIcon: "https://api.builder.io/api/v1/image/assets/TEMP/299e9625d24a9cf13bd9ccd46c3e7cb3824ae9f3?width=296"
    }
  ];

  return (
    <section className="w-full px-4 md:px-[100px] pb-[60px] flex flex-col lg:flex-row items-center justify-center gap-[60px] gradient-landing-bg">
      {/* Section Header */}
      <div className="flex flex-col text-center lg:text-start gap-6 flex-1">
        <h2 className="text-white font-rajdhani text-4xl leading-[48px]">
          UPCOMING MATCHES
        </h2>
        <p className="text-white font-rajdhani text-lg leading-7">
          Don't miss our exciting upcoming matches!
        </p>
      </div>
      
      {/* Matches List */}
      <div className="flex flex-col items-center justify-center gap-10 flex-1">
        <div className="flex flex-col md:flex-row items-start gap-10 w-full">
          {matches.map((match, index) => (
            <MatchCardHome key={index} {...match} />
          ))}
        </div>
      </div>
      
      {/* Bottom Divider */}
      <div className="absolute bottom-0 w-full h-px bg-black/10" />
    </section>
  );
}
