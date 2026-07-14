import { shared } from '../data/cv'

const en = {
  meta: {
    title: 'Musteață Ștefan · Front-End Developer',
    description:
      'Musteață Ștefan — Front-End Developer. Portfolio and CV: HTML, CSS, JavaScript, React, WordPress, Laravel.',
  },
  nav: {
    experience: 'Experience',
    skills: 'Skills',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  controls: {
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    langEn: 'English',
    langRo: 'Romanian',
  },
  hero: {
    kicker: 'Open to opportunities',
    title: 'Front-End Developer',
    tagline:
      'Building fast, responsive websites with clean markup, careful CSS, and modern JavaScript.',
    ctaMail: 'Get in touch',
    ctaWork: 'View work',
    scroll: 'Scroll',
  },
  experience: {
    eyebrow: '01 — Career',
    title: 'Experience that ships',
    lede: 'Front-end craft across WordPress, Laravel and React — interfaces that feel sharp and load clean.',
    jobs: {
      invensis: {
        period: 'April 2023 – Present',
        role: 'Web Developer',
      },
      blueline: {
        period: 'October 2021 – March 2023',
        role: 'Web Developer',
        activities:
          'Website creation, custom WordPress themes, installation and configuration.',
      },
      halley: {
        period: 'May 2020 – September 2021',
        role: 'Web Developer',
        activities:
          'Website creation, custom WordPress themes, installation and configuration.',
      },
      freelancer: {
        period: 'October 2019 – April 2020',
        role: 'Web Developer',
        activities: 'Website creation and front-end development.',
      },
      vega: {
        period: 'August 2017 – October 2019',
        role: 'System Helper',
        location: 'Germany',
        activities:
          'PowerPoint slideshows, label printing, Excel statistics and operational support.',
      },
      webxmedia: {
        period: 'June 2016 – July 2017',
        role: 'Web Developer',
        activities: 'Websites and applications development.',
      },
      bina: {
        period: 'December 2015 – May 2016',
        role: 'Web Developer',
        activities: 'Websites and applications development.',
      },
      webtellus: {
        period: 'July 2012 – September 2015',
        role: 'Front-End Developer',
        activities: 'Websites and applications development.',
      },
    },
  },
  skills: {
    eyebrow: '02 — Toolkit',
    title: 'Skills & stack',
    lede: 'Deep CSS and HTML foundations, with solid JavaScript and a practical backend toolkit.',
    advanced: 'Advanced',
    intermediate: 'Intermediate',
    familiar: 'Familiar',
  },
  work: {
    eyebrow: '03 — Portfolio',
    title: 'Selected websites',
    lede: 'Live projects across e-commerce, brand sites and custom builds.',
    groups: {
      wordpress: 'WordPress & WooCommerce',
      reactLaravel: 'React & Laravel',
      laravel: 'Laravel',
      frontendPhp: 'Front-end & PHP',
    },
  },
  about: {
    eyebrow: '04 — Background',
    title: 'Education & more',
    education: 'Education',
    languages: 'Languages',
    workingStyle: 'Working style',
    hobbies: 'Hobbies',
    details: 'Details',
    nationality: 'Nationality',
    basedIn: 'Based in',
    specialization: 'Specialization',
    school: '„B.P. Hasdeu” State University',
    period: 'Sep 2009 – Jun 2012',
    faculty: 'Math and Economical Computer Sciences',
    specializationValue: 'Computer Sciences',
    subjects: [
      'High-level programming languages',
      'Assembly',
      'Computer architecture',
      'Operating systems',
      'Networking',
      'Web programming',
      'C / C++',
      'AutoCAD',
    ],
    spoken: [
      { name: 'Romanian', level: 'Native' },
      { name: 'Russian', level: 'Intermediate' },
      { name: 'English', level: 'Intermediate · B1' },
    ],
    softSkills: [
      'Teamwork and collaborative delivery',
      'Project and team coordination',
      'Front-end ownership on web projects',
      'Client requirements review',
      'Building sites to brief',
      'Researching new technologies',
    ],
    hobbiesList: ['Soccer', 'Chess', 'IoT & technology'],
    nationalityValue: 'Moldavian / Romanian',
  },
  contact: {
    eyebrow: '05 — Contact',
    titleBefore: 'Let’s build something',
    titleAccent: ' sharp.',
    lede: 'Front-end, WordPress themes, or Laravel-backed interfaces — ready when you are.',
    linkedin: 'LinkedIn',
  },
  footer: {
    backToTop: 'Back to top ↑',
  },
}

const ro = {
  meta: {
    title: 'Musteață Ștefan · Front-End Developer',
    description:
      'Musteață Ștefan — Front-End Developer. Portofoliu și CV: HTML, CSS, JavaScript, React, WordPress, Laravel.',
  },
  nav: {
    experience: 'Experiență',
    skills: 'Skill-uri',
    work: 'Proiecte',
    about: 'Despre',
    contact: 'Contact',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
  },
  controls: {
    themeLight: 'Comută pe modul luminos',
    themeDark: 'Comută pe modul întunecat',
    langEn: 'Engleză',
    langRo: 'Română',
  },
  hero: {
    kicker: 'Deschis la colaborări',
    title: 'Front-End Developer',
    tagline:
      'Construiesc site-uri rapide și responsive, cu markup curat, CSS atent și JavaScript modern.',
    ctaMail: 'Scrie-mi',
    ctaWork: 'Vezi proiecte',
    scroll: 'Scroll',
  },
  experience: {
    eyebrow: '01 — Carieră',
    title: 'Experiență profesională',
    lede: 'Front-end pe WordPress, Laravel și React — interfețe clare, rapide și bine construite.',
    jobs: {
      invensis: {
        period: 'Aprilie 2023 – Prezent',
        role: 'Web Developer',
      },
      blueline: {
        period: 'Octombrie 2021 – Martie 2023',
        role: 'Web Developer',
        activities:
          'Creare website-uri, teme WordPress custom, instalare și configurare.',
      },
      halley: {
        period: 'Mai 2020 – Septembrie 2021',
        role: 'Web Developer',
        activities:
          'Creare website-uri, teme WordPress custom, instalare și configurare.',
      },
      freelancer: {
        period: 'Octombrie 2019 – Aprilie 2020',
        role: 'Web Developer',
        activities: 'Creare website-uri și dezvoltare front-end.',
      },
      vega: {
        period: 'August 2017 – Octombrie 2019',
        role: 'System Helper',
        location: 'Germania',
        activities:
          'Prezentări PowerPoint, tipărire etichete, statistici în Excel și suport operațional.',
      },
      webxmedia: {
        period: 'Iunie 2016 – Iulie 2017',
        role: 'Web Developer',
        activities: 'Dezvoltare website-uri și aplicații.',
      },
      bina: {
        period: 'Decembrie 2015 – Mai 2016',
        role: 'Web Developer',
        activities: 'Dezvoltare website-uri și aplicații.',
      },
      webtellus: {
        period: 'Iulie 2012 – Septembrie 2015',
        role: 'Front-End Developer',
        activities: 'Dezvoltare website-uri și aplicații.',
      },
    },
  },
  skills: {
    eyebrow: '02 — Toolkit',
    title: 'Skill-uri & stack',
    lede: 'Bază solidă de CSS și HTML, JavaScript bun și un toolkit practic de backend.',
    advanced: 'Avansat',
    intermediate: 'Intermediar',
    familiar: 'Familiar',
  },
  work: {
    eyebrow: '03 — Portofoliu',
    title: 'Website-uri create',
    lede: 'Proiecte live pe e-commerce, site-uri de brand și build-uri custom.',
    groups: {
      wordpress: 'WordPress & WooCommerce',
      reactLaravel: 'React & Laravel',
      laravel: 'Laravel',
      frontendPhp: 'Front-end & PHP',
    },
  },
  about: {
    eyebrow: '04 — Background',
    title: 'Educație & altele',
    education: 'Educație',
    languages: 'Limbi',
    workingStyle: 'Stil de lucru',
    hobbies: 'Hobby-uri',
    details: 'Detalii',
    nationality: 'Naționalitate',
    basedIn: 'Localizare',
    specialization: 'Specializare',
    school: 'Universitatea de Stat „B.P. Hasdeu”',
    period: 'Sep 2009 – Iun 2012',
    faculty: 'Matematică și Informatică Economică',
    specializationValue: 'Informatică',
    subjects: [
      'Limbaje de programare de nivel înalt',
      'Limbaje de asamblare',
      'Arhitectura calculatoarelor',
      'Sisteme de operare',
      'Rețele',
      'Programare web',
      'C / C++',
      'AutoCAD',
    ],
    spoken: [
      { name: 'Română', level: 'Nativă' },
      { name: 'Rusă', level: 'Intermediar' },
      { name: 'Engleză', level: 'Intermediar · B1' },
    ],
    softSkills: [
      'Lucru în echipă și livrare colaborativă',
      'Coordonare de proiect și echipă',
      'Ownership pe partea de front-end',
      'Analiza cerințelor clienților',
      'Creare site-uri conform brief-ului',
      'Cercetare de tehnologii noi',
    ],
    hobbiesList: ['Fotbal', 'Șah', 'IoT & tehnologie'],
    nationalityValue: 'Moldovean / Român',
  },
  contact: {
    eyebrow: '05 — Contact',
    titleBefore: 'Hai să construim ceva',
    titleAccent: ' bun.',
    lede: 'Front-end, teme WordPress sau interfețe pe Laravel — sunt gata când ești și tu.',
    linkedin: 'LinkedIn',
  },
  footer: {
    backToTop: 'Înapoi sus ↑',
  },
}

export const dictionaries = { en, ro }

export function getUi(lang) {
  return dictionaries[lang] ?? dictionaries.en
}

export function buildExperience(lang) {
  const jobs = getUi(lang).experience.jobs
  return shared.experienceMeta.map((meta) => ({
    ...meta,
    ...jobs[meta.id],
  }))
}

export function buildProjects(lang) {
  const groups = getUi(lang).work.groups
  return shared.projects.map((project) => ({
    ...project,
    label: groups[project.id],
  }))
}
