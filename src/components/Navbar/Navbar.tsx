import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useScroll } from "../../hooks/useScroll";

interface NavbarProps {
  isHome?: boolean;
}

export default function Navbar({ isHome = false }: NavbarProps) {
  const isScrolled = useScroll();

  return (
    <header className={`w-full h-20 px-5 flex items-center justify-center gap-6 z-50 transition-colors
    ${isHome ? (
      !isScrolled ? "bg-transparent sticky":"bg-navbar-scroll sticky top-0"
    ): "bg-navbar-scroll relative"}`}>
      {/* Logo */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8e981850b08a28aa59e412fdded8dc3533af5466?width=86"
        alt="Game Arena Logo"
        className="w-[43px] h-[43px] flex-shrink-0"
      />

      {/* Navigation */}
      <nav className="flex items-center gap-10 flex-1 max-w-[1037px]">
        <Link
          to="/"
          className="text-secondary-pink font-rajdhani text-lg leading-7 hover:text-secondary-pink-light transition-colors"
        >
          Home
        </Link>
        <Link
          to="/matches"
          className="text-white font-rajdhani text-lg leading-7 hover:text-secondary-pink transition-colors"
        >
          Matches
        </Link>
        <Link
          to="/team"
          className="text-white font-rajdhani text-lg leading-7 hover:text-secondary-pink transition-colors"
        >
          Team
        </Link>
        <Link
          to="/store"
          className="text-white font-rajdhani text-lg leading-7 hover:text-secondary-pink transition-colors"
        >
          Store
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-5">
        <Link
          to="/cart"
          className="flex flex-1 items-center justify-center">
          <button
            className="w-6 h-6 text-white hover:text-secondary-pink transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-6 h-6" />
          </button>
        </Link>

        <Link
          to="/livestream"
          className="gradient-btn px-8 py-2.5 rounded-full text-white font-rajdhani text-lg leading-7 hover:opacity-90 transition-opacity"
        >
          Livestream
        </Link>
      </div>
    </header>
  );
}
