const navItems = [
  { label: "About", href: "#about" },
  { label: "ALS Program", href: "#als-program" },
  { label: "Science", href: "#science" },
  { label: "Partnering", href: "#partnering" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d6e1dc] bg-[#f5f8f6]">
      <div className="container py-14 lg:py-18">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="text-lg font-bold tracking-[0.16em] text-[#12383c]">PHARWAR</div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b7a75]">Pharmaceuticals</div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#57716f]">Connecting scientific discovery with development expertise for the AL-series ALS research program.</p>
          </div>
          <div><h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b7a75]">Navigation</h4><div className="mt-5 grid grid-cols-2 gap-3">{navItems.map((item) => <button key={item.href} onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })} className="text-left text-sm text-[#57716f] hover:text-[#0b7a75]">{item.label}</button>)}</div></div>
          <div><h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b7a75]">Partnering Contact</h4><a href="mailto:wukj@cgmh.org.tw" className="mt-5 block text-sm text-[#365653] hover:text-[#0b7a75]">wukj@cgmh.org.tw</a><a href="mailto:kjwu0214@gmail.com" className="mt-2 block text-sm text-[#365653] hover:text-[#0b7a75]">kjwu0214@gmail.com</a><p className="mt-5 text-sm leading-6 text-[#57716f]">262 E Garvey Ave Ste D<br />Monterey Park, CA 91755</p><p className="mt-4 text-sm leading-6 text-[#57716f]">Chang Gung Memorial Hospital<br />Taoyuan 333, Taiwan</p></div>
        </div>
        <div className="mt-12 border-t border-[#d6e1dc] pt-6"><p className="text-xs text-[#718783]">© {new Date().getFullYear()} Pharwar Pharmaceuticals. All rights reserved.</p></div>
      </div>
    </footer>
  );
}
