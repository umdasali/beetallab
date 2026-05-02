"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Contact Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fg">Let&apos;s Build Something Great</h2>
          <p className="mt-3 text-fg-muted max-w-2xl mx-auto">
            Have a project in mind? Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-sm space-y-6">
            <h3 className="text-xl font-semibold text-fg">Get in Touch</h3>

            {[
              {
                label: "Email",
                value: "beetallab@gmail.com",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-bg text-accent flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-fg-subtle font-medium uppercase tracking-wide">{item.label}</p>
                  <p className="text-fg text-sm mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}

            <p className="text-xs text-fg-subtle pt-2 border-t border-border">
              We typically reply within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-sm">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-accent-bg flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-fg">Message Sent!</h3>
                <p className="text-fg-muted text-sm">Thanks for reaching out. We&apos;ll be in touch within 24 hours.</p>
                <button
                  onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", message: "" }); }}
                  className="mt-2 text-accent text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-semibold text-fg mb-2">Send a Message</h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-fg mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full bg-canvas border border-border rounded-lg px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-fg mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-canvas border border-border rounded-lg px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-fg mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={5} required
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-canvas border border-border rounded-lg px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-on-accent py-3 rounded-lg font-semibold text-sm transition-colors shadow-lg shadow-accent/20"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
