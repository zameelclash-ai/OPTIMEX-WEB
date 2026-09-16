export const PRODUCTS = [
  {
    id: "rb-01",
    name: "Ray-Ban Classic Wayfarer Noir",
    brand: "Ray-Ban",
    tagline: "The timeless cultural icon in gloss black with polarized crystal optics",
    priceText: "₹4,890 onwards",
    category: "sunglasses",
    gender: "unisex",
    shape: "square",
    material: "acetate",
    frameType: "full-rim",
    isBestseller: true,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Gloss Jet Black", hex: "#111827" },
      { name: "Havana Tortoise", hex: "#78350F" }
    ],
    dimensions: { lensWidth: 50, bridgeWidth: 22, templeLength: 150 },
    description: "Since 1952, the Wayfarer has been the gold standard of effortless style. Premium handcrafted Italian acetate with 100% UV-blocking crystal green lenses.",
    features: ["100% UVA / UVB Protection", "Signature Raised Silver Rivets", "Scratch-Resistant Crystal Glass", "Available at Vadakkencherry & Alathur"]
  },
  {
    id: "rb-02",
    name: "Ray-Ban Aviator Classic Gold",
    brand: "Ray-Ban",
    tagline: "Iconic teardrop pilot sunglasses with 24K gold wireframe & G-15 lenses",
    priceText: "₹5,490 onwards",
    category: "sunglasses",
    gender: "unisex",
    shape: "aviator",
    material: "metal",
    frameType: "full-rim",
    isBestseller: true,
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Polished Gold", hex: "#D4AF37" },
      { name: "Matte Gunmetal", hex: "#4B5563" },
      { name: "Silver Mirror", hex: "#E5E7EB" }
    ],
    dimensions: { lensWidth: 58, bridgeWidth: 14, templeLength: 135 },
    description: "Originally designed for US aviators in 1937. Delivers legendary clarity, comfort, and protection with adjustable silicone nose pads.",
    features: ["G-15 Contrast Lenses", "Featherlight Metal Alloy", "Dual Brow Bar Reinforcement", "Prescription Ready"]
  },
  {
    id: "opt-01",
    name: "Optimex Featherweight Beta-Titanium",
    brand: "Optimex Signature",
    tagline: "Ultra-light Japanese aerospace titanium weighing only 11 grams",
    priceText: "₹2,490 onwards",
    category: "eyeglasses",
    gender: "unisex",
    shape: "round",
    material: "titanium",
    frameType: "full-rim",
    isBestseller: true,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Satin Champagne Gold", hex: "#D4AF37" },
      { name: "Matte Noir", hex: "#1F2937" },
      { name: "Gunmetal Slate", hex: "#4B5563" }
    ],
    dimensions: { lensWidth: 49, bridgeWidth: 20, templeLength: 145 },
    description: "Engineered from memory beta-titanium that bends without losing alignment. Zero pressure on nose bridge or ears for 12+ hour daily computer work.",
    features: ["Under 11g Ultra-Light Weight", "Screwless Durable Hinge", "Anti-Slip Medical Silicone Pads", "Complimentary Single Vision Anti-Glare"]
  },
  {
    id: "vog-01",
    name: "Vogue Eyewear Lumina Cat-Eye",
    brand: "Vogue Eyewear",
    tagline: "Elegant feminine browline in glossy blush acetate with subtle gold details",
    priceText: "₹3,290 onwards",
    category: "eyeglasses",
    gender: "women",
    shape: "cat-eye",
    material: "acetate",
    frameType: "full-rim",
    isBestseller: false,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1509695503492-413833d296ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Rose Quartz", hex: "#FBCFE8" },
      { name: "Havana Tortoise", hex: "#92400E" },
      { name: "Gloss Jet Black", hex: "#111827" }
    ],
    dimensions: { lensWidth: 51, bridgeWidth: 17, templeLength: 140 },
    description: "Chic modern cat-eye designed to complement Asian and Indian facial contours, elevating cheekbone symmetry.",
    features: ["Feminine Sculpted Brow", "Hand-Buffed Luster", "Spring Action Hinge", "Blue-Cut Screen Filter Compatible"]
  },
  {
    id: "oak-01",
    name: "Oakley Sport Holbrook Matte Black",
    brand: "Oakley",
    tagline: "Performance sport frame with O-Matter durability and Prizm polarized lenses",
    priceText: "₹5,890 onwards",
    category: "sunglasses",
    gender: "men",
    shape: "rectangle",
    material: "o-matter",
    frameType: "full-rim",
    isBestseller: true,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Matte Black / Prizm Black", hex: "#18181B" },
      { name: "Woodgrain / Warm Amber", hex: "#713F12" }
    ],
    dimensions: { lensWidth: 55, bridgeWidth: 18, templeLength: 137 },
    description: "Rugged, stress-resistant O-Matter frame with Oakley Three-Point Fit that holds lenses in precise optical alignment.",
    features: ["Impact-Resistant Plutonite Lenses", "Prizm Contrast Tuning", "Ultra-Lightweight O-Matter", "Ideal for Driving & Outdoor Sports"]
  },
  {
    id: "opt-02",
    name: "Optimex CyberShield Screen Glasses",
    brand: "Optimex Signature",
    tagline: "Dedicated 450nm blue light blocking lenses in flexible lightweight frame",
    priceText: "₹1,490 onwards",
    category: "eyeglasses",
    gender: "unisex",
    shape: "rectangle",
    material: "acetate",
    frameType: "full-rim",
    isBestseller: true,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582142839970-2b93cbacbe6b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Midnight Black", hex: "#09090B" },
      { name: "Frosted Crystal Grey", hex: "#9CA3AF" },
      { name: "Deep Tortoise", hex: "#78350F" }
    ],
    dimensions: { lensWidth: 52, bridgeWidth: 18, templeLength: 142 },
    description: "Specially formulated for programmers, students, and office professionals. Eliminates screen glare, dryness, and sleeplessness.",
    features: ["Blocks 99% Harmful Blue Wavelengths", "Zero Yellow Tint Clarity", "Anti-Reflective Coating", "Available with or without Prescription"]
  },
  {
    id: "opt-03",
    name: "Heritage Tortoise Bio-Acetate",
    brand: "Optimex Classics",
    tagline: "Classic intellectual aesthetic hand-cured from organic bio-acetate",
    priceText: "₹1,990 onwards",
    category: "eyeglasses",
    gender: "men",
    shape: "square",
    material: "acetate",
    frameType: "full-rim",
    isBestseller: false,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Warm Amber Tortoise", hex: "#B45309" },
      { name: "Classic Noir", hex: "#18181B" }
    ],
    dimensions: { lensWidth: 53, bridgeWidth: 19, templeLength: 145 },
    description: "Chiseled masculine profile with German five-barrel hinges and custom inner core wire detailing for easy temple shaping.",
    features: ["Durable 5-Barrel Hinges", "Bio-Acetate Material", "Deep Lens Channel for Progressives", "Polished Bevel Finish"]
  },
  {
    id: "cont-01",
    name: "Bausch + Lomb & Acuvue Daily Contacts",
    brand: "Contact Care",
    tagline: "Breathable moisture-rich daily and monthly disposable contact lenses",
    priceText: "₹850 / box onwards",
    category: "contact-lenses",
    gender: "unisex",
    shape: "contact",
    material: "hydrogel",
    frameType: "none",
    isBestseller: true,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1582142839970-2b93cbacbe6b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: [
      { name: "Clear with Handling Tint", hex: "#93C5FD" }
    ],
    dimensions: { lensWidth: 14.2, bridgeWidth: 8.6, templeLength: 0 },
    description: "Trial pairs and corneal curvature fitting available at our clinics in Vadakkencherry and Alathur.",
    features: ["High Oxygen Breathability", "Hydration Tear-Lock", "Free In-Store Trial & Insertion Guidance", "Spherical & Toric Available"]
  }
];

export const STORE_LOCATIONS = [
  {
    id: "vadakkencherry",
    name: "Optimex Optical - Vadakkencherry",
    town: "Vadakkencherry",
    district: "Palakkad District",
    state: "Kerala, India",
    rating: 3.3,
    reviewsCount: 7,
    statusText: "Open · Closes 7 pm",
    closingTime: "7:00 PM",
    phone: "+91 94470 12345",
    whatsappNumber: "919447012345",
    address: "Near Bus Stand, Main Road, Vadakkencherry, Kerala 678683",
    optometrist: "Experienced Optician & Refractionist",
    highlights: [
      "Computerized Eye Testing",
      "Instant 20-Min Spectacle Delivery",
      "Branded Frames (Ray-Ban, Vogue, Fastrack)",
      "Affordable Prescription Lenses"
    ],
    mapQuery: "Optimex optical Vadakkencherry Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Optimex+optical+Vadakkencherry+Kerala",
    image: "/images/optimex-shop-front.webp"
  },
  {
    id: "alathur",
    name: "Optimex Optical - Alathur",
    town: "Alathur",
    district: "Palakkad District",
    state: "Kerala, India",
    rating: 4.3,
    reviewsCount: 9,
    statusText: "Open · Closes 8 pm",
    closingTime: "8:00 PM",
    phone: "+91 94470 67890",
    whatsappNumber: "919447067890",
    address: "Court Road, Main Town, Alathur, Kerala 678541",
    optometrist: "Senior Optometrist & Vision Specialist",
    highlights: [
      "Full Eye Vision Checkup",
      "Progressive & Bifocal Specialists",
      "Huge Sunglasses & Frame Display",
      "Contact Lens Trial & Solutions"
    ],
    mapQuery: "Optimex optical Alathur Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Optimex+optical+Alathur+Kerala",
    image: "/images/optimex-shop-front.webp"
  }
];

export const GOOGLE_REVIEWS = [
  {
    id: "rev-1",
    author: "Pradeep Kumar",
    branch: "Optimex Optical - Alathur",
    rating: 5,
    date: "3 months ago",
    content: "Very good optical shop in Alathur town. The eye checkup was done carefully using computerized machines. Got my Ray-Ban sunglasses fitted with prescription lenses in just 2 days. Polite staff and fair prices.",
    helpful: 4
  },
  {
    id: "rev-2",
    author: "Sujith V. Nair",
    branch: "Optimex Optical - Alathur",
    rating: 5,
    date: "5 months ago",
    content: "Excellent service! I took my mother here for reading and distance progressive glasses. They took proper measurements and the glasses are very clear. No eye strain at all.",
    helpful: 6
  },
  {
    id: "rev-3",
    author: "Mohammed Aslam",
    branch: "Optimex Optical - Vadakkencherry",
    rating: 4,
    date: "1 month ago",
    content: "Located conveniently near Vadakkencherry bus stand. Good collection of light-weight metal frames and anti-glare blue-cut lenses for computer work. Fast delivery.",
    helpful: 2
  },
  {
    id: "rev-4",
    author: "Reshma Ramesh",
    branch: "Optimex Optical - Alathur",
    rating: 4,
    date: "2 months ago",
    content: "Lots of trendy frame shapes like cat-eye and round frames. Staff helped me choose the right shape for my face. Very satisfied with the service in Alathur.",
    helpful: 3
  },
  {
    id: "rev-5",
    author: "Haridas K.",
    branch: "Optimex Optical - Vadakkencherry",
    rating: 4,
    date: "4 months ago",
    content: "Affordable spectacle options and quick fitting. They also repaired my old broken frame for free while making new glasses. Good local shop.",
    helpful: 1
  }
];

export const LENS_COMPARISONS = [
  {
    id: "anti-glare",
    title: "Anti-Glare Coating",
    subtitle: "Eliminates Blinding Reflections",
    tagline: "Essential for Night Driving & Clean Clear Eyes",
    withFeature: "Crystal clear vision without ghost headlights, reflections, or glare on glass lenses.",
    withoutFeature: "Blinding light halos from oncoming traffic, reflected glare on laptop screens.",
    imageWith: "https://images.unsplash.com/photo-1509695503492-413833d296ae?auto=format&fit=crop&w=700&q=80",
    imageWithout: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "blue-cut",
    title: "Blue-Cut Screen Filter",
    subtitle: "Protects Against Screen Fatigue",
    tagline: "Blocks Harsh High-Frequency Mobile & Monitor Light",
    withFeature: "Filters out 450nm blue light spectrum, relieving headaches, dry eyes, and evening fatigue.",
    withoutFeature: "Direct screen glare causing eye strain, dryness, and sleeplessness.",
    imageWith: "https://images.unsplash.com/photo-1582142839970-2b93cbacbe6b?auto=format&fit=crop&w=700&q=80",
    imageWithout: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "uv-protection",
    title: "100% UV400 Sun Protection",
    subtitle: "Blocks Harsh Ultraviolet Rays",
    tagline: "Shields Cornea & Retina from Tropical Sunlight",
    withFeature: "Blocks 100% UVA & UVB rays, preventing long-term cataract and retinal damage in sunny Kerala.",
    withoutFeature: "Dangerous UV rays penetrate unprotected eyes causing squinting and damage.",
    imageWith: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    imageWithout: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "photogray",
    title: "Photogray Auto-Transitions",
    subtitle: "Clear Indoors, Dark Sunglasses Outdoors",
    tagline: "2-in-1 Convenience Under Kerala Sun",
    withFeature: "Instantly darkens within seconds outdoors under sunlight, switches back to crystal clear indoors.",
    withoutFeature: "Need to constantly carry separate sunglasses and reading glasses.",
    imageWith: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80",
    imageWithout: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=700&q=80"
  }
];
