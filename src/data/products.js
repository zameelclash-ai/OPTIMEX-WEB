export const PRODUCTS = [
  {
    id: "opt-01",
    name: "AeroTitanium Alpha 01",
    brand: "Optimex Elite",
    tagline: "Japanese featherweight beta-titanium wireframe with memory flex",
    price: 3499,
    originalPrice: 4999,
    category: "eyeglasses",
    gender: "unisex",
    shape: "round",
    material: "titanium",
    frameType: "full-rim",
    isNew: true,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 142,
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80"
    ],
    colors: [
      { name: "Satin Champagne Gold", hex: "#D4AF37", inStock: true },
      { name: "Matte Gunmetal", hex: "#4A5568", inStock: true },
      { name: "Obsidian Noir", hex: "#1A202C", inStock: true }
    ],
    dimensions: { lensWidth: 49, bridgeWidth: 20, templeLength: 145 },
    description: "Forged from ultra-pure Japanese Beta-Titanium. Weighing a mere 11 grams, the Alpha 01 delivers tensionless ergonomic comfort, screwless high-tensile barrel hinges, and pure optical balance.",
    faceShapeFit: ["oval", "square", "heart"],
    features: ["Featherlight 11g Beta-Titanium", "Integrated Silicone Anti-Slip Pads", "Zero-Screw Hinge Assembly", "CRI 99+ Blue Block Option"]
  },
  {
    id: "opt-02",
    name: "Malabar Heritage Havana",
    brand: "Optimex Classics",
    tagline: "Hand-cured Italian Mazzucchelli bio-acetate in rich tortoise amber",
    price: 2699,
    originalPrice: 3899,
    category: "eyeglasses",
    gender: "men",
    shape: "rectangle",
    material: "acetate",
    frameType: "full-rim",
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewsCount: 98,
    images: [
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80"
    ],
    colors: [
      { name: "Amber Tortoise", hex: "#8B4513", inStock: true },
      { name: "Classic Noir", hex: "#111827", inStock: true },
      { name: "Champagne Crystal", hex: "#F3E5AB", inStock: true }
    ],
    dimensions: { lensWidth: 52, bridgeWidth: 18, templeLength: 142 },
    description: "Cured over 90 days from bespoke cotton-based bio-acetate. Characterized by warm amber tortoise striations, 5-barrel German rivet hinges, and hand-beveled temple tips.",
    faceShapeFit: ["round", "oval"],
    features: ["Custom Core Wire detailing", "Mazzucchelli 1849 Bio-Acetate", "Triple-Buffed Luster", "Progressive Lens Optimized"]
  },
  {
    id: "opt-03",
    name: "Lumina Sculpt Cat-Eye",
    brand: "Optimex Atelier",
    tagline: "High-fashion architectural browline with rose gold accents",
    price: 2999,
    originalPrice: 4299,
    category: "eyeglasses",
    gender: "women",
    shape: "cat-eye",
    material: "acetate",
    frameType: "full-rim",
    isNew: true,
    isBestseller: false,
    rating: 4.9,
    reviewsCount: 64,
    images: [
      "https://images.unsplash.com/photo-1509695503492-413833d296ae?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=80"
    ],
    colors: [
      { name: "Translucent Blush", hex: "#F7CAC9", inStock: true },
      { name: "Gloss Jet Noir", hex: "#0F172A", inStock: true },
      { name: "Honey Demi", hex: "#A07855", inStock: true }
    ],
    dimensions: { lensWidth: 51, bridgeWidth: 17, templeLength: 140 },
    description: "Designed to sculpt the cheekbones and provide an instant visual lift. The Lumina combines lightweight acetate fronts with flexible stainless steel temples.",
    faceShapeFit: ["square", "round", "oval"],
    features: ["Sculpted Browline Contour", "Zero-Pinch Bridge Geometry", "Anti-Reflective Coating Ready", "Ultra-Smooth Hinge Action"]
  },
  {
    id: "opt-04",
    name: "Falcon Aviator Polarized",
    brand: "Optimex Solar",
    tagline: "Military-spec stainless steel aviator with Category 3 HD polarized lenses",
    price: 3299,
    originalPrice: 4599,
    category: "sunglasses",
    gender: "unisex",
    shape: "aviator",
    material: "metal",
    frameType: "full-rim",
    isNew: false,
    isBestseller: true,
    rating: 5.0,
    reviewsCount: 215,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80"
    ],
    colors: [
      { name: "24K Gold / Bottle Green", hex: "#D4AF37", inStock: true },
      { name: "Silver Ice / Smoke Tint", hex: "#C0C0C0", inStock: true },
      { name: "Stealth Black / Cobalt Mirror", hex: "#2D3748", inStock: true }
    ],
    dimensions: { lensWidth: 58, bridgeWidth: 14, templeLength: 145 },
    description: "Engineered for intense sunlight and driving glare. Polarized acoustic wafer eliminates 99.9% of surface glare on highways and water surfaces.",
    faceShapeFit: ["square", "heart", "oval"],
    features: ["HD Polarized Glare Elimination", "Oleophobic Smudge Shield", "Double Brow Bridge Reinforcement", "100% UV400 Protection"]
  },
  {
    id: "opt-05",
    name: "CyberShield Blue-Blocker Pro",
    brand: "Optimex TechOptics",
    tagline: "450nm targeted high-energy blue frequency filtration for coders & creators",
    price: 2199,
    originalPrice: 2999,
    category: "eyeglasses",
    gender: "unisex",
    shape: "geometric",
    material: "titanium",
    frameType: "semi-rimless",
    isNew: true,
    isBestseller: true,
    rating: 4.8,
    reviewsCount: 89,
    images: [
      "https://images.unsplash.com/photo-1582142839970-2b93cbacbe6b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=80"
    ],
    colors: [
      { name: "Frosted Titanium", hex: "#718096", inStock: true },
      { name: "Bronze Ember", hex: "#8C6239", inStock: true },
      { name: "Carbon Black", hex: "#1A202C", inStock: true }
    ],
    dimensions: { lensWidth: 50, bridgeWidth: 19, templeLength: 140 },
    description: "Engineered specifically to alleviate screen-induced eye dryness, retina strain, and insomnia caused by continuous display exposure. Crystal clear with zero yellow distortion.",
    faceShapeFit: ["round", "heart", "oval"],
    features: ["Direct 450nm Screen Filter", "Zero Color Distortion", "Anti-Reflective Coating", "Ultra-Flexible Temples"]
  },
  {
    id: "opt-06",
    name: "ZeroHorizon Titanium Rimless",
    brand: "Optimex Elite",
    tagline: "Floating rimless construction with high-tensile compression mounts",
    price: 3899,
    originalPrice: 5499,
    category: "eyeglasses",
    gender: "men",
    shape: "rectangle",
    material: "titanium",
    frameType: "rimless",
    isNew: false,
    isBestseller: false,
    rating: 4.9,
    reviewsCount: 52,
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=900&q=80"
    ],
    colors: [
      { name: "Platinum Silver", hex: "#E2E8F0", inStock: true },
      { name: "Champagne Gold", hex: "#ECC94B", inStock: true },
      { name: "Charcoal Slate", hex: "#2D3748", inStock: true }
    ],
    dimensions: { lensWidth: 53, bridgeWidth: 17, templeLength: 145 },
    description: "The pinnacle of executive understatement. Weighs under 9 grams. Unobstructed panoramic vision mounted directly to high-index shatterproof lenses.",
    faceShapeFit: ["oval", "heart", "square"],
    features: ["Pure Floating Rimless Field of View", "Under 9 Grams Total Weight", "Custom Diamond-Edge Lens Polishing", "Surgical Japanese Titanium"]
  },
  {
    id: "opt-07",
    name: "Kerala Sun Mirage Oversized",
    brand: "Optimex Solar",
    tagline: "Bold statement Italian acetate sunglasses with gradient sunset tint",
    price: 2799,
    originalPrice: 3999,
    category: "sunglasses",
    gender: "women",
    shape: "square",
    material: "acetate",
    frameType: "full-rim",
    isNew: true,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 116,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509695503492-413833d296ae?auto=format&fit=crop&w=900&q=80"
    ],
    colors: [
      { name: "Amber Gradient Sunset", hex: "#C68B59", inStock: true },
      { name: "Gloss Jet Noir", hex: "#0F172A", inStock: true },
      { name: "Olive Smoke Demi", hex: "#556B2F", inStock: true }
    ],
    dimensions: { lensWidth: 55, bridgeWidth: 19, templeLength: 145 },
    description: "Sleek, glamorous eyewear designed for tropical Kerala sun and seaside escapes. Provides full eye and cheekbone UV protection with premium gradient tint.",
    faceShapeFit: ["round", "oval"],
    features: ["Full UV400 Protection", "Gradient Polycarbonate Optics", "Optimex Gold Core Inlay", "Beveled Organic Contours"]
  },
  {
    id: "opt-08",
    name: "OptiHydro Pure Contact Lenses (30 Pack)",
    brand: "Optimex ContactCare",
    tagline: "Breathable daily silicone hydrogel lenses with HydraLock moisture matrix",
    price: 1199,
    originalPrice: 1599,
    category: "contact-lenses",
    gender: "unisex",
    shape: "contact",
    material: "hydrogel",
    frameType: "none",
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewsCount: 310,
    images: [
      "https://images.unsplash.com/photo-1582142839970-2b93cbacbe6b?auto=format&fit=crop&w=900&q=80"
    ],
    colors: [
      { name: "Clear Blue Visibility Tint", hex: "#93C5FD", inStock: true }
    ],
    dimensions: { lensWidth: 14.2, bridgeWidth: 8.5, templeLength: 0 },
    description: "Provides 6x oxygen flow compared to ordinary contacts. Infused with smart hyaluronic acid moisture lock to keep eyes fresh from morning until late night.",
    faceShapeFit: ["all"],
    features: ["Breathable Dk/t 130 Matrix", "UV Blocking Filtration", "Soft Insertion Edge", "16-Hour Hydration Lock"]
  }
];

export const LENS_PACKAGES = [
  {
    id: "clear-standard",
    name: "Standard Digital Hard-Coat",
    price: 0,
    thickness: "1.56 Index",
    description: "Includes anti-scratch, anti-reflective, and water-repellent hydrophobic coating at zero extra cost.",
    recommended: false
  },
  {
    id: "blue-defense",
    name: "CyberShield Blue-Defend Plus",
    price: 599,
    thickness: "1.61 Thin Index",
    description: "Blocks high-energy 450nm blue light from screens, smartphones, and office LED fixtures. Relieves digital strain.",
    recommended: true
  },
  {
    id: "photochromic",
    name: "Smart Photogray (Light-Reactive)",
    price: 1199,
    thickness: "1.61 Thin Index",
    description: "Transitions smoothly into dark sunglasses under Kerala outdoor sunlight within 30 seconds, crystal clear indoors.",
    recommended: false
  },
  {
    id: "ultra-thin",
    name: "Ultra-Thin High Index 1.67",
    price: 1499,
    thickness: "1.67 Ultra-Thin",
    description: "Up to 45% thinner and lighter for high prescriptions (+/- 3.00 diopters and above). Polished bevel edges.",
    recommended: false
  }
];

export const STORE_LOCATIONS = [
  {
    id: "vadakkencherry",
    name: "Optimex Optical - Vadakkencherry",
    town: "Vadakkencherry, Kerala",
    district: "Palakkad District",
    state: "Kerala, India",
    rating: 3.3,
    reviewsCount: 7,
    statusText: "Open · Closes 7 pm",
    closingTime: "7:00 PM",
    phone: "+91 94470 12345",
    whatsapp: "+919447012345",
    address: "Near Bus Stand, Main Road, Vadakkencherry, Palakkad, Kerala 678683",
    optometrist: "Dr. K. Jayaprakash, Certified Optometrist",
    features: [
      "Computerized Eye Testing",
      "Instant 20-Min Spectacle Fitting",
      "Prescription Blue-Cut Lenses",
      "Leading Brand Frames & Sunwear"
    ],
    mapQuery: "Optimex+optical+Vadakkencherry+Kerala",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "alathur",
    name: "Optimex Optical - Alathur",
    town: "Alathur, Kerala",
    district: "Palakkad District",
    state: "Kerala, India",
    rating: 4.3,
    reviewsCount: 9,
    statusText: "Open · Closes 8 pm",
    closingTime: "8:00 PM",
    phone: "+91 94470 67890",
    whatsapp: "+919447067890",
    address: "Court Road, Main Town, Alathur, Palakkad, Kerala 678541",
    optometrist: "Dr. S. Radhakrishnan, Senior Refractionist",
    features: [
      "Comprehensive Digital Refraction",
      "Progressive & Bifocal Specialists",
      "Contact Lens Fitting Clinic",
      "Children & Pediatric Vision Care"
    ],
    mapQuery: "Optimex+optical+Alathur+Kerala",
    image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=900&q=80"
  }
];

export const EXAM_SERVICES = [
  {
    id: "computerized-eye-test",
    title: "Computerized Eye Testing & Vision Check",
    duration: "20 mins",
    price: 150,
    freeWithFrame: true,
    description: "Digital auto-refractor measurement, visual acuity chart test, astigmatism detection, and updated prescription."
  },
  {
    id: "progressive-consult",
    title: "Progressive & Multifocal Lens Fitting",
    duration: "30 mins",
    price: 250,
    freeWithFrame: true,
    description: "Accurate pupillary distance (PD) measurement, seg height alignment, and reading corridor customization."
  },
  {
    id: "contact-fitting",
    title: "Contact Lens Trial & Corneal Assessment",
    duration: "25 mins",
    price: 200,
    freeWithFrame: false,
    description: "Tear-film stability assessment, curvature inspection, and hands-on lens insertion training."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Unnikrishnan Nair",
    role: "Software Engineer, Vadakkencherry",
    rating: 5,
    comment: "Got my Blue-Blocker glasses from Optimex Vadakkencherry. The eye testing was quick and spot-on. No more eye strain after 8 hours of coding.",
    product: "CyberShield Pro"
  },
  {
    id: 2,
    name: "Dr. Anjali Menon",
    role: "Professor, Alathur",
    rating: 5,
    comment: "Optimex Alathur crafted my progressive glasses perfectly. Zero distortion when shifting from laptop to reading papers. Highly recommend their optometrist.",
    product: "Malabar Heritage Havana"
  },
  {
    id: 3,
    name: "Muhammed Rashid",
    role: "Architect, Palakkad",
    rating: 5,
    comment: "The titanium frame is unbelievably lightweight and durable. Their WhatsApp support was super fast in coordinating my prescription delivery.",
    product: "AeroTitanium Alpha 01"
  }
];
