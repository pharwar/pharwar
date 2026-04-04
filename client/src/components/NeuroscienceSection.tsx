/**
 * PHARWAR PHARMACEUTICALS — Neuroscience Visual Section
 * Design: Full-width image section with overlay stats
 * Bridges Technology and Pipeline sections
 */

const NEURO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/pharwar-neuroscience-KCmxkZo969yq4X4GLYsb4u.webp";

export default function NeuroscienceSection() {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden">
      <img
        src={NEURO_IMG}
        alt="Neural regeneration visualization"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.020_240/0.85)] via-[oklch(0.08_0.020_240/0.60)] to-[oklch(0.08_0.020_240/0.85)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl leading-tight"
            
          >
            Restoring Neural Connections,
            <br />
            <span className="text-[oklch(0.72_0.15_195)]">One Molecule at a Time</span>
          </p>
        </div>
      </div>
    </section>
  );
}
