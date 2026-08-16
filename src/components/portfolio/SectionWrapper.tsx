import { useEffect, useRef, useState, type ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Use alternate gray background */
  alternate?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  alternate = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-mt-20 py-20 md:py-28 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${alternate ? "bg-gray-50" : ""} ${className}`}
    >
      <div className="section-container">{children}</div>
    </section>
  );
}

// ─── Section Title ───
export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3 font-mono text-sm font-medium uppercase tracking-widest text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-gray-500">{subtitle}</p>
      )}
      <div className="mt-6 h-1 w-16 rounded-full bg-blue-600" />
    </div>
  );
}
