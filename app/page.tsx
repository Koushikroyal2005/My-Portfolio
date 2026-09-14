"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "naruto" | "sasuke";

const projects = [
  {
    number: "01",
    title: "Multi-Document RAG",
    kind: "Agentic AI · Knowledge Systems",
    summary: "A retrieval system built to search, connect, and reason across multiple documents—turning scattered knowledge into grounded answers.",
    stack: ["Python", "RAG", "Vector Search", "LLMs"],
    link: "https://github.com/Koushikroyal2005?tab=repositories&q=rag",
    signal: "KNOWLEDGE",
  },
  {
    number: "02",
    title: "Trading Agent",
    kind: "Agentic AI · FinTech",
    summary: "An autonomous market-analysis workflow that coordinates research, signal evaluation, and decision support with safety-minded guardrails.",
    stack: ["Python", "Agents", "Market Data", "Automation"],
    link: "https://github.com/Koushikroyal2005?tab=repositories&q=trading",
    signal: "INTELLIGENCE",
  },
  {
    number: "03",
    title: "OEguard",
    kind: "Computer Vision · Safety",
    summary: "An AI child screen-time guardian that detects prolonged staring, warns intelligently, resists bypass attempts, and alerts parents.",
    stack: ["OpenCV", "MediaPipe", "Gemini", "ChromaDB"],
    link: "https://github.com/Koushikroyal2005/OEguard",
    signal: "VISION",
  },
  {
    number: "04",
    title: "Personal Calorie Tracker",
    kind: "AI Product · Health",
    summary: "A personal nutrition companion that makes daily calorie awareness simpler through focused logging, useful summaries, and progress tracking.",
    stack: ["Full Stack", "AI", "Analytics", "UX"],
    link: "https://github.com/Koushikroyal2005?tab=repositories&q=calorie",
    signal: "WELLNESS",
  },
  {
    number: "05",
    title: "CodeOrbit",
    kind: "Full Stack · Developer Tools",
    summary: "A live Codeforces analytics dashboard with rich rating, tag, and activity charts plus a 40+ tag problem sheet and cached daily challenges.",
    stack: ["React", "Node.js", "MongoDB", "Codeforces API"],
    link: "https://github.com/Koushikroyal2005/code_orbit",
    live: "https://code-orbit-scj0.onrender.com",
    signal: "COMPETITIVE",
  },
  {
    number: "06",
    title: "SynapseMesh",
    kind: "Web3 · AI Infrastructure",
    summary: "A trustless coordination layer for autonomous AI—onchain task DAGs, TEE work verification, and atomic agent settlement on 0G Labs.",
    stack: ["React", "Solidity", "Ethers", "Python"],
    link: "https://github.com/Koushikroyal2005?tab=repositories&q=SynapseMesh",
    live: "https://synapsemesh.vercel.app",
    signal: "ONCHAIN",
  },
];

const skills = [
  ["Languages", "Java · Python · C++ · SQL · Bash"],
  ["Backend", "Spring Boot · Node.js · Express · REST · JPA"],
  ["AI / Data", "Agentic AI · RAG · OpenCV · MediaPipe · Gemini"],
  ["Systems", "Kafka · Redis · MongoDB · PostgreSQL · MySQL"],
  ["DevOps", "Docker · Kubernetes · GitHub · CI/CD"],
  ["Observability", "Grafana · Prometheus · Elasticsearch · Log4j2"],
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("naruto");
  const visualRef = useRef<HTMLDivElement>(null);
  const dark = theme === "sasuke";

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const preferred: Theme = saved === "sasuke" || saved === "naruto"
      ? saved
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "sasuke" : "naruto";
    setTheme(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function moveVisual(event: React.PointerEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width - .5) * 2;
    const y = ((event.clientY - box.top) / box.height - .5) * 2;
    visualRef.current?.style.setProperty("--rx", `${-y * 7}deg`);
    visualRef.current?.style.setProperty("--ry", `${x * 9}deg`);
  }

  function resetVisual() {
    visualRef.current?.style.setProperty("--rx", "0deg");
    visualRef.current?.style.setProperty("--ry", "0deg");
  }

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <div className="progress-rail" aria-hidden="true"><span /></div>

      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Koushik Kotte home">
          <span className="brand-mark">{dark ? "雷" : "火"}</span>
          <span>KK<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Journey</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle" type="button"
          onClick={() => setTheme(dark ? "naruto" : "sasuke")}
          aria-label={`Switch to ${dark ? "Naruto light" : "Sasuke dark"} mode`} aria-pressed={dark}>
          <span className="toggle-track"><span className="toggle-orb" /></span>
          <span className="toggle-label">{dark ? "SASUKE" : "NARUTO"}</span>
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> AI ENGINEER · FULL-STACK DEVELOPER</div>
          <h1>I build systems<br />that <em>{dark ? "break limits." : "never give up."}</em></h1>
          <p className="hero-lede">
            I&apos;m Koushik Kotte — a Computer Science engineer turning ambitious ideas into
            reliable AI agents, scalable backend systems, and sharp web experiences.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#work">Explore my missions <span>↗</span></a>
            <a className="text-link" href="/Koushik-Kotte-Resume.pdf" download>Download résumé <span>↓</span></a>
          </div>
          <div className="hero-stats" aria-label="Professional highlights">
            <div><strong>1,500+</strong><span>Problems solved</span></div>
            <div><strong>12×</strong><span>Logging throughput</span></div>
            <div><strong>8.51</strong><span>NIT Raipur CGPA</span></div>
          </div>
        </div>

        <div ref={visualRef} className="hero-visual" onPointerMove={moveVisual}
          onPointerLeave={resetVisual} aria-label="Interactive portrait of Koushik Kotte">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="chakra-word" aria-hidden="true">{dark ? "雷" : "火"}</div>
          <div className="portrait-frame">
            <div className="character-layer" aria-hidden="true" />
            <img className="portrait" src="/assets/koushik-cutout.png" alt="Koushik Kotte" />
            <div className="hover-hint">HOVER · AWAKEN</div>
          </div>
          <div className="floating-tag tag-top">{dark ? "LIGHTNING" : "FIRE"} STYLE</div>
          <div className="floating-tag tag-bottom">NIT RAIPUR · 2026</div>
        </div>
      </section>

      <div className="marquee" aria-label="Core capabilities">
        <div>AGENTIC AI <b>✦</b> SCALABLE SYSTEMS <b>✦</b> COMPUTER VISION <b>✦</b> FULL-STACK PRODUCTS <b>✦</b> OBSERVABILITY <b>✦</b> AGENTIC AI <b>✦</b> SCALABLE SYSTEMS</div>
      </div>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div><span className="section-kicker">SELECTED MISSIONS / 06</span><h2>Built to make<br /><em>an impact.</em></h2></div>
          <p>From human-centered AI to production systems, each project is a training arc in turning complexity into something useful.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top"><span>{project.number}</span><span className="project-signal">{project.signal}</span></div>
              <div className="project-orb" aria-hidden="true"><i /><i /><i /></div>
              <p className="project-kind">{project.kind}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer">GitHub ↗</a>
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading compact">
          <div><span className="section-kicker">THE JOURNEY</span><h2>Experience under<br /><em>real pressure.</em></h2></div>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="time-meta"><span>JAN — JUN 2026</span><strong>01</strong></div>
            <div className="time-body">
              <p className="role">Software Development Engineer Intern</p>
              <h3>Myntra <span>· Flipkart Group</span></h3>
              <p>Automated hundreds of microservice tests, rebuilt high-throughput logging, accelerated cache cleanup, and created unified observability for external APIs.</p>
              <div className="impact-row"><span><b>70%</b> less manual testing</span><span><b>80%</b> faster incident detection</span><span><b>95%</b> lower cache latency</span></div>
            </div>
          </article>
          <article className="timeline-item">
            <div className="time-meta"><span>JUL — AUG 2026</span><strong>02</strong></div>
            <div className="time-body">
              <p className="role">AI Evaluation Specialist · Freelance</p>
              <h3>Handshake <span>· Project Dynamo</span></h3>
              <p>Designed terminal-based debugging and repository-repair scenarios, evaluated more than 20 AI failure patterns, and refined benchmark tasks through rigorous review cycles.</p>
              <div className="impact-row"><span><b>10+</b> agent scenarios</span><span><b>20+</b> failure patterns</span><span><b>Multi-step</b> reasoning</span></div>
            </div>
          </article>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-intro">
          <span className="section-kicker">THE SHINOBI BEHIND THE CODE</span>
          <blockquote>“Code is my chakra. Consistency is my jutsu.”</blockquote>
          <p>I&apos;m a final-year Computer Science student at NIT Raipur who likes hard problems, systems that hold up in production, and AI that earns trust through reliable behavior.</p>
        </div>
        <div className="skill-grid">
          {skills.map(([label, value], index) => (
            <div className="skill-row" key={label}><span>0{index + 1}</span><strong>{label}</strong><p>{value}</p></div>
          ))}
        </div>
      </section>

      <section className="section achievement-section">
        <div className="achievement-title">
          <span className="section-kicker">RANKS & RECOGNITION</span>
          <h2>The training<br /><em>never stops.</em></h2>
        </div>
        <div className="achievement-grid">
          <article><span>TOP 3%</span><h3>Amazon ML Summer School</h3><p>Selected for training in machine learning, deep learning, LLMs, fine-tuning, and model optimization.</p></article>
          <article><span>TOP 5%</span><h3>LeetCode Knight</h3><p>Max rating 1854 with a global rank of 1425 in Biweekly Contest 158.</p></article>
          <article><span>3-STAR</span><h3>CodeChef</h3><p>Max rating 1646 with global ranks 433 and 300 in Starters contests.</p></article>
          <article><span>PUPIL</span><h3>Codeforces</h3><p>Max rating 1320 while building CodeOrbit to make competitive-programming practice smarter.</p></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-symbol" aria-hidden="true">{dark ? "終" : "始"}</div>
        <span className="section-kicker">START A NEW MISSION</span>
        <h2>Let&apos;s build something<br /><em>legendary.</em></h2>
        <p>Open to software engineering, AI engineering, and ambitious collaborations.</p>
        <a className="contact-cta" href="mailto:kotte.koushik5021@gmail.com">kotte.koushik5021@gmail.com <span>↗</span></a>
        <div className="socials">
          <a href="https://github.com/Koushikroyal2005/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/koushik-kotte/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/I_Can_Do_This_AAll_Day/" target="_blank" rel="noreferrer">LeetCode</a>
          <a href="https://codeforces.com/profile/kotte.koushik5021" target="_blank" rel="noreferrer">Codeforces</a>
        </div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">{dark ? "雷" : "火"}</span><span>KK<span className="brand-dot">.</span></span></a><p>Designed & engineered by Koushik Kotte · 2026</p><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
