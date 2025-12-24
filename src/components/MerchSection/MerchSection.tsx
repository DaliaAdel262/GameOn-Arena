import StarIcon from "../../assets/icons/stars/StarIcon";
import ProductCard, { type ProductCardProps } from "../ProductCard/ProductCard";

export const products: ProductCardProps[] = [
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/54d91f8dae1d67bf5527f8d074e367c2af1a3d86?width=490",
    category: "Jersey",
    title: "Game Arena T-Shirt",
    rating: 4,
    price: 20
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/54d91f8dae1d67bf5527f8d074e367c2af1a3d86?width=490",
    category: "Jersey",
    title: "Game Arena T-Shirt",
    rating: 4,
    price: 20
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/54d91f8dae1d67bf5527f8d074e367c2af1a3d86?width=490",
    category: "Jersey",
    title: "Game Arena T-Shirt",
    rating: 4,
    price: 20
  },
  {
    image: "https://api.builder.io/api/v1/image/assets/TEMP/54d91f8dae1d67bf5527f8d074e367c2af1a3d86?width=490",
    category: "Jersey",
    title: "Game Arena T-Shirt",
    rating: 4,
    price: 20
  }
];

export default function MerchSection() {

  return (
    <section className="w-full px-4 md:px-[170px] py-[60px] flex flex-col items-center justify-center gap-[60px] bg-dark-bg">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-2.5 w-full max-w-[520px]">
        <h2 className="text-white text-center font-rajdhani text-4xl leading-[48px]">
          Shop Our Merchandise
        </h2>
        <p className="text-white text-center font-rajdhani text-lg leading-7">
          Get the latest Game Arena gear!
        </p>
      </div>

      {/* Products Grid */}
      <div className="w-full flex flex-col gap-2.5">
        <div className="flex flex-col md:flex-row flex-wrap items-stretch gap-10 w-full justify-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* View More */}
        <div className="flex justify-end h-7">
          <p className="text-white text-center font-rajdhani text-sm leading-[48px]">
            And more..
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-px bg-black/10" />
    </section>
  );
}
