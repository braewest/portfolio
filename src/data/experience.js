const experience = [
  {
    id: "asu-nasa",
    title: "ASU/NASA Psyche Mission",
    role: "Technical Lead",
    dates: "Sep. 2025 - May 2026",
    location: "Tempe, AZ",
    website: "https://missiontopsyche-platinum.github.io/platinum_14a_3d_show-cs/",
    github: "https://github.com/MissionToPsyche-Platinum/platinum_14a_3d_show-cs",
    summary:
      "Led development of an immersive 3D educational webpage for the NASA Psyche mission, built with React and Three.js, featuring a scroll-driven 3D scene with animated models of Earth and the Psyche asteroid.",
    description:
      "Led the technical development of an immersive 3D educational webpage for the NASA Psyche mission, built with React and Three.js. The site features a scroll-driven 3D scene where users move through space past animated models of Earth and the Psyche asteroid, with overlay educational content synchronized to camera position. Defined project scope, milestones, and team responsibilities, and collaborated directly with NASA and university researchers to validate scientific accuracy.",
    highlights: [
      "Built a scroll-driven 3D scene using React and Three.js with spline-based camera motion tied to scroll position.",
      "Implemented a configurable model system supporting spin, orbit, spline path following, and visibility transitions.",
      "Built a trajectory system for rendering circular, elliptical, and spline-based paths in the 3D environment.",
      "Defined project scope, milestones, and team responsibilities in alignment with NASA sponsor requirements.",
      "Collaborated with NASA and university researchers to validate scientific accuracy of the content.",
    ],
    images: [
      // { src: "/images/project-name/screenshot.png", caption: "Optional caption" },
    ],
  },
  {
    id: "packsyncr",
    title: "Packsyncr",
    role: "Full Stack Developer (Personal Project)",
    dates: "Nov. 2025 - Present",
    location: "Tempe, AZ",
    website: "",
    github: "https://github.com/braewest/packsyncr-workers",
    summary:
      "Designed and built a full-stack service for collaborative Minecraft resource packs, including a website, backend APIs, cloud storage, and a desktop app with secure OAuth-based authentication.",
    description:
      "Designed and implemented a full-stack service for collaborative Minecraft resource packs, including a website, backend APIs, cloud storage, and a desktop app, enabling users to create and manage shared resources seamlessly. Solely designed and implemented the service architecture, database schema, API endpoints, and automatic synchronization across users' systems.",
    highlights: [
      "Engineered a secure authentication and authorization system using Microsoft OAuth, JWTs, and refresh tokens, enforcing fine-grained permissions for pack access and collaborator roles.",
      "Designed and implemented the full service architecture, database schema, and API endpoints from scratch.",
      "Built automatic synchronization across users' systems for seamless collaborative resource management.",
    ],
    images: [
      // { src: "/images/project-name/screenshot.png", caption: "Optional caption" },
    ],
  },
  {
    id: "next-level-dfs",
    title: "Next Level DFS",
    role: "Web Developer (Contract Work)",
    dates: "Dec. 2025 - Jan. 2026",
    location: "Rockford, MI",
    website: "",
    github: "",
    summary:
      "Improved website performance and responsiveness by refactoring the front-end architecture and reorganizing code into modular, reusable components.",
    description:
      "Improved website performance and responsiveness by refactoring front-end architecture and optimizing components, resulting in faster load times and smoother user interactions across devices. Enhanced maintainability and scalability by reorganizing code into modular, reusable components.",
    highlights: [
      "Refactored front-end architecture to improve performance and responsiveness across devices.",
      "Reorganized codebase into modular, reusable components to improve maintainability and scalability.",
    ],
    images: [
      // { src: "/images/project-name/screenshot.png", caption: "Optional caption" },
    ],
  },
];

export default experience;
