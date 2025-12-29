import React, { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import MatchCard from "../../components/MatchCard/MatchCard";

export default function MatchesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  return (
    <div className="min-h-screen flex flex-col app-cont md:app-cont-md lg:app-cont-lg">
      <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-[130px] py-10 sm:py-12 md:py-[60px] flex flex-col items-center gap-8 md:gap-12">

        {/* Page Header */}
        <div className="w-full  flex flex-col gap-2.5">
          <h1 className="text-white font-syne text-3xl sm:text-4xl font-semibold leading-tight sm:leading-[48px]">
            UPCOMING MATCHES
          </h1>
          <p className="text-white font-astonpoliz text-base sm:text-lg leading-6 sm:leading-7">
            Don't miss our exciting upcoming matches!
          </p>
        </div>

        <div className="w-full  flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <MatchCard key={index} />
            ))}

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
