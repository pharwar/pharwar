/**
 * PHARWAR PHARMACEUTICALS — Patents Section
 * Design: Intellectual property portfolio, patent details
 * Highlights: US provisional, PCT applications
 */

import { useEffect, useRef } from "react";
import { FileText, Globe, Award } from "lucide-react";

const patents = [
  {
    type: "US Provisional",
    number: "63/358,954",
    scope: "Anti-SIAH1 small-molecule inhibitors and therapeutic applications",
    icon: FileText,
  },
  {
    type: "PCT Application",
    number: "CN2023/08837",
    scope: "Repurposed drug targeting SIAH1",
    icon: Globe,
  },
  {
    type: "PCT Application",
    number: "CN2023/092881",
    scope: "Novel SIAH1 inhibitors",
    icon: Globe,
  },
  {
    type: "PCT Application",
    number: "CN2025/081059",
    scope: "Anti-SIAH1 inhibitors for ALS treatment",
    icon: Award,
  },
];

export default function PatentsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(".reveal");
            reveals.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="patents" className="py-24 lg:py-32 bg-[white]" ref={sectionRef}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + Description */}
          <div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#0052cc]" />
                <span
                  className="text-sm md:text-base tracking-[0.3em] uppercase text-[#0052cc]"
                  
                >
                  Intellectual Property
                </span>
              </div>
              <h2
                className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6"
                
              >
                Patents &amp; Scientific Foundation
              </h2>
              <p
                className="text-[#666666] leading-relaxed"
                
              >
                Pharwar Pharmaceuticals owns foundational intellectual property covering Anti-SIAH1 small-molecule inhibitors. These patents cover novel compounds and their therapeutic applications across neurodegenerative and neuropsychiatric conditions.
              </p>
            </div>

            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 p-6 border border-[oklch(0.68_0.18_130/0.25)] bg-[#f8f9fa]">
              <p
                className="text-sm italic text-[#666666] leading-relaxed"
                
              >
                "Ongoing preclinical research supports the continued development and validation of this therapeutic platform, building a robust scientific foundation for future clinical translation."
              </p>
            </div>
          </div>

          {/* Right: Patent List */}
          <div className="space-y-3">
            {patents.map((patent, i) => (
              <div
                key={patent.number}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-start gap-4 p-5 bg-[#f8f9fa] border border-[oklch(0.88_0.005_120)] hover:border-[oklch(0.68_0.18_130/0.3)] transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-[oklch(0.68_0.18_130/0.3)] text-[#0052cc] group-hover:bg-[oklch(0.68_0.18_130/0.08)] transition-colors">
                  <patent.icon size={15} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase text-[#0052cc]"
                      
                    >
                      {patent.type}
                    </span>
                  </div>
                  <div
                    className="text-sm font-bold text-[#1a1a1a]"
                    
                  >
                    {patent.number}
                  </div>
                  <p
                    className="text-xs text-[#333333]"
                    
                  >
                    {patent.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
