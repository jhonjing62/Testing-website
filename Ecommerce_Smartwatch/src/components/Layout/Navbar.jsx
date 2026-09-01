
import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const COLORS = {
  ink: "#14181A",
  ivory: "#F7F3EB",
  brass: "#A9803F",
  brassDark: "#7C5D2C",
  hairline: "#DCD5C5",
  muted: "#7C7A72",
};

const NAV_LINKS = ["New arrivals", "Men", "Women", "Collection"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const cartCount = 2;

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: COLORS.ivory }}>
      <style>{`
        @keyframes bezel-sweep {
          to { transform: translate(-50%, -100%) rotate(360deg); }
        }
        .bezel-hand {
          animation: bezel-sweep 8s steps(8) infinite;
        }
        .bezel-link {
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease;
        }
        .bezel-link:hover {
          border-bottom-color: ${COLORS.brass};
        }
        .bezel-icon-btn svg {
          transition: stroke 0.15s ease, color 0.15s ease;
        }
        .bezel-icon-btn:hover svg {
          stroke: ${COLORS.brassDark};
          color: ${COLORS.brassDark};
        }
        .bezel-search-input::placeholder {
          color: ${COLORS.muted};
        }
        .bezel-mobile-link {
          border-top: 1px solid ${COLORS.hairline};
        }
      `}</style>

      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "16px 40px",
          borderBottom: `1px solid ${COLORS.hairline}`,
        }}
      >
        {/* Brand */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: COLORS.ink,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              border: `1.5px solid ${COLORS.ink}`,
              position: "relative",
              flexShrink: 0,
              display: "inline-block",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                right: -4,
                width: 3,
                height: 6,
                background: COLORS.ink,
                borderRadius: 1,
                transform: "translateY(-50%)",
              }}
            />
            <span
              className="bezel-hand"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 1.5,
                height: 9,
                background: COLORS.brass,
                transformOrigin: "50% 100%",
                transform: "translate(-50%, -100%) rotate(0deg)",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: COLORS.ink,
                transform: "translate(-50%, -50%)",
              }}
            />
          </span>
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 21,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Bezel
          </span>
        </a>

        {/* Center nav links (desktop) */}
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            margin: "0 auto",
          }}
          className="bezel-nav-links"
        >
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="bezel-link"
              style={{
                color: COLORS.ink,
                textDecoration: "none",
                fontSize: 14.5,
                fontWeight: 500,
                padding: "6px 0",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="bezel-search-input"
              type="text"
              placeholder="Search watches"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: searchOpen ? 160 : 0,
                opacity: searchOpen ? 1 : 0,
                marginRight: searchOpen ? 8 : 0,
                padding: "8px 0",
                border: "none",
                borderBottom: `1px solid ${COLORS.hairline}`,
                background: "transparent",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: COLORS.ink,
                outline: "none",
                transition: "width 0.2s ease, opacity 0.2s ease, margin-right 0.2s ease",
              }}
            />
            <button
              className="bezel-icon-btn"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((v) => !v);
                if (searchOpen) setQuery("");
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                border: "none",
                background: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <Search size={19} strokeWidth={1.5} color={COLORS.ink} />
            </button>
          </div>

          <a
            href="#"
            className="bezel-icon-btn"
            aria-label="Log in"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              textDecoration: "none",
            }}
          >
            <User size={19} strokeWidth={1.5} color={COLORS.ink} />
          </a>

          <a
            href="#"
            className="bezel-icon-btn"
            aria-label={`Cart, ${cartCount} items`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              position: "relative",
              textDecoration: "none",
            }}
          >
            <ShoppingBag size={19} strokeWidth={1.5} color={COLORS.ink} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: COLORS.brass,
                  color: COLORS.ivory,
                  fontSize: 9,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount}
              </span>
            )}
          </a>

          {/* Mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="bezel-menu-toggle"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              border: "none",
              background: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.5} color={COLORS.ink} />
            ) : (
              <Menu size={20} strokeWidth={1.5} color={COLORS.ink} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile panel */}
      {menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderBottom: `1px solid ${COLORS.hairline}`,
          }}
          className="bezel-mobile-panel"
        >
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="bezel-mobile-link"
              style={{
                color: COLORS.ink,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                padding: "16px 40px",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .bezel-nav-links { display: none !important; }
          .bezel-menu-toggle { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

