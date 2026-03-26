export const client = {
  // Business Details
  name: "SA Landscaping Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Tonbridge.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01732 671146",
  email: "",
  website: "",

  // Location
  address: "Tonbridge",
  city: "Tonbridge",
  county: "",
  postcode: "",
  basedIn: "Tonbridge",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "4",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Nancy L", rating: 4, text: "Settled into a good routine. Friendly and experienced team. Garden is well maintained. Looking forward to Spring projects.", date: "13 hours ago" },
    { name: "Laura B", rating: 5, text: "Brilliant maintainence service - always organised and reliable! Would highly recommend!", date: "a month ago" },
    { name: "Lorna Arduino", rating: 5, text: "SA Landscaping completed some garden works for us recently and from quoting through to completion they were all very professional and the finished job is excellent, would definitely recommend to others. Thanks so much.", date: "a month ago" },
    { name: "Nikki Maxted", rating: 5, text: "Good service, reliable and turn up in all weathers.  They are always so cheerful and    polite. Would recommend their services if you want a regular reliable garden maintenance service.", date: "a month ago" },
    { name: "Wendy", rating: 5, text: "Excellent garden management always friendly very tidy workers my garden has never looked so good even in the winter , Louise has done a magnificent job along with her colleagues . If your looking for a garden management programme these are the guys to go to", date: "3 months ago" },
    { name: "Sue Harwood", rating: 5, text: "I am so pleased with my \"new\" front garden. Sam cleared an area of plants and laid new turf, so I feel I not have so much maintenance to do and can enjoy the garden again. The work was done speedily, efficiently and cleanly. I would definitely recommend Sam and his company.", date: "4 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "SA Landscaping Ltd | Landscaper in Tonbridge",
    description: "Professional landscaper in Tonbridge. 5.0-star rated on Google. Call for a free quote.",
  },
};
