
import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const NAV_LINKS = ["New arrivals", "Men", "Women", "Collection"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const cartCount = 2;

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[#F7F3EB] text-[#14181A]">
      <header className="flex w-full items-center justify-between gap-6 border-b border-[#DCD5C5] px-6 py-4 md:px-10">

        {/* Brand */}
        <a
          href="#"
          className="flex shrink-0 items-center gap-2.5 text-[#14181A] no-underline"
        >
          {/* Watch logo */}
          <span className="relative inline-block h-6,5 w-6.5 shrink-0 rounded-full border-[1.5px] border-[#14181A]">

            {/* Crown */}
            <span className="absolute right-1 top-1/2 h-1.3 w-0,75 -translate-y-1/2 rounded-[1px] bg-[#14181A]" />

            {/* Watch hand */}
            <span
              className="absolute left-1/2 top-1/2 h-2,5 w-[1.5px] origin-bottom -translate-x-1/2 -translate-y-full rotate-0 bg-[#A9803F]"
              style={{
                animation: "bezel-sweep 8s steps(8) infinite",
              }}
            />

            {/* Center */}
            <span className="absolute left-1/2 top-1/2 h-0,75 w-0,75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#14181A]" />
          </span>

          <span className="font-serif text-[21px] font-medium tracking-[-0.01em]">
            Bezel
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="mx-auto hidden items-center gap-8 min-[861px]:flex"
        >
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="border-b uppercase border-transparent py-1.5 text-[14.5px] font-medium text-[#14181A] no-underline transition-colors duration-150 hover:border-[#A9803F]"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex shrink-0 items-center gap-3 md:gap-5">

          {/* Search */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search watches"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`border-0 border-b border-[#DCD5C5] bg-transparent py-2 text-sm text-[#14181A] outline-none transition-all duration-200 placeholder:text-[#7C7A72] ${
                searchOpen
                  ? "mr-2 w-40 opacity-100"
                  : "mr-0 w-0 opacity-0"
              }`}
            />

            <button
              type="button"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((v) => !v);

                if (searchOpen) {
                  setQuery("");
                }
              }}
              className="group flex h-8,5 w-8,5 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
            >
              <Search
                size={19}
                strokeWidth={1.5}
                className="text-[#14181A] transition-colors duration-150 group-hover:text-[#7C5D2C]"
              />
            </button>
          </div>

          {/* User */}
          <a
            href="#"
            aria-label="Log in"
            className="group flex h-8,5 w-8,5 items-center justify-center no-underline"
          >
            <User
              size={19}
              strokeWidth={1.5}
              className="text-[#14181A] transition-colors duration-150 group-hover:text-[#7C5D2C]"
            />
          </a>

          {/* Cart */}
          <a
            href="#"
            aria-label={`Cart, ${cartCount} items`}
            className="group relative flex h-8,5 w-8,5 items-center justify-center no-underline"
          >
            <ShoppingBag
              size={19}
              strokeWidth={1.5}
              className="text-[#14181A] transition-colors duration-150 group-hover:text-[#7C5D2C]"
            />

            {cartCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-3,5 w-3,5 items-center justify-center rounded-full bg-[#A9803F] text-[9px] font-semibold text-[#F7F3EB]">
                {cartCount}
              </span>
            )}
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-8,5 w-8,5 cursor-pointer items-center justify-center border-0 bg-transparent p-0 min-[861px]:hidden"
          >
            {menuOpen ? (
              <X
                size={20}
                strokeWidth={1.5}
                className="text-[#14181A]"
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={1.5}
                className="text-[#14181A]"
              />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col border-b border-[#DCD5C5] bg-[#F7F3EB] min-[861px]:hidden">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="border-t border-[#DCD5C5] px-6 py-4 text-[15px] font-medium text-[#14181A] no-underline transition-colors hover:bg-[#eee9df] md:px-10"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes bezel-sweep {
          to {
            transform: translate(-50%, -100%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

