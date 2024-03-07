export const experiences: Experience[] = [
  {
    company: "Company A",
    position: "Senior Software Engineer",
    start: new Date("2024-02-05"),
    end: "present",
    location: "Remote (Country X)",
    short_description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel purus finibus dignissim. Sed efficitur leo id ipsum sodales, nec ultricies risus vestibulum.
     `,
    descriptions: [],
    keywords: ["Python", "Django", "Typescript", "React", "PostgreSQL", "Sass"],
  },
  {
    company: "Company B",
    position: "Software Engineer",
    start: new Date("2021-11-01"),
    end: "2024-01-31",
    location: "Remote (Country Y)",
    short_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel purus finibus dignissim. Sed efficitur leo id ipsum sodales, nec ultricies risus vestibulum.",
    descriptions: [
      {
        description:
          "Helped rewrite the entire frontend from scratch using React, StencilJs, Typescript and GraphQL (Apollo).",
        keywords: ["Typescript", "StencilJs", "React", "GraphQL (Apollo)"],
      },
      {
        description:
          "Refactored huge parts of the backend to improve performance and maintainability.",
        keywords: ["Typescript", "Node", "Express", "MongoDB"],
      },
      {
        description:
          "Improved developer experience by setting up new CI/CD pipelines to automated releases, linting and builds, also developed new internal tools to improve developer velocity.",
        keywords: ["Github Actions", "Sentry", "Docker"],
      },
      {
        description:
          "Lead the development of E2E tests using Cypress and Jest, and improved test coverage by 30%.",
        keywords: ["Cypress", "Mocha", "Github Actions"],
      },
      {
        description:
          "Established a vulnerability management process and improved security by fixing all reported issues.",
        keywords: ["Snyk", "Github Actions"],
      },
    ],
    keywords: [
      "Typescript",
      "MongoDB",
      "React",
      "Node",
      "Express",
      "GraphQL (Apollo)",
      "StencilJs",
    ],
  },
  {
    company: "Company C",
    position: "Lead Software Engineer",
    start: new Date("2020-04-01"),
    location: "Remote (Country Y)",
    end: "2021-11-01",
    short_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel purus finibus dignissim. Sed efficitur leo id ipsum sodales, nec ultricies risus vestibulum.",
    descriptions: [
      {
        description:
          "Lead the development of the company's MVP and all related products (web and mobile).",
        keywords: ["Typescript", "Vue", "Node", "Express", "MongoDB"],
      },
      {
        description:
          "Developed a hybrid mobile application using Vue and Capacitor to allow users to watch live-streamed sessions on their mobile devices.",
        keywords: ["Vue", "Node", "Express", "Capacitor"],
      },
      {
        description:
          "Setup automated CI/CD pipelines for all products using Github Actions, with automated deployments and releases to mobile app stores and web platforms.",
        keywords: ["Github Actions", "Docker", "Fastlane"],
      },
    ],
    keywords: ["Typescript", "MongoDB", "Vue 3", "Express"],
  },
  {
    company: "Company D",
    position: "Software Developer",
    start: new Date("2015-12-01"),
    end: "2020-03-01",
    location: "Remote (Country X / Country Z)",
    short_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel purus finibus dignissim. Sed efficitur leo id ipsum sodales, nec ultricies risus vestibulum.",
    descriptions: [
      {
        description:
          "Lead the development of the company's MVP and all related products (web and mobile).",
        keywords: ["Typescript", "Vue", "Node", "Express", "MongoDB"],
      },
      {
        description:
          "Developed a hybrid mobile application using Vue and Capacitor to allow users to watch live-streamed sessions on their mobile devices.",
        keywords: ["Vue", "Node", "Express", "Capacitor"],
      },
      {
        description:
          "Setup automated CI/CD pipelines for all products using Github Actions, with automated deployments and releases to mobile app stores and web platforms.",
        keywords: ["Github Actions", "Docker", "Fastlane"],
      },
    ],
    keywords: [
      "Typescript",
      "MongoDB",
      "Vue 2",
      "PHP",
      "Laravel",
      "Node",
      "Express",
      "GraphQL (Apollo)",
    ],
  },
  {
    company: "Company E",
    position: "Software Engineering intern",
    start: new Date("2019-06-01"),
    end: "2019-08-01",
    location: "Country X",
    short_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel purus finibus dignissim. Sed efficitur leo id ipsum sodales, nec ultricies risus vestibulum.",
    descriptions: [
      {
        description:
          "Developed new UI components and improved the overall UX of the application.",
        keywords: ["Vue", "Vuex", "Firebase"],
      },
      {
        description: "Created a new product landing page",
        keywords: ["Wordpress", "HTML", "CSS", "Javascript"],
      },
      {
        description:
          "Developed and deployed a PDF export service using Node and Puppeteer and deployed it to GCP.",
        keywords: ["Node", "Express", "Puppeteer", "GCP", "Docker"],
      },
    ],
    keywords: [
      "Typescript",
      "MongoDB",
      "Vue 2",
      "Node",
      "Express",
      "Wordpress",
      "Docker",
      "GCP",
    ],
  },
];

export interface Experience {
  company: string;
  position: string;
  start: Date;
  end: string;
  location: string;
  short_description: string;
  descriptions: Array<{
    description: string;
    keywords: string[];
  }>;
  keywords: string[];
}
