import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/products";
import Pagination from "../../components/Pagination/Pagination";

export default function Cart() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  return (
    <div className="min-h-screen flex flex-col app-cont md:app-cont-md lg:app-cont-lg bg-dark-bg">
      <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-10 xl:px-[130px] py-10 sm:py-12 md:py-[60px] flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="w-full flex flex-col gap-2.5">
          <h1 className="text-white font-syne text-3xl sm:text-4xl font-semibold leading-tight sm:leading-[48px]">
            CART
          </h1>
          <p className="text-white font-astonpoliz text-base sm:text-lg leading-6 sm:leading-7">
            View your purchase before checking out
          </p>
        </div>

        {/* Page Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          {/* Products */}
          <div className="lg:col-span-7 flex flex-col items-center gap-10 w-full">
            <div className="lg:col-span-6 grid grid-cols-1 gap-10 w-full">
              {products.slice(0, 3).map((product, index) => (
                <ProductCard key={index} {...product} cartPage={true} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Price details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="border-b border-primary-purple pb-3">
              <h3 className="text-[28px] text-primary-purple">Total</h3>
            </div>

            <div className="border-b border-primary-purple py-8 px-2">
              <ul className="flex flex-col gap-2.5">
                {products.map((product, i) => (
                  <li key={i} className="flex flex-1 justify-between">
                    <p className="text-primary-purple">{product.title}</p>
                    <span className="text-primary-purple">
                      ${product.price}
                    </span>
                  </li>
                ))}
                <li></li>
              </ul>
            </div>

            <button className="w-full bg-secondary-pink text-white py-4 rounded-br-[10px] rounded-bl-[10px] hover:text-secondary-pink-light transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
