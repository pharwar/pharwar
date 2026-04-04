/**
 * PHARWAR PHARMACEUTICALS — Navbar
 * Design: Biotech Health — fresh green, cream background, organic curves
 * Sticky top nav with smooth scroll links and mobile hamburger menu
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/logoupdate_ec8d2946.jpg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Team", href: "#team" },
  { label: "Patents", href: "#patents" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md border-b border-[#e0e0e0] shadow-sm"
          : "bg-white/95 backdrop-blur-sm border-b border-[#e0e0e0]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <img
              src={LOGO_URL}
              alt="Pharwar Pharmaceuticals Logo"
              className="w-12 h-12 object-contain flex-shrink-0"
            />
            <div className="flex flex-col leading-tight">
              <span
                className="text-xl font-bold tracking-wider text-[#1a1a1a] block whitespace-nowrap"
              >
                PHARWAR
              </span>
              <div className="text-xs tracking-[0.15em] text-[#68B818] uppercase font-semibold block whitespace-nowrap">
                Pharmaceuticals
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-base font-medium tracking-wide text-[#333333] hover:text-[#0052cc] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-4 px-6 py-2.5 text-base font-semibold tracking-wide border-0 text-white bg-[#0052cc] hover:bg-[#003d99] transition-all duration-300 rounded"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1a1a1a] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#e0e0e0]">
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-lg font-medium text-[#333333] hover:text-[#0052cc] transition-colors py-2 border-b border-[#e0e0e0]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
