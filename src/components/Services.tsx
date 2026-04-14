"use client";

const services = [
  {
    title: "Driveways",
    desc: "Durable, beautifully finished driveways that boost curb appeal and last for decades.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M8 56L24 8h16l16 48" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="40" x2="50" y2="40" />
        <line x1="18" y1="28" x2="46" y2="28" />
      </svg>
    ),
  },
  {
    title: "Sidewalks",
    desc: "Clean, level sidewalks built to code with smooth finishes and proper drainage.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="8" y="8" width="48" height="48" rx="4" />
        <line x1="8" y1="24" x2="56" y2="24" />
        <line x1="8" y1="40" x2="56" y2="40" />
      </svg>
    ),
  },
  {
    title: "Patios",
    desc: "Custom concrete patios that transform your outdoor living space into something special.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="4" y="20" width="56" height="36" rx="4" />
        <path d="M20 20V8M44 20V8M4 36h56" />
      </svg>
    ),
  },
  {
    title: "Foundations",
    desc: "Solid foundations for extensions and additions, engineered for Arizona&apos;s soil conditions.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 56h56M12 56V32h40v24M20 32V20h24v12" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="32" y1="20" x2="32" y2="12" />
      </svg>
    ),
  },
  {
    title: "Concrete Colors",
    desc: "Decorative colored concrete with stamps, stains, and custom finishes for a unique look.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="20" cy="20" r="10" />
        <circle cx="44" cy="20" r="10" />
        <circle cx="32" cy="42" r="10" />
        <path d="M27 26a12 12 0 0 0 10 0M24 30a12 12 0 0 0-2 8M42 30a12 12 0 0 1 2 8" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-gray-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-orange font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-[var(--font-heading)] font-extrabold text-3xl md:text-5xl text-navy">
            Our Concrete Services
          </h2>
          <p className="text-dark-muted mt-4 max-w-2xl mx-auto text-lg">
            From driveways to decorative finishes, we deliver expert
            craftsmanship on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div
              key={i}
              className="reveal group relative"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* 3D Depth: background navy shape */}
              <div className="absolute inset-0 bg-navy/10 rounded-2xl rotate-2 scale-[1.02] group-hover:rotate-1 transition-transform duration-500" />
              {/* Orange accent shape */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-orange/10 rounded-full -z-0 group-hover:scale-125 transition-transform duration-500" />
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray/50">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange to-orange-light flex items-center justify-center text-white mb-6 shadow-lg shadow-orange/20 group-hover:scale-110 transition-transform duration-300">
                  {svc.icon}
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-xl text-navy mb-3">
                  {svc.title}
                </h3>
                <p className="text-dark-muted leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C300,100 900,0 1200,60 L1200,120 L0,120 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
