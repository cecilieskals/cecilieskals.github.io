const projects = [
  {
    slug: "web-app",
    title: "Gemly",
    summary: "En applikation for skjulte perler.",
    description:
      "En app til dig, der ønsker at  finde 'hidden gems' overalt i verden. Appen giver brugeren mulighed for at gemme og organisere steder, samt dele og poste deres egne oplevelser og anbefalinger.",
    tags: ["React", "Vite", "GitHub Pages"],
    image: `${import.meta.env.BASE_URL}photos/gemly1.svg`,
    images: [
      `${import.meta.env.BASE_URL}photos/gemly-detail1.svg`,
      `${import.meta.env.BASE_URL}photos/gemly-detail2.svg`,
      `${import.meta.env.BASE_URL}photos/gemly-detail3.svg`,
      `${import.meta.env.BASE_URL}photos/gemly-detail4.svg`,
      `${import.meta.env.BASE_URL}photos/gemly-detail5.svg`,
    ],
    links: [
      {
        label: "Github Pages",
        href: "https://mohammadkamell.github.io/gemly-project-webapplication/",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/mohammadkamell/gemly-project-webapplication",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/8rD5x678qqW7x41Hw870dF/Gemly-Designfil?node-id=1740-26082&viewport=681%2C2244%2C0.3&t=n5fzNl0vgncwkZWn-1&scaling=scale-down&content-scaling=responsive&starting-point-node-id=1740%3A26092&page-id=1%3A5",
      },
    ],
  },
  {
    slug: "costumer-experience",
    title: "Storyhangers",
    summary: "En webshop til en fiktiv tøj-retailer.",
    description:
      "Konceptudvikling af en webshop til en fiktiv retail tøjforhandler. Vores fortolkning var en premuim secondhand-tøj webshop. ",
    tags: ["Design", "Frontend", "Proces"],
    image: `${import.meta.env.BASE_URL}photos/storyhangers.svg`,
    // detailImage: `${import.meta.env.BASE_URL}photos/story-hangers-logo.svg`,
    images: [
      `${import.meta.env.BASE_URL}photos/storyhangers-detail1.svg`,
      `${import.meta.env.BASE_URL}photos/storyhangers-detail3.svg`,
      `${import.meta.env.BASE_URL}photos/storyhangers-detail4.svg`,
    ],
    someImages: [
      `${import.meta.env.BASE_URL}photos/some-storyhangers1.svg`,
      `${import.meta.env.BASE_URL}photos/some-storyhangers2.svg`,
      `${import.meta.env.BASE_URL}photos/some-storyhangers3.svg`,
      `${import.meta.env.BASE_URL}photos/some-storyhangers4.svg`,
    ],
    processImages: [
      `${import.meta.env.BASE_URL}photos/moodboard-storyhangers.png`,
      `${import.meta.env.BASE_URL}photos/design-inspo-storyhangers.png`,
      `${import.meta.env.BASE_URL}photos/wireframes-storyhangers.png`,
      `${import.meta.env.BASE_URL}photos/styletile-storyhangers.png`,
    ],
    links: [
      {
        label: "Github Pages",
        href: "https://juliewboecher.github.io/customer-experience-exam/",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/juliewboecher/customer-experience-exam",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/ry3SWKjxsmnVtiojCvEkmU/Story-Hangers-Eksamensprojekt?page-id=1103%3A4106&node-id=828-1679&viewport=293%2C214%2C0.14&t=LXtMGLUnzVZn21q9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=828%3A1679",
      },
    ],
  },
  {
    slug: "exam-project",
    title: "Spilcaféen",
    summary: "Optimeret brugeroplevelse og design af Spilcaféens hjemmeside.",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre kan forstå dit arbejde.",
    tags: ["Design", "Frontend", "Proces"],
    image: `${import.meta.env.BASE_URL}photos/spilcafe.svg`,
    images: [
      `${import.meta.env.BASE_URL}photos/spilcafe-detail1.svg`,
      `${import.meta.env.BASE_URL}photos/spilcafe-detail2.svg`,
      `${import.meta.env.BASE_URL}photos/spilcafe-detail3.svg`,
      `${import.meta.env.BASE_URL}photos/spilcafe-detail6.svg`,
      `${import.meta.env.BASE_URL}photos/spilcafe-detail4.svg`,
      `${import.meta.env.BASE_URL}photos/spilcafe-detail5.svg`,
    ],
    links: [
      {
        label: "Github Pages",
        href: "https://cecilieskals.github.io/ixd-projekt-eksamen/",
      },
      {
        label: "GitHub Repository",
        href: "https://github.com/cecilieskals/ixd-projekt-eksamen",
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/sYUzqHgU9O2FmlU1xrvkLW/Eksamen?page-id=242%3A2878&node-id=531-2417&viewport=-509%2C442%2C0.6&t=1Wwx1MorEcOPkoiY-1&scaling=scale-down&content-scaling=fixed",
      },
    ],
  },
];

export default projects;
