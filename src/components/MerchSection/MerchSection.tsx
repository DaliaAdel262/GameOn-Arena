import StarIcon from "../../assets/icons/stars/StarIcon";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MerchSection() {
  return (
    <section className="w-full px-4 md:px-[100px] py-[60px] flex flex-col items-center justify-center gap-[60px] bg-dark-bg">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-2.5 w-full max-w-[520px]">
        <h2 className="text-white text-center font-rajdhani text-4xl leading-[48px]">
          GET COOL MERCH
        </h2>
        <p className="text-white text-center font-rajdhani text-lg leading-7">
          Get the latest Game Arena gear!
        </p>
      </div>

      {/* Products Grid */}
      <div className="w-full flex flex-col gap-2.5">
        {/* Products */}
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            }
          }}
          className="w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard {...product} flexDirection="col" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View More */}
        <div className="flex justify-end h-7">
          <p className="text-white text-center font-rajdhani text-sm leading-[48px]">
            And more..
          </p>
        </div>
      </div>
    </section>
  );
}
