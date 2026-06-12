// ─────────────────────────────────────────────────────────────
// All static content for the website lives here.
// (Colors & fonts live in src/styles/theme.css)
// ─────────────────────────────────────────────────────────────

export const siteInfo = {
  name: "Binary",
  tagline: "Real Estate",
  rera: "KA/01/2026/0001",
  phone: "+91 98765 43210",
  email: "info@binaryrealty.com",
  address: "Chambenahalli, Sarjapur Road, Bengaluru",
};

// ── Hero ──
export const heroData = {
  label: "Binary Real Estate · Sarjapur Road, Bengaluru",
  title: "Ultra-luxury living,",
  titleAccent: "thoughtfully low-density.",
  subtitle:
    "2 & 3 BHK residences across 3.5 lush acres at Chambenahalli — 80%+ open space, only 6 homes per floor, and no common walls.",
  image:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=85",
  specs: [
    { label: "Configuration", value: "2 & 3 BHK" },
    { label: "Price", value: "\u20B98,499/sq.ft" },
    { label: "Open Space", value: "80%+" },
    { label: "Location", value: "Sarjapur Rd" },
  ],
};

// ── About the project ──
export const aboutProject = {
  label: "About the Project",
  title: "One project. Built without compromise.",
  description1:
    "Binary Project 4 is an ultra-luxury residential development at Chambenahalli, Sarjapur Road — one of Bengaluru's fastest-growing investment corridors. Set across 3.5 lush acres with 80%+ open space, every home is designed for privacy, natural light, and cross-ventilation.",
  description2:
    "With only 6 apartments per floor, no common walls, east and north facing options, and large balconies — Binary offers a rare low-density living experience paired with 60+ world-class amenities and an 8,000+ sq.ft clubhouse.",
  specs: [
    { label: "Total Area", value: "3.5 Acres" },
    { label: "Total Units", value: "234 Units" },
    { label: "Open Space", value: "80%+" },
    { label: "Clubhouse", value: "8,000 sq.ft" },
  ],
  image1:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=85",
  image2:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&q=85",
};

// ── Stats ──
export const stats = [
  { value: 234, suffix: "", label: "Premium Homes" },
  { value: 60, suffix: "+", label: "World-Class Amenities" },
  { value: 80, suffix: "%+", label: "Open Green Space" },
  { value: 6, suffix: "", label: "Units Per Floor Only" },
];

// ── Highlights (icon names map to lucide-react in Highlights.jsx) ──
export const highlights = [
  {
    icon: "TrainFront",
    title: "Upcoming Metro Connectivity",
    desc: "Metro connectivity puts Whitefield, Electronic City, Bellandur and the ORR IT corridor within easy reach — future-proofing your investment.",
  },
  {
    icon: "Building2",
    title: "Low-Density Living",
    desc: "Only 6 apartments per floor with no common walls. East and north facing options, large balconies, cross ventilation, and maximum natural light.",
  },
  {
    icon: "Trees",
    title: "80%+ Open Space",
    desc: "Central landscape garden, grand arrival plaza, butterfly garden, fragrance garden, and lush green cover across the 3.5-acre land parcel.",
  },
  {
    icon: "TrendingUp",
    title: "Strong Investment Potential",
    desc: "High rental demand from IT professionals, excellent appreciation on Sarjapur's growth corridor, NRI-friendly, and a fully refundable EOI.",
  },
];

// ── Amenities ──
export const amenities = [
  { title: "Main Swimming Pool", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85" },
  { title: "Yoga Court", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=85" },
  { title: "Amphitheatre & Stage", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&q=85" },
  { title: "Sky Cinema Terrace", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=85" },
  { title: "Clubhouse", img: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=900&q=85" },
  { title: "Kids Adventure Play", img: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=600&q=85" },
  { title: "Meditation Court", img: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=900&q=85" },
  { title: "BBQ Lawn Court", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=85" },
];

// ── Master plan ──
export const masterPlan = {
  label: "Master Plan",
  title: "Thoughtfully planned spaces",
  description:
    "The master plan balances built and open space — premium towers rising amid 80%+ open green landscape with a central garden, grand arrival plaza, premium corner units, and 100ft / 80ft wide road access.",
  image:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85",
  features: [
    { label: "Open Space", value: "80%+" },
    { label: "Land Area", value: "3.5 Acres" },
    { label: "Clubhouse", value: "8,000 sq.ft" },
    { label: "Units / Floor", value: "6 Only" },
  ],
};

// ── Floor plans ──
export const floorPlans = [
  {
    type: "2 BHK",
    tag: "Ultra Luxury",
    area: "1,117 + 507 sq.ft",
    price: "\u20B995 L onwards",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=85",
    features: [
      "Only 6 units per floor",
      "No common walls",
      "East & north facing",
      "Large balconies",
      "Cross ventilation",
      "Vaastu compliant",
    ],
  },
  {
    type: "3 BHK",
    tag: "Ultra Luxury",
    area: "Premium size",
    price: "\u20B91.35 Cr onwards",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=85",
    features: [
      "Only 6 units per floor",
      "No common walls",
      "Maximum natural light",
      "Large balconies",
      "Cross ventilation",
      "Vaastu compliant",
    ],
  },
  {
    type: "Launch Offer",
    tag: "First 50 Flats",
    area: "1,117+ sq.ft",
    price: "\u20B98,500/sq.ft",
    image:
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&q=85",
    features: [
      "Limited period offer",
      "EOI fully refundable",
      "Special launch price",
      "Premium corner units",
      "Grand arrival plaza",
      "IT corridor access",
    ],
  },
];

// ── Buying process (a real sequence — numbered on purpose) ──
export const processSteps = [
  {
    step: "01",
    title: "Site Visit",
    desc: "Book a complimentary guided tour of Binary Project 4 at Chambenahalli, Sarjapur Road.",
  },
  {
    step: "02",
    title: "Consultation",
    desc: "Our experts walk you through floor plans, pricing at \u20B98,499/sq.ft, and EOI details.",
  },
  {
    step: "03",
    title: "Book EOI",
    desc: "Reserve your unit with a fully refundable Expression of Interest — first 50 flats get launch pricing.",
  },
  {
    step: "04",
    title: "Possession",
    desc: "Move into your ultra-luxury home — on time, every time.",
  },
];

// ── Testimonials ──
export const testimonials = [
  {
    name: "Arun Sharma",
    role: "3 BHK Owner, Tower A",
    quote:
      "From the moment we walked in, we knew this was the one. Binary delivered on every promise — quality, timing, and care.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Priya Menon",
    role: "2 BHK Owner, Tower B",
    quote:
      "The attention to detail is remarkable. Only 6 units per floor means complete privacy. Truly ultra-luxury.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Rajesh Nair",
    role: "NRI Investor",
    quote:
      "Sarjapur Road with metro connectivity coming up — Binary is the smartest investment I've made. High rental demand, excellent appreciation.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

// ── Navigation ──
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Gallery", path: "/gallery" },
];

// ── Footer ──
export const footerServices = [
  "Ultra Luxury Apartments",
  "Premium Villas",
  "Commercial Spaces",
  "Plot Development",
  "Interior Design",
];

// ── Location advantage ──
export const locationAdvantage = {
  label: "Location Advantage",
  title: "Connected to everything that matters",
  description:
    "Chambenahalli sits on the Sarjapur Road growth corridor — with the city's tech hubs, schools, and healthcare all within easy reach, and metro connectivity on the way.",
  image:
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1000&q=85",
  points: [
    {
      icon: "TrainFront",
      title: "Upcoming Metro",
      desc: "Planned metro connectivity on the Sarjapur corridor future-proofs daily commutes.",
    },
    {
      icon: "Briefcase",
      title: "ORR IT Corridor",
      desc: "Quick access to Bellandur and the Outer Ring Road tech parks.",
    },
    {
      icon: "Building2",
      title: "Whitefield",
      desc: "Direct route via the Sarjapur–Whitefield road.",
    },
    {
      icon: "Cpu",
      title: "Electronic City",
      desc: "Well connected via Sarjapur Road and Hosur Road.",
    },
    {
      icon: "School",
      title: "Schools & Colleges",
      desc: "Reputed international schools in the immediate neighbourhood.",
    },
    {
      icon: "HeartPulse",
      title: "Healthcare",
      desc: "Multi-speciality hospitals within easy reach of the project.",
    },
  ],
};

// ── FAQ ──
export const faqs = [
  {
    q: "Where is Binary Project 4 located?",
    a: "The project is at Chambenahalli, Sarjapur Road, Bengaluru — on one of the city's fastest-growing investment corridors, with 100ft / 80ft wide road access.",
  },
  {
    q: "What configurations and pricing are available?",
    a: "2 BHK (1,117 + 507 sq.ft) from \u20B995 L and premium 3 BHK from \u20B91.35 Cr, at \u20B98,499/sq.ft. The first 50 flats get a special launch price of \u20B98,500/sq.ft under the launch offer.",
  },
  {
    q: "What does low-density living mean here?",
    a: "Only 6 apartments per floor with no common walls. Homes come with east and north facing options, large balconies, cross ventilation, and maximum natural light.",
  },
  {
    q: "Is the EOI refundable?",
    a: "Yes — the Expression of Interest is fully refundable. It simply reserves your preferred unit while you complete your decision.",
  },
  {
    q: "Is the project RERA registered?",
    a: "Yes. The project is registered under RERA No. KA/01/2026/0001.",
  },
  {
    q: "How much open space and how many amenities are there?",
    a: "Over 80% of the 3.5-acre campus is open green space, with 60+ amenities and an 8,000+ sq.ft clubhouse — including a swimming pool, amphitheatre, sky cinema terrace, and more.",
  },
];
