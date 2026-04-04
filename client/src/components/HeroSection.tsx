/**
 * PHARWAR PHARMACEUTICALS — Hero Section
 * Design: Light background with green accent, organic growth theme
 * Asymmetric layout: large headline left, stats right
 */

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/pharwar-hero-CVUTCBeo8MGZZdkeU75LnZ.webp";
const NEURAL_NETWORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/pasted_file_mffEUe_banner_27e5a91a.png";

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-[#f8f9fa]"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 opacity-15">
        <img
          src={HERO_BG}
          alt="Neural and molecular visualization"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Light overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/95 to-white/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

      {/* Neural Network Image - Top Right */}
      <div className="absolute top-24 right-0 w-1/3 h-2/3 overflow-hidden opacity-70 hidden lg:block">
        <img
          src={NEURAL_NETWORK_IMG}
          alt="Neural network visualization"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-20">
        <div className="max-w-4xl">
          <div ref={headlineRef}>
            {/* Tag line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#0052cc]" />
              <span
                className="text-sm md:text-base tracking-[0.3em] uppercase text-[#0052cc] font-semibold"
              >
                Precision Medicine Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] leading-[1.05] mb-6"
            >
              Targeting{" "}
              <span className="text-[#0052cc]">SIAH1</span>
              <br />
              to Restore
              <br />
              Neural Health
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-[#333333] max-w-2xl leading-relaxed mb-10"
            >
              Pharwar Pharmaceuticals is a precision medicine platform company developing first-in-class small-molecule therapeutics targeting SIAH1, a key regulator of neuronal protein degradation and stress response pathways. Our approach integrates targeted drug development, biomarker discovery, and AI-driven data analysis to address shared molecular mechanisms across neurodegenerative and neuropsychiatric disorders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector("#technology")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 bg-[#0052cc] text-white font-semibold text-sm tracking-widest hover:bg-[#003d99] transition-all duration-300 rounded"
              >
                OUR TECHNOLOGY
              </button>
              <button
                onClick={() => document.querySelector("#pipeline")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 border-2 border-[#0052cc] text-[#0052cc] font-semibold text-sm tracking-widest hover:bg-[#f0f4ff] transition-all duration-300 rounded"
              >
                VIEW PIPELINE
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#e0e0e0] pt-10">
          {[
            { value: "Anti-SIAH1", label: "Proprietary Platform" },
            { value: "4", label: "Patent Applications" },
            { value: "3+", label: "Lead Indications" },
            { value: "Preclinical", label: "Development Stage" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div
                className="text-2xl md:text-3xl font-bold text-[#0052cc] mb-1"
              >
                {stat.value}
              </div>
              <div
                className="text-xs tracking-widest uppercase text-[#666666]"
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#666666] animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
