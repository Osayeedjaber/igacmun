export const appConfig = {
  leadership: [
    { 
      name: "al rashedul farabi subaru", 
      role: "President", 
      photo: "/leadership/president.jpg",
      description: "Leading IGACMUN Session III with diplomatic excellence"
    },
    { 
      name: "marzia jannat tayba", 
      role: "Chairman", 
      photo: "/leadership/chairman.jpg",
      description: "Guiding the strategic vision of our conference"
    },
    { 
      name: "rezwan rashed zindae", 
      role: "Co-founder", 
      photo: "/leadership/cofounder.jpg",
      description: "Building the foundation of youth diplomacy"
    }
  ],
  reveals: {
    committees: { 
      mode: "countdown" as const, 
      revealAt: "2025-12-25T10:00:00Z", 
      showCountdownOverlay: false,
      enableCountdown: true
    },
    schedule: { 
      mode: "countdown" as const, 
      revealAt: "2025-12-15T10:00:00Z", 
      showCountdownOverlay: false,
      enableCountdown: true
    },
    venue: { 
      mode: "countdown" as const, 
      revealAt: "2024-12-15T10:00:00Z", 
      isSecret: true, 
      showCountdownOverlay: false 
    },
    secretariats: { 
      mode: "countdown" as const, 
      revealAt: "2024-12-20T10:00:00Z", 
      showCountdownOverlay: false 
    }
  },
  registrationTypes: [
    {
      key: 'earlyBird',
      icon: 'Star',
      color: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'border-emerald-400/40',
      flashMode: 'false'
    },
    {
      key: 'regular',
      icon: 'CheckCircle',
      color: 'from-forest-500/20 to-forest-600/5',
      borderColor: 'border-forest-400/40',
      flashMode: 'false'
    },
    {
      key: 'campusAmbassadors',
      icon: 'Users',
      color: 'from-accent-gold/20 to-accent-gold/5',
      borderColor: 'border-accent-gold/40',
      flashMode: 'false'
    },
    {
      key: 'late',
      icon: 'Clock',
      color: 'from-destructive/20 to-destructive/5',
      borderColor: 'border-destructive/40',
      flashMode: 'false'
    },
    {
      key: 'executiveBoard',
      icon: 'Crown',
      color: 'from-purple-900/30 via-indigo-800/20 to-purple-900/30',
      borderColor: 'border-purple-400/50',
      flashMode: 'false'
    },
  ],
  forms: {
    campusAmbassadors: { 
      enabled: true, 
      link: "https://forms.gle/PW95WFfWVVu2vPMD6",
      title: "Campus Ambassadors",
      description: "Represent your institution",
      deadline: "2025-11-30T23:59:59Z"
    },
    earlyBird: { 
      enabled: false, 
      link: "https://forms.gle/Rumm2ApxBcAi41649",
      title: "Early Bird Registration",
      description: "Secure your spot with discounted rates",
      deadline: "2025-10-31T23:59:59Z"
    },
    regular: { 
      enabled: false,
      link: "https://forms.gle/your-regular-registration-form-id",
      title: "Regular Registration",
      description: "Standard registration rates",
      deadline: "2025-12-10T23:59:59Z"
    },
    late: { 
      enabled: false,
      link: "https://forms.gle/your-late-registration-form-id",
      title: "Late Registration",
      description: "Last chance registration with additional fees",
      deadline: "2025-12-15T23:59:59Z"
    },
    executiveBoard: { 
      enabled: true, 
      link: "https://forms.gle/Jieo1f4TMaTnkzgeA",
      title: "Executive Board Registration",
      description: "Exclusive registration for executive positions and leadership roles",
      deadline: "2025-11-15T23:59:59Z"
    },
    paymentConfirmation: {
      enabled: true,
      link: "https://forms.gle/kruBU3Vr5336ZXXRA",
      title: "Payment Confirmation",
      description: "Submit your payment proof after registration",
      deadline: "2025-12-20T23:59:59Z"
    }
  },
  
  social: {
    instagram: "https://www.instagram.com/igac.official_",
    facebook: "https://www.facebook.com/profile.php?id=100095775481124",
    email: "intlglobalaffairscouncil@gmail.com",
    phone: "+880-18153-53082"
  },
  committees: [
    {
      name: "United Nations Security Council",
      sigilImage: "/committees/unsc.svg",
      difficulty: "Advanced",
      description: "Addressing global security challenges and maintaining international peace"
    },
    {
      name: "General Assembly",
      sigilImage: "/committees/ga.svg", 
      difficulty: "Beginner",
      description: "Discussing international cooperation and global governance"
    },
    {
      name: "Economic and Social Council",
      sigilImage: "/committees/ecosoc.svg",
      difficulty: "Intermediate",
      description: "Coordinating economic and social work of UN specialized agencies"
    },
    {
      name: "Human Rights Council",
      sigilImage: "/committees/hrc.svg",
      difficulty: "Intermediate", 
      description: "Promoting and protecting human rights around the globe"
    },
    {
      name: "International Court of Justice",
      sigilImage: "/committees/icj.svg",
      difficulty: "Advanced",
      description: "Principal judicial organ of the United Nations"
    },
    {
      name: "World Health Organization",
      sigilImage: "/committees/who.svg",
      difficulty: "Intermediate",
      description: "Directing and coordinating international health work"
    },
    {
      name: "United Nations Environment Programme",
      sigilImage: "/committees/unep.svg",
      difficulty: "Beginner",
      description: "Leading global environmental authority"
    },
    {
      name: "International Monetary Fund",
      sigilImage: "/committees/imf.svg",
      difficulty: "Advanced",
      description: "Ensuring stability of the international monetary system"
    },
    {
      name: "Arab League",
      sigilImage: "/committees/arab-league.svg",
      difficulty: "Intermediate",
      description: "Regional organization of Arab states"
    },
    {
      name: "African Union",
      sigilImage: "/committees/au.svg",
      difficulty: "Intermediate",
      description: "Continental union consisting of 55 African countries"
    }
  ],
  venue: {
    name: "AIUB",
    fullName: "American International University-Bangladesh",
    heroImage: "/venue-aiub.png",
    address: "408/1, Kuratoli, Khilkhet, Dhaka 1229",
    hidden: false
  },
  event: {
    title: "IGACMUN Session III",
    subtitle: "",
    tagline: "Where Diplomacy Meets Destiny",
    dates: "TBA",
    expectedDelegates: "1700+",
    description: "The biggest Model United Nations conference in South East Asia returns with unprecedented scale and diplomatic excellence."
  },
  schedule: {
    day1: {
      title: "Opening Day",
      date: "Day 1",
      sessions: [
        { time: "08:00 - 09:00", title: "Registration & Check-in", type: "registration" },
        { time: "09:00 - 10:00", title: "Opening Ceremony", type: "ceremony" },
        { time: "10:00 - 10:30", title: "Coffee Break", type: "break" },
        { time: "10:30 - 12:30", title: "Committee Session I", type: "committee" },
        { time: "12:30 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 16:00", title: "Committee Session II", type: "committee" },
        { time: "16:00 - 16:30", title: "Tea Break", type: "break" },
        { time: "16:30 - 18:30", title: "Committee Session III", type: "committee" }
      ]
    },
    day2: {
      title: "Main Conference Day",
      date: "Day 2", 
      sessions: [
        { time: "09:00 - 11:00", title: "Committee Session IV", type: "committee" },
        { time: "11:00 - 11:30", title: "Coffee Break", type: "break" },
        { time: "11:30 - 13:30", title: "Committee Session V", type: "committee" },
        { time: "13:30 - 15:00", title: "Lunch Break", type: "break" },
        { time: "15:00 - 17:00", title: "Committee Session VI", type: "committee" },
        { time: "17:00 - 17:30", title: "Tea Break", type: "break" },
        { time: "17:30 - 19:30", title: "Committee Session VII", type: "committee" },
        { time: "20:00 - 22:00", title: "Cultural Night", type: "social" }
      ]
    },
    day3: {
      title: "Closing Day",
      date: "Day 3",
      sessions: [
        { time: "09:00 - 11:00", title: "Final Committee Session", type: "committee" },
        { time: "11:00 - 11:30", title: "Coffee Break", type: "break" },
        { time: "11:30 - 13:00", title: "Resolution Presentation", type: "presentation" },
        { time: "13:00 - 14:30", title: "Lunch Break", type: "break" },
        { time: "14:30 - 16:00", title: "Awards Ceremony", type: "ceremony" },
        { time: "16:00 - 17:00", title: "Closing Ceremony", type: "ceremony" },
        { time: "17:00 - 18:00", title: "Networking & Farewell", type: "social" }
      ]
    }
  }
} as const;

export type AppConfig = typeof appConfig;
