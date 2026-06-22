"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP, WHATSAPP_ICON_PATH } from "./constants";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-desi-ember/20 bg-desi-brown"
    >
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-playfair text-2xl font-bold text-desi-saffron">
              🍛 Desi Eatry
            </p>
            <p className="mt-2 text-desi-cream/70">Ghar Jaisa Khana. Roz.</p>
            <p className="mt-4 max-w-xs text-sm text-desi-cream/60">
              Home-cooked meals by Shabana Naz. Serving Karachi with love since
              2020.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-desi-cream">
              Get In Touch
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-desi-cream/70 transition-colors hover:text-desi-saffron"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP.order}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                >
                  <path d={WHATSAPP_ICON_PATH} />
                </svg>
                Chat on WhatsApp
              </a>
              <p className="text-desi-cream/50">
                In business since 2020 lockdown
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-desi-cream">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-desi-cream/70 transition-colors hover:text-desi-saffron"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-desi-ember/10 pt-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-desi-cream/60">
            © 2026 Desi Eatry. All rights reserved. | Made with ❤️ in Karachi
          </p>
          <Link
            href="/login"
            className="text-xs text-desi-muted transition-colors hover:text-desi-cream"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
