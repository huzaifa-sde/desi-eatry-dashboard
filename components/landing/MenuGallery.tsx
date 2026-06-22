"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DISHES = [
  {
    name: "Chicken Biryani",
    desc: "Fragrant basmati rice layered with tender chicken & whole spices",
    tag: "Bestseller",
    image:
      "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=1920&q=80",
  },
  {
    name: "Beef Nihari",
    desc: "Slow-cooked beef shank stew, a Karachi breakfast classic",
    tag: "Morning Special",
    image:
      "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=80",
  },
  {
    name: "Mutton Korma",
    desc: "Rich, creamy korma slow-cooked with yogurt and aromatic spices",
    tag: "Weekend Special",
    image:
      "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80",
  },
  {
    name: "Beef Pulao",
    desc: "Aromatic one-pot rice with tender beef and whole spices",
    tag: "Daily",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80",
  },
  {
    name: "Daal Chawal",
    desc: "Comfort food at its finest — lentils and steamed rice done right",
    tag: "Daily",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80",
  },
  {
    name: "Chapli Kabab",
    desc: "Crispy Peshawari-style minced beef patties with coriander & tomato",
    tag: "Evening",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  },
];

export default function MenuGallery() {
  return (
    <section id="menu" className="bg-desi-brown py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium tracking-widest text-desi-ember">
            TODAY&apos;S MENU
          </p>
          <h2 className="mt-3 font-playfair text-3xl font-bold text-desi-cream sm:text-4xl">
            Authentic Pakistani Cuisine
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-desi-cream/70">
            Every dish made fresh daily with hand-picked spices and love.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish, i) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                unoptimized
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute right-3 top-3 rounded-full bg-desi-ember px-2 py-1 text-xs font-medium text-desi-cream">
                {dish.tag}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-playfair text-xl font-semibold text-white">
                  {dish.name}
                </h3>
                <p className="mt-1 text-sm text-white/70">{dish.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
