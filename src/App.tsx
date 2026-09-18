import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import travelImage from "../assets/global-travel.png";
import vitalBondImage from "../assets/vital-bond.amin-helhee.png";
import portraitImage from "../assets/mypic.png";
import { translate, type Language } from "./i18n";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  Globe2,
  Layers3,
  Menu,
  Send,
  Server,
  Sparkles,
  X,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  details: string[];
  tags: string[];
  visual: "travel" | "hatan" | "experimental";
  action: string;
  url?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Global Travel / GTRIP",
    type: "Travel Website & Private Management Platform",
    description:
      "A public travel website and a private GTRIP platform for tour management, agents, bookings, payments, user roles and internal workflows.",
    details: [
      "Frontend development",
      "Backend APIs",
      "Authentication and authorization",
      "Database architecture",
      "Payment integrations",
      "Agent and manager workflows",
      "Deployment and production configuration",
      "AI-related features",
    ],
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "Railway",
    ],
    visual: "travel",
    action: "View Case Study",
    url: "https://global-travel.mn/",
  },
  {
    number: "02",
    title: "Vital Bond",
    type: "Nature Foundation Website",
    description:
      "A visual-first website for a nature foundation, focused on its mission, conservation work, responsive design and a clear browsing experience.",
    details: [
      "Modern visual design",
      "Responsive layout",
      "Smooth interaction",
      "Performance",
      "Clear company presentation",
    ],
    tags: ["Brand experience", "Responsive design", "Performance"],
    visual: "hatan",
    action: "View Project",
    url: "https://vitalbondnature.org/",
  },
  {
    number: "03",
    title: "Experimental Project",
    type: "Interactive Web Experience",
    description:
      "A project where I experiment with modern web design, motion, interaction and new development techniques. The goal is simple: build something that does not feel like another template.",
    details: [
      "Modern web design",
      "Motion and interaction",
      "New development techniques",
      "Original visual direction",
    ],
    tags: ["Creative development", "Motion", "Interaction"],
    visual: "experimental",
    action: "Explore Project",
  },
];

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Business Websites",
    description:
      "Modern websites for companies that need a professional online presence.",
    label: "Good for",
    items: [
      "Company websites",
      "Service businesses",
      "Tourism companies",
      "Restaurants",
      "Education businesses",
      "Personal brands",
      "Small and medium businesses",
    ],
    extras: [
      "Responsive design",
      "Modern frontend",
      "Contact forms",
      "Basic SEO setup",
      "Deployment",
      "Domain configuration",
    ],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Website Redesign",
    description:
      "Already have a website but it feels old, slow or difficult to use? I can redesign it while keeping the important parts of your existing business.",
    label: "Focus areas",
    items: [
      "Better visual design",
      "Mobile experience",
      "Navigation",
      "Performance",
      "Clearer calls to action",
      "Modern interaction",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Custom Web Applications",
    description: "For businesses that need more than a normal website.",
    label: "Examples",
    items: [
      "Admin dashboards",
      "Booking systems",
      "Customer portals",
      "Internal management tools",
      "Authentication systems",
      "Payment systems",
      "Role-based platforms",
      "Business automation",
    ],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "AI Integration",
    description:
      "AI can be useful when it solves an actual problem. I can integrate features that serve a clear purpose.",
    label: "Possibilities",
    items: [
      "AI assistants",
      "Recommendation systems",
      "Content tools",
      "Search assistants",
      "Internal automation",
      "Customer support features",
    ],
  },
];

const strengths = [
  {
    number: "01",
    title: "Modern Frontend",
    icon: Layers3,
    body: "I enjoy working with modern technologies and building interfaces that feel current rather than outdated. I focus heavily on responsive layouts, clean UI, good interaction and performance.",
  },
  {
    number: "02",
    title: "Full-Stack Development",
    icon: Database,
    body: "I can work beyond the visual side of the website. That includes APIs, authentication, databases, backend logic and application architecture.",
  },
  {
    number: "03",
    title: "Deployment & DevOps",
    icon: Server,
    body: "Building the website is only part of the job. I can also handle deployment, environments, domains, databases and production configuration.",
  },
  {
    number: "04",
    title: "Fast Development",
    icon: Sparkles,
    body: "I use modern development workflows and AI-assisted tools to prototype, build and iterate quickly. The goal is to spend less time on repetitive work and more time solving the actual problem.",
  },
  {
    number: "05",
    title: "Direct Communication",
    icon: Send,
    body: "You work directly with the person designing and developing the product. No long communication chain. No project bouncing between five different people.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    body: "First, I understand the business, the customers and what the website actually needs to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    body: "We decide the structure, pages, features and overall direction.",
  },
  {
    number: "03",
    title: "Design",
    body: "I create the visual direction and user experience.",
  },
  {
    number: "04",
    title: "Build",
    body: "I develop the frontend, backend and required integrations.",
  },
  {
    number: "05",
    title: "Review",
    body: "You test the website and provide feedback.",
  },
  {
    number: "06",
    title: "Launch",
    body: "I deploy the project, connect the domain and make sure everything works properly in production.",
  },
];

const stack = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "TanStack",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "shadcn/ui",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Hono", "REST APIs", "Authentication"],
  },
  { title: "Data", items: ["PostgreSQL", "Prisma", "Drizzle ORM"] },
  {
    title: "Infrastructure",
    items: ["Railway", "Vercel", "Cloudflare", "Docker", "GitHub"],
  },
  {
    title: "AI",
    items: [
      "LLM APIs",
      "AI-assisted development",
      "AI integrations",
      "Automation",
    ],
  },
];

const pricing = [
  {
    name: "Landing Page",
    price: "300,000₮",
    description:
      "For campaigns, products or simple businesses that need a focused single-page website.",
  },
  {
    name: "Business Website",
    price: "600,000₮",
    description:
      "For businesses that need a complete modern website with multiple pages.",
    featured: true,
  },
  {
    name: "Website Redesign",
    price: "400,000₮",
    description:
      "For businesses with an existing website that needs a major visual or usability improvement.",
  },
  {
    name: "Custom Web Application",
    price: "Custom pricing",
    description:
      "For dashboards, booking systems, platforms, payment systems and more advanced applications.",
  },
];

const faqs = [
  {
    q: "How long does a website take?",
    a: "A simple website can usually be completed much faster than a complex application. The timeline depends on the number of pages, features, content and feedback process. I focus on fast iteration and clear communication throughout the project.",
  },
  {
    q: "Do you only build the frontend?",
    a: "No. I work full-stack, so I can handle frontend development, backend APIs, databases, authentication and deployment when the project requires them.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. I can keep the existing business content and functionality while improving the visual design, structure, responsiveness and user experience.",
  },
  {
    q: "Can you maintain the website after launch?",
    a: "Yes. Ongoing maintenance, updates and additional development can be discussed depending on the project.",
  },
  {
    q: "Do you use AI to build websites?",
    a: "Yes. I use AI-assisted development tools as part of my workflow to research, prototype, debug and iterate faster. AI is a tool, not a replacement for engineering decisions. I still review, test and control what goes into the final product.",
  },
];

const contactLinks: { name: string; href: string }[] = [
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=gg733328%40gmail.com",
  },
  { name: "GitHub", href: "https://github.com/ganaabno" },
  { name: "Facebook", href: "https://www.facebook.com/weabo/" },
  { name: "LinkedIn", href: "" },
  { name: "Telegram", href: "" },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-number">{number}</span>
      <span className="eyebrow-line" />
      <span>{children}</span>
    </div>
  );
}

function SectionTitle({
  children,
  muted,
}: {
  children: React.ReactNode;
  muted?: string;
}) {
  return (
    <h2 className="section-title">
      {children}
      {muted && <span> {muted}</span>}
    </h2>
  );
}

function ProjectVisual({ visual, language }: { visual: Project["visual"]; language: Language }) {
  if (visual === "travel" || visual === "hatan") {
    const isTravel = visual === "travel";
    return (
      <div
        className={`project-visual screenshot-visual ${isTravel ? "travel-visual" : "vital-visual"}`}
        aria-hidden="true"
      >
        <div className="screenshot-glow" />
        <div className="screenshot-frame">
          <div className="screenshot-browser"><span /><span /><span /><small>{isTravel ? "global-travel.mn" : "vitalbondnature.org"}</small></div>
          <img src={isTravel ? travelImage : vitalBondImage} alt="" loading="lazy" />
        </div>
        <div className="screenshot-caption">{isTravel ? "GLOBAL TRAVEL / 2026" : "VITAL BOND / 2026"}</div>
      </div>
    );
  }
  return (
    <div className="project-visual experimental-visual" aria-hidden="true">
      <div className="experiment-grid" />
      <div className="experiment-ring ring-one" />
      <div className="experiment-ring ring-two" />
      <div className="experiment-ring ring-three" />
      <div className={`experiment-center ${language === "mn" ? "mn" : ""}`}>
        {language === "mn" ? <>САНААГАА<br /><i>ТУРШ.</i></> : <>PLAY<br />WITH<br /><i>IDEAS.</i></>}
      </div>
      <span className="experiment-corner">EXP—001 / 2026</span>
      <span className="experiment-index">↗</span>
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
  language,
}: {
  project: Project;
  onClose: () => void;
  language: Language;
}) {
  const t = (text: string) => translate(language, text);
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
    >
      <button
        className="dialog-close"
        aria-label={t("Close project details")}
        onClick={() => ref.current?.close()}
      >
        <X size={20} />
      </button>
      <div className="dialog-visual">
        <ProjectVisual visual={project.visual} language={language} />
      </div>
      <div className="dialog-body">
        <p className="mono accent">{t("PROJECT")} / {project.number}</p>
        <h2>{t(project.title)}</h2>
        <p className="dialog-type">{t(project.type)}</p>
        <p className="dialog-description">{t(project.description)}</p>
        {project.number === "01" && <p className="private-note">{t("Private platform")}: GTRIP</p>}
        <div className="dialog-columns">
          <div>
            <h3>
              {project.number === "01"
                ? t("What I worked on")
                : project.number === "02"
                  ? t("Focus")
                  : t("Exploration")}
            </h3>
            <ul>
              {project.details.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t("Technologies & focus")}</h3>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{t(tag)}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="dialog-actions">
          {project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">{t("Visit live website")} <ArrowUpRight size={18} /></a>}
          <a className="text-link" href="#contact" onClick={() => ref.current?.close()}>{t("Build something together")} <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </dialog>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    return saved === "en" || saved === "mn" ? saved : navigator.language.toLowerCase().startsWith("mn") ? "mn" : "en";
  });
  const t = (text: string) => translate(language, text);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.classList.toggle("mn", language === "mn");
    document.title = language === "mn" ? "Ган-Эрдэнэ — Бүрэн стек хөгжүүлэгч" : "Gan-Erdene — Full-Stack Developer";
    document.querySelector('meta[name="description"]')?.setAttribute("content", language === "mn" ? "Ган-Эрдэнэ — Улаанбаатар хотод ажилладаг бүрэн стек хөгжүүлэгч. Орчин үеийн вэбсайт болон захиалгат вэб аппликейшн бүтээнэ." : "Gan-Erdene is a full-stack developer in Ulaanbaatar, Mongolia building modern websites and custom web applications.");
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <header className="site-header">
        <a href="#top" className="brand" aria-label={t("Gan-Erdene, back to top")}>
          GE<span>®</span>
        </a>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label={t("Main navigation")}
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            {t("Work")}
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            {t("Services")}
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("About")}
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            {t("Pricing")}
          </a>
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setMenuOpen(false)}
          >
            {t("Let's talk")} <ArrowUpRight size={15} />
          </a>
        </nav>
        <div className="language-toggle" role="group" aria-label={language === "mn" ? "Хэл сонгох" : "Select language"}>
          <button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={language === "mn" ? "active" : ""} aria-pressed={language === "mn"} onClick={() => setLanguage("mn")}>MN</button>
        </div>
        <button
          className="menu-toggle"
          aria-label={t(menuOpen ? "Close menu" : "Open menu")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main id="top" className={language === "mn" ? "lang-mn" : ""}>
        <section className="hero section-shell">
          <div className="hero-topline">
            <span className="status">
              <span className="status-dot" /> {t("AVAILABLE FOR FREELANCE PROJECTS")}
            </span>
            <span className="hero-location">
              {t("BASED IN ULAANBAATAR, MONGOLIA")} <span>↗</span>
            </span>
          </div>
          <div className="hero-main">
            <div className="hero-orbit" aria-hidden="true">
              <span>GE</span>
            </div>
            <p className="hero-kicker">
              {t("FULL-STACK DEVELOPER")} <span> / </span> {t("CREATIVE THINKER")}
            </p>
            <h1>
              {t("I build modern websites that are")} <em>{t("fast, clean")}</em> {t("and")}{" "}
              <span>
                {t("built to grow")}<span className="hero-period">.</span>
              </span>
            </h1>
            <div className="hero-bottom">
              <p>
                {t("I’m a full-stack developer focused on modern frontend experiences, practical backend systems and reliable deployment.")}
              </p>
              <div className="hero-actions">
                <a className="button button-accent" href="#work">
                  {t("View My Work")} <ArrowUpRight size={19} />
                </a>
                <a className="button button-outline" href="#contact">
                  {t("Start a Project")} <ArrowUpRight size={19} />
                </a>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#intro">
            {t("SCROLL TO EXPLORE")} <ArrowDown size={15} />
          </a>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>
                {t("DESIGN")} <span>✳</span> {t("DEVELOPMENT")} <span>✳</span> {t("DEPLOYMENT")}{" "}
                <span>✳</span> {t("GOOD IDEAS")} <span>✳</span>
              </span>
            ))}
          </div>
        </div>

        <section id="intro" className="intro section-shell section-pad">
          <Reveal>
            <Eyebrow number="01">{t("THE SHORT VERSION")}</Eyebrow>
            <div className="intro-grid">
              <SectionTitle>
                {t("Modern design.")}
                <br />
                <em>{t("Real functionality.")}</em>
              </SectionTitle>
              <div className="intro-copy">
                <p className="lead">{t("A website should not only look good.")}</p>
                <p>
                  {t("It should load fast, work properly on every device, be easy to maintain and actually help the business using it. That is what I focus on.")}
                </p>
                <p>
                  {t("I combine modern UI development with backend engineering, deployment and AI-assisted workflows to build products quickly without sacrificing quality.")}
                </p>
                <p>
                  {t("I work with businesses that want something better than a generic template — whether that means a high-quality company website, a custom platform, an internal tool or a complete redesign.")}
                </p>
                <p>
                  {t("Because I work across frontend, backend and deployment, you can work with one developer from idea to production.")}
                </p>
                <a className="text-link" href="#services">
                  {t("Explore what I do")} <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="section-shell">
            <Reveal>
              <Eyebrow number="02">{t("SELECTED WORK")}</Eyebrow>
              <div className="section-heading-row">
                <SectionTitle>
                  {t("Selected")} <em>{t("projects.")}</em>
                </SectionTitle>
                <p>
                  {t("A few projects that show how I approach design, engineering and real business problems.")}
                </p>
              </div>
            </Reveal>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <Reveal
                  key={project.number}
                  className={`project-card project-card-${index + 1}`}
                  delay={index * 0.07}
                >
                  <button
                    className="project-preview"
                    onClick={() => setActiveProject(project)}
                    aria-label={`${t(project.action)}: ${t(project.title)}`}
                  >
                    <ProjectVisual visual={project.visual} language={language} />
                    <span className="preview-arrow">
                      <ArrowUpRight size={22} />
                    </span>
                  </button>
                  <div className="project-info">
                    <div>
                      <p className="mono project-number">
                        {project.number} / {t(project.type)}
                      </p>
                      <h3>{t(project.title)}</h3>
                      <p>{t(project.description)}</p>
                    </div>
                    <button
                      className="text-link"
                      onClick={() => setActiveProject(project)}
                    >
                      {t(project.action)} <ArrowUpRight size={18} />
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services section-shell section-pad">
          <Reveal>
            <Eyebrow number="03">{t("WHAT I CAN BUILD")}</Eyebrow>
            <div className="section-heading-row">
              <SectionTitle>
                {t("Made for")} <em>{t("your next move.")}</em>
              </SectionTitle>
              <p>
                {t("From a sharper digital presence to a product that makes your business run better.")}
              </p>
            </div>
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal
                key={service.number}
                className="service-card"
                delay={(index % 2) * 0.07}
              >
                <div className="service-card-top">
                  <span className="service-icon">
                    <service.icon size={26} strokeWidth={1.5} />
                  </span>
                  <span className="mono">{service.number} / 04</span>
                </div>
                <h3>{t(service.title)}</h3>
                <p>{t(service.description)}</p>
                <div className="service-list">
                  <span className="mono">{t(service.label)}</span>
                  <div>
                    {service.items.map((item) => (
                      <span key={item}>{t(item)}</span>
                    ))}
                  </div>
                </div>
                {service.extras && (
                  <div className="service-extra">
                    <span className="mono">{t("INCLUDES")}</span>
                    <p>{service.extras.map(t).join(" · ")}</p>
                  </div>
                )}
                <a
                  href="#contact"
                  className="service-link"
                  aria-label={`${t("Discuss")} ${t(service.title)}`}
                >
                  <ArrowUpRight size={22} />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="why-section section-pad">
          <div className="section-shell">
            <Reveal>
              <Eyebrow number="04">{t("WHY WORK WITH ME")}</Eyebrow>
              <div className="why-heading">
                <SectionTitle>
                  {t("One developer.")}
                  <br />
                  <em>{t("Full product workflow.")}</em>
                </SectionTitle>
                <p>
                  {t("Good work needs a clear vision and someone who can carry it through every stage.")}
                </p>
              </div>
            </Reveal>
            <div className="strength-list">
              {strengths.map((s) => (
                <Reveal key={s.number} className="strength-row">
                  <span className="mono strength-number">{s.number}</span>
                  <div className="strength-name">
                    <s.icon size={24} strokeWidth={1.5} />
                    <h3>{t(s.title)}</h3>
                  </div>
                  <p>{t(s.body)}</p>
                  <ArrowUpRight
                    className="strength-arrow"
                    size={22}
                    strokeWidth={1.5}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-shell section-pad">
          <Reveal>
            <Eyebrow number="05">{t("MY APPROACH")}</Eyebrow>
            <div className="section-heading-row">
              <SectionTitle>
                {t("How I")} <em>{t("work.")}</em>
              </SectionTitle>
              <p>
                {t("A straightforward process that keeps us aligned from first conversation to launch.")}
              </p>
            </div>
          </Reveal>
          <div className="steps-grid">
            {steps.map((step) => (
              <Reveal key={step.number} className="step">
                <span className="step-number">{step.number}</span>
                <div className="step-content">
                  <h3>{t(step.title)}</h3>
                  <p>{t(step.body)}</p>
                </div>
                <ArrowDownRight size={22} strokeWidth={1.5} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="section-shell">
            <Reveal>
              <Eyebrow number="06">{t("ABOUT ME")}</Eyebrow>
              <div className="about-grid">
                <div className="about-intro-row">
                  <div className="about-portrait-wrap">
                    <div className="portrait-frame"><img src={portraitImage} alt={language === "mn" ? "Ган-Эрдэнийн хөрөг" : "Gan-Erdene portrait"} loading="lazy" /></div>
                  </div>
                  <SectionTitle>
                    {t("Hey, I’m")}
                    <br />
                    <em>{t("Gan-Erdene.")}</em>
                  </SectionTitle>
                </div>
                <div className="about-copy">
                  <p className="lead">
                    {t("A full-stack developer based in Ulaanbaatar, Mongolia.")}
                  </p>
                  <div className="credentials"><div><span className="mono">{t("EDUCATION")}</span><strong>{t("Bachelor of Computer Science")}</strong></div><div><span className="mono">{t("EXPERIENCE")}</span><strong>{t("2 years of work experience")}</strong></div></div>
                  <p>
                    {t("I enjoy building modern websites and web applications using current technologies. Frontend is one of my strongest areas because I care a lot about how a product looks and feels, but I also work comfortably with backend development, databases, APIs and deployment.")}
                  </p>
                  <p>
                    {t("I like learning new technologies, experimenting with new approaches and using AI as part of my development workflow.")}
                  </p>
                  <p>
                    {t("For me, technology itself is not the final product. The important part is whether it helps build something better, faster and more useful.")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="philosophy section-shell section-pad">
          <Reveal>
            <Eyebrow number="07">{t("THE PHILOSOPHY")}</Eyebrow>
            <div className="philosophy-grid">
              <div>
                <span className="quote-mark">“</span>
                <h2>
                  {t("I don’t want to build websites that all look the same")}
                  <span>.</span>
                </h2>
              </div>
              <div className="philosophy-copy">
                <p>
                  {t("The internet already has enough generic templates. I want each project to have its own identity while still being easy to use, fast and practical.")}
                </p>
                <div className="philosophy-rule">
                  <span>{t("GOOD DESIGN GETS ATTENTION.")}</span>
                  <span>{t("GOOD ENGINEERING KEEPS EVERYTHING WORKING.")}</span>
                  <strong>
                    {t("A GOOD PRODUCT NEEDS BOTH.")} <ArrowUpRight size={20} />
                  </strong>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="stack-section section-pad">
          <div className="section-shell">
            <Reveal>
              <Eyebrow number="08">{t("TECH STACK")}</Eyebrow>
              <div className="section-heading-row">
                <SectionTitle>
                  {t("Tools of")} <em>{t("the trade.")}</em>
                </SectionTitle>
                <p>
                  {t("Technologies I work with, chosen to fit the problem rather than the trend.")}
                </p>
              </div>
            </Reveal>
            <div className="stack-grid">
              {stack.map((group, index) => (
                <Reveal
                  key={group.title}
                  className="stack-group"
                  delay={index * 0.04}
                >
                  <span className="mono">
                    0{index + 1} / {t(group.title).toUpperCase()}
                  </span>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{t(item)}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing section-shell section-pad">
          <Reveal>
            <Eyebrow number="09">{t("PRICING")}</Eyebrow>
            <div className="section-heading-row">
              <SectionTitle>
                  {t("Simple")} <em>{t("pricing.")}</em>
              </SectionTitle>
              <p>
                  {t("I am currently building my freelance portfolio, so I offer competitive pricing for selected projects.")}
              </p>
            </div>
          </Reveal>
          <div className="pricing-grid">
            {pricing.map((plan, index) => (
              <Reveal
                key={plan.name}
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
                delay={index * 0.05}
              >
                <div className="pricing-top">
                  <span className="mono">0{index + 1} / 04</span>
                  {plan.featured && (
                    <span className="popular">{t("POPULAR CHOICE")}</span>
                  )}
                </div>
                <h3>{t(plan.name)}</h3>
                <div className="price">
                  <small>
                    {plan.price === "Custom pricing" ? "" : t("Starting from")}
                  </small>
                  <strong>{t(plan.price)}</strong>
                </div>
                <p>{t(plan.description)}</p>
                <a href="#contact" className="pricing-link">
                  {t("Let's talk")} <ArrowUpRight size={19} />
                </a>
              </Reveal>
            ))}
          </div>
          <p className="pricing-note">
            {t("Final pricing depends on the scope, features and complexity of the project.")}
          </p>
        </section>

        <section className="faq-section section-pad">
          <div className="section-shell faq-grid">
            <Reveal>
              <Eyebrow number="10">{t("FAQ")}</Eyebrow>
              <SectionTitle>
                {t("Good questions.")}
                <br />
                <em>{t("Clear answers.")}</em>
              </SectionTitle>
              <p className="faq-intro">
                {t("A few things you might want to know before we get started.")}
              </p>
            </Reveal>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <Reveal key={faq.q} className="faq-item">
                  <button
                    aria-expanded={activeFaq === index}
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                  >
                    <span className="mono">0{index + 1}</span>
                    <span>{t(faq.q)}</span>
                    <ChevronDown
                      className={activeFaq === index ? "rotated" : ""}
                      size={21}
                    />
                  </button>
                  <div
                    className={
                      activeFaq === index ? "faq-answer open" : "faq-answer"
                    }
                  >
                    <p>{t(faq.a)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="section-shell">
            <Reveal>
              <Eyebrow number="11">{t("LET'S MAKE IT HAPPEN")}</Eyebrow>
              <h2>
                {t("Have something")}
                <br />
                {t("you want to")} <em>{t("build?")}</em>
              </h2>
              <div className="contact-bottom">
                <div>
                  <p>
                    {t("Whether you need a company website, redesign or custom web application, tell me what you have in mind. I’ll help figure out the best way to build it.")}
                  </p>
                  <strong>{t("Let’s build something good.")}</strong>
                </div>
                <a
                  className="contact-circle"
                  href={contactLinks[0].href || "#contact-links"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("Start a project")}
                >
                  <ArrowUpRight size={48} strokeWidth={1.25} />
                  <span>{t("START A PROJECT")}</span>
                </a>
              </div>
              <div className="contact-links" id="contact-links">
                {contactLinks.map((link) =>
                  link.href ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(link.name)} <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span key={link.name} title={t("Contact link to be added")}>
                      {t(link.name)} <ArrowUpRight size={16} />
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer section-shell">
        <div className="footer-brand">
          GE<span>®</span>
        </div>
        <div>
          <p>{t("Designed & developed by Gan-Erdene.")}</p>
          <p>{t("Built with modern web technology.")}</p>
        </div>
        <div className="footer-end">
          <a href="#top">{t("Back to top")} ↑</a>
          <p>© 2026 {language === "mn" ? "Ган-Эрдэнэ" : "Gan-Erdene"}. {t("All rights reserved.")}</p>
        </div>
      </footer>
      {activeProject && (
        <ProjectDialog
          project={activeProject}
          language={language}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}

export default App;
