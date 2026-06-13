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
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85",
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

// ── Amenities — full categorized list from the marketing sheet ──
export const amenityCategories = [
  { icon: "DoorOpen", name: "Arrival & Access", items: ["Entry/Exit Gate with Security Cabin", "Clubhouse Drop-Off", "Tower Lobby Drop-Off", "Service Entry/Exit", "Waiting Plaza", "Viewing Gallery"] },
  { icon: "Flower2", name: "Spiritual & Wellness", items: ["Temple Garden", "Meditation Court", "Ritual Court", "Wellness Garden", "Reflexology Path", "Fragrance Garden", "Interactive Sensory Garden Pavilion"] },
  { icon: "Users", name: "Community & Social", items: ["Community Plaza", "Amphitheatre & Performance Stage", "Community Lawn", "Informal Seating Area", "Leisure Court", "Sculpture Court", "Working Pod", "Resting Pavilion", "Library & Reading Pavilion"] },
  { icon: "Dumbbell", name: "Sports & Fitness", items: ["Multi-Purpose Play Court", "Outdoor Exercise Station", "Fitness Deck", "Skating Rink", "Cricket Practice Nets", "Walking Trail"] },
  { icon: "Baby", name: "Kids Recreation", items: ["Adventure Play Area", "Toddler Interactive Play Zone", "Kids Play Lawn", "Circle of Joy Play Zone", "Tree House & Jungle Gym"] },
  { icon: "PawPrint", name: "Senior & Pet Zones", items: ["Senior Citizen Corner", "Pet Play Park"] },
  { icon: "Leaf", name: "Landscape Features", items: ["Earth Berms", "Floral Garden", "Butterfly Garden", "Avenue Plantation", "Community Spine Walkway"] },
  { icon: "Waves", name: "Swimming Pool Zone", items: ["Main Swimming Pool", "Kids Pool", "Premium Pool Lounge", "Pool Deck Cabanas"] },
  { icon: "Sunset", name: "Terrace Amenities", items: ["Yoga Court", "Sky Cinema Terrace", "BBQ Lawn Court", "Juice Bar Counter", "Bonfire Court", "Sun Deck Lounge", "Star Gazing Court", "Sunrise Court", "Sunset Deck"] },
];

// Featured amenity images for the Home mosaic
export const amenityImages = [
  { title: "Main Swimming Pool", tag: "Pool Zone", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85" },
  { title: "Amphitheatre & Stage", tag: "Community", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85" },
  { title: "Sky Cinema Terrace", tag: "Terrace", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=85" },
  { title: "8,000+ sq.ft Clubhouse", tag: "Clubhouse", img: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=900&q=85" },
  { title: "Meditation Court", tag: "Wellness", img: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&q=85" },
  { title: "Kids Adventure Play", tag: "Kids", img: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=900&q=85" },
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

// ════════════════════════════════════════════════════════════
//  ABOUT PAGE
// ════════════════════════════════════════════════════════════

// NOTE: Developer, team, milestones, past projects and partner
// entries below are starter copy — replace with your real
// company details, people, and logos.

export const developer = {
  label: "About the Developer",
  title: "Binary — a developer built around one promise",
  description1:
    "Binary Real Estate is a Bengaluru-based developer focused on doing one thing exceptionally well: low-density, ultra-luxury residential communities. Instead of spreading across dozens of launches, we put our entire design, engineering, and customer teams behind one flagship project at a time.",
  description2:
    "Binary Project 4 at Chambenahalli, Sarjapur Road, is the latest expression of that philosophy — 234 homes across 3.5 acres, 80%+ open space, and a level of detail that only single-project focus makes possible.",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=85",
  facts: [
    { label: "Focus", value: "One Project at a Time" },
    { label: "Approach", value: "In-House Design & Build" },
    { label: "Registration", value: "RERA Compliant" },
    { label: "Buyers", value: "End Users, Investors & NRIs" },
  ],
};

export const missionVision = {
  mission: {
    title: "Our Mission",
    desc: "To build homes where density never compromises dignity — six homes per floor, no common walls, and light and air in every room, delivered on time, every time.",
  },
  vision: {
    title: "Our Vision",
    desc: "To make Sarjapur Road's growth corridor home to Bengaluru's most liveable low-density communities — places families choose for life, not just for appreciation.",
  },
  values: [
    { icon: "ShieldCheck", title: "Transparency", desc: "Clear pricing, refundable EOI, and RERA-registered commitments." },
    { icon: "Ruler", title: "Design First", desc: "Vaastu-compliant planning, cross ventilation, and maximum natural light." },
    { icon: "Clock", title: "On-Time Delivery", desc: "Construction milestones planned, tracked, and shared openly." },
    { icon: "HeartHandshake", title: "Family-Centric", desc: "Communities designed around kids, seniors, and everyday life." },
  ],
};

export const team = [
  { name: "Managing Director", role: "Leadership", desc: "Sets the single-project philosophy and oversees delivery end to end.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80" },
  { name: "Head of Design", role: "Architecture & Planning", desc: "Leads master planning, unit design, and the 80% open-space landscape.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" },
  { name: "Head of Projects", role: "Engineering & Execution", desc: "Owns construction quality, timelines, and vendor partnerships.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80" },
  { name: "Head of Customer Relations", role: "Sales & CRM", desc: "Guides buyers from first site visit through registration and handover.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80" },
];

export const milestones = [
  { year: "Phase 1", title: "Land Acquisition", desc: "3.5-acre parcel secured at Chambenahalli with Sarjapur Main Road frontage and 100ft / 80ft road access." },
  { year: "Phase 2", title: "Master Planning", desc: "80%+ open-space master plan finalised — central landscape garden, grand arrival plaza, premium corner units." },
  { year: "Phase 3", title: "RERA Registration", desc: "Project registered (KA/01/2026/0001) with approvals in place for 234 ultra-luxury homes." },
  { year: "Phase 4", title: "Launch", desc: "Launch offer opened — first 50 flats at \u20B98,500/sq.ft with a fully refundable EOI." },
];

export const pastProjects = {
  label: "Track Record",
  title: "The projects behind Project 4",
  desc: "Each Binary phase has refined the same playbook — low density, generous open space, and on-time delivery.",
  projects: [
    { name: "Binary Project 1", status: "Delivered", type: "Boutique Residences", note: "Our first low-density community — the proof of concept for no-common-walls living.", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80" },
    { name: "Binary Project 2", status: "Delivered", type: "Premium Apartments", note: "Refined the clubhouse-led amenity model and family-centric landscaping.", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80" },
    { name: "Binary Project 3", status: "Handover Stage", type: "Luxury Residences", note: "Scaled the formula to a larger land parcel without raising density.", image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&q=80" },
  ],
};

export const partners = {
  label: "Partners",
  title: "Home loan & channel partners",
  desc: "Loan assistance is available through leading banks and housing finance companies. (Replace these with your confirmed partner logos.)",
  names: ["HDFC Bank", "SBI Home Loans", "ICICI Bank", "Axis Bank", "Kotak Mahindra", "LIC Housing"],
};

// ════════════════════════════════════════════════════════════
//  SERVICES PAGE
// ════════════════════════════════════════════════════════════

export const servicesGrid = {
  label: "Our Services",
  title: "Everything under one roof",
  desc: "From the first site visit to interiors after handover — Binary supports the full home-buying journey.",
  items: [
    { icon: "Building2", title: "Ultra Luxury Apartments", desc: "2 & 3 BHK homes with only 6 units per floor, no common walls, and Vaastu-compliant layouts." },
    { icon: "Home", title: "Premium Villas", desc: "Limited villa inventory designed with the same low-density, light-first principles." },
    { icon: "Store", title: "Commercial Spaces", desc: "Select retail and office spaces along the Sarjapur Main Road frontage." },
    { icon: "LandPlot", title: "Plot Development", desc: "Planned plotted developments on the STRR / PRR growth corridors." },
    { icon: "Sofa", title: "Interior Design", desc: "In-house interior packages so your home is move-in ready on possession day." },
    { icon: "KeyRound", title: "NRI & Rental Assistance", desc: "End-to-end support for NRI buyers, plus rental management in a high-demand IT catchment." },
  ],
};

export const serviceDetails = [
  {
    title: "Residences designed around six families per floor",
    desc: "Every apartment service we offer starts from the same blueprint: only 6 units per floor, no common walls, east and north facing options, large balconies, cross ventilation, and maximum natural light. Premium 2, 3 & 4 BHK configurations are planned for families who want space without isolation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85",
    points: ["Only 6 units per floor", "No common walls", "East & north facing options", "Vaastu compliant homes"],
  },
  {
    title: "Investment support for the Sarjapur growth corridor",
    desc: "For investors and NRIs, we pair the project's fundamentals — strong IT employee catchment, high rental demand, upcoming metro connectivity, and access to the STRR & PRR corridors — with practical help: documentation, loan tie-ups, and rental assistance after handover.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1000&q=85",
    points: ["High rental demand", "Excellent appreciation potential", "NRI investment friendly", "Future infrastructure development"],
  },
];

export const offers = {
  label: "Offers & Pricing",
  title: "Transparent pricing, launch-only offers",
  base: { label: "Standard Rate", value: "\u20B98,499", unit: "per sq.ft" },
  launch: {
    label: "Launch Offer",
    value: "\u20B98,500",
    unit: "per sq.ft",
    note: "Special launch pricing for the first 50 flats only — limited period offer.",
  },
  rows: [
    { config: "2 BHK Ultra Luxury", size: "1,117 + 507 sq.ft", price: "\u20B995 Lakhs onwards" },
    { config: "3 BHK Ultra Luxury", size: "Premium size", price: "\u20B91.35 Crore onwards" },
  ],
  perks: ["EOI fully refundable", "First 50 flats: launch price", "Bank loan assistance", "NRI friendly process"],
};

export const downloads = {
  label: "Downloads",
  title: "Take the project home",
  desc: "Brochures and plans for offline review. (Link these to your actual PDF files.)",
  files: [
    { title: "Project Brochure", meta: "PDF · Overview, USPs & amenities", href: "#" },
    { title: "2 & 3 BHK Floor Plans", meta: "PDF · Unit layouts & dimensions", href: "#" },
    { title: "Master Plan", meta: "PDF · 3.5-acre site layout", href: "#" },
    { title: "Cost Sheet & Offers", meta: "PDF · Pricing & launch offer", href: "#" },
  ],
};

export const howWeWork = {
  label: "How We Work",
  title: "A guided path from enquiry to keys",
  steps: [
    { icon: "PhoneCall", title: "Enquiry & Consultation", desc: "Share your requirement — configuration, budget, timeline. We respond within 24 hours with options." },
    { icon: "MapPin", title: "Guided Site Visit", desc: "Walk the 3.5-acre site, view the master plan, and shortlist towers, floors, and facings." },
    { icon: "FileText", title: "EOI & Documentation", desc: "Reserve your unit with a fully refundable EOI. We handle agreements and paperwork." },
    { icon: "Landmark", title: "Loan Assistance", desc: "Tie-ups with leading banks make sanction and disbursal smooth — including for NRIs." },
    { icon: "KeyRound", title: "Registration & Handover", desc: "Registration support, snag-free handover, and interiors assistance if you opt in." },
  ],
};

// ════════════════════════════════════════════════════════════
//  BLOG
// ════════════════════════════════════════════════════════════

export const blogCategories = ["All", "Location", "Design", "Investment", "Buying Guide"];

export const blogPosts = [
  {
    slug: "sarjapur-road-growth-corridor",
    category: "Location",
    title: "Why Sarjapur Road is Bengaluru's fastest-growing corridor",
    excerpt: "Metro connectivity, the ORR IT corridor, and STRR/PRR access — what the next decade looks like for Chambenahalli.",
    date: "May 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    body: [
      "Sarjapur Road has quietly become one of Bengaluru's most watched residential corridors. With a strong IT employee catchment, 10–15 minute access to the ORR IT corridor, and easy connectivity to Whitefield, Electronic City and Bellandur, demand here is driven by people who actually live and work nearby — not just speculation.",
      "The upcoming metro connectivity is the multiplier. Corridors that gain metro access in Bengaluru have historically seen both rental demand and capital values strengthen, and Sarjapur's planned line puts Chambenahalli on that map.",
      "Add access to the STRR and PRR corridors and 100ft / 80ft wide road frontage, and the infrastructure story becomes hard to ignore. For end users it means shorter commutes; for investors, it means a corridor with multiple demand drivers rather than one.",
    ],
  },
  {
    slug: "low-density-living-explained",
    category: "Design",
    title: "Low-density living: what 6 units per floor really means",
    excerpt: "Privacy, light, and ventilation — the design decisions behind Binary Project 4.",
    date: "May 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80",
    body: [
      "Most apartment projects in Bengaluru pack 8–12 units onto every floor. Binary Project 4 caps it at six — and pairs that with no common walls between homes. The result is something rare in city living: you never share a wall with a neighbour.",
      "Lower density changes the daily experience in quieter ways too. Lobbies are calmer, lifts are faster, and every home gets east or north facing options with cross ventilation and maximum natural light, because the floor plate isn't fighting for frontage.",
      "It also shapes the land plan. With only 234 homes across 3.5 acres, more than 80% of the site stays open — a central landscape garden, butterfly and fragrance gardens, and a community spine walkway instead of tower shadows.",
    ],
  },
  {
    slug: "understanding-the-eoi",
    category: "Buying Guide",
    title: "Understanding the EOI: a fully refundable way to reserve",
    excerpt: "How the Expression of Interest works, and why the first 50 flats get launch pricing.",
    date: "April 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    body: [
      "An Expression of Interest (EOI) is the simplest way to hold your preferred unit while you complete your decision. At Binary Project 4, the EOI is fully refundable — if you change your mind, your money comes back.",
      "Why book early? The launch offer prices the first 50 flats at \u20B98,500/sq.ft for a limited period. Early EOI holders also get first pick of facings, floors, and the premium corner units.",
      "The process is deliberately light: a short form, a guided site visit, and a consultation on floor plans and pricing at \u20B98,499/sq.ft. Documentation only begins once you confirm.",
    ],
  },
  {
    slug: "nri-investment-guide",
    category: "Investment",
    title: "An NRI's guide to investing on Sarjapur Road",
    excerpt: "Rental yield, appreciation drivers, and how Binary supports buyers from abroad.",
    date: "April 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    body: [
      "For NRIs, Bengaluru's east and south-east corridors remain the most requested micro-markets — and Sarjapur Road sits at the centre of that demand, powered by the city's largest IT employee catchment.",
      "Two numbers matter for any rental investment: occupancy and tenant quality. Proximity to the ORR IT corridor, Whitefield, and Electronic City keeps both high, while the upcoming metro adds a long-term appreciation driver.",
      "Binary's process is NRI-friendly end to end: a fully refundable EOI to reserve remotely, video walkthroughs, documentation support, bank loan tie-ups, and rental assistance after handover.",
    ],
  },
  {
    slug: "vaastu-and-ventilation",
    category: "Design",
    title: "Vaastu, ventilation, and the science of a healthy home",
    excerpt: "East and north facings, cross ventilation, and why orientation still matters.",
    date: "March 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80",
    body: [
      "Vaastu compliance at Binary Project 4 isn't an afterthought — the floor plates were planned around east and north facing options from day one, which is only practical when a floor carries six homes instead of ten.",
      "Orientation has a measurable payoff: morning light in living spaces, cooler afternoons, and genuine cross ventilation because every home opens on multiple sides — there are no common walls to block airflow.",
      "Large balconies complete the picture, extending living space outward and keeping the connection to the 80% open landscape below.",
    ],
  },
  {
    slug: "amenities-that-matter",
    category: "Buying Guide",
    title: "60+ amenities: which ones will you actually use?",
    excerpt: "From the sky cinema terrace to the pet park — a practical tour of the amenity plan.",
    date: "March 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    body: [
      "Amenity counts can be marketing noise — what matters is whether the plan covers your actual week. Binary's 60+ amenities are organised into nine zones, from arrival and wellness to terrace decks.",
      "Daily-use spaces anchor the plan: a walking trail, fitness deck and outdoor exercise stations, the 8,000+ sq.ft clubhouse, and a main pool with a kids' pool and lounge deck.",
      "The differentiators live on the terrace and in the gardens: a sky cinema, star gazing and bonfire courts, a butterfly garden, a tree house and jungle gym for kids, plus dedicated senior citizen and pet zones — designed so every member of the family, on two legs or four, has a place.",
    ],
  },
];

// ════════════════════════════════════════════════════════════
//  GALLERY PAGE
// ════════════════════════════════════════════════════════════

export const galleryCategories = ["All", "Exteriors", "Interiors", "Amenities", "Landscape"];

export const galleryImages = [
  { category: "Exteriors", title: "Tower Facade", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=85" },
  { category: "Interiors", title: "Living Room", img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=900&q=85" },
  { category: "Amenities", title: "Main Swimming Pool", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85" },
  { category: "Landscape", title: "Central Garden", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=900&q=85" },
  { category: "Interiors", title: "Master Bedroom", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=85" },
  { category: "Exteriors", title: "Grand Arrival Plaza", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85" },
  { category: "Amenities", title: "Clubhouse Lounge", img: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=900&q=85" },
  { category: "Landscape", title: "Walking Trail", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=900&q=85" },
  { category: "Interiors", title: "Kitchen & Dining", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&q=85" },
  { category: "Amenities", title: "Yoga Court", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=85" },
  { category: "Exteriors", title: "Balcony Views", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85" },
  { category: "Landscape", title: "Butterfly Garden", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=85" },
];

export const droneSection = {
  label: "Aerial View",
  title: "3.5 acres from above",
  desc: "Drone footage of the site at Chambenahalli — Sarjapur Main Road frontage with 100ft / 80ft wide road access.",
  poster: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=85",
  videoUrl: "", // ← paste your drone footage .mp4 / YouTube embed URL here
  stats: [
    { label: "Land Parcel", value: "3.5 Acres" },
    { label: "Open Space", value: "80%+" },
    { label: "Road Frontage", value: "100ft / 80ft" },
  ],
};

export const virtualTour = {
  label: "360\u00B0 Virtual Tour",
  title: "Walk the show flat from anywhere",
  desc: "Explore the 2 & 3 BHK show homes in an immersive 360\u00B0 tour — ideal for NRIs and outstation buyers.",
  tourUrl: "", // ← paste your 360° tour embed URL (Kuula / Matterport) here
  poster: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
};

export const beforeAfter = {
  label: "Progress",
  title: "From ground-breaking to skyline",
  desc: "Drag the slider to compare the site at launch with the finished vision.",
  before: { label: "Site — Day One", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85" },
  after: { label: "The Vision", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85" },
};

export const walkthrough = {
  label: "Project Walkthrough",
  title: "A guided tour of Binary Project 4",
  desc: "Our team walks you through the arrival plaza, clubhouse, show flat, and terrace amenities.",
  poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
  videoUrl: "", // ← paste your walkthrough video URL here
  chapters: [
    { time: "00:00", title: "Grand Arrival Plaza" },
    { time: "01:20", title: "Clubhouse & Pool Zone" },
    { time: "03:05", title: "2 & 3 BHK Show Flats" },
    { time: "05:40", title: "Terrace — Sky Cinema & Decks" },
  ],
};

export const spotlightTestimonial = {
  quote:
    "We compared eight projects on Sarjapur Road before choosing Binary. Nothing else offered six homes per floor with no common walls — you feel the difference the moment you step out of the lift.",
  name: "Kavitha & Suresh Iyer",
  role: "3 BHK Owners",
  image: "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=900&q=85",
};

export const awards = {
  label: "Awards & Recognition",
  title: "Recognition that follows the work",
  desc: "(Replace these with your actual awards and certifications.)",
  items: [
    { icon: "Trophy", title: "Design Excellence", meta: "Low-Density Residential Category" },
    { icon: "Medal", title: "On-Time Delivery", meta: "Customer Commitment Recognition" },
    { icon: "Award", title: "RERA Registered", meta: "KA/01/2026/0001" },
    { icon: "Star", title: "Rated by Residents", meta: "Across delivered Binary phases" },
  ],
};

// ── CTA banners ──
export const ctaServices = {
  title: "Lock the launch price before the first 50 flats go",
  desc: "\u20B98,500/sq.ft launch offer · EOI fully refundable · 2 BHK from \u20B995 L, 3 BHK from \u20B91.35 Cr",
  primary: { label: "Book a Site Visit", href: "/#contact" },
};

export const ctaGallery = {
  title: "Seeing it in person is better",
  desc: "Book a complimentary guided tour of the site, show flats, and clubhouse at Chambenahalli, Sarjapur Road.",
  primary: { label: "Schedule My Visit", href: "/#contact" },
  image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85",
};



// ── Amenities section (Recent Works layout) ──
export const amenitiesSection = {
  eyebrow: "Recent Works",
  titleLine1Before: "Some of ",
  titleItalic: "our crafts",
  titleLine2: "made with love",
  cta: { label: "Contact Us", href: "/#contact" },
  loadMoreLabel: "Load More Amenities",
  showLessLabel: "Show Less",
};

export const amenitiesMain = {
  img: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=900&q=85",
  title: "Villa Furnishing & Interior",
  desc: "A luxury villa project where we combined contemporary furnishings with elegant interiors to create a warm, welcoming, and sophisticated living environment.",
};

export const amenitiesSide = [
  {
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=85",
    title: "Luxury Hotel Renovation",
    desc: "A full-scale renovation blending modern luxury with timeless hospitality, transforming guest experiences with refined interiors and premium finishes.",
  },
  {
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=85",
    title: "Residence Swimming Pool",
    desc: "An exclusive residential pool design that merges functionality with leisure, featuring stylish landscaping and state-of-the-art construction.",
  },
];

export const amenitiesMore = [
  { img: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=700&q=85", title: "Wellness Gardens", desc: "Meditation court, fragrance and butterfly gardens, and a reflexology path." },
  { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=85", title: "Sports & Fitness", desc: "Fitness deck, cricket nets, skating rink, and a landscaped walking trail." },
  { img: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=700&q=85", title: "Kids Recreation", desc: "Adventure play area, toddler zone, tree house, and a circle-of-joy play court." },
  { img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=700&q=85", title: "Community Plazas", desc: "Amphitheatre and performance stage, community lawns, and leisure courts." },
  { img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=700&q=85", title: "Landscape Gardens", desc: "Central garden, grand arrival plaza, floral beds, and a community spine walkway." },
  { img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=700&q=85", title: "Senior & Pet Zones", desc: "A dedicated senior citizen corner and a pet play park for the whole family." },
];


export const whyChooseUs = {
  intro:
    "One in-house project, built end to end. From land to handover, every decision at Binary Project 4 is made by a single accountable team.",
  titleLine1: "Why choose us for",
  titleLine2: "the best living experience",
  image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85",
  explore: { label: "Explore", href: "/about" },
  points: [
    { num: "01", desc: "Only 6 homes per floor with no common walls — privacy, light, and cross ventilation in every residence." },
    { num: "02", desc: "80%+ open space across 3.5 acres, with a central garden, grand arrival plaza, and 60+ curated amenities." },
    { num: "03", desc: "A growth-corridor address — upcoming metro, ORR IT corridor access, and a fully refundable EOI to reserve." },
  ],
};


// ── Floor plans (overlap-card layout) ──


export const floorPlansSection = {
  eyebrow: "Project Planning",
  heading: "Homes designed around",
  headingItalic: "the way you live",
  viewMoreLabel: "View More",
};
  // description:
  //   "Two thoughtfully planned configurations across Binary Project 4 — each with only 6 homes per floor, no common walls, and light on every side. Choose the one that fits your family.",
   

 export const floorPlansCards = [
  {
     title: "2 BHK Residences",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&q=85",
    price: "\u20B995 Lakhs",
    priceNote: "onwards",
    specs: ["1,117 + 507 sq.ft", "East & North Facing", "No Common Walls"],
    desc: "Generous two-bedroom homes with large balconies and light on every side.",
    href: "/#contact",
  },
  {
     title: "3 BHK Residences",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=85",
    price: "\u20B91.35 Crore",
    priceNote: "onwards",
    specs: ["Premium Size", "Vaastu Compliant", "Cross Ventilation"],
    desc: "Expansive family homes — only six per floor, crafted for privacy and air.",
    href: "/#contact",
  },
];

 // ── Process section (panel layout) ──
export const processSection = {
  eyebrow: "4 Simple Steps",
  titleLine1: "Effortless Journey,",
  titleLine2: "From Visit to Keys",
  bar: {
    text: "Join families that",
    textBold: "Chose Binary",
    cta: { label: "Start Now", href: "/#contact" },
    avatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
    ],
  },
};

// ── Testimonials ──
export const testimonials = [
  {
    name: "Arun Sharma",
    role: "3 BHK Owner, Tower A",
    rating: "4.9",
    date: "on 12 Mar, 2026",
    quote:
      "From the moment we walked in, we knew this was the one. Binary delivered on every promise — quality, timing, and care.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Priya Menon",
    role: "2 BHK Owner, Tower B",
    rating: "4.8",
    date: "on 28 Apr, 2026",
    quote:
      "The attention to detail is remarkable. Only 6 units per floor means complete privacy — no common walls, light in every room. Truly ultra-luxury.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Rajesh Nair",
    role: "NRI Investor",
    rating: "5.0",
    date: "on 02 Jun, 2026",
    quote:
      "Sarjapur Road with metro connectivity coming up — Binary is the smartest investment I've made. The entire EOI process was handled remotely without a single hiccup.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Kavitha & Suresh Iyer",
    role: "3 BHK Owners",
    rating: "4.9",
    date: "on 19 Feb, 2026",
    quote:
      "We compared eight projects on Sarjapur Road before choosing Binary. Nothing else offered six homes per floor — you feel the difference the moment you step out of the lift.",
    image: "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=200&q=80",
  },
  {
    name: "Deepak Reddy",
    role: "First-Time Home Buyer",
    rating: "4.8",
    date: "on 07 May, 2026",
    quote:
      "As a first-time buyer I had a hundred questions. The team walked me through pricing, loans, and the refundable EOI patiently — zero pressure, complete transparency.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Ananya Krishnan",
    role: "2 BHK Owner, IT Professional",
    rating: "4.9",
    date: "on 23 Jan, 2026",
    quote:
      "My commute to the ORR tech parks is finally sane, and coming home to 80% open green space feels like leaving the city behind. Best decision we made.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

// ── Testimonials section (panel layout) ──
export const testimonialsSection = {
  heading: "What They Say",
  paragraph:
    "Real words from the families and investors who chose Binary Project 4 — on privacy, delivery, and life across 3.5 acres of open space.",
  cta: { label: "View More Reviews", href: "/gallery" },
};

 

export const footerSection = {
  getInTouch: {
    label: "Get In Touch",
    paragraph:
      "Have a question about Binary Project 4 — pricing, floor plans, or the launch offer? Reach us directly or drop a message and our team will call you back within 24 hours.",
  },
  form: {
    title: "Say Something",
    namePlaceholder: "Your Name..",
    phonePlaceholder: "Your Phone..",
    emailPlaceholder: "Your Mail..",
    interestLabel: "Interested In..",
    interestOptions: ["2 BHK", "3 BHK", "Launch Offer — First 50 Flats"],
    messagePlaceholder: "Message..",
    button: "Send",
    successTitle: "Message received",
    successText: "Thank you — our team will call you back within 24 hours.",
  },
  about: {
    title: "About Us",
    text: "Ultra-luxury 2 & 3 BHK residences at Chambenahalli, Sarjapur Road — 3.5 acres, 80%+ open space, only 6 homes per floor.",
  },
};


export const whatWeDo = [
  {
    num: "01",
    eyebrow: "What We Do",
    title: "Residences and",
    titleAccent: "planning",
    desc: "2 & 3 BHK homes planned around privacy — only 6 per floor, no common walls, and light + cross ventilation in every room.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85",
    side: "right",
    chip: "234 Homes · 6 per floor",
    thumbs: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80",
    ],
  },
  {
    num: "02",
    eyebrow: "What We Do",
    title: "Amenities and",
    titleAccent: "open space",
    desc: "An 8,000+ sq.ft clubhouse and 60+ curated amenities woven through 3.5 acres — with more than 80% left open and green.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=85",
    side: "left",
    chip: "60+ Amenities · 80%+ Open",
    thumbs: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&q=80",
    ],
  },
  {
    num: "03",
    eyebrow: "What We Do",
    title: "Location and",
    titleAccent: "investment",
    desc: "Chambenahalli on Sarjapur Road — upcoming metro, ORR IT corridor access, and a fully refundable EOI to reserve at launch pricing.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=85",
    side: "right",
    chip: "Sarjapur Road · Bengaluru",
    thumbs: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=200&q=80",
      "https://images.unsplash.com/photo-1430285561322-7808604715df?w=200&q=80",
    ],
  },
];

// ── Service Pillars (Section A — brown panel, hover reveals image) ──
export const servicePillars = {
  items: [
    {
      num: "01",
      title: "Residential",
      desc: "Ultra-luxury 2 & 3 BHK homes designed around privacy — only six per floor, no common walls, and light in every room.",
      hoverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85",
    },
    {
      num: "02",
      title: "Interior Spaces",
      desc: "Generous floor plates with premium finishes, expansive balconies, and Vaastu-compliant layouts crafted for everyday calm.",
      hoverImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=85",
    },
    {
      num: "03",
      title: "Master Plan",
      desc: "3.5 acres with 80%+ open space — a clubhouse, 60+ amenities, and landscape gardens woven into the community spine.",
      hoverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=85",
    },
  ],
};


// ── Showcase (Section B — overlapping card on photo) ──
export const showcase = {
  eyebrow: "Our Project",
  title: "Best Solution For",
  titleAccent: "Your Home",
  desc: "Ultra-luxury 2 & 3 BHK residences across 3.5 acres at Chambenahalli, Sarjapur Road — only six homes per floor, 80%+ open space, and an address built for the next decade.",
  cta: { label: "Explore the Project", href: "/#contact" },
  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=88",
  locationChip: "Chambenahalli · Sarjapur Road",
  stats: [
    { value: "3.5", suffix: " Acres", label: "Land Parcel" },
    { value: "234", suffix: "", label: "Homes" },
    { value: "60+", suffix: "", label: "Amenities" },
  ],
};

export const navbarPartner = {
  name: "Binary",
  subtitle: "Real Estate",
  // tagline shown under the name in tiny tracked caps (like "THE FOUNDATION OF TRUST")
  trustLine: "Ultra-Luxury · Sarjapur Road",
};