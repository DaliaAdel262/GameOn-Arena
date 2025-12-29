import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useScroll } from "../../hooks/useScroll";
import { useState } from "react";
import { useLocation as userLocation } from "react-router-dom";

interface NavbarProps {
  isHome?: boolean;
}

export default function Navbar({ isHome = false }: NavbarProps) {
  const isScrolled = useScroll();
  const [open, setOpen] = useState(false);
  const location = userLocation();

  return (
    <header
      className={`w-full h-20 px-5 flex justify-between items-center lg:justify-center gap-6 z-50 transition-colors
      ${
        isHome
          ? !isScrolled
            ? "bg-transparent fixed top-0"
            : "bg-navbar-scroll fixed top-0"
          : "bg-navbar-scroll relative"
      }`}
    >
      {/* Logo */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8e981850b08a28aa59e412fdded8dc3533af5466?width=86"
        alt="Game Arena Logo"
        className="w-[43px] h-[43px] flex-shrink-0"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 max-w-[1037px]">
        <nav className="flex items-center gap-10 flex-1 max-w-[1037px]">
          <Link
            className={`font-rajdhani text-lg leading-7 transition-colors ${
              location.pathname === "/"
                ? "text-secondary-pink"
                : "text-white hover:text-secondary-pink"
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`font-rajdhani text-lg leading-7 transition-colors ${
              location.pathname === "/matches"
                ? "text-secondary-pink"
                : "text-white hover:text-secondary-pink"
            }`}
            to="/matches"
          >
            Matches
          </Link>
          <Link
            className={`font-rajdhani text-lg leading-7 transition-colors ${
              location.pathname === "/team"
                ? "text-secondary-pink"
                : "text-white hover:text-secondary-pink"
            }`}
            to="/team"
          >
            Team
          </Link>
          <Link
            className={`font-rajdhani text-lg leading-7 transition-colors ${
              location.pathname === "/store"
                ? "text-secondary-pink"
                : "text-white hover:text-secondary-pink"
            }`}
            to="/store"
          >
            Store
          </Link>
        </nav>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-5">
        <Link to="/cart" className="flex flex-1 items-center justify-center">
          <button className="w-6 h-6 text-white hover:text-secondary-pink transition-colors">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </Link>

        <Link
          to="/live"
          className="gradient-btn px-8 py-2.5 rounded-full text-white font-rajdhani text-lg leading-7 hover:opacity-90 transition-opacity"
        >
          Livestream
        </Link>
      </div>

      {/* Hamburger Button (mobile only) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white absolute right-5"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-navbar-scroll flex flex-col items-center gap-6 py-6 md:hidden">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`font-rajdhani text-lg ${
              location.pathname === "/" ? "text-secondary-pink" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/matches"
            onClick={() => setOpen(false)}
            className={`font-rajdhani text-lg ${
              location.pathname === "/matches"
                ? "text-secondary-pink"
                : "text-white"
            }`}
          >
            Matches
          </Link>
          <Link
            to="/team"
            onClick={() => setOpen(false)}
            className={`font-rajdhani text-lg ${
              location.pathname === "/team"
                ? "text-secondary-pink"
                : "text-white"
            }`}
          >
            Team
          </Link>
          <Link
            to="/store"
            onClick={() => setOpen(false)}
            className={`font-rajdhani text-lg ${
              location.pathname === "/store"
                ? "text-secondary-pink"
                : "text-white"
            }`}
          >
            Store
          </Link>

          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 text-white" />
          </Link>

          <Link
            to="/live"
            className="gradient-btn px-8 py-2.5 rounded-full text-white font-rajdhani text-lg leading-7"
          >
            Livestream
          </Link>
        </div>
      )}
    </header>
  );
}
