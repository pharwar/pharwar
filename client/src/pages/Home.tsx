/**
 * PHARWAR PHARMACEUTICALS — Home Page
 * Design: Scientific Precision — dark navy, ice blue, Syne + Source Serif 4
 * Sections: Hero → Technology → Neuroscience → Pipeline → Strategy → Team → Patents → Partnerships → Contact
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import NeuroscienceSection from "@/components/NeuroscienceSection";
import PipelineSection from "@/components/PipelineSection";
import StrategySection from "@/components/StrategySection";
import TeamSection from "@/components/TeamSection";
import PatentsSection from "@/components/PatentsSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.10_0.025_240)]">
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <NeuroscienceSection />
      <PipelineSection />
      <StrategySection />
      <TeamSection />
      <PatentsSection />
      <PartnershipsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
