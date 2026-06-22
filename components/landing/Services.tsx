"use client";

import { motion } from "framer-motion";
import { Building2, PartyPopper, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SERVICES: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: UtensilsCrossed,
    title: "Daily Tiffin Service",
    desc: "Fresh breakfast, lunch & dinner delivered to your doorstep. Perfect for bachelor students living alone in Karachi.",
  },
  {
    icon: Building2,
    title: "Office & Mess Catering",
    desc: "Bulk meal catering for offices, banks, construction sites, and local businesses. Custom menu planning available.",
  },
  {
    icon: PartyPopper,
    title: "Event Catering",
    desc: "Weddings, dawats, corporate events — we handle the food so you enjoy the moment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-desi-charcoal py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium tracking-widest text-desi-ember">
            OUR SERVICES
          </p>
          <h2 className="mt-3 font-playfair text-3xl font-bold text-desi-cream sm:text-4xl">
            Food For Every Need
          </h2>
          <hr className="mx-auto mt-4 w-12 border-t-2 border-desi-ember" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, borderColor: "#D85A30" }}
              className="rounded-2xl border border-desi-ember/20 bg-desi-brown p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-desi-ember/20">
                <service.icon className="h-6 w-6 text-desi-ember" />
              </div>
              <h3 className="mt-6 font-playfair text-xl font-semibold text-desi-cream">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-desi-cream/70">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
