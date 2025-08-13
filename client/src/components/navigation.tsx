import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Crown, Menu, X } from "lucide-react";

const navigationItems = [
  { id: "home", name: "Home", path: "/" },
  { id: "promo", name: "Promo", path: "/promo" },
  { id: "agent", name: "Agent", path: "/agent" },
  { id: "mine", name: "Mine", path: "/mine" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="nav-3d sticky top-0 z-50 px-3 py-3" data-testid="nav-main">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" data-testid="link-logo">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-casino-gold to-casino-orange rounded-full flex items-center justify-center gold-glow">
            <Crown className="text-xl sm:text-2xl text-casino-deep-brown" />
          </div>
          <h1 className="text-lg sm:text-2xl font-playfair font-bold text-casino-gold">Royal Casino</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          {navigationItems.map((nav) => (
            <Link key={nav.id} href={nav.path}>
              <button
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-3d hover:shadow-3d-hover transform hover:-translate-y-1 text-sm ${
                  location === nav.path || (nav.path === "/" && location === "/")
                    ? "bg-gradient-to-r from-casino-gold to-casino-orange text-casino-deep-brown"
                    : "bg-gradient-to-r from-casino-dark-brown to-casino-brown text-casino-gold hover:from-casino-brown hover:to-casino-dark-brown"
                }`}
                data-testid={`button-nav-${nav.id}`}
              >
                {nav.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-casino-gold text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2" data-testid="menu-mobile">
          {navigationItems.map((nav) => (
            <Link key={nav.id} href={nav.path}>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-3d ${
                  location === nav.path || (nav.path === "/" && location === "/")
                    ? "bg-gradient-to-r from-casino-gold to-casino-orange text-casino-deep-brown"
                    : "bg-gradient-to-r from-casino-dark-brown to-casino-brown text-casino-gold"
                }`}
                data-testid={`button-mobile-nav-${nav.id}`}
              >
                {nav.name}
              </button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
