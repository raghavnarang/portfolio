// ============================================================================
// PORTFOLIO DATA - Edit this file to update your portfolio content
// ============================================================================

export const PROFILE = {
  name: "Raghav Narang",
  title: "Senior Software Engineer",
  subtitle: "Fullstack Dev · CSS Enthusiast",
  avatar: "/avatar.jpg",
  location: "Remote",
  availability: "Available for freelance",
  email: "raghavvnarang@gmail.com",
  github: "https://github.com/raghavnarang",
  linkedin: "https://www.linkedin.com/in/raghav-narang/",
  bio: `10+ years building fast, scalable web applications. Specializing in React and Next.js with a focus on clean, optimized code. Currently expanding into Golang and Java.`,
};

export const SKILLS = {
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux.js", "Storybook"],
  backend: ["Node.js", "Golang", "Java", "PHP", "PostgreSQL"],
  other: ["Jest", "Playwright", "Performance Optimization", "AI-Assisted Dev"],
};

// Skills to highlight with primary color
export const HIGHLIGHTED_SKILLS = ["React.js", "Next.js", "Tailwind CSS", "AI-Assisted Dev"];

export const FEATURED_PROJECT = {
  title: "Nutflick.com",
  logo: "/nutlfick-logo.png",
  description:
    "Full-stack e-commerce platform built with Next.js 15 and Payload CMS. Achieved 99 Lighthouse performance score through SSG and advanced caching strategies.",
  link: "https://nutflick.com",
  tags: ["Next.js 15", "Payload CMS", "SSG", "E-Commerce"],
  year: "2024",
  highlights: [
    "99 Lighthouse performance score",
    "Instant page loads with SSG",
    "Full-stack with Payload CMS 3.0",
  ],
};

// Add more projects here when ready
export const OTHER_PROJECTS: Array<{
  title: string;
  description: string;
  link: string;
  tags: string[];
  year: string;
}> = [
  // {
  //   title: "Project Name",
  //   description: "Brief description",
  //   link: "https://example.com",
  //   tags: ["Tag1", "Tag2"],
  //   year: "2024",
  // },
];

export const WORK_EXPERIENCE = [
  {
    company: "Proximity Works",
    title: "Senior Frontend Engineer",
    years: "Nov 2024 — Present",
    description:
      "Building features for India's largest OTT platform serving millions of daily active users. Leading frontend developers and ensuring platform stability.",
    current: true,
  },
  {
    company: "Proximity Works",
    title: "Frontend Engineer",
    years: "Dec 2021 — Nov 2024",
    description:
      "Built Guest User Experience, Profiles 3.0 with parabolic CSS animations, Parental Lock, and Maturity Ratings. Implemented Next.js & Cloudinary-based image optimization.",
    award: {
      title: "Above and Beyond Award (2023)",
      link: "https://www.linkedin.com/posts/raghav-narang_proximity-above-and-beyond-award-activity-7030043288107692032-FgaR",
    },
  },
  {
    company: "WiseTR (FunnelKit)",
    title: "Full Stack Developer",
    years: "Oct 2019 — Nov 2021",
    description:
      "Built world's first WooCommerce-based CRM plugin. Improved email broadcast from 15 to 70 emails/sec. Led team of 3 developers.",
  },
  {
    company: "Peer Infotech",
    title: "Full Stack Developer",
    years: "Jul 2018 — Sep 2019",
    description:
      "Developed 50+ WordPress sites. Optimized PageSpeed scores and led team of 2 developers.",
  },
  {
    company: "Freelance",
    title: "Web Developer",
    years: "Jan 2017 — Jun 2018",
    description:
      "Built React Native e-commerce app with WooCommerce, taxi booking module with Kotlin & Firebase, and audio streaming platform with SoundCloud API.",
  },
  {
    company: "WANDR",
    title: "WordPress Developer",
    years: "Jan 2015 — Dec 2016",
    description:
      "Remote for LA-based UI/UX agency. Built custom themes and WooCommerce shipping integration with Shippo API.",
  },
];

export const EDUCATION = {
  institution: "Guru Nanak Dev University",
  degree: "B.Sc. Information Technology",
  years: "2011 — 2014",
};

export const OPEN_SOURCE = [
  {
    project: "Gutenberg",
    description: "WordPress block editor",
    link: "https://github.com/WordPress/gutenberg/issues/26505",
  },
];

// SEO Metadata
export const SEO = {
  title: "Raghav Narang - Senior Software Engineer",
  description:
    "Senior Software Engineer with 10+ years of experience building scalable web applications. Specializing in React, Next.js, and TypeScript. Currently at India's largest OTT platform.",
  keywords: [
    "Raghav Narang",
    "Senior Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Freelance Developer",
    "Tailwind CSS",
    "Web Developer India",
  ],
  url: "https://raghavnarang.dev",
  image: "/avatar.jpg",
};
