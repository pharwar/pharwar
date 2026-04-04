/**
 * PHARWAR PHARMACEUTICALS — Technology Section
 * Design: Light background, green accents, asymmetric layout
 * Highlights: Anti-SIAH1 platform, mechanism of action
 */

import { useEffect, useRef } from "react";
import { Zap, Shield, Microscope } from "lucide-react";

const TECH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/anti-siah1-molecular-binding-E3Y58E36pHneWSyj2eNDee.webp";

const features = [
  {
    icon: Zap,
    title: "Neuronal Survival & Regeneration",
    desc: "Promotes neural cell survival and supports regenerative processes in damaged neural tissue.",
  },
  {
    icon: Shield,
    title: "Reduced Protein Degradation",
    desc: "Reduces key protein degradation pathways critical for neuronal health and function.",
  },
  {
    icon: Microscope,
    title: "Stress Response Modulation",
    desc: "Modulates stress-related neural adaptations associated with neuropsychiatric conditions.",
  },
];

export default function TechnologySection() {
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
    <section
      id="technology"
      className="py-24 lg:py-32 bg-gradient-to-b from-[white] to-[#f8f9fa]"
      ref={sectionRef}
    >
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#0052cc]" />
            <span
              className="text-xs tracking-[0.3em] uppercase text-[#0052cc]"
              
            >
              Core Innovation
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4"
            
          >
            Anti-SIAH1 Platform
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image — 2 cols */}
          <div className="lg:col-span-2 reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="relative">
              <div className="absolute -inset-4 border border-[oklch(0.68_0.18_130/0.15)]" />
              <img
                src={TECH_IMG}
                alt="Anti-SIAH1 molecular binding visualization"
                className="w-full aspect-square object-cover"
              />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 right-4 bg-[oklch(0.96_0.005_120/0.85)] backdrop-blur-sm p-3 border-l-2 border-[#0052cc]">
                <p
                  className="text-xs text-[#0052cc] tracking-wider uppercase"
                  
                >
                  SIAH1 Inhibitor Binding
                </p>
                <p className="text-xs text-[#666666] mt-0.5" >
                  Molecular mechanism visualization
                </p>
              </div>
            </div>
          </div>

          {/* Text — 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <p
                className="text-xl md:text-2xl text-[#333333] leading-relaxed"
                
              >
                Pharwar's core technology is based on proprietary small-molecule inhibitors targeting the <strong className="text-[#0052cc]">SIAH1 pathway</strong>, which plays a central role in neuronal survival, protein degradation and stress response.
              </p>
              <p
                className="text-xl md:text-2xl text-[#333333] leading-relaxed mt-4"
                
              >
                Dysregulation of this pathway has been implicated in both neurodegeneration and neuropsychiatric conditions, providing a unified therapeutic target across multiple disease areas.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 flex gap-4 p-4 glow-border bg-[#f8f9fa] group hover:border-[oklch(0.68_0.18_130/0.3)] transition-all"
                  style={{ transitionDelay: `${(i + 2) * 0.15}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[oklch(0.68_0.18_130/0.3)] text-[#0052cc] group-hover:bg-[oklch(0.68_0.18_130/0.08)] transition-colors">
                    <feature.icon size={18} />
                  </div>
                  <div>
                    <h4
                      className="text-base font-bold text-[#1a1a1a] mb-1"
                      
                    >
                      {feature.title}
                    </h4>
                    <p
                      className="text-base text-[#666666] leading-relaxed"
                      
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
