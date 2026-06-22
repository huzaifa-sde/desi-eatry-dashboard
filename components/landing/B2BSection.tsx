"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { WHATSAPP } from "./constants";

const FEATURES = [
  "Custom daily menu planning",
  "Timely bulk delivery across Karachi",
  "Hygienic packaging & handling",
  "Flexible pricing for long-term contracts",
];

const STATS = [
  { value: "500+", label: "Meals Served Daily" },
  { value: "12+", label: "Years Experience" },
  { value: "50+", label: "Business Clients" },
  { value: "100%", label: "Fresh & Homemade" },
];

export default function B2BSection() {
  return (
    <section className="bg-gradient-to-r from-desi-ember to-orange-700 py-20 sm:py-28">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest text-desi-cream/80">
            FOR BUSINESSES
          </p>
          <h2 className="mt-3 font-playfair text-3xl font-bold text-desi-cream sm:text-4xl lg:text-5xl">
            Catering That Scales With You
          </h2>
          <p className="mt-4 max-w-lg text-desi-cream/90">
            From 10 to 500 people — offices, banks, construction sites, events.
            We handle the food, you handle the business.
          </p>

          <ul className="mt-6 space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-desi-cream">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-desi-cream/20">
                  <Check className="h-4 w-4" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP.catering}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-desi-brown px-7 py-3 font-medium text-desi-cream shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Get a Quote on WhatsApp
          </a>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-desi-brown/20 p-6 text-center backdrop-blur-sm"
            >
              <p className="font-playfair text-3xl font-bold text-desi-cream sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-desi-cream/80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
