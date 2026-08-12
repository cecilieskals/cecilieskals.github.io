const projects = [
  {
    slug: "web-app",
    title: "Gemly",
    summary:
      "En fiktiv applikation til at gemme og organisere steder at besøge under din næste rejse.",
    description:
      "Portfolioen viser udvalgte projekter og fungerer som et udgangspunkt for at arbejde med komponenter, routing, styling og deployment.",
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
        label: "Live site",
        href: "https://username.github.io",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },
  {
    slug: "costumer-experience",
    title: "Storyhangers",
    summary:
      "En webshop til en fiktiv tøj-retailer, der sælger tøj fra flere brands.",
    description:
      "Opgavebeskrivelsen var at udvikle en webshop til en fiktiv tøj-retailer, der sælger tøj fra flere brands. Vores fortolkning var en premuim secondhand-tøj webshop. ",
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
        label: "Eksempel-link",
        href: "https://github.com",
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
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  },
];

export default projects;
