"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WHATSAPP } from "./constants";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-desi-ember/10 bg-desi-brown/90 backdrop-blur-md"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-playfair text-xl font-bold text-desi-saffron sm:text-2xl"
        >
          <span className="mr-1.5">🍛</span>Desi Eatry
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-desi-cream/80 transition-colors hover:text-desi-saffron"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP.order}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-desi-ember px-5 py-2 text-sm font-medium text-desi-cream shadow-lg shadow-desi-ember/20 transition-colors hover:bg-desi-ember/90"
          >
            Order Now
          </a>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="text-desi-cream transition-colors hover:text-desi-saffron"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-desi-ember/20 bg-desi-brown text-desi-cream"
            >
              <SheetTitle className="font-playfair text-xl text-desi-saffron">
                🍛 Desi Eatry
              </SheetTitle>
              <div className="mt-8 flex flex-col gap-6 px-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-desi-cream/80 transition-colors hover:text-desi-saffron"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP.order}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-desi-ember px-5 py-3 text-center font-medium text-desi-cream"
                >
                  Order Now
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
