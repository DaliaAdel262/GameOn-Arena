import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/products";
import Pagination from "../../components/Pagination/Pagination";
import { Filter, Search } from "lucide-react";

export default function MerchStore() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <div className="min-h-screen flex flex-col app-cont md:app-cont-md lg:app-cont-lg bg-dark-bg">
      <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-[130px] py-10 sm:py-12 md:py-[60px] flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="w-full  flex flex-col gap-2.5">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold leading-tight sm:leading-[48px]">
            SHOP OUR MERCHANDISE
          </h1>
          <p className="text-white font-astonpoliz text-base sm:text-lg leading-6 sm:leading-7">
            Get the latest Game Arena gear!
          </p>
        </div>

        {/* Page Content */}
        <div className="w-full flex flex-col items-center justify-center gap-6">
          {/* Search + Filter */}
          <div className="w-full flex-1 flex items-center justify-between">
            <div className="border-1 border-primary-purple w-117 px-2 py-1 flex gap-2.5 rounded-10">
              <Search className="text-primary-purple" />
              <p className="text-primary-purple">Search</p>
            </div>
            <button className="bg-secondary-pink px-[7px] py-[5.5px] rounded-10">
              <Filter />
            </button>
          </div>

          {/* Products */}
          <div className="w-full flex flex-col gap-2.5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full justify-center">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} flexDirection="col" />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
    </div>
  );
}
