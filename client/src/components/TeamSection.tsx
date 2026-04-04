/**
 * PHARWAR PHARMACEUTICALS — Team Section
 * Design: American Biotech Style - Asymmetric, Open Layout
 * Highlights: Prof. Wu (Founder), Yi Min Tseng (President), and advisory team
 */

import { useEffect, useRef } from "react";
import { GraduationCap, FlaskConical, Award } from "lucide-react";

const PROF_WU_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/Dr.KouJueyWu_f20f239d.png";
const YI_MIN_TSENG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/YMT2_2a60c746.jpg";
const DR_SAMUEL_WANG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/Dr.SamuelWang_f7f8c3e7.jpg";
const DR_PEI_WEN_HSIEH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/SBLh2FUei3cV_e4449a8a.png";
const DR_YUEH_TE_LIN_IMG = "https://i.ibb.co/YTP9qGpj/Dr-Yueh-Te-Lin.jpg";
const PROF_ANN_SHYN_CHIANG_IMG = "https://i.ibb.co/bGt2KJy/Prof-Ann-Shyn-Chiang.jpg";
const CEO_KARL_LEE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/KarlLee_b4729e25.jpg";

export default function TeamSection() {
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
    <section id="team" className="py-24 lg:py-32 bg-white" ref={sectionRef}>
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[#0052cc]" />
            <span className="text-sm tracking-[0.2em] uppercase text-[#0052cc] font-semibold">
              Leadership
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] leading-tight">
            Multidisciplinary Team
          </h2>
        </div>

        {/* Leadership Grid - Asymmetric Layout */}
        <div className="space-y-20">
          {/* Founder - Large Featured Card */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              {/* Image - Left Side, Larger */}
              <div className="md:col-span-1">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={PROF_WU_IMG}
                    alt="Prof. Kou-Juey Wu"
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
              </div>
              
              {/* Content - Right Side */}
              <div className="md:col-span-4 space-y-4">
                <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#0052cc] border-b-2 border-[#0052cc] pb-2">
                  Founder & Chief Scientific Officer
                </span>
                
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-2">
                    Prof. Kou-Juey Wu
                  </h3>
                  <p className="text-lg text-[#0052cc] font-semibold">
                    MD, PhD
                  </p>
                </div>

                <p className="text-base md:text-lg text-[#333333] leading-relaxed">
                  Molecular biologist and translational researcher specializing in protein degradation pathways and neurobiology. Prof. Wu's research led to the discovery of Anti-SIAH1 small-molecule inhibitors, forming the scientific foundation of Pharwar's platform.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={18} className="text-[#0052cc] mt-1 flex-shrink-0" />
                    <p className="text-base text-[#666666]">
                      Specialization in protein degradation pathways and neurobiology
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FlaskConical size={18} className="text-[#0052cc] mt-1 flex-shrink-0" />
                    <p className="text-base text-[#666666]">
                      Neuroscience Research Center, Chang Gung Memorial Hospital, Taoyuan, Taiwan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* President & CEO - Stacked Layout */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 space-y-12">
              {/* President */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={YI_MIN_TSENG_IMG}
                      alt="Yi Min Tseng"
                      className="w-full h-full object-cover shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-4 space-y-4">
                  <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#0052cc] border-b-2 border-[#0052cc] pb-2">
                    President
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    Yi Min Tseng
                  </h3>
                  
                  <p className="text-base text-[#333333] leading-relaxed">
                    Chairwoman overseeing corporate strategy and development with a focus on innovation and scientific integrity. Also leads Glyseng, specializing in Low GI and ketogenic nutrition.
                  </p>
                </div>
              </div>

              {/* CEO */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={CEO_KARL_LEE_IMG}
                      alt="Karl Lee"
                      className="w-full h-full object-cover shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-4 space-y-4">
                  <span className="inline-block text-xs tracking-[0.25em] uppercase font-bold text-[#0052cc] border-b-2 border-[#0052cc] pb-2">
                    Chief Executive Officer
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    Karl Lee
                  </h3>
                  
                  <p className="text-base text-[#333333] leading-relaxed">
                    Responsible for company operations with extensive biotech CEO experience and fundraising expertise. Prior role: President of HP Medical Division in Asia.
                  </p>
                </div>
              </div>
            </div>

          {/* Scientific Advisory Team */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">
                Scientific Advisory Team
              </h3>
              <div className="w-12 h-1 bg-[#0052cc]" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Dr. Samuel Wang */}
              <div className="space-y-4">
                <div className="relative overflow-hidden mb-4 aspect-square">
                  <img
                    src={DR_SAMUEL_WANG_IMG}
                    alt="Dr. Samuel Wang"
                    className="w-full h-full object-cover shadow-md"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a]">
                  Dr. Samuel Wang
                </h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Developmental & stem cell biology, 14+ years biotech experience (A*STAR, Singapore)
                </p>
              </div>

              {/* Dr. Pei-Wen Hsieh */}
              <div className="space-y-4">
                <div className="relative overflow-hidden mb-4 aspect-square">
                  <img
                    src={DR_PEI_WEN_HSIEH_IMG}
                    alt="Dr. Pei-Wen Hsieh"
                    className="w-full h-full object-cover shadow-md"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a]">
                  Dr. Pei-Wen Hsieh
                </h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Medicinal chemist at Chang Gung University, small molecule drug development
                </p>
              </div>

              {/* Dr. Yueh-Te Lin */}
              <div className="space-y-4">
                <div className="relative overflow-hidden mb-4 aspect-square">
                  <img
                    src={DR_YUEH_TE_LIN_IMG}
                    alt="Dr. Yueh-Te Lin"
                    className="w-full h-full object-cover shadow-md"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a]">
                  Dr. Yueh-Te Lin
                </h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Animal biologist, mouse addiction & behavior experiments (Chang Gung Memorial Hospital)
                </p>
              </div>

              {/* Prof. Ann-Shyn Chiang */}
              <div className="space-y-4">
                <div className="relative overflow-hidden mb-4 aspect-square">
                  <img
                    src={PROF_ANN_SHYN_CHIANG_IMG}
                    alt="Prof. Ann-Shyn Chiang"
                    className="w-full h-full object-cover shadow-md"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a]">
                  Prof. Ann-Shyn Chiang
                </h4>
                <p className="text-sm text-[#333333] leading-relaxed">
                  World-renowned neuroscientist, memory formation & brain imaging expertise
                </p>
              </div>
            </div>
          </div>

          {/* Core Expertise Grid */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-[#e0e0e0]">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#0052cc] uppercase tracking-wide">
                Molecular Biology
              </h4>
              <p className="text-sm text-[#333333]">
                Cell signaling pathway & neurobiology
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#0052cc] uppercase tracking-wide">
                Drug Chemistry
              </h4>
              <p className="text-sm text-[#333333]">
                Small molecule design & synthesis
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#0052cc] uppercase tracking-wide">
                Translational Research
              </h4>
              <p className="text-sm text-[#333333]">
                Bench-to-bedside development
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-[#0052cc] uppercase tracking-wide">
                Neuroscience
              </h4>
              <p className="text-sm text-[#333333]">
                Brain imaging & neural mechanisms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
