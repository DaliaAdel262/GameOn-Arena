import { Twitter } from "lucide-react";

interface TeamMemberProps {
  image: string;
  nickname: string;
  realName: string;
  role: string;
}

function TeamMemberCard({ image, nickname, realName, role }: TeamMemberProps) {
  return (
    <div className="relative h-[181px] flex-1 min-w-[280px] rounded-md border border-black/10 overflow-hidden"
      style={{ background: 'rgba(134, 130, 224, 0.30)' }}>
      {/* Player Image */}
      <img 
        src={image} 
        alt={nickname}
        className="absolute -left-1.5 -top-8 w-[170px] h-[214px] object-cover"
      />
      
      {/* Player Info */}
      <div className="absolute left-[164px] top-4 flex flex-col gap-2 w-[145px]">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-white font-rajdhani text-[28px] leading-9">
            {nickname}
          </h3>
          <p className="text-white font-rajdhani text-base leading-6">
            {realName}
          </p>
        </div>
        
        {/* Role Tag */}
        <div className="flex items-center gap-1.5">
          <span 
            className="px-1 py-0.5 rounded-sm text-secondary-pink-light font-rajdhani text-base leading-6"
            style={{ background: 'rgba(160, 117, 244, 0.30)' }}
          >
            {role}
          </span>
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center gap-4 py-1">
          <a href="#" className="text-white hover:text-secondary-pink transition-colors" aria-label="Twitter">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11.025 0.656006H13.172L8.482 6.03001L14 13.344H9.68L6.294 8.90901L2.424 13.344H0.275L5.291 7.59401L0 0.657006H4.43L7.486 4.71001L11.025 0.656006ZM10.27 12.056H11.46L3.78 1.87701H2.504L10.27 12.056Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-secondary-pink transition-colors" aria-label="Discord">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19.2701 5.33C17.9401 4.71 16.5001 4.26 15.0001 4C14.9737 4.00038 14.9486 4.01116 14.9301 4.03C14.7501 4.36 14.5401 4.79 14.4001 5.12C12.8091 4.88015 11.1911 4.88015 9.60012 5.12C9.46012 4.78 9.25012 4.36 9.06012 4.03C9.05012 4.01 9.02012 4 8.99012 4C7.49012 4.26 6.06012 4.71 4.72012 5.33C4.71012 5.33 4.70012 5.34 4.69012 5.35C1.97012 9.42 1.22012 13.38 1.59012 17.3C1.59012 17.32 1.60012 17.34 1.62012 17.35C3.42012 18.67 5.15012 19.47 6.86012 20C6.89012 20.01 6.92012 20 6.93012 19.98C7.33012 19.43 7.69012 18.85 8.00012 18.24C8.02012 18.2 8.00012 18.16 7.96012 18.15C7.39012 17.93 6.85012 17.67 6.32012 17.37C6.28012 17.35 6.28012 17.29 6.31012 17.26C6.42012 17.18 6.53012 17.09 6.64012 17.01C6.66012 16.99 6.69012 16.99 6.71012 17C10.1501 18.57 13.8601 18.57 17.2601 17C17.2801 16.99 17.3101 16.99 17.3301 17.01C17.4401 17.1 17.5501 17.18 17.6601 17.27C17.7001 17.3 17.7001 17.36 17.6501 17.38C17.1301 17.69 16.5801 17.94 16.0101 18.16C15.9701 18.17 15.9601 18.22 15.9701 18.25C16.2901 18.86 16.6501 19.44 17.0401 19.99C17.0701 20 17.1001 20.01 17.1301 20C18.8501 19.47 20.5801 18.67 22.3801 17.35C22.4001 17.34 22.4101 17.32 22.4101 17.3C22.8501 12.77 21.6801 8.84 19.3101 5.35C19.3001 5.34 19.2901 5.33 19.2701 5.33ZM8.52012 14.91C7.49012 14.91 6.63012 13.96 6.63012 12.79C6.63012 11.62 7.47012 10.67 8.52012 10.67C9.58012 10.67 10.4201 11.63 10.4101 12.79C10.4101 13.96 9.57012 14.91 8.52012 14.91ZM15.4901 14.91C14.4601 14.91 13.6001 13.96 13.6001 12.79C13.6001 11.62 14.4401 10.67 15.4901 10.67C16.5501 10.67 17.3901 11.63 17.3801 12.79C17.3801 13.96 16.5501 14.91 15.4901 14.91Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-secondary-pink transition-colors" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const teamMembers: TeamMemberProps[] = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/34966af3be601f9c38b4cb472984eef7e59d79be?width=340",
      nickname: "Nickname",
      realName: "Real name",
      role: "Role"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/34966af3be601f9c38b4cb472984eef7e59d79be?width=340",
      nickname: "Nickname",
      realName: "Real name",
      role: "Role"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/34966af3be601f9c38b4cb472984eef7e59d79be?width=340",
      nickname: "Nickname",
      realName: "Real name",
      role: "Role"
    }
  ];

  return (
    <section className="w-full px-4 md:px-[170px] py-[60px] flex flex-col items-center gap-[60px] gradient-landing-bg-reverse">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-2.5 w-full max-w-[520px]">
        <h2 className="text-white text-center font-rajdhani text-4xl leading-[48px]">
          Meet The Team
        </h2>
        <p className="text-white text-center font-rajdhani text-lg leading-7">
          Take a look at your favorite players
        </p>
      </div>
      
      {/* Team Members Grid */}
      <div className="w-full flex flex-col gap-2.5">
        <div className="flex flex-col md:flex-row items-stretch gap-10 w-full">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
        
        {/* View More */}
        <div className="flex justify-end py-2.5">
          <p className="text-white font-rajdhani text-xs">And more..</p>
        </div>
      </div>
      
      {/* Bottom Divider */}
      <div className="w-full h-px bg-black/10" />
    </section>
  );
}
