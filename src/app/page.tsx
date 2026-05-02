/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import TechnologiesSection from "@/components/TechnologiesSection";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Web Development",
    description: "Custom, high-performance websites and web apps built with modern frameworks and best practices.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that delight users.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15h3" />
      </svg>
    ),
  },
  {
    title: "Cloud Hosting",
    description: "Scalable, secure cloud infrastructure with 99.9% uptime guarantees and 24/7 monitoring.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that boost your search rankings and drive organic traffic.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed around your users to maximize engagement and conversion.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital campaigns including PPC, social media, and content marketing that convert.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
];

const steps = [
  { number: 1, title: "Discovery",  description: "We learn about your goals, audience, and requirements through deep consultation." },
  { number: 2, title: "Strategy",   description: "We craft a tailored roadmap with clear milestones, tech stack, and timelines." },
  { number: 3, title: "Build",      description: "Our expert team executes with precision, keeping you updated every step of the way." },
  { number: 4, title: "Launch",     description: "We deploy, monitor, and provide ongoing support to ensure continued success." },
];


const pricingTiers = [
  {
    name: "Starter", price: "$29", period: "/month",
    description: "Perfect for small businesses just getting started online.",
    features: ["1 Website", "Up to 5 Pages", "Basic SEO Setup", "Email Support", "SSL Certificate", "Monthly Reports"],
    featured: false, ctaText: "Get Started",
  },
  {
    name: "Pro", price: "$79", period: "/month",
    description: "For growing companies that need more power and flexibility.",
    features: ["3 Websites", "Unlimited Pages", "Advanced SEO", "Priority Support", "Analytics Dashboard", "A/B Testing", "Custom Domain"],
    featured: true, ctaText: "Start Free Trial",
  },
  {
    name: "Enterprise", price: "Custom", period: "",
    description: "Tailored solutions for large-scale, complex requirements.",
    features: ["Unlimited Websites", "Custom Features", "Dedicated Manager", "24/7 SLA Support", "Custom Integrations", "On-site Training", "White-label Option"],
    featured: false, ctaText: "Contact Sales",
  },
];

// ─── Sections ────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-canvas bg-dot-grid pt-20 pb-24 lg:pt-28 lg:pb-36">
      {/* Animated gradient orbs */}
      <div aria-hidden="true" className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/30 to-accent-light/10 blur-3xl pointer-events-none animate-[gradient-orb_8s_ease-in-out_infinite]" />
      <div aria-hidden="true" className="absolute -bottom-16 -left-16 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent-dark/20 to-accent/10 blur-3xl pointer-events-none animate-[gradient-orb_10s_ease-in-out_infinite_2s]" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-accent-light/5 to-accent/5 blur-3xl pointer-events-none animate-[gradient-orb_12s_ease-in-out_infinite_4s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-3 py-1.5 rounded-full mb-6 animate-[pulse-ring_2s_ease-in-out_infinite]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Now Accepting New Projects
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-fg leading-tight tracking-tight">
              Build. Scale.{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Succeed.
              </span>
            </h1>

            <p className="mt-5 text-lg text-fg-muted max-w-lg leading-relaxed">
              We craft exceptional digital experiences from blazing-fast websites to enterprise apps that help businesses grow and thrive online.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-dark text-on-accent px-6 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-on-accent px-6 py-3.5 rounded-xl font-semibold text-base hover:-translate-y-0.5 transition-all"
              >
                Explore Services
              </a>
            </div>

            {/* Tech stack */}
            <div className="mt-10 pt-8 border-t border-border/40">
              <p className="text-xs text-fg-subtle uppercase tracking-widest mb-4">Built with</p>
              <div className="flex flex-wrap items-center gap-6">
                {["Next.js", "React", "TypeScript", "Tailwind", "Node.js"].map((name) => (
                  <span key={name} className="text-sm font-bold text-fg-subtle/50 tracking-tight">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: floating dashboard card */}
          <div className="hidden lg:block">
            <div className="bg-surface/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-accent/10 border border-border p-6 space-y-4 animate-[float_6s_ease-in-out_infinite]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-fg">Project Dashboard</span>
                <span className="flex items-center gap-1.5 text-xs bg-accent-bg text-accent px-2 py-0.5 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Uptime SLA",      value: "99.9%", trend: "Guaranteed" },
                  { label: "Avg. Load Time",  value: "<1s",   trend: "Optimized" },
                  { label: "Google Score",    value: "100",   trend: "Lighthouse" },
                  { label: "Support",         value: "24/7",  trend: "Always on" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-accent-bg rounded-xl p-4 hover:scale-[1.02] transition-transform">
                    <p className="text-xs text-fg-subtle mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-fg">{stat.value}</p>
                    <span className="text-xs font-medium text-accent">{stat.trend}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent-bg rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-on-accent" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg">Latest deployment successful</p>
                  <p className="text-xs text-fg-subtle">2 minutes ago</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fg">Services We Offer</h2>
          <p className="mt-3 text-fg-muted max-w-2xl mx-auto">
            End-to-end digital solutions designed to accelerate your business growth and online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-surface rounded-xl border border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-light/20 group-hover:from-accent group-hover:to-accent-dark flex items-center justify-center mb-5 text-accent group-hover:text-on-accent transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-fg mb-2">{service.title}</h3>
              <p className="text-fg-muted text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Story */}
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fg mb-6">
              A Fresh Team with a Clear Mission
            </h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Beetallab Solutions was founded with a simple mission: make exceptional web technology accessible to businesses of every size. We are a small, focused team of developers and designers who care deeply about the work we ship.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              We believe great digital products are built at the intersection of technical excellence and deep user empathy. Every project gets our full attention, from concept to launch and beyond.
            </p>
            <p className="text-fg-muted leading-relaxed mb-8">
              We work with startups and small businesses who want a reliable partner - not a faceless agency. You&apos;ll always know who is building your product.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors">
              Work with us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: "100%", label: "Client Ownership of Code" },
              { value: "Full", label: "Transparent Communication" },
              { value: "On-time", label: "Delivery Commitment" },
              { value: "Free", label: "Post-launch Support (30 days)" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface rounded-xl p-6 text-center shadow-sm border border-border hover:border-accent/30 hover:shadow-md transition-all duration-200">
                <p className="text-3xl font-bold bg-gradient-to-br from-accent to-accent-dark bg-clip-text text-transparent leading-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-fg-muted mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fg">How It Works</h2>
          <p className="mt-3 text-fg-muted max-w-2xl mx-auto">
            A proven four-step process that takes your idea from concept to a live, production-ready product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative text-center">
              {idx < steps.length - 1 && (
                <div aria-hidden="true" className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/20 via-accent/60 to-accent/20" />
              )}
              <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-on-accent text-2xl font-bold mx-auto mb-5 ring-4 ring-surface shadow-lg shadow-accent/20">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-fg mb-2">{step.title}</h3>
              <p className="text-sm text-fg-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function CheckIcon({ white }: { white?: boolean }) {
  return (
    <svg className={`w-4 h-4 shrink-0 ${white ? "text-on-accent/80" : "text-accent"}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fg">Simple, Transparent Pricing</h2>
          <p className="mt-3 text-fg-muted max-w-2xl mx-auto">
            No hidden fees. Choose the plan that fits your needs and scale up anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                tier.featured
                  ? "bg-gradient-to-br from-accent to-accent-dark shadow-2xl shadow-accent/30 md:scale-105 ring-2 ring-accent-light/40"
                  : "bg-surface border border-border shadow-sm hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
              }`}
            >
              <div>
                {tier.featured && (
                  <span className="inline-block bg-on-accent/20 text-on-accent text-xs px-3 py-1 rounded-full font-medium mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${tier.featured ? "text-on-accent" : "text-fg"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.featured ? "text-on-accent/80" : "text-fg-muted"}`}>
                  {tier.description}
                </p>
              </div>

              <div>
                <span className={`text-4xl font-bold ${tier.featured ? "text-on-accent" : "text-fg"}`}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={`text-sm ml-1 ${tier.featured ? "text-on-accent/70" : "text-fg-muted"}`}>
                    {tier.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckIcon white={tier.featured} />
                    <span className={`text-sm ${tier.featured ? "text-on-accent/90" : "text-fg-muted"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                  tier.featured
                    ? "bg-surface text-accent hover:bg-accent-bg"
                    : tier.name === "Enterprise"
                    ? "bg-fg text-canvas hover:bg-fg-muted"
                    : "border-2 border-accent text-accent hover:bg-accent hover:text-on-accent"
                }`}
              >
                {tier.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const serviceLinks = ["Web Development", "Mobile Apps", "Cloud Hosting", "SEO Optimization", "UI/UX Design", "Digital Marketing"];
  const companyLinks = ["About Us", "How It Works", "Pricing", "Careers", "Blog"];

  return (
    <footer className="bg-[var(--footer-bg)] text-footer-fg-muted">
      {/* Gradient divider */}
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/beetallab.png" alt="Beetallab Logo" className="h-8 w-auto" />
              <span className="text-footer-fg font-bold text-xl tracking-tight">Beetallab</span>
            </div>
            <p className="text-footer-fg-muted text-sm leading-relaxed">
              Building exceptional digital experiences that help businesses grow and succeed online.
            </p>
            <div className="flex gap-3">
              {[
                {
                  label: "Twitter",
                  icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
                },
                {
                  label: "LinkedIn",
                  icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
                },
                {
                  label: "GitHub",
                  icon: <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-accent/10 hover:bg-accent hover:text-on-accent flex items-center justify-center transition-colors text-footer-fg-muted"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-footer-fg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-footer-fg-muted hover:text-accent-light text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-footer-fg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#about" className="text-footer-fg-muted hover:text-accent-light text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-footer-fg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-footer-fg-muted">
              <li>beetallab@gmail.com</li>
            </ul>
            <a
              href="#contact"
              className="inline-block mt-5 bg-accent hover:bg-accent-dark text-on-accent px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-footer-fg-subtle text-sm">© 2024 Beetallab Solutions. All rights reserved.</p>
          <div className="flex gap-5 text-sm">
            <a href="#" className="text-footer-fg-subtle hover:text-footer-fg transition-colors">Privacy Policy</a>
            <a href="#" className="text-footer-fg-subtle hover:text-footer-fg transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechnologiesSection />
        <AboutSection />
        <HowItWorksSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
