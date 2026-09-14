import type { ReactNode } from "react";
import { certifications, handshake, myntra, projects, skills, tickerSkills, type Theme } from "../data/portfolio";
import { TrailReveal } from "./TrailReveal";

export function SiteHeader({ dark, onThemeChange }: { dark: boolean; onThemeChange: (theme: Theme) => void }) {
  return (
    <header className="nav-shell">
      <a className="brand" href="#top"><span>K</span><b>KOUSHIK KOTTE</b></a>
      <nav>
        <a href="#work">WORK</a><a href="#experience">EXPERIENCE</a><a href="#skills">SKILLS</a>
        <a href="#credentials">CERTIFICATIONS</a><a href="#contact">CONTACT</a>
      </nav>
      <div className="theme-control" aria-label="Choose portfolio theme">
        <button className={!dark ? "on" : ""} onClick={() => onThemeChange("naruto")} aria-label="Switch to Naruto light mode">火 <span>LIGHT</span></button>
        <button className={dark ? "on" : ""} onClick={() => onThemeChange("sasuke")} aria-label="Switch to Sasuke dark mode">雷 <span>DARK</span></button>
      </div>
    </header>
  );
}

export function Hero({ dark }: { dark: boolean }) {
  return (
    <>
      <section className="hero" id="top">
        <div className="world-bg"/><div className="cloud cloud-a"/><div className="cloud cloud-b"/>
        <div className="hero-copy">
          <span className="eyebrow"><i/> SOFTWARE ENGINEER · AI BUILDER</span>
          <h1>Koushik<br/><em>Kotte.</em></h1>
          <p className="hero-intro">I turn ambiguous engineering problems into dependable AI products and backend systems—across agentic AI, RAG, computer vision, observability, and developer tools.</p>
          <div className="hero-proof"><span><b>8.51</b>NIT RAIPUR CGPA</span><span><b>1,500+</b>PROBLEMS SOLVED</span><span><b>8</b>FEATURES SHIPPED</span></div>
          <div className="hero-links"><a className="primary" href="#work">EXPLORE THE WORK <b>↗</b></a><a href="/Koushik-Kotte-Resume.pdf" download>DOWNLOAD RÉSUMÉ ↓</a></div>
        </div>
        <div className="hero-visual">
          <img className="guardian" src={dark ? "/assets/susanoo-guardian-v3.png" : "/assets/kurama-guardian-v4.png"} alt=""/>
          <div className="portrait">
            <img className="portrait-base" src="/assets/koushik-pose-v2.png" alt="Koushik Kotte"/>
            <TrailReveal src={dark ? "/assets/sasuke-aligned-v3.png" : "/assets/naruto-aligned-v3.png"}/>
            <div className="trail-hint">MOVE ACROSS THE PORTRAIT · REVEAL {dark ? "SASUKE" : "NARUTO"}</div>
          </div>
          <div className="orbital-note"><b>{dark ? "SUSANOO" : "KURAMA"}</b><span>{dark ? "FOCUS · PRECISION" : "ENERGY · RESILIENCE"}</span></div>
        </div>
        <div className="hero-foot"><span>RAIPUR, INDIA</span><i/><span>AVAILABLE FOR SOFTWARE & AI ROLES</span><b>SCROLL ↓</b></div>
      </section>
      <SkillsTicker/>
    </>
  );
}

function SkillsTicker() {
  return (
    <section className="signal-strip" aria-label="Engineering skills">
      <div>{[0, 1].map((copy) => (
        <div className="signal-sequence" aria-hidden={copy === 1} key={copy}>
          {tickerSkills.map((skill) => <span key={skill}>{skill}<b>◆</b></span>)}
        </div>
      ))}</div>
    </section>
  );
}

export function WorkSection({ dark }: { dark: boolean }) {
  return (
    <>
      <section className="chapter work" id="work">
        <div className="chapter-label">01 / SELECTED BUILDS</div>
        <Heading kicker="QUESTIONS TURNED INTO PRODUCTS" title={<>Work that moves<br/><em>beyond the demo.</em></>} text="Six projects, each solving a different kind of problem. Hover to open the technical layer."/>
        <div className="project-grid">{projects.map((project) => (
          <article className={"project project-" + project.key + " reveal"} key={project.key}>
            <div className="project-top"><span>{project.no} / {project.kind}</span><b>{project.glyph}</b></div>
            <div className="project-widget"><i/><i/><i/><b/></div>
            <div className="project-copy"><h3>{project.title}</h3><strong>{project.hook}</strong><p>{project.text}</p><small>{project.tech}</small></div>
            <div className="project-actions"><a href={project.url} target="_blank" rel="noreferrer">SOURCE ↗</a>{"live" in project && project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE ↗</a>}</div>
          </article>
        ))}</div>
      </section>
      <div className="scene-divider reveal"><div className="flight-line"/><div className="flying-shuriken"><i/><i/><i/><i/><b/></div><p>{dark ? "DISCIPLINE TURNS COMPLEXITY INTO CONTROL" : "CURIOSITY TURNS PROBLEMS INTO SYSTEMS"}</p></div>
    </>
  );
}

export function ExperienceSection({ dark }: { dark: boolean }) {
  return (
    <section className="chapter experience" id="experience">
      <div className="chapter-label">02 / EXPERIENCE</div>
      <Heading kicker="PRODUCTION FIELD RECORD" title={<>What changed<br/><em>because I built it.</em></>} text="Every metric is tied to its system, scope, baseline, and engineering method."/>
      <Role number="01" date="JAN—JUN 2026" location="BANGALORE · ONSITE" role="SOFTWARE DEVELOPMENT ENGINEER INTERN" company="Myntra" unit="Flipkart Group" summary="Production engineering across testing automation, high-throughput logging, incident detection, caching, and delivery workflows." items={myntra} metrics={[["300–400","TESTS · 10 SERVICES"],["600 → 7K","LOGS / SECOND"],["30 → 5 MIN","INCIDENT DETECTION"],["90–95%","CACHE LATENCY CUT"]]} stack="JAVA · SPRING BOOT · LOG4J2 · KAFKA · REDIS · GRAFANA · PROMETHEUS · MONGODB · SQL · BASH · ELASTICSEARCH"/>
      <Role number="02" date="JUL—AUG 2026" location="REMOTE · SAN FRANCISCO" role="AI EVALUATION SPECIALIST" company="Handshake" unit="Project Dynamo" summary="Designed and evaluated difficult software-engineering tasks that expose where coding agents fail—and how benchmarks can measure them fairly." items={handshake} metrics={[["10+","EVALUATION SCENARIOS"],["20+","FAILURE PATTERNS"],["3","QUALITY AXES"],["MULTI-STEP","REASONING DEPTH"]]} stack="GITHUB CLI · GIT · DOCKER · PYTHON · UV"/>
    </section>
  );
}

export function SkillsSection({ dark }: { dark: boolean }) {
  return (
    <section className="chapter arsenal" id="skills">
      <img className={"summon " + (dark ? "snake" : "frog")} src={dark ? "/assets/snake-summon-v4.png" : "/assets/frog-summon-v4.png"} alt=""/>
      <div className="chapter-label">03 / TOOLKIT</div>
      <Heading kicker="ENGINEERING ARSENAL" title={<>Broad enough to build.<br/><em>Deep enough to ship.</em></>}/>
      <div className="skill-constellation reveal">{skills.map((skill, index) => (
        <div key={skill[0]}><i>{String(index + 1).padStart(2, "0")}</i><b>{skill[0]}</b><p>{skill[1]}</p></div>
      ))}</div>
    </section>
  );
}

export function CredentialsSection({ dark }: { dark: boolean }) {
  return (
    <section className="chapter credentials" id="credentials">
      <div className="chapter-label">04 / CREDENTIALS</div>
      <Heading kicker="TRAINING & RECOGNITION" title={<>Practice backed<br/><em>by proof.</em></>}/>
      <div className="cert-grid">{certifications.map((certificate, index) => (
        <article className="cert reveal" key={certificate[1]}><span>{String(index + 1).padStart(2, "0")}</span><small>{certificate[0]}</small><h3>{certificate[1]}</h3><p>{certificate[2]}</p><b>{dark ? "蛇" : "蛙"}</b></article>
      ))}</div>
      <div className="coding-record reveal"><div><span>COMPETITIVE PROGRAMMING</span><h3>1,500+ problems. Consistency over spectacle.</h3></div><div><b>1854</b><span>LEETCODE · KNIGHT · TOP 5%</span></div><div><b>1646</b><span>CODECHEF · 3 STAR</span></div><div><b>1320</b><span>CODEFORCES · PUPIL</span></div></div>
      <div className="education reveal"><span>EDUCATION & LEADERSHIP</span><div><b>NIT RAIPUR</b><p>B.Tech CSE · 2022—2026 · CGPA 8.51/10</p></div><div><b>SRI CHAITANYA JR. COLLEGE</b><p>MPC · 2020—2022 · 97.7%</p></div><div><b>SANSKRITHI, NIT RAIPUR</b><p>Cultural Executive · 2023—Present</p></div></div>
    </section>
  );
}

export function ContactSection({ dark }: { dark: boolean }) {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-guardian"><img src={dark ? "/assets/susanoo-guardian-v3.png" : "/assets/kurama-guardian-v3.png"} alt=""/></div>
        <span>OPEN TO SOFTWARE ENGINEERING · AI ENGINEERING · AMBITIOUS COLLABORATIONS</span>
        <h2>Build something<br/><em>worth remembering.</em></h2>
        <p>If you are working on a difficult system or a useful AI product, I would like to hear about it.</p>
        <a href="mailto:kotte.koushik5021@gmail.com">KOTTE.KOUSHIK5021@GMAIL.COM <b>↗</b></a>
        <div className="socials"><a href="https://github.com/Koushikroyal2005/" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/koushik-kotte/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://leetcode.com/u/I_Can_Do_This_AAll_Day/" target="_blank" rel="noreferrer">LEETCODE</a><a href="https://codeforces.com/profile/kotte.koushik5021" target="_blank" rel="noreferrer">CODEFORCES</a></div>
      </section>
      <footer><span>© 2026 KOUSHIK KOTTE</span><span>ENGINEERED IN RAIPUR</span><a href="#top">BACK TO TOP ↑</a></footer>
    </>
  );
}

function Heading({ kicker, title, text }: { kicker: string; title: ReactNode; text?: string }) {
  return <div className="section-heading reveal"><div><span>{kicker}</span><h2>{title}</h2></div>{text && <p>{text}</p>}</div>;
}

type RoleProps = {
  number: string; date: string; location: string; role: string; company: string; unit: string;
  summary: string; items: string[][]; metrics: string[][]; stack: string;
};

function Role({ number, date, location, role, company, unit, summary, items, metrics, stack }: RoleProps) {
  return (
    <article className="role-card reveal">
      <div className="role-meta"><span>{date}</span><small>{location}</small><b>{number}</b></div>
      <div className="role-body">
        <span>{role}</span><h3>{company} <em>· {unit}</em></h3><p className="role-summary">{summary}</p>
        <div className="impact-grid">{items.map(([title, text]) => <div className="impact-item" key={title}><i/><div><b>{title}</b><p>{highlightMetrics(text)}</p></div></div>)}</div>
        <div className="role-metrics"><span>{company.toUpperCase()} IMPACT</span>{metrics.map(([value, label]) => <div key={label}><b>{value}</b><small>{label}</small></div>)}</div>
        <small className="stack">{stack}</small>
      </div>
    </article>
  );
}

function highlightMetrics(text: string) {
  return text.split(/(\d+(?:[.,–-]\d+)*(?:\+|%|x)?(?:\s*(?:FPS|logs\/second|minutes?|services?|APIs?|features?|test cases?|scenarios?|patterns?))?)/gi)
    .map((part, index) => /\d/.test(part) ? <mark className="metric-highlight" key={index}>{part}</mark> : part);
}
