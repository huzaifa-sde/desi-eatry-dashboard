"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MessageCircle, UtensilsCrossed } from "lucide-react";
import { WHATSAPP } from "./constants";

const STATS = [
  { value: 12, suffix: "+ Years", label: "Experience" },
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 3, suffix: "x Daily", label: "Fresh Meals" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-playfair text-2xl font-bold text-desi-saffron sm:text-3xl">
      {count}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-desi-brown"
    >
      {/* Background image + overlay */}
      <Image
        src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1920&q=80"
        alt="Chicken biryani"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-desi-brown via-desi-brown/40 to-transparent" />

      {/* Steam particles */}
      <div className="pointer-events-none absolute bottom-1/3 left-1/2 -translate-x-1/2">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20 blur-sm"
            style={{ left: `${(i - 3) * 16}px` }}
            animate={{ y: [0, -60, -120], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="inline-block rounded-full border border-desi-saffron/40 px-4 py-1.5 text-sm text-desi-saffron"
        >
          🌟 Serving Karachi Since 2020
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-6 font-playfair text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
        >
          <span className="block text-desi-cream">Ghar Jaisa Khana,</span>
          <span className="block text-desi-ember">Roz. Karachi.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="mx-auto mt-6 max-w-xl text-lg text-desi-cream/80"
        >
          Fresh home-cooked meals delivered daily. Tiffin service for bachelors,
          office catering, and events — made with love by Ammi&apos;s hands.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.7}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={WHATSAPP.order}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-desi-ember px-7 py-3 font-medium text-desi-cream shadow-lg shadow-desi-ember/30 transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Order on WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full border border-desi-saffron px-7 py-3 font-medium text-desi-saffron transition-colors hover:bg-desi-saffron/10"
          >
            <UtensilsCrossed className="h-5 w-5" />
            View Our Menu
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.9}
          className="mx-auto mt-12 flex max-w-2xl items-center justify-center divide-x divide-desi-cream/20"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="px-5 text-center sm:px-8">
              <div>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs text-desi-cream/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
