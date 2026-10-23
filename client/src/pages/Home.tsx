import TeamSection from "@/components/TeamSection";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  FlaskConical,
  Handshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CONTACT_EMAIL = "wukj@cgmh.org.tw";

const researchAreas = [
  "Motor performance and grip strength",
  "Electrophysiological assessments",
  "Motor-neuron markers",
  "Cell-based neuronal assessments",
  "Mouse survival observations",
  "Neurofilament light chain measurements",
];

const collaborationPaths = [
  {
    title: "Paid Evaluation",
    text: "A time-limited evaluation with an agreed scope, defined deliverables, and specified access to research materials or data.",
  },
  {
    title: "Exclusive Option",
    text: "An option agreement with a defined evaluation period, field or territory, and terms for a potential subsequent license.",
  },
  {
    title: "Licensing",
    text: "Licensing discussions may address field and territory, exclusivity, upfront payments, development milestones, royalties, and development responsibilities.",
  },
  {
    title: "Co-Development",
    text: "A collaboration that combines complementary scientific expertise, resources, and development capabilities under an agreed work plan.",
  },
  {
    title: "Sponsored Research",
    text: "Partner-funded studies designed to address specific validation questions or development gaps.",
  },
];

const partnerFits = [
  {
    icon: FlaskConical,
    title: "Pharmaceutical and Biotechnology Companies",
    text: "Organizations with an interest in ALS or neurodegeneration and the capabilities to evaluate and advance preclinical assets.",
  },
  {
    icon: Users,
    title: "Translational Research Partners",
    text: "Teams with expertise in independent validation, medicinal chemistry, pharmacology, biomarkers, or preclinical development.",
  },
  {
    icon: Handshake,
    title: "Strategic Investors",
    text: "Investors interested in supporting defined validation milestones and the development of a partnership-led business.",
  },
];

const processSteps = [
  ["01", "Initial Discussion", "Review the non-confidential overview and assess scientific and strategic fit."],
  ["02", "Confidentiality Agreement", "Establish appropriate confidentiality terms before exchanging restricted information."],
  ["03", "Scientific and IP Diligence", "Review available evidence, relevant rights, development gaps, and proposed next studies."],
  ["04", "Define the Collaboration", "Discuss an evaluation, option, license, sponsored research, or co-development agreement."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#0b7a75]">
      <span className="h-px w-9 bg-[#0b7a75]" />
      {children}
    </div>
  );
}

function PartnershipButton({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}?subject=Pharwar%20ALS%20Partnership%20Discussion`}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 ${secondary ? "border border-white/35 text-white hover:bg-white/10" : "bg-[#c4d8ac] text-[#10262a] hover:bg-[#d9e6c9]"}`}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

export default function Home() {
  return (
    <div className="pf-site min-h-screen overflow-hidden bg-[#f5f8f6] text-[#173237]">
      <Navbar />

      <main>
        <section id="about" className="pf-hero">
          <div className="container pf-hero-grid">
            <div className="pf-hero-copy">
              <p className="pf-eyebrow"><span /> Preclinical ALS Licensing Opportunity</p>
              <h1>Advancing ALS research<br className="pf-desktop-break" /> through <span>partnership.</span></h1>
              <p className="pf-hero-intro">Pharwar Pharmaceuticals is seeking partners to evaluate and advance its AL-series small-molecule research assets for amyotrophic lateral sclerosis (ALS).</p>
              <div className="pf-hero-actions">
                <PartnershipButton>Discuss a Partnership</PartnershipButton>
                <a className="pf-text-link" href="#als-program">Explore the ALS Program <ArrowRight size={16} /></a>
              </div>
              <a className="pf-deck-link" href="/Pharwar_Licensing_Deck_ALSN.pdf" target="_blank" rel="noreferrer"><FileText size={16} /> Download Licensing Deck <ArrowRight size={14} /></a>
            </div>
            <aside className="pf-program-card" aria-label="ALS program at a glance">
              <div className="pf-program-top"><span>Program at a glance</span><span className="pf-program-number">01 / ALS</span></div>
              <div className="pf-orbit" aria-hidden="true"><span /><span /><span /><i /><i /><i /></div>
              <p className="pf-program-kicker">AL-SERIES</p>
              <h2>Small molecules.<br />A focused opportunity.</h2>
              <div className="pf-stage"><span className="pf-status-dot" /><span>Exploratory preclinical research</span></div>
              <p className="pf-stage-note">Clinical safety and efficacy remain to be fully established and pending upon request.</p>
              <div className="pf-program-bottom">Evaluation · Licensing · Co-development</div>
            </aside>
          </div>
          <div className="container pf-hero-foot"><span>NEUROSCIENCE RESEARCH</span><span>Scientific discovery. Development expertise. Shared progress.</span></div>
        </section>

        <section className="border-b border-[#d6e1dc] bg-[#edf4ef] px-4 py-16 sm:px-6 lg:py-20"><div className="container grid gap-8 md:grid-cols-3"><div><p className="text-4xl font-semibold tracking-tight text-[#12383c]">AL-Series</p><p className="mt-2 text-sm text-[#57716f]">Small-molecule ALS research assets</p></div><div><p className="text-4xl font-semibold tracking-tight text-[#12383c]">5 paths</p><p className="mt-2 text-sm text-[#57716f]">Flexible partnership structures</p></div><div><p className="text-4xl font-semibold tracking-tight text-[#12383c]">1 focus</p><p className="mt-2 text-sm text-[#57716f]">A practical path toward evaluation and development</p></div></div></section>

        <section className="px-4 py-24 sm:px-6 lg:py-32"><div className="container grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><SectionLabel>About Pharwar</SectionLabel><h2 className="max-w-md text-4xl font-semibold leading-tight tracking-tight text-[#12383c] sm:text-5xl">Connecting Scientific Discovery with Development Expertise</h2></div><div className="max-w-2xl space-y-6 text-lg leading-8 text-[#57716f]"><p>Pharwar Pharmaceuticals conducts research on small molecules targeting the SIAH1 pathway, with a current partnering focus on ALS.</p><p>Our strategy is to connect early scientific findings with partners that bring complementary expertise, development capabilities, and resources.</p><p>We aim to advance selected research assets through clearly defined evaluation and development agreements, with responsibilities and milestones tailored to each collaboration.</p></div></div></section>

        <section id="als-program" className="bg-white px-4 py-24 sm:px-6 lg:py-32"><div className="container"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><SectionLabel>ALS Program</SectionLabel><h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#12383c] sm:text-5xl">AL-Series Small-Molecule Research Assets</h2><div className="mt-8 rounded-2xl bg-[#12383c] p-7 text-white"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c4d8ac]">Current Development Stage</p><p className="mt-4 text-2xl font-semibold">Exploratory preclinical</p><p className="mt-4 text-sm leading-6 text-[#c7d8d4]">Key development needs include independent replication, compound characterization, dose–exposure assessment, pharmacokinetics and pharmacodynamics, selectivity, tolerability, and developability.</p></div></div><div><p className="max-w-3xl text-lg leading-8 text-[#57716f]">Pharwar’s AL-series compounds have been explored in preclinical ALS research, generating findings across functional, cellular, electrophysiological, and biomarker assessments.</p><p className="mt-5 max-w-3xl text-lg leading-8 text-[#57716f]">These findings provide a basis for further scientific evaluation and partnering discussions.</p><h3 className="mt-12 text-xl font-semibold text-[#12383c]">Research Areas</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{researchAreas.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-[#d6e1dc] bg-[#f5f8f6] p-4 text-sm leading-6 text-[#365653]"><CheckCircle2 className="mt-0.5 shrink-0 text-[#0b7a75]" size={18} />{item}</div>)}</div><p className="mt-8 text-sm leading-6 text-[#718783]">Results from laboratory and animal studies do not establish clinical benefit in people with ALS (clinical efficacy to be established and pending upon request).</p><a href={`mailto:${CONTACT_EMAIL}?subject=Request%20a%20Non-Confidential%20Overview`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0b7a75] hover:text-[#12383c]">Request a Non-Confidential Overview <ChevronRight size={17} /></a></div></div></div></section>

        <section id="science" className="px-4 py-24 sm:px-6 lg:py-32"><div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><SectionLabel>Scientific Foundation</SectionLabel><h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#12383c] sm:text-5xl">Investigating the SIAH1 Pathway</h2></div><div className="grid gap-10 md:grid-cols-2"><div className="space-y-6 text-lg leading-8 text-[#57716f]"><p>Pharwar’s research investigates the role of the SIAH1 pathway in neuronal protein regulation and cellular stress responses.</p><p>Our small-molecule research explores whether modulation of this pathway may support therapeutic development for neurological conditions.</p><p>The current partnering focus is the AL-series ALS program. Additional applications remain research interests and are not presented as clinically validated indications.</p></div><div className="rounded-2xl border border-[#d6e1dc] bg-white p-7"><ShieldCheck className="text-[#0b7a75]" size={28} /><h3 className="mt-5 text-xl font-semibold text-[#12383c]">Evidence for Evaluation</h3><p className="mt-4 text-base leading-7 text-[#57716f]">Initial discussions begin with a non-confidential program overview.</p><p className="mt-4 text-base leading-7 text-[#57716f]">Subject to a confidentiality agreement and confirmation of disclosure rights, additional materials may be provided to support scientific and commercial diligence.</p><p className="mt-4 text-base leading-7 text-[#57716f]">The scope of available information and any further studies will be discussed with prospective partners.</p></div></div></div></section>

        <section id="partnering" className="bg-[#12383c] px-4 py-24 text-white sm:px-6 lg:py-32"><div className="container"><div className="max-w-2xl"><SectionLabel>Partnering Opportunities</SectionLabel><h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Flexible Paths to Collaboration</h2><p className="mt-6 text-lg leading-8 text-[#c7d8d4]">We welcome discussions with organizations interested in evaluating our ALS research assets and defining a practical development path.</p></div><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{collaborationPaths.map((path, index) => <div key={path.title} className="rounded-2xl border border-[#6f9993]/35 bg-[#1b494c] p-6"><p className="text-sm font-bold text-[#c4d8ac]">0{index + 1}</p><h3 className="mt-8 text-xl font-semibold">{path.title}</h3><p className="mt-3 text-sm leading-6 text-[#c7d8d4]">{path.text}</p></div>)}</div><p className="mt-8 max-w-3xl text-sm leading-6 text-[#aac6c1]">All arrangements are subject to diligence, confirmation of relevant rights, and mutually agreed terms.</p><PartnershipButton>Discuss a Partnership</PartnershipButton></div></section>

        <section className="px-4 py-24 sm:px-6 lg:py-32"><div className="container"><div className="max-w-2xl"><SectionLabel>Partner Fit</SectionLabel><h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#12383c] sm:text-5xl">Who We Are Looking to Work With</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{partnerFits.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-[#d6e1dc] bg-white p-7"><Icon className="text-[#0b7a75]" size={30} /><h3 className="mt-8 text-xl font-semibold leading-snug text-[#12383c]">{title}</h3><p className="mt-4 text-base leading-7 text-[#57716f]">{text}</p></div>)}</div><p className="mt-8 max-w-3xl text-sm leading-6 text-[#718783]">For investment discussions, the proposed use of funds, development milestones, and financing structure will be shared separately.</p></div></section>

        <TeamSection />

        <section id="ip" className="px-4 py-24 sm:px-6 lg:py-32"><div className="container grid gap-14 lg:grid-cols-2"><div><SectionLabel>Intellectual Property</SectionLabel><h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#12383c] sm:text-5xl">Intellectual Property and Licensing Scope</h2></div><div className="space-y-6 text-lg leading-8 text-[#57716f]"><FileText className="text-[#0b7a75]" size={32} /><p>Intellectual property is an important part of the evaluation process.</p><p>Relevant patent application information, ownership or licensing authority, and the scope of potentially available rights will be reviewed during diligence.</p><p>Any proposed transaction will be subject to confirmation of the relevant rights and existing obligations.</p><a href={`mailto:${CONTACT_EMAIL}?subject=Pharwar%20IP%20and%20Partnering%20Discussion`} className="inline-flex items-center gap-2 text-sm font-bold text-[#0b7a75]">Contact Us for a Partnering Discussion <ChevronRight size={17} /></a></div></div></section>

        <section id="process" className="bg-white px-4 py-24 sm:px-6 lg:py-32"><div className="container"><div className="max-w-2xl"><SectionLabel>Partnering Process</SectionLabel><h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#12383c] sm:text-5xl">From Initial Interest to Evaluation</h2></div><div className="mt-14 grid gap-4 lg:grid-cols-4">{processSteps.map(([number, title, text]) => <div key={number} className="border-t-2 border-[#0b7a75] pt-5"><p className="text-sm font-bold text-[#0b7a75]">{number}</p><h3 className="mt-8 text-xl font-semibold text-[#12383c]">{title}</h3><p className="mt-4 text-sm leading-6 text-[#57716f]">{text}</p></div>)}</div></div></section>

        <section id="contact" className="pf-contact bg-[#c4d8ac] px-4 py-20 sm:px-6 lg:py-24"><div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#41600a]">Partner with Pharwar</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#12383c] sm:text-5xl">Let’s define the next step for the AL-series ALS program.</h2></div><a href={`mailto:${CONTACT_EMAIL}?subject=Pharwar%20ALS%20Partnership%20Discussion`} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#12383c] px-7 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">Start a Discussion <ArrowRight size={17} /></a></div></section>
      </main>
      <Footer />
    </div>
  );
}
