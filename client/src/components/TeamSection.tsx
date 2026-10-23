/** Original team biographies and photographs, presented in the partnering design system. */
const leadership = [
  {
    "name": "Prof. Kou-Juey Wu",
    "role": "Founder & Chief Scientific Officer",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/Dr.KouJueyWu_f20f239d.png",
    "bio": "Molecular biologist and translational researcher specializing in protein degradation pathways and neurobiology. Prof. Wu's research led to the discovery of Anti-SIAH1 small-molecule inhibitors, forming the scientific foundation of Pharwar's platform."
  },
  {
    "name": "Yi Min Tseng",
    "role": "President",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/YMT2_2a60c746.jpg",
    "bio": "Chairwoman overseeing corporate strategy and development with a focus on innovation and scientific integrity. Also leads Glyseng, specializing in Low GI and ketogenic nutrition."
  },
  {
    "name": "Karl Lee",
    "role": "Chief Executive Officer",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/KarlLee_b4729e25.jpg",
    "bio": "Responsible for company operations with extensive biotech CEO experience and fundraising expertise. Prior role: President of HP Medical Division in Asia."
  }
];

const advisors = [
  {
    "name": "Dr. Samuel Wang",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/Dr.SamuelWang_f7f8c3e7.jpg",
    "bio": "Developmental & stem cell biology, 14+ years biotech experience (A*STAR, Singapore)"
  },
  {
    "name": "Dr. Pei-Wen Hsieh",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663490956302/cKNv2h4wx4kzgyQRdoGY9m/SBLh2FUei3cV_e4449a8a.png",
    "bio": "Medicinal chemist at Chang Gung University, small molecule drug development"
  },
  {
    "name": "Dr. Yueh-Te Lin",
    "image": "https://i.ibb.co/YTP9qGpj/Dr-Yueh-Te-Lin.jpg",
    "bio": "Animal biologist, mouse addiction & behavior experiments (Chang Gung Memorial Hospital)"
  },
  {
    "name": "Prof. Ann-Shyn Chiang",
    "image": "https://i.ibb.co/bGt2KJy/Prof-Ann-Shyn-Chiang.jpg",
    "bio": "World-renowned neuroscientist, memory formation & brain imaging expertise"
  }
];

const expertise = [
  [
    "Molecular Biology",
    "Cell signaling pathway & neurobiology"
  ],
  [
    "Drug Chemistry",
    "Small molecule design & synthesis"
  ],
  [
    "Translational Research",
    "Bench-to-bedside development"
  ],
  [
    "Neuroscience",
    "Brain imaging & neural mechanisms"
  ]
];

export default function TeamSection() {
  return (
    <section id="team" className="pf-team">
      <div className="container">
        <header className="pf-section-heading">
          <div><p className="pf-eyebrow pf-eyebrow-dark">OUR PEOPLE</p><h2>Multidisciplinary team.</h2></div>
          <p>Scientific discovery and development expertise, brought together.</p>
        </header>
        <h3 className="pf-group-label">Leadership Team</h3>
        <div className="pf-leadership-grid">
          {leadership.map((person, index) => (
            <article className="pf-person" key={person.name}>
              <div className="pf-portrait"><img src={person.image} alt={person.name} loading="lazy" /><span className="pf-person-number">0{index + 1}</span></div>
              <div className="pf-person-content"><p className="pf-person-role">{person.role}</p><h3>{person.name}</h3>
                {index === 0 && <p className="pf-credentials">MD, PhD</p>}
                <p className="pf-person-bio">{person.bio}</p>
                {index === 0 && <div className="pf-affiliation"><p>Specialization in protein degradation pathways and neurobiology</p><p>Neuroscience Research Center, Chang Gung Memorial Hospital, Taoyuan, Taiwan</p></div>}
              </div>
            </article>
          ))}
        </div>
        <div className="pf-advisory-heading"><h3>Scientific Advisory Team</h3><span>Complementary perspectives. Shared purpose.</span></div>
        <div className="pf-advisor-grid">
          {advisors.map((person) => <article className="pf-advisor" key={person.name}><div className="pf-advisor-portrait"><img src={person.image} alt={person.name} loading="lazy" /></div><h4>{person.name}</h4><p>{person.bio}</p></article>)}
        </div>
        <div className="pf-expertise-grid">{expertise.map(([title, description]) => <div key={title}><h4>{title}</h4><p>{description}</p></div>)}</div>
      </div>
    </section>
  );
}
