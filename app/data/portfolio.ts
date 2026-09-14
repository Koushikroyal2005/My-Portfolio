export type Theme = "naruto" | "sasuke";

export const projects = [
  { key: "rag", no: "01", kind: "AI KNOWLEDGE", title: "Multi-Document RAG", hook: "Many documents. One grounded answer.", text: "Retrieval, reranking, and context-aware generation that keeps answers connected to source material.", tech: "Python · RAG · Vector Search · LLMs", url: "https://github.com/Koushikroyal2005?tab=repositories&q=rag", glyph: "文" },
  { key: "trade", no: "02", kind: "AGENTIC AI / FINTECH", title: "Trading Agent", hook: "Research signals without removing guardrails.", text: "An agentic workflow for market research, signal evaluation, and controlled decision support.", tech: "Python · Agents · Market Data · Automation", url: "https://github.com/Koushikroyal2005?tab=repositories&q=trading", glyph: "市" },
  { key: "guard", no: "03", kind: "VISION / SAFETY", title: "OEguard", hook: "Attention-aware safety that resists shortcuts.", text: "A child screen-time guardian running at 10-15 FPS with gaze analysis, anti-cheat safeguards, incident memory, offline fallback, and 111 automated tests.", tech: "OpenCV · MediaPipe · Gemini · ChromaDB", url: "https://github.com/Koushikroyal2005/OEguard", glyph: "眼" },
  { key: "calorie", no: "04", kind: "AI / HEALTH", title: "Personal Calorie Tracker", hook: "Daily nutrition, easier to understand.", text: "An AI-assisted companion for food logging, useful summaries, and clear progress awareness.", tech: "Full Stack · AI · Analytics · UX", url: "https://github.com/Koushikroyal2005?tab=repositories&q=calorie", glyph: "食" },
  { key: "orbit", no: "05", kind: "FULL STACK / DEVTOOLS", title: "CodeOrbit", hook: "Turn coding data into a practice plan.", text: "Live Codeforces analytics, 40+ tag filters, rating-range discovery, bookmarks, solved-state tracking, and cached AI problem-of-the-day recommendations.", tech: "React · Node.js · MongoDB · Codeforces API", url: "https://github.com/Koushikroyal2005/code_orbit", live: "https://code-orbit-scj0.onrender.com", glyph: "軌" },
  { key: "mesh", no: "06", kind: "WEB3 / AI INFRA", title: "SynapseMesh", hook: "Agents with verifiable coordination.", text: "Trustless agent execution through onchain task DAGs, TEE verification, and atomic settlement on 0G.", tech: "React · Solidity · Ethers · Python", url: "https://github.com/Koushikroyal2005?tab=repositories&q=SynapseMesh", live: "https://synapsemesh.vercel.app", glyph: "網" },
];

export const myntra = [
  ["INTEGRATION TESTING", "Built an integration-testing tool that automated 300-400 test cases across 10 services and scheduled daily cron runs, reducing PBS manual testing from multiple days to about 5 minutes."],
  ["DEFECT RESOLUTION", "Diagnosed and fixed margin-check and IBIS validation defects across two services, preventing purchase-order failures and making the automated integration flow reliable."],
  ["LOGGING PIPELINE", "Raised logging capacity from roughly 600 to 7,000 logs/second across seven services using Log4j2 and a custom LMAX Disruptor ring buffer, while lowering request latency by up to 10%."],
  ["INCIDENT RESPONSE", "Cut incident detection from about 30 minutes to 5 minutes and reduced on-call escalations by 40% with Grafana/Prometheus dashboards covering roughly 20 external APIs."],
  ["CACHE OPERATIONS", "Reduced IBIS/Hydra cache latency by 90-95% through an in-memory migration; built parallel Redis-key cleanup in Bash that completes in under one minute."],
  ["DELIVERY", "Shipped eight production features through reviewed, specification-driven workflows using GitHub Spec-Kit and agentic AI."],
];

export const handshake = [
  ["SCENARIO DESIGN", "Created 10+ terminal-based debugging, repository-repair, and multi-step scenarios to test AI-agent reasoning and code execution."],
  ["FAILURE ANALYSIS", "Evaluated 20+ recurring AI failure patterns and delivered structured feedback for stronger, fairer software-engineering benchmarks."],
  ["QUALITY ITERATION", "Improved verifier behavior, instruction clarity, and task difficulty through multiple review cycles to increase benchmark acceptance readiness."],
  ["ACCEPTANCE READINESS", "Separated task-authoring defects from genuine model failures and documented actionable corrections for each review cycle."],
];

export const certifications = [
  ["Amazon", "Machine Learning Summer School", "Top 3% · 2025"],
  ["Google", "Cybersecurity Professional Certificate", "Coursera"],
  ["Google", "Gemini for Developers", "Generative AI"],
  ["Google", "Code Vipassana: AI Agents", "Workshop"],
  ["Stanford / Coursera", "Machine Learning Specialization", "ML foundations"],
  ["IBM", "Linux Commands & Shell Scripting", "Coursera"],
  ["Udemy", "Full-Stack Web Development", "Web engineering"],
];

export const skills = [
  ["LANGUAGES", "C · C++ · Java · Python · SQL · Bash"],
  ["FRONTEND / MERN", "React.js · JavaScript · MERN · HTML · CSS"],
  ["BACKEND / APIs", "Spring Boot · Node.js · Express · FastAPI · RESTful APIs · JWT"],
  ["AGENTIC AI", "LangChain · LangGraph · RAG · Gemini · OpenCV · MediaPipe"],
  ["DATA", "MongoDB · PostgreSQL · Supabase · Redis · ChromaDB · Kafka"],
  ["PLATFORM", "Docker · Kubernetes · Git · GitHub · CI/CD"],
  ["OBSERVABILITY", "Grafana · Prometheus · Elasticsearch · Log4j2"],
  ["DEVELOPER TOOLS", "VS Code · Cursor · IntelliJ IDEA · PyCharm"],
];

export const tickerSkills = [
  "JAVA / SPRING BOOT",
  "AGENTIC AI",
  "DISTRIBUTED SYSTEMS",
  "COMPUTER VISION",
  "RAG",
  "OBSERVABILITY",
];
