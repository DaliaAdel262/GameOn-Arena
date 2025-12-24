interface MatchCardProps {
  teamA: string;
  teamB: string;
  date: string;
  teamAIcon: string;
  teamBIcon: string;
}

function MatchCard({ teamA, teamB, date, teamAIcon, teamBIcon }: MatchCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full md:w-[286px] py-3">
      {/* Team Icons with VS */}
      <div className="relative flex flex-col items-start gap-5">
        <img 
          src={teamAIcon} 
          alt={`${teamA} icon`}
          className="relative -left-12 -top-6 w-32 h-40 object-contain"
        />
        <img 
          src={teamBIcon} 
          alt={`${teamB} icon`}
          className="relative left-14 top-6 w-37 h-37 object-contain"
        />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white text-center text-shadow-vs font-russo text-[40px] leading-[100px]">
          VS
        </div>
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

export default function MatchesSection() {
  const matches: MatchCardProps[] = [
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
    <section className="w-full px-4 md:px-[170px] pb-[60px] flex items-center justify-center gap-[60px] gradient-landing-bg">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-6 flex-1">
        <h2 className="text-white font-rajdhani text-4xl leading-[48px]">
          Upcoming Matches
        </h2>
        <p className="text-white font-rajdhani text-lg leading-7">
          Don't miss our exciting upcoming matches!
        </p>
      </div>
      
      {/* Matches List */}
      <div className="flex flex-col items-center justify-center gap-10 flex-1">
        <div className="flex flex-col md:flex-row items-start gap-10 w-full">
          {matches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>
      </div>
      
      {/* Bottom Divider */}
      <div className="absolute bottom-0 w-full h-px bg-black/10" />
    </section>
  );
}
