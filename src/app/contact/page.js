"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const image = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=78&w=${width}`;

const contactDetails = [
  { label: "Phone", value: "Add company phone", icon: "phone" },
  { label: "Email", value: "Add company email", icon: "mail" },
  { label: "Address", value: "Add office address", icon: "pin" },
  { label: "Business Hours", value: "Add business hours", icon: "clock" },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function ContactIcon({ type }) {
  const paths = {
    phone: (
      <path d="M7 4h4l2 5-2.5 1.5a14 14 0 0 0 6 6L18 14l5 2v4c0 1.1-.9 2-2 2A19 19 0 0 1 5 6c0-1.1.9-2 2-2Z" />
    ),
    mail: (
      <>
        <rect x="4" y="6" width="20" height="16" rx="2" />
        <path d="m4 8 10 7 10-7" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden="true"
      className="h-6 w-6 text-black/70"
    >
      {paths[type]}
    </svg>
  );
}

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setIsSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "subject" || key === "company") {
        return;
      }
      if (!value.trim()) {
        nextErrors[key] = "This field is required.";
      }
    });
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <motion.main
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-x-hidden"
    >
      <motion.section
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? "visible" : "visible"}
        variants={fadeUp}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden bg-[#F2F0F1]"
      >
        <img
          src={image("photo-1497366754035-f200968a6e72", 2200)}
          alt="Professional corporate meeting room with business discussion"
          className="h-[420px] w-full object-cover md:h-[520px]"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl text-center text-white">
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={{ delay: 0.1, duration: 0.55 }}
              className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/80"
            >
              Contact Sky Moon Trading
            </motion.p>
            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={{ delay: 0.18, duration: 0.6 }}
              className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
            >
              Let&apos;s Connect and Explore Global Trade Opportunities
            </motion.h1>
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:text-base"
            >
              Reach out to discuss reliable product sourcing, export
              opportunities and international trade partnerships.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="inquiry"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="mx-auto max-w-frame px-4 py-14 md:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.aside
            variants={fadeUp}
            className="rounded-[28px] border border-black/10 bg-[#F2F0F1] p-6 md:p-8"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
              Company Information
            </p>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Professional trade inquiries start with clear details.
            </h2>
            <p className="mb-8 text-sm leading-7 text-black/70 md:text-base">
              Use the form for product requests, business inquiries and
              international trade conversations.
            </p>
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <motion.div
                  key={detail.label}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-[#F0F0F0]">
                    <ContactIcon type={detail.icon} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-black/50">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-black">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.aside>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-black">
                Full Name
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F7] px-3 py-3 text-sm text-black outline-none transition-all duration-200 focus:border-black/30 focus:bg-white"
                  aria-invalid={Boolean(errors.fullName)}
                />
                {errors.fullName && (
                  <span className="mt-1 block text-xs text-red-600">
                    {errors.fullName}
                  </span>
                )}
              </label>

              <label className="text-sm font-medium text-black">
                Company Name
                <input
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F7] px-3 py-3 text-sm text-black outline-none transition-all duration-200 focus:border-black/30 focus:bg-white"
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-black">
                Email Address
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F7] px-3 py-3 text-sm text-black outline-none transition-all duration-200 focus:border-black/30 focus:bg-white"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <span className="mt-1 block text-xs text-red-600">
                    {errors.email}
                  </span>
                )}
              </label>

              <label className="text-sm font-medium text-black">
                Phone Number
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+00 000 000000"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F7] px-3 py-3 text-sm text-black outline-none transition-all duration-200 focus:border-black/30 focus:bg-white"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <span className="mt-1 block text-xs text-red-600">
                    {errors.phone}
                  </span>
                )}
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-black">
              Subject
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Product inquiry, trade partnership, sourcing request"
                className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F7] px-3 py-3 text-sm text-black outline-none transition-all duration-200 focus:border-black/30 focus:bg-white"
              />
            </label>

            <label className="mt-5 block text-sm font-medium text-black">
              Message
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your product requirement, timeline, destination, quantity or partnership goals."
                className="mt-2 w-full rounded-xl border border-black/10 bg-[#F7F7F7] px-3 py-3 text-sm text-black outline-none transition-all duration-200 focus:border-black/30 focus:bg-white"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <span className="mt-1 block text-xs text-red-600">
                  {errors.message}
                </span>
              )}
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/80"
            >
              Submit Inquiry
            </button>

            {isSubmitted && (
              <p className="mt-4 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                Your inquiry has been prepared successfully. Connect this form
                to your preferred email or backend service when ready.
              </p>
            )}
          </motion.form>
        </div>
      </motion.section>

      <motion.section
        id="quote"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? "visible" : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-frame px-4 pb-14 md:pb-20"
      >
        <div className="rounded-[28px] border border-black/10 bg-[#F2F0F1] p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
                Have a Business Inquiry?
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Whether you are looking for reliable product sourcing, export
                opportunities or international trade partnerships, contact our
                team to discuss your requirements.
              </h2>
            </div>
            <div className="flex justify-start md:justify-end">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/80"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}
