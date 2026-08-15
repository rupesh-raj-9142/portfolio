import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBhR8IacI6lqYZToDLFqSDl3pmVd6cmGXhv1kQJA7bhzEQU4p3EepvPwVM592_iSNSk53BFPYGJ-vvF7LgHpM4nKLJLUt2489x6v68FUURwUx0wXormFXta-TastwAuuYxZxfTvpX1p31xN6riKdipA9q8j1RTjdJDKM1evc7RDuwc61Hs_S_0VNw8cSuBDM9WeW-NZ4VbWuc4vSq4rbNvRVwL7rq7_okx3RhJuHdzDu-bnrz4psN-2";

const PROJECTS = [
  {
    title: "TEZX CRM",
    body: "Modern CRM for small businesses to manage leads, teams, and projects.",
    tags: ["React", "Supabase"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFmkqsnuClbNTo5QqT3rfmRTFi7-EjMU5hhr9x8tfZ3rPLpXfxwwld-ESJ9IYZ6huiTa7uY92G8ISC4Za6AWtOSjo0Jw7MvsaBUZAX3UOSP2rcHYn-SgB79FKzzB7V2-xwFxT-4DeS6SV_xzB8NRc8B0QvyNj-iS-ybS_0J5H5bAitMDA1Zm_hr-tmKJXDfchYZPMxt3hTCBrkL73ybra7N1Nk_nkK4xNqaWhozOMir4fHi4xDDGUF",
    alt: "Analytics dashboard interface with charts and data visualizations",
  },
  {
    title: "AI Workspace",
    body: "Intelligent workflow platform with AI-powered recommendations and API integrations.",
    tags: ["Python", "ML APIs"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOy0xHj-GOVsf5iPgKkPt37dx7VRMDw-4di21IEXsIgugLpd7PirXY3525QNXN9BAj2-0jZSZfoSvtlr7X-K2EGGY2Ifufrtv3PC7uoe7pOwXi-7WmLR9RXDpMCETfqNx08BSFAwCvUtl6RNr9KylDLT6ozdy7bhPG3pjJQOEAy61ju5dmcVNeGvXIdLvorsfS8gOHLxqikpNe5IP7tMsW-uEKqgISGVXD602aYjoI_u55OTe1aidi",
    alt: "Abstract neural network of glowing nodes and connecting lines",
  },
];

const NAV = [
  { icon: "person", label: "About", href: "#about" },
  { icon: "bolt", label: "Skills", href: "#skills" },
  { icon: "code", label: "Projects", href: "#projects" },
  { icon: "work", label: "Experience", href: "#experience" },
];

const SKILLS = [
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "TensorFlow",
  "PyTorch",
  "Supabase",
  "PostgreSQL",
  "FastAPI",
  "Tailwind CSS",
];

const EXPERIENCE = [
  {
    when: "2024 — Present",
    role: "AI/ML Engineering Intern",
    org: "Independent Research & Freelance",
    body: "Shipping ML-backed features: retrieval pipelines, model serving, and evaluation dashboards.",
  },
  {
    when: "2023 — 2024",
    role: "Full-Stack Developer",
    org: "TEZX Projects",
    body: "Built and maintained a production CRM used for lead, team, and project management.",
  },
  {
    when: "2022 — 2026",
    role: "B.Tech, CSE (AI & ML)",
    org: "University",
    body: "Coursework in machine learning, distributed systems, and human-centred product design.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rupesh Raj — AI/ML Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Rupesh Raj, AI/ML engineer and full-stack developer building AI-powered applications and modern product experiences.",
      },
      { property: "og:title", content: "Rupesh Raj — AI/ML Engineer & Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "AI-powered applications and modern full-stack products, engineered for precision.",
      },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
  }),
  component: Index,
});

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h3>
      <div className="mt-5 h-px w-full shine-line" />
    </Reveal>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-primary"
      />

      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled
            ? "border-foreground/10 bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 md:px-10">
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 transition-transform active:scale-95"
            aria-label="Open navigation"
          >
            <span className="material-symbols-outlined text-2xl text-primary transition-transform duration-500 group-hover:rotate-12">
              terminal
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-tight text-ink">
              Rupesh.
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="relative font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-ink hover:after:origin-left hover:after:scale-x-100"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <motion.a
            href="#experience"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full border border-foreground/15 px-5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-primary hover:text-primary"
          >
            Resume
          </motion.a>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-ink/25 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed inset-y-0 left-0 z-[60] w-72 border-r border-foreground/10 bg-background p-6 shadow-2xl"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  Navigation
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                  className="material-symbols-outlined text-muted-foreground transition-transform active:scale-90"
                >
                  close
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV.map((n, i) => (
                  <motion.a
                    key={n.label}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                    className="flex items-center gap-4 rounded-xl p-3 text-muted-foreground transition-colors hover:bg-brand-soft hover:text-primary"
                  >
                    <span className="material-symbols-outlined">{n.icon}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em]">{n.label}</span>
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="mx-auto w-full max-w-[1280px]">
        {/* HERO */}
        <section className="relative px-5 pb-28 pt-14 md:px-10 md:pb-36 md:pt-24">
          <div
            aria-hidden
            className="float-slow pointer-events-none absolute -top-24 left-1/2 -z-10 h-[70vw] w-[70vw] max-w-[860px] -translate-x-1/2 rounded-full bg-brand-soft blur-[110px]"
          />
          <div className="grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs uppercase tracking-[0.22em] text-primary"
              >
                Available for opportunities
              </motion.p>

              <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                {"Hi, I'm Rupesh Raj.".split(" ").map((word, i) => (
                  <motion.span
                    key={word + i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="text-gradient-brand mr-[0.28em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="font-display text-xl font-semibold text-primary md:text-2xl"
              >
                AI/ML Engineer &amp; Full-Stack Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="max-w-md text-lg leading-relaxed text-muted-foreground"
              >
                I build AI-powered applications and modern full-stack products that solve real-world
                problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-4 flex flex-col gap-3 sm:flex-row"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl bg-primary px-7 py-4 text-center font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.53_0.19_265/0.65)] transition-shadow"
                >
                  View My Projects
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass-card rounded-xl px-7 py-4 text-center font-mono text-xs uppercase tracking-[0.14em] text-ink"
                >
                  Download Resume
                </motion.a>
              </motion.div>

              <div className="mt-6 flex gap-5">
                {["code", "share", "mail"].map((icon, i) => (
                  <motion.span
                    key={icon}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    whileHover={{ y: -4, scale: 1.12 }}
                    className="material-symbols-outlined cursor-pointer text-2xl text-muted-foreground transition-colors hover:text-primary"
                  >
                    {icon}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 1, scale: 1.015 }}
              className="glass-card aspect-square w-full overflow-hidden rounded-[2rem] p-1.5"
            >
              <img
                src={HERO_IMG}
                alt="Abstract technical visualization representing AI systems engineering"
                loading="eager"
                className="h-full w-full rounded-[1.6rem] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="border-y border-foreground/10 py-5" aria-hidden>
          <div className="flex w-max marquee-x gap-12 pl-5">
            {[...SKILLS, ...SKILLS].map((s, i) => (
              <span
                key={s + i}
                className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
          <SectionTitle eyebrow="01 — About" title="About Me" />
          <Reveal delay={0.1}>
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Pursuing B.Tech in CSE (AI &amp; ML). Focused on building practical AI-powered and
                full-stack applications. I turn ideas into scalable, user-friendly products.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  { k: "10+", v: "Projects shipped" },
                  { k: "2+", v: "Years building" },
                  { k: "AI/ML", v: "Core focus" },
                ].map((s, i) => (
                  <Reveal key={s.k} delay={0.1 * i}>
                    <p className="font-display text-3xl font-bold text-primary">{s.k}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {s.v}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 px-5 pb-24 md:px-10 md:pb-32">
          <SectionTitle eyebrow="02 — Stack" title="Skills & Tooling" />
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 px-5 pb-24 md:px-10 md:pb-32">
          <SectionTitle eyebrow="03 — Work" title="Featured Work" />
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  className="glass-card group h-full overflow-hidden rounded-3xl"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-brand-soft">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="h-full w-full scale-105 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-100"
                    />
                  </div>
                  <div className="p-7">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h4 className="font-display text-2xl font-semibold text-ink">{p.title}</h4>
                      <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                        open_in_new
                      </span>
                    </div>
                    <p className="mb-6 text-muted-foreground">{p.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-foreground/10 bg-brand-soft px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24 px-5 pb-28 md:px-10 md:pb-36">
          <SectionTitle eyebrow="04 — Timeline" title="Experience" />
          <div className="relative border-l border-foreground/10 pl-8">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.1} className="relative pb-12 last:pb-0">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.1, type: "spring", stiffness: 300 }}
                  className="absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-brand-soft"
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {e.when}
                </p>
                <h4 className="mt-2 font-display text-xl font-semibold text-ink">{e.role}</h4>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {e.org}
                </p>
                <p className="mt-3 max-w-2xl text-muted-foreground">{e.body}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-10">
          <span className="font-display text-xl font-bold uppercase tracking-tight text-ink">
            Rupesh.
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © 2026 Rupesh Raj — Engineered for precision.
          </p>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Email"].map((l) => (
              <a
                key={l}
                href="#about"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
