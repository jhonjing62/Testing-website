
import { Mail, Lock, Globe } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const shopLinks = [
  "New Arrivals",
  "Men",
  "Women",
  "Accessories",
  "Sale",
];

const careLinks = [
  "Contact Us",
  "Shipping & Delivery",
  "Returns & Exchanges",
  "Size Guide",
  "Track Order",
  "FAQ",
];

const aboutLinks = [
  "Our Story",
  "Craftsmanship",
  "Sustainability",
  "Press",
  "Careers",
];

const socialLinks = [
  { name: "Facebook", icon: FaFacebookF },
  { name: "Instagram", icon: FaInstagram },
  { name: "LinkedIn", icon: FaLinkedinIn },
  { name: "YouTube", icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-neutral-900 font-sans">

      {/* Newsletter */}
      <div className="bg-neutral-900 text-white px-6 md:px-12 py-5 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4 min-w-[240px]">
          <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0">
            <Mail size={16} />
          </span>

          <div>
            <p className="text-xs tracking-widest font-semibold">
              STAY IN TIME
            </p>

            <p className="text-xs text-white/60 mt-0.5">
              Subscribe for new arrivals, offers and updates.
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-1 max-w-[620px] min-w-[260px]"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border border-white/30 rounded-l-sm px-4 py-3 text-sm text-white placeholder-white/50 outline-none"
          />

          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 transition-colors text-neutral-900 font-bold text-xs tracking-wider px-6 rounded-r-sm"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-6 md:px-12 py-10 border-b border-neutral-200">

        {/* Brand */}
        <div>
          <p className="text-lg font-bold tracking-widest leading-none">
            TIMECRAFT
          </p>

          <span className="block text-[9px] tracking-[0.35em] text-neutral-500 font-normal mt-1">
            WATCHES
          </span>

          <p className="text-[13px] text-neutral-500 leading-relaxed mt-4 max-w-[220px]">
            Timeless design. Trusted performance. Crafted to be with you,
            always.
          </p>

          {/* Social Media */}
          <div className="flex gap-2 mt-5">
            {socialLinks.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs tracking-widest font-semibold mb-4">
            SHOP
          </h4>

          <ul className="space-y-3">
            {shopLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[13.5px] text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-xs tracking-widest font-semibold mb-4">
            CUSTOMER CARE
          </h4>

          <ul className="space-y-3">
            {careLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[13.5px] text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-xs tracking-widest font-semibold mb-4">
            ABOUT US
          </h4>

          <ul className="space-y-3">
            {aboutLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[13.5px] text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-5">

          {/* Payment */}
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0">
              <Lock size={14} />
            </span>

            <div>
              <p className="text-[13px] font-semibold">
                SECURE PAYMENT
              </p>

              <p className="text-xs text-neutral-500 leading-relaxed">
                Visa, Mastercard, PayPal and more
              </p>
            </div>
          </div>

          {/* Shipping */}
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0">
              <Globe size={14} />
            </span>

            <div>
              <p className="text-[13px] font-semibold">
                WORLDWIDE SHIPPING
              </p>

              <p className="text-xs text-neutral-500 leading-relaxed">
                We ship to over 100+ countries worldwide
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-12 py-4">
        <p className="text-xs text-neutral-500">
          &copy; 2026 TIMECRAFT WATCHES. ALL RIGHTS RESERVED.
        </p>

        <div className="flex gap-2">
          {["VISA", "MC", "PayPal", "Pay", "GPay"].map((label) => (
            <span
              key={label}
              className="w-10 h-6 rounded bg-neutral-900 text-white text-[9.5px] font-bold flex items-center justify-center"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}
