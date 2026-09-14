"use client";

import { useEffect, useRef, useState } from "react";
import {
  ContactSection,
  CredentialsSection,
  ExperienceSection,
  Hero,
  SiteHeader,
  SkillsSection,
  WorkSection,
} from "./components/PortfolioSections";
import type { Theme } from "./data/portfolio";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("naruto");
  const [ready, setReady] = useState(false);
  const [switching, setSwitching] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dark = theme === "sasuke";

  useEffect(() => {
    setTheme(localStorage.getItem("portfolio-theme") === "sasuke" ? "sasuke" : "naruto");
    const timer = setTimeout(() => setReady(true), 650);
    const move = (event: PointerEvent) => {
      cursorRef.current?.style.setProperty("--cx", event.clientX + "px");
      cursorRef.current?.style.setProperty("--cy", event.clientY + "px");
      document.documentElement.style.setProperty("--px", String(event.clientX / innerWidth - 0.5));
      document.documentElement.style.setProperty("--py", String(event.clientY / innerHeight - 0.5));
    };
    const scroll = () => document.documentElement.style.setProperty("--progress", String(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in-view")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    addEventListener("pointermove", move);
    addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      removeEventListener("pointermove", move);
      removeEventListener("scroll", scroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const changeTheme = (next: Theme) => {
    if (next === theme) return;
    setSwitching(true);
    setTimeout(() => setTheme(next), 260);
    setTimeout(() => setSwitching(false), 850);
  };

  return (
    <main className={"site " + (ready ? "ready" : "")}>
      <div className="boot"><div className="boot-mark"><i/><b>{dark ? "雷" : "火"}</b></div><span>LOADING FIELD NOTES</span></div>
      <div className={"theme-strike " + (switching ? "active" : "")}><i/><b>{dark ? "火" : "雷"}</b></div>
      <div className="grain"/><div className="progress"/>
      <div className="leaf-cursor" ref={cursorRef}><img src="/assets/leaf-cursor-v4.png" alt=""/><span/></div>
      <SiteHeader dark={dark} onThemeChange={changeTheme}/>
      <Hero dark={dark}/>
      <WorkSection dark={dark}/>
      <ExperienceSection dark={dark}/>
      <SkillsSection dark={dark}/>
      <CredentialsSection dark={dark}/>
      <ContactSection dark={dark}/>
    </main>
  );
}
