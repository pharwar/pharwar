/**
 * PHARWAR PHARMACEUTICALS — Partnerships Section
 * Design: Collaboration opportunities, investment pathways
 * Highlights: Partner types, opportunities
 */

import { useEffect, useRef } from "react";
import { Building2, Microscope, Users, TrendingUp } from "lucide-react";

const partnerTypes = [
  { label: "Biotech Companies", icon: Building2 },
  { label: "Academic Institutions", icon: Microscope },
  { label: "Clinical Research Orgs", icon: Users },
  { label: "Strategic Investors", icon: TrendingUp },
];

const opportunities = [
  {
    icon: Building2,
    title: "Therapeutic Co-Development",
    desc: "Joint development programs leveraging complementary expertise and resources for accelerated drug development.",
  },
  {
    icon: Microscope,
    title: "Translational Research",
    desc: "Collaborative research projects advancing the scientific foundation and clinical validation of SIAH1 platform.",
  },
  {
    icon: TrendingUp,
    title: "Early-Stage Investment",
    desc: "Investment opportunities supporting IND-enabling studies and clinical development pathways.",
  },
];

export default function PartnershipsSection() {
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
    <section id="partnerships" className="py-24 lg:py-32 bg-[white]" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#0052cc]" />
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#0052cc]"
              
            >
              Collaboration
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6"
            
          >
            Partnerships &amp; Investors
          </h2>
          <p
            className="text-lg text-[#333333] max-w-2xl leading-relaxed"
            
          >
            Our goal is to accelerate the development of scalable, first-in-class therapies addressing major unmet needs in neurological health. We welcome collaborations with industry leaders and strategic investors.
          </p>
        </div>

        {/* Partner Types */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
          <h3
            className="text-sm font-bold text-[#666666] tracking-widest uppercase mb-6"
            
          >
            We Welcome Collaborations With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partnerTypes.map((type) => (
              <div
                key={type.label}
                className="flex flex-col items-center gap-3 p-5 bg-[#f8f9fa] border border-[oklch(0.88_0.005_120)] hover:border-[oklch(0.68_0.18_130/0.3)] transition-all duration-300 text-center group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.68_0.18_130/0.3)] text-[#0052cc] group-hover:bg-[oklch(0.68_0.18_130/0.08)] transition-colors">
                  <type.icon size={18} />
                </div>
                <span
                  className="text-xs text-[#333333] leading-snug"
                  
                >
                  {type.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <div>
          <h3
            className="reveal opacity-0 translate-y-8 transition-all duration-700 text-sm font-bold text-[#666666] tracking-widest uppercase mb-6"
            
          >
            Partnership Opportunities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {opportunities.map((opp, i) => (
              <div
                key={opp.title}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 p-6 bg-[#f8f9fa] border border-[oklch(0.88_0.005_120)] hover:border-[oklch(0.68_0.18_130/0.3)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.68_0.18_130/0.3)] text-[#0052cc] group-hover:bg-[oklch(0.68_0.18_130/0.08)] transition-colors mb-4">
                  <opp.icon size={18} />
                </div>
                <h4
                  className="text-base font-bold text-[#1a1a1a] mb-3"
                  
                >
                  {opp.title}
                </h4>
                <p
                  className="text-sm text-[#666666] leading-relaxed"
                  
                >
                  {opp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
