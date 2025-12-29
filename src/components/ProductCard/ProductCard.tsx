import StarIcon from "../../assets/icons/stars/StarIcon";
import { type Product } from "../../types/Product";
import { Trash } from "lucide-react";

export interface ProductCardProps extends Product {
  flexDirection?: "row" | "col";
  cartPage?: boolean;
}

export default function ProductCard({
  image,
  category,
  title,
  rating,
  price,
  flexDirection,
  cartPage = false,
}: ProductCardProps) {
  return (
    <div
      className={`flex ${
        flexDirection === "col" ? "flex-col" : "flex-row"
      } items-center flex-1 min-w-[250px] rounded-md border border-primary-purple overflow-hidden relative`}
    >
      {/* Product Image */}
      <div
        className={`relative ${cartPage ? "w-auto h-[132px]" : "w-full"} ${
          flexDirection === "col" && !cartPage ? "h-[245px]" : "h-[132px]"
        } overflow-hidden`}
      >
        {/* Image */}
        <div className={`${cartPage ? "h-full w-auto" : "w-full h-full"}`}>
          <img
            src={image}
            alt={title}
            className={`${
              cartPage
                ? "h-full w-auto object-cover"
                : "w-full h-full object-cover"
            }`}
          />
        </div>
        {/* Trending Tag */}
        <div className="absolute top-0 left-0 gradient-btn px-2 py-1 rounded-br-md">
          <span className="text-white font-rajdhani text-xs leading-4">
            Trending
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-start gap-1 p-3 w-full">
        <div className="flex items-center justify-center gap-2.5">
          <span className="text-white font-rajdhani text-[15px] leading-6">
            {category}
          </span>
        </div>

        <h3 className="w-full text-white font-rajdhani text-base leading-6">
          {title}
        </h3>

        {/* Star Rating */}
        <div className="flex items-start gap-0 h-5">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= rating} />
          ))}
        </div>

        <p className="w-full text-white font-rajdhani text-xl leading-7">
          ${price}
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className={`w-full ${cartPage ? "hidden" : ""}`}>
        <button className="w-full px-3 py-1 bg-primary-purple text-white font-rajdhani text-base leading-6 hover:opacity-90 transition-opacity">
          Add to cart
        </button>
      </div>

      {/* Remove from Cart Button */}
      <button
        className={`absolute top-0 right-0 px-2 py-2 bg-secondary-pink text-white hover:opacity-90 transition-opacity rounded-bl-[10px] cursor-pointer ${
          cartPage ? "" : "hidden"
        }`}
      >
        <Trash className="mx-auto" size={20} />
      </button>
    </div>
  );
}
