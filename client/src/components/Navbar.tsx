import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/logoupdate_ec8d2946.jpg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "ALS Program", href: "#als-program" },
  { label: "Science", href: "#science" },
  { label: "Partnering", href: "#partnering" },
  { label: "Team", href: "#team" },
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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-[#d6e1dc] bg-[#f5f8f6]/95 shadow-sm backdrop-blur-md" : "bg-[#f5f8f6]/90 backdrop-blur-sm"}`}>
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3" aria-label="Pharwar Pharmaceuticals home">
            <img src={LOGO_URL} alt="Pharwar Pharmaceuticals Logo" className="h-11 w-11 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-[0.16em] text-[#12383c]">PHARWAR</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b7a75]">Pharmaceuticals</span>
            </div>
          </button>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => <button key={item.href} onClick={() => handleNavClick(item.href)} className="nav-link text-sm font-semibold text-[#365653] hover:text-[#0b7a75]">{item.label}</button>)}
            <button onClick={() => handleNavClick("#contact")} className="rounded-full bg-[#12383c] px-5 py-2.5 text-xs font-bold tracking-wide text-white transition-colors hover:bg-[#0b7a75]">DISCUSS A PARTNERSHIP</button>
          </div>

          <button className="p-2 text-[#12383c] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </div>

      {menuOpen && <div className="border-t border-[#d6e1dc] bg-[#f5f8f6] lg:hidden"><div className="container flex flex-col gap-1 py-5">{navItems.map((item) => <button key={item.href} onClick={() => handleNavClick(item.href)} className="border-b border-[#d6e1dc] py-3 text-left text-base font-semibold text-[#365653]">{item.label}</button>)}<button onClick={() => handleNavClick("#contact")} className="mt-4 rounded-full bg-[#12383c] px-5 py-3 text-sm font-bold text-white">Discuss a Partnership</button></div></div>}
    </nav>
  );
}
