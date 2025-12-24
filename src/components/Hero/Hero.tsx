export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/bea01164d8958a0636823537ad91cc8be98c99ca?width=2882" 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(180deg, rgba(56, 11, 145, 0.40) 0.01%, rgba(56, 11, 145, 0.40) 0.19%, rgba(56, 11, 145, 0.40) 0.74%, rgba(56, 11, 144, 0.40) 1.7%, rgba(55, 11, 143, 0.41) 3.11%, rgba(54, 11, 141, 0.42) 5%, rgba(53, 11, 138, 0.44) 7.41%, rgba(51, 11, 134, 0.46) 10.38%, rgba(49, 11, 128, 0.49) 13.92%, rgba(46, 10, 121, 0.53) 18.1%, rgba(42, 10, 112, 0.58) 22.92%, rgba(37, 10, 100, 0.64) 28.45%, rgba(32, 9, 87, 0.71) 34.7%, rgba(25, 9, 71, 0.79) 41.71%, rgba(18, 9, 53, 0.89) 49.53%, #090820 58.17%)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 px-4 pt-[300px] pb-0 md:px-[170px] md:pt-[360px]">
        <h1 className="w-full max-w-[856px] text-white text-center font-syncopate text-4xl md:text-5xl font-bold leading-tight">
          GAME ON
        </h1>
        <p className="w-full max-w-[856px] text-white text-center font-rajdhani text-2xl md:text-[28px] leading-9">
          WATCH YOUR FAVORITE CHAMPIONS COMPETE
        </p>
      </div>
      
      {/* VS Match Banner */}
      <div className="relative z-10 w-full px-4 md:px-[170px] py-8 md:py-12">
        <div className="w-full flex flex-col gap-12">
          {/* Divider */}
          <div className="w-full h-px bg-black/10" />
          
          {/* VS Banner */}
          <div className="relative w-full h-[95px] flex items-center justify-center rounded-[10px] bg-secondary-pink overflow-hidden">
            {/* Team Icons */}
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/0a4889702cfc1cc99326a8314faa1c7466746b7d?width=300" 
              alt="Team 1" 
              className="absolute left-[25%] md:left-[369px] -bottom-7 w-[100px] md:w-[150px] h-[100px] md:h-[150px] z-10"
            />
            
            {/* Diagonal Stripes */}
            <div className="absolute right-0 bottom-0 flex gap-0">
              <div 
                className="w-[59px] h-[134px] bg-dark-bg"
                style={{ transform: 'rotate(-157.09deg)' }}
              />
              <div 
                className="w-[59px] h-[134px] bg-dark-bg"
                style={{ transform: 'rotate(-157.09deg)' }}
              />
              <div className="w-[59px] h-[134px] bg-dark-bg" />
              <div className="w-[59px] h-[134px] bg-dark-bg" />
            </div>
            
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b9641d19ddbe797ea53bc83e0907ff58a82b1f7b?width=300" 
              alt="Team 2" 
              className="absolute right-[25%] md:right-[400px] -bottom-7 w-[100px] md:w-[150px] h-[100px] md:h-[150px]"
            />
            
            {/* VS Text */}
            <div className="relative z-20 text-white text-center text-shadow-vs font-russo text-4xl md:text-[64px] leading-[100px]">
              VS
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <p className="text-white text-center font-rajdhani text-lg leading-7">
              There's an ongoing livestream happening right now. Don't miss it!
            </p>
            <button className="gradient-btn px-5 py-2 rounded-[10px] text-white font-rajdhani text-base leading-6 hover:opacity-90 transition-opacity">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
