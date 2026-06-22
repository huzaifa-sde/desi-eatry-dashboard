# Claude Code Prompt — Desi Eatry Landing Page

> Paste this entire prompt into Claude (best model / Claude Code). It is self-contained and covers every requirement.

---

## PROJECT CONTEXT

You are building a **landing page** for **Desi Eatry**, a home-cooked food and catering business run by **Shabana Naz** based in **Karachi, Pakistan**. She has been running this business since 2020 and previously managed a mess at Hero Construction Limited Hyderabad for 12 years. The business serves:
- **Bachelor students** living in Karachi (primary audience — 3x daily meal tiffin service)
- **Offices, banks, local shops** (B2B catering)
- **Housewives** who don't cook
- **Event catering**

The existing project is a **Next.js + Tailwind + shadcn/ui** application deployed on **Vercel** at `https://desieatry.vercel.app`. Currently the `/` route shows the admin login page. Your task is:

1. **Move the login page** from `/` to `/login`
2. **Create a new public landing page** at `/`
3. **Keep `/dashboard`** working as-is (admin dashboard, protected route)
4. Update any middleware/auth redirects accordingly

---

## TECH STACK

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion (`npm install framer-motion`)
- **Icons**: Lucide React (already included with shadcn)
- **Deployment**: Vercel (no changes needed to vercel config)

---

## THEME — "DESI DAWAT"

**Color Palette** (define in `tailwind.config.js` under `extend.colors`):

```js
desi: {
  brown:   '#1a0a00',   // primary dark background
  ember:   '#D85A30',   // primary accent / CTA
  saffron: '#F0BC5E',   // secondary accent / highlights
  cream:   '#F5ECD7',   // light text / card backgrounds
  charcoal:'#2C1A0E',   // card backgrounds
  muted:   '#8B6A4F',   // muted text
}
```

**Font**: Use Google Fonts — `Playfair Display` for headings (serif, elegant), `Inter` for body text. Add to `app/layout.tsx` via `next/font/google`.

**Overall vibe**: Dark, rich, warm. Like a luxurious Dawat invitation. Ember orange glows on hover. Saffron gold for accents. Cream for text on dark. Think: upscale Pakistani restaurant meets home comfort.

---

## ROUTE CHANGES

### 1. Move Login Page
- Rename/move `app/page.tsx` (current login) → `app/login/page.tsx`
- Update any `redirect('/')` in auth logic to `redirect('/login')`
- Update any `router.push('/')` login redirects to `router.push('/login')`
- If using NextAuth or middleware, update the `signIn` page path to `/login`

### 2. Update Middleware
If `middleware.ts` exists, update matcher and redirect logic:
```ts
// redirect unauthenticated users to /login not /
if (!token) return NextResponse.redirect(new URL('/login', req.url))
```

### 3. Create Landing Page
Create `app/page.tsx` as the new public landing page (detailed below).

---

## LANDING PAGE — FULL SPECIFICATION

### File: `app/page.tsx`

The page is a **single-page scrollable landing page** with these sections in order:

---

### SECTION 1 — NAVBAR

**Component**: `components/landing/Navbar.tsx`

- Fixed top, `backdrop-blur-md`, background `bg-desi-brown/90`
- Left: Brand logo text **"Desi Eatry"** in Playfair Display, saffron color, with a small 🍛 emoji before it
- Right: Nav links — `Home`, `Menu`, `Reviews`, `Contact` (smooth scroll anchors) + a `Order Now` button (ember background, cream text, links to WhatsApp)
- Mobile: hamburger menu using shadcn Sheet component, slides in from right
- Framer Motion: navbar slides down from top on page load with `y: -60 → 0, opacity: 0 → 1`

---

### SECTION 2 — HERO

**Component**: `components/landing/Hero.tsx`

**Layout**: Full viewport height (`min-h-screen`). Dark background `bg-desi-brown`. 

**Background**: A large, high-quality Pakistani food image as background with a dark overlay (`bg-black/60`). Use this free Unsplash image for chicken biryani:
```
https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1920&q=80
```
Use `next/image` with `fill` and `objectFit: cover`, priority.

**Content** (centered, `text-center`, `z-10`):

```
[Framer Motion staggered children]

Small badge: "🌟 Serving Karachi Since 2020"  
  → pill shape, border border-desi-saffron/40, text-desi-saffron, text-sm

H1 heading (Playfair Display, 5xl → 7xl responsive):
  Line 1: "Ghar Jaisa Khana,"  (text-desi-cream)
  Line 2: "Roz. Karachi."      (text-desi-ember)

Subheading (Inter, text-lg, text-desi-cream/80, max-w-xl mx-auto):
  "Fresh home-cooked meals delivered daily. Tiffin service for bachelors,
   office catering, and events — made with love by Ammi's hands."

Two CTA buttons (side by side, mt-8):
  Primary: "Order on WhatsApp" → ember bg, cream text, WhatsApp icon (Lucide)
           onClick opens: https://wa.me/923453562228?text=Hi%20Desi%20Eatry!%20I%20want%20to%20order%20food.
  Secondary: "View Our Menu" → transparent bg, border border-desi-saffron, saffron text
             → smooth scrolls to #menu section

[Below CTAs — animated stats row, mt-12]
Three stat items separated by vertical dividers:
  "12+ Years" | "Experience"
  "500+"      | "Happy Customers"  
  "3x Daily"  | "Fresh Meals"
Each number animates counting up when it enters viewport (use useInView + useState counter)
```

**Framer Motion animations**:
- Badge: `opacity 0→1, y 20→0`, delay 0.1s
- H1: `opacity 0→1, y 30→0`, delay 0.3s
- Subheading: delay 0.5s
- Buttons: delay 0.7s
- Stats: delay 0.9s
- **Steam particle effect**: render 6–8 absolutely positioned small white blurred circles (`w-2 h-2 rounded-full bg-white/20 blur-sm`) that animate upward with varying delays using Framer Motion `animate: { y: [0, -60, -120], opacity: [0, 0.6, 0] }` on infinite loop. Position them near the center-bottom of the hero, above the food image area.

---

### SECTION 3 — WHAT WE OFFER

**Component**: `components/landing/Services.tsx`
**id**: `services`

Background: `bg-desi-charcoal`

Section heading (centered):
```
Small label: "OUR SERVICES" (text-desi-ember, tracking-widest, text-xs)
H2: "Food For Every Need" (Playfair Display, text-desi-cream)
Underline: a short 3rem wide ember-colored hr centered below
```

**3-column grid** (stacks to 1 col on mobile):

| Icon (Lucide) | Title | Description |
|---|---|---|
| `UtensilsCrossed` | Daily Tiffin Service | Fresh breakfast, lunch & dinner delivered to your doorstep. Perfect for bachelor students living alone in Karachi. |
| `Building2` | Office & Mess Catering | Bulk meal catering for offices, banks, construction sites, and local businesses. Custom menu planning available. |
| `PartyPopper` | Event Catering | Weddings, dawats, corporate events — we handle the food so you enjoy the moment. |

Each card:
- Background `bg-desi-brown`, border `border-desi-ember/20`, rounded-2xl, p-8
- Icon in an ember-colored circle (40px circle, ember bg/20, ember icon color)
- Framer Motion: `whileHover={{ scale: 1.02, borderColor: '#D85A30' }}`
- Scroll reveal: `opacity 0→1, y 40→0` staggered per card

---

### SECTION 4 — OUR MENU / CUISINE GALLERY

**Component**: `components/landing/MenuGallery.tsx`
**id**: `menu`

Background: `bg-desi-brown`

Section heading:
```
Label: "TODAY'S MENU"
H2: "Authentic Pakistani Cuisine"
Subtext: "Every dish made fresh daily with hand-picked spices and love."
```

**Grid of 6 cuisine cards** (3 cols desktop, 2 cols tablet, 1 col mobile):

Use these exact Unsplash image URLs (free, HD, no attribution required in UI):

```js
const dishes = [
  {
    name: "Chicken Biryani",
    desc: "Fragrant basmati rice layered with tender chicken & whole spices",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1563379091339-03246963a896?w=600&q=80"
  },
  {
    name: "Beef Nihari",
    desc: "Slow-cooked beef shank stew, a Karachi breakfast classic",
    tag: "Morning Special",
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=80"
  },
  {
    name: "Mutton Korma",
    desc: "Rich, creamy korma slow-cooked with yogurt and aromatic spices",
    tag: "Weekend Special",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80"
  },
  {
    name: "Beef Pulao",
    desc: "Aromatic one-pot rice with tender beef and whole spices",
    tag: "Daily",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80"
  },
  {
    name: "Daal Chawal",
    desc: "Comfort food at its finest — lentils and steamed rice done right",
    tag: "Daily",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80"
  },
  {
    name: "Chapli Kabab",
    desc: "Crispy Peshawari-style minced beef patties with coriander & tomato",
    tag: "Evening",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80"
  }
]
```

Each dish card:
- Aspect ratio 4:3 image with `next/image`, rounded-2xl overflow-hidden
- Dark gradient overlay from bottom: `bg-gradient-to-t from-black/80 via-black/20 to-transparent`
- Tag badge top-right: ember bg, cream text, text-xs, px-2 py-1 rounded-full
- Dish name bottom-left: Playfair Display, text-xl, text-white
- Short desc: text-sm, text-white/70
- Framer Motion: `whileHover={{ scale: 1.03 }}` with `transition={{ duration: 0.3 }}`
- Scroll stagger reveal on entry

---

### SECTION 5 — FACEBOOK-STYLE REVIEWS

**Component**: `components/landing/Reviews.tsx`
**id**: `reviews`

Background: `bg-desi-charcoal`

Section heading:
```
Label: "WHAT THEY SAY"  
H2: "Loved by Karachi"
```

**Auto-scrolling horizontal carousel** (infinite loop, pauses on hover).
Use CSS animation `@keyframes scroll` or Framer Motion `animate={{ x: [0, -50%] }}` on infinite.

**12 fake reviews** that feel real, Facebook-style. Generate cards for these names/content:

```js
const reviews = [
  {
    name: "Ahmed Raza",
    avatar: "AR",
    color: "#1877F2",
    stars: 5,
    time: "2 days ago",
    text: "Yaar kya biryani hai! Seedha ghar jaisa taste. Main roz order karta hoon, kabhi disappoint nahi kiya. Shabana Aunty ki cooking is absolutely top-notch! 🔥"
  },
  {
    name: "Bilal Khan",
    avatar: "BK",
    color: "#1877F2",
    stars: 5,
    time: "1 week ago",
    text: "Best tiffin service in Karachi hands down. Hostel mein rehta hoon, yahan se khana order karta hoon daily. Fresh, hygienic aur sasta bhi. Highly recommend!"
  },
  {
    name: "Usman Tariq",
    avatar: "UT",
    color: "#1877F2",
    stars: 5,
    time: "3 days ago",
    text: "Nihari was absolutely incredible! Reminded me of my mom's cooking back home. Office mein sab ne request ki ke daily order karo isse 😄"
  },
  {
    name: "Hamza Sheikh",
    avatar: "HS",
    color: "#1877F2",
    stars: 5,
    time: "5 days ago",
    text: "Desi Eatry ka daal chawal has become my go-to lunch. Simple, homemade aur dil ko sukoon deta hai. Plus delivery is always on time!"
  },
  {
    name: "Zain Malik",
    avatar: "ZM",
    color: "#1877F2",
    stars: 5,
    time: "Just now",
    text: "Ordered for our office of 15 people. Alag alag dishes, sab ne appreciate kiya. Aunty ji ne packaging bhi kaafi achi ki thi. Will order again for sure!"
  },
  {
    name: "Faisal Butt",
    avatar: "FB",
    color: "#1877F2",
    stars: 5,
    time: "2 weeks ago",
    text: "Ek dum authentic taste! Karachi mein itna ghar jaisa khana dhoondhna mushkil tha. Thank you Desi Eatry, life saver for us bachelors! 🙏"
  },
  {
    name: "Saad Rehman",
    avatar: "SR",
    color: "#1877F2",
    stars: 5,
    time: "4 days ago",
    text: "Korma aur naan ka combo was unreal. Honestly better than most restaurants. Aur price bhi bohot reasonable hai. 10/10 recommend karta hoon!"
  },
  {
    name: "Ali Hassan",
    avatar: "AH",
    color: "#1877F2",
    stars: 5,
    time: "1 week ago",
    text: "Been ordering for 3 months now. Quality kabhi compromise nahi hoti. Chapli kabab phir order karna chahta hoon, was absolutely fire! 🌶️"
  },
  {
    name: "Omar Siddiqui",
    avatar: "OS",
    color: "#1877F2",
    stars: 5,
    time: "6 days ago",
    text: "Pulao was cooked perfectly — every grain separate, flavor mein dam tha. This is real Karachi food. Not some hotel wali copy. Solid 5 stars!"
  },
  {
    name: "Kashif Nawaz",
    avatar: "KN",
    color: "#1877F2",
    stars: 5,
    time: "3 weeks ago",
    text: "Khana ordered for a small family gathering. Everyone kept asking who cooked it. Maine bola Desi Eatry — aur sab ne number maang liya! Superb service 🤩"
  },
  {
    name: "Tariq Mehmood",
    avatar: "TM",
    color: "#1877F2",
    stars: 5,
    time: "8 days ago",
    text: "Daily lunch delivery for our bank branch. Staff bohot khush hai. Food is hygienic, taste is consistent. Shabana ji is truly talented. Highly recommend for offices!"
  },
  {
    name: "Junaid Alam",
    avatar: "JA",
    color: "#1877F2",
    stars: 5,
    time: "2 days ago",
    text: "Yaar pehli order se hi fan ho gaya. Ghar se door rehna easy ho gaya hai jab aisa khana mil raha ho. Biryani + raita combo = perfection. ❤️"
  }
]
```

Each review card design:
- White/cream card: `bg-desi-cream`, rounded-2xl, p-5, min-w-[280px], max-w-[300px]
- Header row: Avatar circle (initials, Facebook blue background `#1877F2`), name (bold, dark), "via Facebook" badge with 🇫 icon in blue
- Star row: 5 filled yellow stars + time ago text (text-gray-400, text-xs)
- Review text: text-sm, dark color, line-clamp-4
- Carousel duplicates the array to create seamless infinite scroll

---

### SECTION 6 — B2B CALLOUT

**Component**: `components/landing/B2BSection.tsx`

Background: ember gradient `bg-gradient-to-r from-desi-ember to-orange-700`

Layout: Two columns (stacks on mobile)

Left:
```
Label: "FOR BUSINESSES"
H2: "Catering That Scales With You" (Playfair Display, cream, large)
Body: "From 10 to 500 people — offices, banks, construction sites, events.
       We handle the food, you handle the business."
Feature list (with checkmark icons):
  ✓ Custom daily menu planning
  ✓ Timely bulk delivery across Karachi
  ✓ Hygienic packaging & handling
  ✓ Flexible pricing for long-term contracts
CTA button: "Get a Quote on WhatsApp" → links to WhatsApp with pre-filled message:
  https://wa.me/923453562228?text=Hi%20Desi%20Eatry!%20I%20want%20to%20enquire%20about%20bulk%20catering%20for%20my%20business.
```

Right: A clean stat grid (2x2):
```
"500+"  Meals Served Daily
"12+"   Years Experience
"50+"   Business Clients
"100%"  Fresh & Homemade
```

Framer Motion: section slides in from left/right on scroll entry.

---

### SECTION 7 — CONTACT / FOOTER

**Component**: `components/landing/Footer.tsx`

Background: `bg-desi-brown` with subtle top border `border-t border-desi-ember/20`

Layout: 3 columns (stacks on mobile)

**Col 1 — Brand**:
- Logo: "🍛 Desi Eatry" (Playfair Display, saffron, text-2xl)
- Tagline: "Ghar Jaisa Khana. Roz." (cream/70)
- Short bio: "Home-cooked meals by Shabana Naz. Serving Karachi with love since 2020."

**Col 2 — Contact**:
- Heading: "Get In Touch"
- Phone: 📞 0345-3562228 (clickable tel: link)
- WhatsApp: link button with WhatsApp green icon, "Chat on WhatsApp"
- Working since: "In business since 2020 lockdown"

**Col 3 — Quick Links**:
- Heading: "Quick Links"
- Links: Home, Our Services, Menu, Reviews — all smooth scroll

**Bottom strip**: `border-t border-desi-ember/10 mt-8 pt-4`
- "© 2025 Desi Eatry. All rights reserved. | Made with ❤️ in Karachi"
- Right side: small "Admin Login" text link → `/login` (subtle, text-desi-muted text-xs)

---

### WHATSAPP FLOATING BUTTON

**Component**: `components/landing/WhatsAppFloat.tsx`

This is a **fixed overlay button** bottom-right corner of the screen, always visible on all pages except `/login` and `/dashboard`.

**Design**:
- Position: `fixed bottom-6 right-6 z-50`
- Button: circle, 60px x 60px, background `#25D366` (WhatsApp green)
- Icon: WhatsApp SVG icon (white, 30px) — use this inline SVG path:
  ```
  M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z
  ```
- **Pulse animation**: two expanding rings behind the button using `::before` or two sibling divs with `animate-ping` class (Tailwind's built-in ping animation), color `bg-green-400/40`
- **Tooltip**: on hover, show a small tooltip to the left: "Chat with us!" — dark bg, cream text, rounded-lg, shadow
- **onClick**: open `https://wa.me/923453562228?text=Hi%20Desi%20Eatry!%20I%20would%20like%20to%20place%20an%20order.` in new tab
- Framer Motion: button enters from right (`x: 100 → 0`) after 2s delay on page load
- **Bounce on idle**: after 5s of no interaction, the button does a gentle `y: [0, -10, 0]` bounce on loop to draw attention

---

## RESPONSIVE BREAKPOINTS

All sections must be pixel-perfect at:
- **Mobile**: 375px–430px (sm)
- **Tablet**: 768px (md) — 2-col grids where applicable
- **Laptop**: 1024px (lg) — full layouts
- **Desktop**: 1280px+ (xl) — max-w-7xl containers, centered

Use `container mx-auto px-4 sm:px-6 lg:px-8` on all sections.
Use Tailwind responsive prefixes throughout (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

---

## PERFORMANCE

- All images use `next/image` with proper `width`, `height` or `fill` + `sizes` props
- Hero image uses `priority` prop
- Cuisine gallery images use `loading="lazy"`
- `framer-motion` imported with tree-shaking: `import { motion } from 'framer-motion'`
- No unused shadcn components imported

---

## FILE STRUCTURE TO CREATE

```
app/
  page.tsx                          ← NEW: landing page
  login/
    page.tsx                        ← MOVED: was app/page.tsx
  dashboard/
    page.tsx                        ← UNCHANGED
  layout.tsx                        ← update fonts here

components/
  landing/
    Navbar.tsx
    Hero.tsx
    Services.tsx
    MenuGallery.tsx
    Reviews.tsx
    B2BSection.tsx
    Footer.tsx
    WhatsAppFloat.tsx

middleware.ts                       ← update redirect to /login
```

---

## FINAL INSTRUCTIONS FOR CLAUDE CODE

1. Read the existing codebase first to understand current auth setup, middleware, and folder structure.
2. Do not break any existing dashboard or auth functionality.
3. Move login page cleanly — update all internal references.
4. Build all landing components in `components/landing/`.
5. Install `framer-motion` if not already present.
6. Add `Playfair Display` and `Inter` via `next/font/google` in layout.
7. Extend `tailwind.config.js` with the `desi` color palette.
8. The WhatsApp number is **03453562228** — format as `923453562228` for wa.me links (drop leading 0, add 92).
9. Test that `/`, `/login`, and `/dashboard` all work independently after changes.
10. Ensure the floating WhatsApp button does NOT appear on `/login` or `/dashboard` pages — use `usePathname()` from `next/navigation` to conditionally render it in layout.

---

*Brand: Desi Eatry | Owner: Shabana Naz | Contact: 03453562228 | Karachi, Pakistan*
