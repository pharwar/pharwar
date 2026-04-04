/**
 * PHARWAR PHARMACEUTICALS — Strategy Section
 * Design: Commercialization pathway, strategic initiatives
 * Highlights: IND-enabling, partnerships, regulatory path
 */

import { useEffect, useRef } from "react";
import { CheckCircle2, Zap, Users, Target } from "lucide-react";

const strategies = [
  {
    number: "01",
    icon: CheckCircle2,
    title: "IND-Enabling Studies",
    desc: "Comprehensive preclinical and regulatory studies for ALS and Cocaine Use Disorder to support Investigational New Drug applications.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Neuropsychiatric Expansion",
    desc: "Strategic expansion into PTSD and stress-related conditions leveraging the unified SIAH1 mechanism.",
  },
  {
    number: "03",
    icon: Users,
    title: "Strategic Partnerships",
    desc: "Collaborations with biotech companies, academic institutions, and clinical research organizations for co-development.",
  },
  {
    number: "04",
    icon: Target,
    title: "Biomarker-Driven Approach",
    desc: "Patient stratification using biomarkers to optimize clinical outcomes and accelerate regulatory pathways.",
  },
];

export default function StrategySection() {
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
    <section id="strategy" className="py-24 lg:py-32 bg-gradient-to-b from-[#f8f9fa] to-[white]" ref={sectionRef}>
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#0052cc]" />
            <span
              className="text-sm md:text-base tracking-[0.3em] uppercase text-[#0052cc]"
              
            >
              Commercialization
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#1a1a1a]"
            
          >
            Strategy &amp; Development Path
          </h2>
        </div>

        {/* Intro */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12 max-w-3xl">
          <p
            className="text-xl md:text-2xl text-[#333333] leading-relaxed"
            
          >
            Pharwar Pharmaceuticals is advancing a first-in-class therapeutic platform supported by international patent protection and a clear path toward clinical development. Early integration with regulatory and commercialization pathways supports future translation toward U.S. FDA approval.
          </p>
        </div>

        {/* Strategy Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {strategies.map((item, i) => (
            <div
              key={item.number}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 p-6 lg:p-8 bg-[#f8f9fa] border border-[oklch(0.88_0.005_120)] hover:border-[oklch(0.68_0.18_130/0.3)] group transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div
                    className="text-2xl font-bold text-[#0052cc] opacity-60 group-hover:opacity-100 transition-opacity"
                    
                  >
                    {item.number}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon size={16} className="text-[#0052cc]" />
                    <h3
                      className="text-base font-bold text-[#1a1a1a]"
                      
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm text-[#666666] leading-relaxed"
                    
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
