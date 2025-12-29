import LivestreamWidget from "../../components/Livestream/Livestream";

export default function LivestreamPage() {
  return (
    <div className="min-h-screen flex flex-col app-cont md:app-cont-md lg:app-cont-lg">
      <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-[130px] py-10 sm:py-12 md:py-[60px] flex flex-col items-center gap-8 md:gap-12">
        <div className="w-full  flex flex-col gap-2.5">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold leading-tight sm:leading-[48px]">
            LIVESTREAM
          </h1>
          <p className="text-white font-astonpoliz text-base sm:text-lg leading-6 sm:leading-7">
            Watch your favorite teams compete in real-time
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <LivestreamWidget
            eventName="Game Arena Championship"
            roomID="game-arena-live"
            isHost={false} // change to false for viewers
            height="600px"
          />
        </div>
      </main>
    </div>
  );
}
