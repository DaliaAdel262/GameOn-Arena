import { useState } from "react";
import MemberCard from "../../components/MemberCard/MemberCard";
import { teamMembers } from "../../data/teamMember";
import HalfSkewedRectangle from "../../components/ui/HalfSkewedRectangle";
import Pagination from "../../components/Pagination/Pagination";

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <div className="min-h-screen flex flex-col app-cont md:app-cont-md lg:app-cont-lg">
      <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-[130px] py-10 sm:py-12 md:py-[60px] flex flex-col items-center gap-8 md:gap-12">
        <div className="w-full  flex flex-col gap-2.5">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold leading-tight sm:leading-[48px]">
            MEET THE TEAM
          </h1>
          <p className="text-white font-astonpoliz text-base sm:text-lg leading-6 sm:leading-7">
            Take a look at your favorite players
          </p>
        </div>

        <div className="w-full  flex flex-col gap-6 sm:gap-8">
          <HalfSkewedRectangle>
            <div className="flex gap-[11px] items-center h-full">
              <div className="relative sm:block">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dd56c48b5692f228390be5c0b9dbd77b24c75f4d?width=160"
                  alt="Team Icon"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <h2 className="font-astonpoliz text-xl sm:text-2xl md:text-[28px] leading-7 sm:leading-9 z-10">
                GAMING TEAM
              </h2>
            </div>
          </HalfSkewedRectangle>

          <div className="flex flex-col gap-6 mt-4 sm:mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 lg:gap-10">
              {teamMembers.map((member, index) => (
                <MemberCard
                  key={index}
                  imageUrl={member.imageUrl}
                  nickname={member.nickname}
                  realName={member.realName}
                  role={member.role}
                />
              ))}
            </div>

            <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
