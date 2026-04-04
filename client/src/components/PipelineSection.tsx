/**
 * PHARWAR PHARMACEUTICALS — Pipeline Section
 * Design: Therapeutic development stages, program details
 * Shows: ALS, SUD, PTSD programs with progression indicators
 */

import { useEffect, useRef } from "react";

const stages = ["Preclinical", "IND-Enabling", "Phase 1", "Phase 2"];

const pipeline = [
  {
    program: "Amyotrophic Lateral Sclerosis (ALS)",
    indication: "Neurodegenerative",
    stage: 0,
    description: "Lead indication targeting neuronal survival and regeneration in motor neuron disease.",
  },
  {
    program: "Substance Use Disorders (SUD)",
    indication: "Cocaine Use Disorder",
    stage: 0,
    description: "Targeting stress-related neural adaptations and addiction pathways.",
  },
  {
    program: "Stress-Related Neuropsychiatric",
    indication: "PTSD & Related Conditions",
    stage: 0,
    description: "Expansion program addressing post-traumatic stress and related conditions.",
  },
];

export default function PipelineSection() {
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
    <section id="pipeline" className="py-24 lg:py-32 bg-[white]" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#0052cc]" />
            <span
              className="text-sm md:text-base tracking-[0.3em] uppercase text-[#0052cc]"
              
            >
              Development Pipeline
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-5xl md:text-6xl font-bold text-[#1a1a1a]"
              
            >
              Therapeutic Pipeline
            </h2>
            <p
              className="text-xl md:text-2xl text-[#666666] max-w-sm"
              
            >
              Scalable pipeline based on the Anti-SIAH1 platform, enabling efficient expansion across multiple neurological indications.
            </p>
          </div>
        </div>

        {/* Stage Headers */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-4 gap-4 mb-8">
          {stages.map((stage, i) => (
            <div
              key={stage}
              className={`text-center text-sm tracking-wider uppercase pb-2 border-b ${
                i === 0 ? "border-[#0052cc]" : "border-[oklch(0.88_0.005_120)]"
              } ${i === 0 ? "text-[#0052cc]" : "text-[#666666]"}`}
              
            >
              {stage}
            </div>
          ))}
        </div>

        {/* Pipeline Programs */}
        <div className="space-y-4">
          {pipeline.map((item, idx) => (
            <div
              key={item.program}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col md:flex-row md:items-center gap-4 p-5 lg:p-6 bg-[#f8f9fa] border border-[oklch(0.88_0.005_120)] hover:border-[oklch(0.68_0.18_130/0.3)] transition-all duration-300 group"
            >
              {/* Program Info */}
              <div className="md:w-[240px] lg:w-[280px] flex-shrink-0">
                <span
                  className="text-sm md:text-base tracking-[0.15em] uppercase text-[#0052cc] mb-1 block"
                  
                >
                  {item.indication}
                </span>
                <h3
                  className="text-lg md:text-xl font-bold text-[#1a1a1a]"
                  
                >
                  {item.program}
                </h3>
                <p
                  className="text-base md:text-lg text-[#666666] mt-1"
                  
                >
                  {item.indication}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="flex-grow">
                <div className="flex gap-2">
                  {stages.map((stage, i) => (
                    <div
                      key={stage}
                      className={`h-7 flex items-center justify-center text-[10px] tracking-wider transition-all duration-500 ${
                        i <= item.stage
                          ? "text-[oklch(0.88_0.005_120)] font-bold"
                          : "text-[#666666]"
                      }`}
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        backgroundColor:
                          i <= item.stage
                            ? "oklch(0.68 0.18 130)"
                            : "transparent",
                      }}
                    >
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Label */}
              <div className="md:w-[140px] flex-shrink-0 text-right">
                <div
                  className="text-sm font-bold text-[#0052cc]"
                  
                >
                  {stages[item.stage]}
                </div>
                <span className="text-xs text-[#666666]" >
                  Stage {item.stage + 1} of {stages.length}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Market Need */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mt-16 p-8 border border-[oklch(0.68_0.18_130/0.25)] bg-[#f8f9fa] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#0052cc]" />
          <div className="pl-6">
            <h3
              className="text-xl font-bold text-[#1a1a1a] mb-4"
              
            >
              Addressing Unmet Medical Needs
            </h3>
            <p
              className="text-[#333333] leading-relaxed max-w-3xl"
              
            >
              Neurodegenerative and neuropsychiatric disorders represent a major global health burden with limited disease-modifying treatment options. ALS remains a devastating disease with few effective therapies and rapid disease progression. Substance use disorders and stress-related conditions such as Post-Traumatic Stress Disorder are highly prevalent, particularly among military personnel and veterans, with significant unmet needs for effective pharmacological interventions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
