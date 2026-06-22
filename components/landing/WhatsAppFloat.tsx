"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WHATSAPP, WHATSAPP_ICON_PATH } from "./constants";

export default function WhatsAppFloat() {
  const [idle, setIdle] = useState(false);

  // Start a gentle bounce after 5s of no interaction.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const schedule = () => {
      setIdle(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), 5000);
    };

    const events = ["mousemove", "keydown", "scroll", "touchstart"];
    schedule();
    events.forEach((e) => window.addEventListener(e, schedule, { passive: true }));

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, schedule));
    };
  }, []);

  return (
    <motion.a
      href={WHATSAPP.float}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="group fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-lg"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 animate-ping rounded-full bg-green-400/40" />
      <span
        className="absolute inset-0 animate-ping rounded-full bg-green-400/30"
        style={{ animationDelay: "0.6s" }}
      />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-desi-charcoal px-3 py-1.5 text-sm text-desi-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat with us!
      </span>

      {/* Icon (with idle bounce) */}
      <motion.span
        animate={idle ? { y: [0, -10, 0] } : { y: 0 }}
        transition={
          idle
            ? { duration: 1, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }
        }
        className="relative"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[30px] w-[30px] fill-white"
          aria-hidden="true"
        >
          <path d={WHATSAPP_ICON_PATH} />
        </svg>
      </motion.span>
    </motion.a>
  );
}
