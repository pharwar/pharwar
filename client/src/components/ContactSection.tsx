/**
 * PHARWAR PHARMACEUTICALS — Contact Section
 * Design: Contact information, inquiry form
 * Highlights: Prof. Wu contact details, company address
 */

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:wukj@cgmh.org.tw?subject=Pharwar Inquiry from ${formState.name}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nOrganization: ${formState.organization}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-[#f8f9fa] to-[white]" ref={sectionRef}>
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#0052cc]" />
            <span
              className="text-sm md:text-base tracking-[0.3em] uppercase text-[#0052cc]"
              
            >
              Get In Touch
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#1a1a1a]"
            
          >
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p
              className="text-xl md:text-2xl text-[#333333] leading-relaxed mb-8"
              
            >
              For scientific collaboration and business inquiries, please reach out to our team. We're excited to discuss partnership opportunities and advance the development of innovative therapeutics.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-[oklch(0.68_0.18_130/0.3)] text-[#0052cc]">
                  <Mail size={15} />
                </div>
                <div>
                  <p
                    className="text-xs tracking-wider uppercase text-[#333333] mb-1"
                    
                  >
                    Email
                  </p>
                  <a
                    href="mailto:wukj@cgmh.org.tw"
                    className="text-sm text-[#1a1a1a] hover:text-[#0052cc] transition-colors"
                    
                  >
                    wukj@cgmh.org.tw
                  </a>
                  <br />
                  <a
                    href="mailto:kjwu0214@gmail.com"
                    className="text-sm text-[#1a1a1a] hover:text-[#0052cc] transition-colors"
                    
                  >
                    kjwu0214@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-[oklch(0.68_0.18_130/0.3)] text-[#0052cc]">
                  <Phone size={15} />
                </div>
                <div>
                  <p
                    className="text-xs tracking-wider uppercase text-[#666666] mb-1"
                    
                  >
                    Phone
                  </p>
                  <p
                    className="text-sm text-[#1a1a1a]"
                    
                  >
                    +1 281-602-9281
                  </p>
                  <p
                    className="text-sm text-[#1a1a1a]"
                    
                  >
                    +886-3-328-1200 ext. 7807
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-[oklch(0.68_0.18_130/0.3)] text-[#0052cc]">
                  <MapPin size={15} />
                </div>
                <div>
                  <p
                    className="text-xs tracking-wider uppercase text-[#666666] mb-1"
                    
                  >
                    Address
                  </p>
                  <p
                    className="text-sm text-[#1a1a1a]"
                    
                  >
                    8 The Green, Suite B<br />
                    Dover, DE 19901, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            {submitted ? (
              <div className="h-full flex items-center justify-center p-10 border border-[oklch(0.68_0.18_130/0.3)] bg-[#f8f9fa] text-center">
                <div>
                  <div className="w-12 h-12 flex items-center justify-center border border-[#0052cc] text-[#0052cc] mx-auto mb-4">
                    <Send size={20} />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#1a1a1a] mb-2"
                    
                  >
                    Message Prepared
                  </h3>
                  <p
                    className="text-sm text-[#666666]"
                    
                  >
                    Your email client has been opened. We look forward to connecting with you.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-8 bg-[#f8f9fa] border border-[oklch(0.88_0.005_120)]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs tracking-wider uppercase text-[#666666] mb-2"
                      
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[oklch(0.93_0.005_120)] border border-[#e0e0e0] text-[#1a1a1a] text-sm px-4 py-3 focus:outline-none focus:border-[#0052cc] transition-colors"
                      
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-wider uppercase text-[#666666] mb-2"
                      
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[oklch(0.93_0.005_120)] border border-[#e0e0e0] text-[#1a1a1a] text-sm px-4 py-3 focus:outline-none focus:border-[#0052cc] transition-colors"
                      
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs tracking-wider uppercase text-[#666666] mb-2"
                    
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formState.organization}
                    onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                    className="w-full bg-[oklch(0.93_0.005_120)] border border-[#e0e0e0] text-[#1a1a1a] text-sm px-4 py-3 focus:outline-none focus:border-[#0052cc] transition-colors"
                    
                  />
                </div>
                <div>
                  <label
                    className="block text-xs tracking-wider uppercase text-[#666666] mb-2"
                    
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[oklch(0.93_0.005_120)] border border-[#e0e0e0] text-[#1a1a1a] text-sm px-4 py-3 focus:outline-none focus:border-[#0052cc] transition-colors resize-none"
                    
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0052cc] text-white font-bold text-sm tracking-widest hover:bg-[oklch(0.75_0.18_130)] transition-all duration-300 flex items-center justify-center gap-2"
                  
                >
                  <Send size={14} />
                  SEND INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
