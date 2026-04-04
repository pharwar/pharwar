/**
 * PHARWAR PHARMACEUTICALS — Footer
 * Design: Dark footer with logo, nav links, and copyright
 */

const navItems = [
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Team", href: "#team" },
  { label: "Patents", href: "#patents" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[white] border-t border-[#e0e0e0]">
      <div className="container py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-8">
                <svg viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M16 1L30 9.5V26.5L16 35L2 26.5V9.5L16 1Z"
                    stroke="oklch(0.72 0.15 195)"
                    strokeWidth="1.5"
                    fill="oklch(0.72 0.15 195 / 0.1)"
                  />
                  <path
                    d="M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z"
                    fill="oklch(0.72 0.15 195)"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <div>
                <span
                  className="text-lg font-bold tracking-wider text-white"
                  
                >
                  PHARWAR
                </span>
                <div className="text-xs tracking-[0.2em] text-[#0052cc] uppercase leading-none">
                  Pharmaceuticals
                </div>
              </div>
            </div>
            <p
              className="text-sm text-[#333333] leading-relaxed max-w-xs"
              
            >
              A precision medicine platform company developing first-in-class Anti-SIAH1 therapeutics
              for neurological disorders.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm tracking-[0.2em] uppercase text-[#0052cc] mb-4"
              
            >
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left text-sm text-[#666666] hover:text-[#0052cc] transition-colors"
                  
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase text-[#0052cc] mb-4"
              
            >
              Contact
            </h4>
            <div className="space-y-4">
              {/* Taiwan Office */}
              <div className="space-y-1">
                <a
                  href="mailto:wukj@cgmh.org.tw"
                  className="block text-xs text-[#666666] hover:text-[#0052cc] transition-colors"
                  
                >
                  wukj@cgmh.org.tw
                </a>
                <p
                  className="text-xs text-[#666666]"
                  
                >
                  Chang Gung Memorial Hospital<br />
                  Taoyuan 333, Taiwan
                </p>
              </div>
              {/* USA Office */}
              <div className="space-y-1 border-t border-[#e0e0e0] pt-3">
                <a
                  href="mailto:imin96@hotmail.com"
                  className="block text-xs text-[#666666] hover:text-[#0052cc] transition-colors"
                  
                >
                  imin96@hotmail.com
                </a>
                <p
                  className="text-xs text-[#666666]"
                  
                >
                  8 The Green, Suite B<br />
                  Dover, DE 19901, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs text-[#666666]"
            
          >
            © {new Date().getFullYear()} Pharwar Pharmaceuticals. All rights reserved.
          </p>
          <p
            className="text-xs text-[#666666]"
            
          >
            Patent Portfolio: US 63/358,954 · PCT CN2023/088337 · CN2023/092881 · CN2025/081059
          </p>
        </div>
      </div>
    </footer>
  );
}
