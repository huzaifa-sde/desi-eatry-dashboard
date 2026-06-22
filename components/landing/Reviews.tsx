"use client";

import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Ahmed Raza",
    avatar: "AR",
    stars: 5,
    time: "2 days ago",
    text: "Yaar kya biryani hai! Seedha ghar jaisa taste. Main roz order karta hoon, kabhi disappoint nahi kiya. Shabana Aunty ki cooking is absolutely top-notch! 🔥",
  },
  {
    name: "Bilal Khan",
    avatar: "BK",
    stars: 5,
    time: "1 week ago",
    text: "Best tiffin service in Karachi hands down. Hostel mein rehta hoon, yahan se khana order karta hoon daily. Fresh, hygienic aur sasta bhi. Highly recommend!",
  },
  {
    name: "Usman Tariq",
    avatar: "UT",
    stars: 5,
    time: "3 days ago",
    text: "Nihari was absolutely incredible! Reminded me of my mom's cooking back home. Office mein sab ne request ki ke daily order karo isse 😄",
  },
  {
    name: "Hamza Sheikh",
    avatar: "HS",
    stars: 5,
    time: "5 days ago",
    text: "Desi Eatry ka daal chawal has become my go-to lunch. Simple, homemade aur dil ko sukoon deta hai. Plus delivery is always on time!",
  },
  {
    name: "Zain Malik",
    avatar: "ZM",
    stars: 5,
    time: "Just now",
    text: "Ordered for our office of 15 people. Alag alag dishes, sab ne appreciate kiya. Aunty ji ne packaging bhi kaafi achi ki thi. Will order again for sure!",
  },
  {
    name: "Faisal Butt",
    avatar: "FB",
    stars: 5,
    time: "2 weeks ago",
    text: "Ek dum authentic taste! Karachi mein itna ghar jaisa khana dhoondhna mushkil tha. Thank you Desi Eatry, life saver for us bachelors! 🙏",
  },
  {
    name: "Saad Rehman",
    avatar: "SR",
    stars: 5,
    time: "4 days ago",
    text: "Korma aur naan ka combo was unreal. Honestly better than most restaurants. Aur price bhi bohot reasonable hai. 10/10 recommend karta hoon!",
  },
  {
    name: "Ali Hassan",
    avatar: "AH",
    stars: 5,
    time: "1 week ago",
    text: "Been ordering for 3 months now. Quality kabhi compromise nahi hoti. Chapli kabab phir order karna chahta hoon, was absolutely fire! 🌶️",
  },
  {
    name: "Omar Siddiqui",
    avatar: "OS",
    stars: 5,
    time: "6 days ago",
    text: "Pulao was cooked perfectly — every grain separate, flavor mein dam tha. This is real Karachi food. Not some hotel wali copy. Solid 5 stars!",
  },
  {
    name: "Kashif Nawaz",
    avatar: "KN",
    stars: 5,
    time: "3 weeks ago",
    text: "Khana ordered for a small family gathering. Everyone kept asking who cooked it. Maine bola Desi Eatry — aur sab ne number maang liya! Superb service 🤩",
  },
  {
    name: "Tariq Mehmood",
    avatar: "TM",
    stars: 5,
    time: "8 days ago",
    text: "Daily lunch delivery for our bank branch. Staff bohot khush hai. Food is hygienic, taste is consistent. Shabana ji is truly talented. Highly recommend for offices!",
  },
  {
    name: "Junaid Alam",
    avatar: "JA",
    stars: 5,
    time: "2 days ago",
    text: "Yaar pehli order se hi fan ho gaya. Ghar se door rehna easy ho gaya hai jab aisa khana mil raha ho. Biryani + raita combo = perfection. ❤️",
  },
];

const FB_BLUE = "#1877F2";

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="w-[280px] shrink-0 rounded-2xl bg-desi-cream p-5 shadow-lg sm:w-[300px]">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: FB_BLUE }}
        >
          {review.avatar}
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-zinc-900">{review.name}</p>
          <p className="text-xs" style={{ color: FB_BLUE }}>
            via Facebook
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex">
          {Array.from({ length: review.stars }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <span className="text-xs text-gray-400">{review.time}</span>
      </div>

      <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-zinc-700">
        {review.text}
      </p>
    </div>
  );
}

export default function Reviews() {
  // Duplicate the list for a seamless infinite marquee.
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="overflow-hidden bg-desi-charcoal py-20 sm:py-28">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-medium tracking-widest text-desi-ember">
          WHAT THEY SAY
        </p>
        <h2 className="mt-3 font-playfair text-3xl font-bold text-desi-cream sm:text-4xl">
          Loved by Karachi
        </h2>
      </div>

      <div className="group relative mt-14">
        <div className="desi-marquee flex w-max gap-5 group-hover:[animation-play-state:paused]">
          {loop.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
