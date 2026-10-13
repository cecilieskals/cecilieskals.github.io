const projects = [
  {
    slug: "re-commerce",
    title: "La Rouge / à l´avant",
    summary:
      "Re-commerce for La Rouge. Konceptudvikling af webshop med fokus på secondhand. à l´avant er til dig, der ønsker at købe secondhand tøj af høj kvalitet.",
    description:
      "Re-commerce for La Rouge. Konceptudvikling af en webshop med fokus på secondhand. à l´avant er til dig, der ønsker at købe secondhand tøj af høj kvalitet. Her tilbydes et bredt udvalg af tøj og accessories af høj kvalitet - både basics og unikke pieces, for at kunderne får en shoppingoplevelse, der møder deres behov.",
    focus: "Målgruppeindsigt – Brandidentitet – Digital brugeroplevelse",
    methods: "Konceptudvikling – Brugerundersøgelse – Research – UX/UI design",
    tags: ["Re-commerce"],
    image: `${import.meta.env.BASE_URL}photos/larouge2.svg`,
    links: [
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/6Zo726U8LHnWHRK2FNyTz4/La-Rouge-Design?node-id=578-1480&viewport=306%2C-161%2C0.4&t=5tzXO2ZONt9ZMbqm-1&scaling=scale-down&content-scaling=fixed&page-id=278%3A1994",
      },
      {
        label: "Figma designfil",
        href: "https://www.figma.com/design/6Zo726U8LHnWHRK2FNyTz4/La-Rouge-Design?node-id=278-1994&t=6K14Vl6CkUKL8ib8-1",
      },
    ],
  },
  {
    slug: "onboarding",
    title: "Vuuh",
    summary:
      "Design af en problemfri onboarding-oplevelse. Hvordan kan vi hjælpe modeforhandlere med at installere, konfigurere og begynde at bruge Vuuh uden personlig assistance?",
    description:
      "Formålet med projektet var at designe en problemfri onboarding-oplevelse for Vuuh. Målet var at hjælpe brugerne med at installere, konfigurere og begynde at bruge Vuuh uden behov for personlig assistance. Udfordringen var at gøre en kompleks og forvirrende opsætningsprocess mere overskuelig og dermed hjælpe brugeren sikkert gennem de nødvendige trin.",
    focus: "Userflow – Onboarding",
    methods:
      "Onboarding – UX/UI design – Walkthrough – UX Audit – Observationcards",
    tags: ["Onboarding"],
    image: `${import.meta.env.BASE_URL}photos/vuuh.svg`,
    images: [
      `${import.meta.env.BASE_URL}photos/vuuh-detail1.svg`,
      `${import.meta.env.BASE_URL}photos/vuuh-detail2.svg`,
      `${import.meta.env.BASE_URL}photos/vuuh-detail3.svg`,
      `${import.meta.env.BASE_URL}photos/vuuh-detail4.svg`,
      `${import.meta.env.BASE_URL}photos/vuuh-detail5.svg`,
    ],
    links: [
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/proto/MeZ6V3TVoAOar2gzLS52rb/Case-2---Vuuh?node-id=187-1116&viewport=214%2C341%2C0.05&t=ROdR9HOpFjPJyDFR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=187%3A1116&page-id=102%3A2439",
      },
      {
        label: "UX Audit",
        href: "https://drive.google.com/file/d/1r6ZC2bulI5YFLgJ1n-_2rd0doWEptNk5/view",
      },
    ],
    process: [
      {
        title: "Undersøgelse og prioritering",
        description:
          "Først blev der udarbejdet observationcards for at identificere de største udfordringer i onboarding-processen. På baggrund af disse blev der udarbejdet UX-findings, som blev prioriteret for at fokusere på de mest kritiske områder. Med udgangspunkt i disse findings, blev der udviklet et guided onboardignsflow, hvor brugeren bliver guided step for step gennem opsætnignen. Flowet anvender en walktrough, som hjælper brugeren med at forstå, hvordan de skal navigere gennem processen og udføre de nødvendige handlinger.",
        image: `${import.meta.env.BASE_URL}photos/vuuh-detail1.svg`,
      },
      {
        title: "UX-Finding 1 - Successide",
        image: `${import.meta.env.BASE_URL}photos/vuuh-detail2.png`,
      },
      {
        title: "UX-Finding 2 - Connect to Shopify",
        image: `${import.meta.env.BASE_URL}photos/vuuh-detail3.png`,
      },
      {
        title: "UX-Finding 3 - Efter udfyldt formular",
        image: `${import.meta.env.BASE_URL}photos/vuuh-detail4.png`,
      },
      {
        title: "UX-Finding 4 - Test-ordre flow",
      },
    ],
  },

  {
    slug: "optimering",
    title: "Mellemrum",
    summary:
      "Optimering af en fiktiv hjemmeside med fokus på errorhandling og accessibility.",
    description:
      "Projektet tog udgangspunkt i en fiktiv hjemmeside, hvor fokus har været på at identificere og optimerere errorhandling og accessibility for at forbedre brugeroplevelsen. De største udfordringer og optimeringsmuligheder blev identificeret i en UX-audit, hvortil der er udviklet løsninger for at forhindre situationer, hvor brugeren kan opleve fejl, usikkerhed eller manglende feedback.",
    focus: "Optimering – Frontend – UX",
    methods: "UX Audit – Supabase – React – Accessibility – Errorhandling",
    tags: ["Optimering"],
    image: `${import.meta.env.BASE_URL}photos/mellemrum.svg`,
    images: [
      `${import.meta.env.BASE_URL}photos/mellemrum-detail1.png`,
      `${import.meta.env.BASE_URL}photos/mellemrum-detail2.png`,
      `${import.meta.env.BASE_URL}photos/mellemrum-detail3.png`,
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/cecilieskals/mellemrum",
      },
      {
        label: "Github Pages",
        href: "https://cecilieskals.github.io/mellemrum/",
      },
    ],
    process: [
      {
        title: "Undersøgelse og prioritering af UX-findings",
        description:
          "En UX-audit blev udført for at identificere de største udfordringer og optimeringsmuligheder på hjemmesiden. Dette gav mulighed for at udvikle løsninger, der forbedrer brugeroplevelsen og sikrer, at brugeren ikke oplever fejl, usikkerhed eller manglende feedback.",
        image: `${import.meta.env.BASE_URL}photos/mellemrum-detail1.png`,
      },
      {
        title: "Errorhandling",
      },
      {
        title: "Loadingstates",
      },
      {
        title: "Supabase integration",
      },
    ],
    reflections: [
      {
        title: "Refleksion",
        description:
          "Projektet har givet mig erfaring med at identificere og optimere brugeroplevelsen på en hjemmeside. Jeg har lært vigtigheden af at udføre UX-audits for at identificere udfordringer og optimeringsmuligheder, samt hvordan med prioriterer sådanne. Dertil har jeg lært hvordan man udvikler løsninger bagom, der forbedrer brugeroplevelsen og sikrer, at brugeren ikke oplever fejl, usikkerhed eller manglende feedback. Desuden har projektet lært mig, at en god brugeroplevelse ikke kun handler om det visuelle design, men også om at håndtere fejl og kommunikere tydeligt med brugeren. Jeg har fået en dybere forståelse for både hvordan, men også vigtigheden i, at man bagom kan skabe en mere brugervenlig oplevelse for brugeren. Derudover har jeg også fået mere erfaring med Supabase i forbindelse med optimering af tilmeldingsflowet.",
      },
    ],
  },

  {
    slug: "web-app",
    title: "Gemly",
    summary:
      "En applikation for skjulte perler. Til dig, der ønsker at finde 'hidden gems' overalt i verden. En app, der hjælper dig med at finde nye steder gennem søgning og filtrering, gemme dine favoritter i personlige mapper og album, orientere dig over steder nær dig, og dele anbefalinger med andre gennem opslag og kommentarer.",
    description:
      "En applikation for skjulte perler. Til dig, der ønsker at finde 'hidden gems' overalt i verden. En app, der hjælper dig med at finde nye steder gennem søgning og filtrering, gemme dine favoritter i personlige mapper og album, orientere dig over steder nær dig, og dele anbefalinger med andre gennem opslag og kommentarer. at  finde 'hidden gems' overalt i verden. Appen giver brugeren mulighed for at gemme og organisere steder, samt dele og poste deres egne oplevelser og anbefalinger.",
    focus: "Research – Design – Udvikling",
    methods:
      "Konceptudvikling – UX – Brugertests – Onboarding – Supabase – React",
    tags: ["Web App"],
    image: `${import.meta.env.BASE_URL}photos/gemly1.svg`,
    images: [
      `${import.meta.env.BASE_URL}photos/gemly-detail1.svg`,
      `${import.meta.env.BASE_URL}photos/gemly-detail2.svg`,
      `${import.meta.env.BASE_URL}photos/gemly-detail3.svg`,
      `${import.meta.env.BASE_URL}photos/gemly-detail4.svg`,
      `${import.meta.env.BASE_URL}photos/gemly-detail5.svg`,
    ],
    doubleDiamond: [
      {
        title: "Discover",
        text: "Brainstorm emne - Undersøgt målgruppe - HMW - Card sorting",
      },
      {
        title: "Define",
        text: "Flows - VPC - User needs og user stories - OOUX - Definere målgruppe - Koncept",
      },
      {
        title: "Develop",
        text: "Brugertest af koncept - Lo-fi skitser af layout - Skitser i Figma - Test af Figma skitseret prototype - Heuristisk evaluering",
      },
      {
        title: "Deliver",
        text: "Figma prototype - Programmering - Finpudsning af løsning",
      },
    ],
    process: [
      {
        title: "Moodboard",
        description:
          "Moodboardet blev lavet for at finde en visuel retning for appen.",
        image: `${import.meta.env.BASE_URL}photos/moodboard-gemly.png`,
      },
      {
        title: "Brugertests",
        description:
          "Vi lavede løbende flere forskellige slags tests på målgruppen. Dette gav os mulighed for at få feedback på vores design og funktionalitet, og vi kunne justere og forbedre appen baseret på brugernes input.",
        image: `${import.meta.env.BASE_URL}photos/brugertests-gemly.png`,
      },
      {
        title: "Wireframes",
        description:
          "Vi udarbejdede wireframes for at planlægge layoutet af appen. Dette gav os mulighed for at teste og iterere på designet, inden vi gik videre med den endelige løsning.",
        image: `${import.meta.env.BASE_URL}photos/wireframes-gemly.png`,
      },
      {
        title: "Styletile",
        description:
          "Vi lavede et styletile for at definere farver, typografi og andre designelementer til appen. Heri ligger også en visuel retning, som vi har fulgt igennem hele designprocessen og skaber en rød tråd.",
        image: `${import.meta.env.BASE_URL}photos/styletile-gemly.png`,
      },
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
    summary:
      "En webshop til en fiktiv tøj-retailer. Story Hangers er til dig, der ønsker at købe secondhand tøj af høj kvalitet. ",
    description:
      "Konceptudvikling af en webshop til en fiktiv retail tøjforhandler. Vores fortolkning var en premuim secondhand-tøj webshop. ",
    focus: "Research – Design – Strategi",
    methods: "Wireframes – Brugertests – Visual design – Ecommerce UX",
    tags: ["Webshop"],
    image: `${import.meta.env.BASE_URL}photos/storyhangers.svg`,
    // detailImage: `${import.meta.env.BASE_URL}photos/story-hangers-logo.svg`,
    images: [
      `${import.meta.env.BASE_URL}photos/storyhangers-detail1.svg`,
      `${import.meta.env.BASE_URL}photos/storyhangers-detail3.svg`,
      `${import.meta.env.BASE_URL}photos/storyhangers-detail4.svg`,
    ],
    someImages: [
      `${import.meta.env.BASE_URL}photos/some-storyhangers1.png`,
      `${import.meta.env.BASE_URL}photos/some-storyhangers2.png`,
      `${import.meta.env.BASE_URL}photos/some-storyhangers3.png`,
      `${import.meta.env.BASE_URL}photos/some-storyhangers4.png`,
    ],
    process: [
      {
        title: "Moodboard",
        description:
          "Moodboardet blev lavet for at finde en visuel retning for webshoppen.",
        image: `${import.meta.env.BASE_URL}photos/moodboard-storyhangers.png`,
      },
      {
        title: "Brugerundersøgelse",
        description:
          "Vi lavede løbende flere forskellige slags tests på målgruppen. Dette gav os mulighed for at få feedback på vores design og funktionalitet, og vi kunne justere og forbedre appen baseret på brugernes input.",
        image: `${import.meta.env.BASE_URL}photos/brugertest-storyhangers.png`,
      },
      {
        title: "Wireframes",
        description:
          "Vi udarbejdede wireframes for at planlægge layoutet af webshoppen. Dette gav os mulighed for at teste og iterere på designet, inden vi gik videre med den endelige løsning.",
        image: `${import.meta.env.BASE_URL}photos/wireframes-storyhangers.png`,
      },
      {
        title: "Styletile",
        description:
          "Vi lavede et styletile for at definere farver, typografi og andre designelementer til webshoppen. Heri ligger også en visuel retning, som vi har fulgt igennem hele designprocessen og skaber en rød tråd.",
        image: `${import.meta.env.BASE_URL}photos/styletile-storyhangers.png`,
      },
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
    summary: "Re-design af Spilcaféens hjemmeside.",
    description:
      "Re-design af Spilcaféens hjemmeside med fokus på at forbedre brugeroplevelsen og gøre det nemmere for kunder at finde information om spillene.",
    focus: "Research – Design – User flow",
    methods: "Heuristik – UX writing – Wireframes – UI design",
    tags: ["Optimering"],
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
