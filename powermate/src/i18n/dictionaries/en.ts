import type { ProductKey } from "@/data/site";

const en = {
  meta: {
    home: {
      title: "Power Mate Global, Genuine Imports. Real Support.",
      description:
        "Direct importers of household solar systems, SME machinery and home equipment in Sri Lanka. Genuine quality, fair prices and real after-sales support.",
    },
    about: {
      title: "About Us, Power Mate Global",
      description:
        "A trusted Sri Lankan importer of solar, machinery and home equipment, built on genuine quality, honest pricing and real support.",
    },
    products: {
      title: "Products, Power Mate Global",
      description:
        "Explore household solar systems, SME machinery and home equipment, imported direct from trusted manufacturers and backed by warranty and service.",
    },
    branches: {
      title: "Showrooms, Power Mate Global",
      description:
        "Find your nearest Power Mate Global showroom. Islandwide sales, delivery and after-sales support across every province.",
    },
    careers: {
      title: "Careers, Power Mate Global",
      description:
        "Build a career with Sri Lanka's trusted import partner. Explore open roles at Power Mate Global.",
    },
    contact: {
      title: "Contact Us, Power Mate Global",
      description:
        "Talk to a team that listens. Call, message or visit any of our islandwide showrooms for product advice and quotes.",
    },
    faqs: {
      title: "FAQs, Power Mate Global",
      description:
        "Answers to common questions about our products, warranty, installation, delivery and after-sales support.",
    },
  },

  nav: {
    home: "Home",
    about: "About Us",
    products: "Products",
    branches: "Showrooms",
    careers: "Careers",
    contact: "Contact Us",
    faqs: "FAQs",
    gallery: "Gallery",
    apply: "Inquire Now",
    skipToContent: "Skip to content",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },

  common: {
    applyNow: "Inquire Now",
    calculateLoan: "Request a quote",
    findBranch: "Find a Showroom",
    learnMore: "Learn more",
    viewAll: "View all products",
    getStarted: "Get started",
    talkToUs: "Talk to us",
    callUs: "Call us",
    required: "Required",
    optional: "optional",
    sending: "Sending…",
  },

  hero: {
    eyebrow: "Direct importers of solar, machinery & home equipment",
    title: "Powering Sri Lankan homes and businesses with the world's best",
    subtitle:
      "Power Mate Global imports household solar systems, SME machinery and home equipment direct from trusted manufacturers, genuine quality you can rely on, at prices that make sense.",
    ctaPrimary: "Inquire Now",
    ctaSecondary: "Explore products",
    ctaTertiary: "Find a Showroom",
    stat1Value: "7",
    stat1Label: "Showrooms",
    stat2Value: "Genuine",
    stat2Label: "Direct imports",
    stat3Value: "Islandwide",
    stat3Label: "Delivery & service",
  },

  products: {
    eyebrow: "What we supply",
    title: "Solutions for energy, enterprise and everyday life",
    subtitle:
      "Whether you are cutting your power bill, equipping a workshop or fitting out your home, we import the genuine product for the job, and stand behind it.",
    items: {
      solar: {
        name: "Household Solar",
        short: "Clean power for every home.",
        description:
          "Complete rooftop solar systems, panels, inverters and battery storage, imported direct and sized for Sri Lankan homes. Cut your electricity bill and ride out every power cut.",
        features: ["Panels, inverters & batteries", "On-grid & hybrid systems", "Installation & after-sales support"],
      },
      machinery: {
        name: "SME Machinery",
        short: "Equip your business to grow.",
        description:
          "Imported machinery and tools for small and medium enterprises, from workshop and agriculture equipment to food-processing and manufacturing lines, backed by genuine parts and service.",
        features: ["Workshop & industrial machines", "Genuine spare parts", "Warranty & technical support"],
      },
      equipment: {
        name: "Household Equipment",
        short: "Quality appliances for everyday life.",
        description:
          "Home appliances and electrical equipment imported from trusted manufacturers, kitchen and laundry to comfort and cleaning, at honest direct-import prices with islandwide delivery.",
        features: ["Kitchen & laundry appliances", "Trusted global brands", "Islandwide delivery"],
      },
    } satisfies Record<ProductKey, { name: string; short: string; description: string; features: string[] }>,
  },

  why: {
    eyebrow: "Why choose us",
    title: "An import partner you can rely on",
    subtitle:
      "We measure success by the homes that save energy and the businesses that run better, not just the boxes we ship.",
    items: [
      { title: "Direct Imports", description: "We import straight from trusted manufacturers, so you get genuine quality at honest prices, with no middlemen in between." },
      { title: "Quality Assured", description: "Every product is checked and backed by warranty, from solar inverters to kitchen appliances." },
      { title: "After-Sales Support", description: "Spare parts, servicing and technical help long after the sale, not just at the point of purchase." },
      { title: "Close to You", description: "Showrooms across the Central, Uva and Southern provinces, with staff who speak your language and know your area." },
    ],
  },

  calculator: {
    eyebrow: "Plan with confidence",
    title: "Request a quote",
    subtitle: "Tell us what you need and we'll prepare a clear quote. Indicative only, your final price is confirmed at the showroom.",
    productLabel: "Product type",
    amountLabel: "Budget",
    termLabel: "Timeframe",
    rateLabel: "Quantity",
    months: "months",
    monthlyPayment: "Estimated total",
    totalPayable: "Total",
    totalInterest: "Notes",
    perMonth: "",
    disclaimer:
      "Estimates are indicative only. Actual prices depend on the product, specification and availability.",
    applyCta: "Inquire about this product",
    notAvailable: "Use the contact form for a tailored quote.",
  },

  stories: {
    eyebrow: "Customer stories",
    title: "Real homes, real businesses",
    subtitle: "The people behind the products.",
    items: [
      { quote: "Our solar system paid for itself faster than we expected, and the power cuts no longer bother us at all.", name: "Nimal Perera", role: "Homeowner, Kandy" },
      { quote: "They supplied and installed the machinery for my workshop. Genuine parts and real support when I needed it.", name: "Fathima Rizwan", role: "Workshop owner, Matale" },
      { quote: "Quality appliances at a fair price, delivered to my door. I've recommended them to my whole family.", name: "Suresh Kumar", role: "Customer, Welimada" },
    ],
  },

  branchLocator: {
    eyebrow: "Showroom locator",
    title: "Find a showroom near you",
    subtitle: "Serving the Central, Uva and Southern provinces. Search by city or filter by province.",
    searchPlaceholder: "Search by city or district…",
    allProvinces: "All provinces",
    resultsOne: "showroom found",
    resultsMany: "showrooms found",
    noResults: "No showrooms match your search. Try another city or province.",
    viewOnMap: "View on map",
    getDirections: "Get directions",
    callBranch: "Call showroom",
    province: "Province",
    selectPrompt: "Select a showroom to see it on the map.",
  },

  photoStrip: {
    eyebrow: "Where we work",
    title: "Rooted in the hill country",
    subtitle:
      "Showrooms across the Central, Uva and Southern provinces, growing with the communities we serve.",
  },

  gallery: {
    eyebrow: "Gallery",
    title: "Moments that define Power Mate Global",
    subtitle:
      "A look at the milestones, people and communities behind our work, from showroom openings to team training and community events.",
    sections: [
      {
        title: "Our commitment to the customers we serve",
        subtitle:
          "Proud sponsors of the 2025 Annual Inter-Collegiate Cricket Tournament, organised by Dharmaraja College.",
        groups: [{ label: "Annual Inter-Collegiate Cricket Tournament 2025 · Dharmaraja College" }],
      },
      {
        title: "Our talent development and empowerment",
        subtitle: "Investing in our team so they can serve you better.",
        groups: [
          { label: "Corporate Etiquette & Professional Conduct" },
          { label: "Role of a Manager & Leadership Basics" },
        ],
      },
      {
        title: "Our showroom expansions",
        subtitle: "Bringing Power Mate Global closer to more communities.",
        groups: [
          { label: "Bandarawela showroom opening" },
          { label: "Mahiyanganaya showroom opening" },
        ],
      },
    ],
  },

  finalCta: {
    eyebrow: "Ready when you are",
    title: "Let's power your home or business",
    subtitle: "Send us an inquiry, or visit your nearest showroom. Genuine products, honest advice, no pressure.",
    primary: "Inquire Now",
    secondary: "Talk to us",
  },

  about: {
    hero: {
      eyebrow: "About us",
      title: "Bringing the world's best to Sri Lanka",
      subtitle:
        "Power Mate Global was founded to import dependable solar, machinery and home equipment, and put genuine quality within reach of every Sri Lankan home and business.",
    },
    storyTitle: "Our story",
    story: [
      "We started with a simple frustration: too many imported products were overpriced, poorly supported, or simply not built to last. Customers paid premium prices and were left on their own when something went wrong.",
      "So we built differently. We import direct from trusted manufacturers, price fairly, and stand behind every product with genuine parts and service, with showrooms in the towns we serve and staff who speak Sinhala, Tamil, English and Chinese.",
    ],
    missionTitle: "Our mission",
    mission: "Making genuine, dependable solar, machinery and home equipment accessible and affordable for every Sri Lankan.",
    visionTitle: "Our vision",
    vision: "To be Sri Lanka's most trusted importer of energy, industrial and home solutions.",
    valuesTitle: "Our core values",
    values: [
      { title: "Integrity", description: "We deal honestly and price fairly in everything we import and sell." },
      { title: "Customer-Centricity", description: "Our customers' satisfaction is at the heart of everything we do." },
      { title: "Quality First", description: "We import only the products we would trust in our own homes and workshops." },
      { title: "People First", description: "We nurture and empower our team to grow and succeed." },
      { title: "Community Impact", description: "We help homes and businesses save energy, work better and live more comfortably." },
    ],
    statsTitle: "Trusted at scale",
    stats: [
      { value: "5+", label: "Years of service" },
      { value: "7", label: "Showrooms" },
      { value: "100+", label: "Products imported" },
      { value: "3", label: "Provinces covered" },
    ],
    teamTitle: "Our management team",
    teamSubtitle: "The people guiding Power Mate Global.",
    team: [
      {
        name: "Dhammika Gunasena",
        role: "Director",
        photo: "/team/dhammika.jpg",
        initials: "DG",
        bio: "Director with over 25 years of leadership across the insurance, telecommunications, FMCG and financial-services sectors. He brings deep expertise in sales and marketing, business operations, finance and business development, with a professional network spanning the UAE, Singapore, China and Sri Lanka. An alumnus of Dharmaraja College, he holds higher-education qualifications from Wayamba University of Sri Lanka.",
        links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/dhammika-gunasena-864243b7" }],
      },
      {
        name: "Rukmal Bandaranayake",
        role: "HRM Consultant",
        photo: "/team/rukmal.jpg",
        initials: "RB",
        bio: "Executive coach and HRM professional with over 15 years across AIA Insurance, MAS Holdings and HealthRecon Connect, and a faculty member at University Canada West. A certified executive coach (CCF Canada) and accredited MBTI practitioner, he is a member of CIPM Sri Lanka, CIPD UK and a Chartered Professional in Human Resources (CPHR).",
        links: [
          { label: "theascendedu.ca", href: "https://www.theascendedu.ca" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/rukmal-byk" },
        ],
      },
      {
        name: "Shanika Perera Fonseka",
        role: "Company Lawyer & Corporate Trainer",
        photo: "/team/shanika.jpg",
        initials: "SF",
        bio: "Attorney-at-Law and HR professional with over 19 years in Human Resources and 12 years in lecturing and corporate training. She specializes in strategic planning, negotiation, leadership development and customer-service excellence, and is a member of the Bar Association of Sri Lanka and Toastmasters International.",
        links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/shanika-perera-fonseka-2b1b211aa" }],
      },
    ],
  },

  productsPage: {
    hero: {
      eyebrow: "Products",
      title: "Solutions for energy, enterprise and everyday life",
      subtitle: "Three categories, one promise: genuine imports, fair prices and real support after the sale.",
    },
    featuresLabel: "Highlights",
    everyProductTitle: "Every product comes with",
    everyProduct: [
      "Genuine, factory-direct imports",
      "Warranty on every product",
      "Spare parts & technical support",
      "Islandwide delivery",
    ],
  },

  careers: {
    hero: {
      eyebrow: "Careers",
      title: "Grow with Sri Lanka's trusted import partner",
      subtitle:
        "We grow people the way we grow the business: with trust, training and room to rise. Join a team bringing better products to more homes and businesses.",
    },
    whyTitle: "Why build your career here",
    perks: [
      { title: "Grow fast", description: "Structured training and clear paths from the showroom floor to leadership." },
      { title: "Real impact", description: "Your work puts dependable energy and equipment into homes and businesses in your own community." },
      { title: "Fair rewards", description: "Competitive pay, performance bonuses and benefits that respect your effort." },
    ],
    openingsTitle: "Current openings",
    departmentLabel: "Department",
    locationLabel: "Location",
    typeLabel: "Type",
    openings: [
      { role: "Showroom Manager", department: "Operations", location: "Islandwide", type: "Full-time" },
      { role: "Sales Executive", department: "Sales", location: "Islandwide", type: "Full-time" },
      { role: "Solar Technician", department: "Technical", location: "Central & Uva", type: "Full-time" },
      { role: "Customer Service Officer", department: "Front Office", location: "Central & Uva", type: "Full-time" },
    ],
    noOpeningTitle: "Don't see your role?",
    noOpeningText: "We're always looking for talented people. Send your CV and we'll be in touch when something fits.",
    applyCta: "Apply for this role",
    sendCv: "Send your CV",
  },

  contact: {
    hero: {
      eyebrow: "Contact us",
      title: "Talk to a team that listens",
      subtitle: "Call our hotline, message us on WhatsApp, or fill in the form below and we'll come back to you within one working day.",
    },
    detailsTitle: "Reach us directly",
    phoneLabel: "Hotline",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    addressLabel: "Head office",
    hoursLabel: "Opening hours",
    hoursWeekdayLabel: "Mon – Fri",
    hoursSaturdayLabel: "Saturday",
    hoursSundayLabel: "Sunday",
    closed: "Closed",
    formTitle: "Send us a message",
    formSubtitle: "Tell us what you need and the best way to reach you.",
  },

  faqs: {
    hero: {
      eyebrow: "FAQs",
      title: "Questions, answered plainly",
      subtitle: "Everything you need to know about our products, warranty, delivery and support. Still unsure? We're one call away.",
    },
    items: [
      { q: "What products does Power Mate Global supply?", a: "We import and sell household solar systems, SME machinery, and home equipment and appliances, all sourced direct from trusted manufacturers." },
      { q: "Are your products genuine and warrantied?", a: "Yes. Everything we sell is genuine, factory-sourced stock and comes with a manufacturer or company warranty. We keep the paperwork so you're fully covered." },
      { q: "Do you install solar systems and machinery?", a: "Yes. Our technical team handles installation, commissioning and basic training for solar systems and most machinery. Talk to us about your site and we'll advise." },
      { q: "Do you deliver islandwide?", a: "We deliver across Sri Lanka from our showroom network. Delivery times and charges depend on the product and your location, and we'll always confirm them upfront." },
      { q: "What after-sales support do you offer?", a: "We stock genuine spare parts and provide servicing and technical help long after purchase. Reach your nearest showroom or our hotline any time." },
      { q: "How do I get a price or place an order?", a: "Send us an inquiry through the website, WhatsApp or phone, or visit a showroom. We'll give you a clear quote and guide you through the rest." },
    ],
    stillHaveQuestions: "Still have questions?",
    contactPrompt: "Our team is happy to help in Sinhala, Tamil, English or Chinese.",
    disclaimer:
      "These are general answers. Product availability, specifications, warranty terms, prices and delivery may vary, and specific terms and conditions apply to each product.",
  },

  form: {
    name: "Full name",
    namePlaceholder: "Your name",
    phone: "Phone number",
    phonePlaceholder: "07X XXX XXXX",
    email: "Email address",
    emailPlaceholder: "you@example.com",
    product: "I'm interested in",
    selectProduct: "Select a product",
    branch: "Preferred showroom",
    selectBranch: "Select a showroom",
    amount: "Budget (LKR)",
    message: "Message",
    messagePlaceholder: "Tell us a little about what you need…",
    consent: "I agree to be contacted about my inquiry.",
    submitApply: "Send inquiry",
    submitContact: "Send message",
    successTitle: "Thank you, we've got it.",
    successBody: "A Power Mate Global representative will contact you within one working day.",
    sendAnother: "Send another message",
    errorTitle: "Something went wrong",
    errorBody: "We couldn't send your message. Please try again, or call our hotline.",
    errors: {
      nameRequired: "Please enter your name.",
      phoneRequired: "Please enter a phone number.",
      phoneInvalid: "Please enter a valid Sri Lankan phone number.",
      emailInvalid: "Please enter a valid email address.",
      consentRequired: "Please agree to be contacted so we can respond.",
    },
  },

  footer: {
    blurb: "Sri Lanka's trusted importer of household solar, SME machinery and home equipment, genuine products, fair prices and real support.",
    quickLinks: "Quick links",
    products: "Products",
    contactTitle: "Get in touch",
    followUs: "Follow us",
    rights: "All rights reserved.",
    licence: "Power Mate Global (Pvt) Ltd. Product specifications, prices and availability are subject to change.",
  },
};

export default en;
export type Dictionary = typeof en;
