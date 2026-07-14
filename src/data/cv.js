export const shared = {
  name: 'Musteață Ștefan',
  firstName: 'Ștefan',
  lastName: 'Musteață',
  location: 'Chișinău · București',
  email: 'musteata.stefan90@gmail.com',
  phone: '+373 78275594',
  linkedin:
    'https://www.linkedin.com/in/mustea%C8%9B%C4%83-%C8%99tefan-4a1b25123/',
  birth: '11.08.1990',
  skills: {
    advanced: ['HTML5', 'CSS3 / SCSS', 'Bootstrap'],
    intermediate: [
      'JavaScript / ES6',
      'jQuery',
      'PHP / Laravel',
      'MySQL',
      'REST API',
      'React',
      'WordPress',
      'SEO',
      'Git',
      'Responsive Design',
      'Cross-browser',
      'Postman',
    ],
    basic: ['Photoshop', 'Webpack', 'Figma'],
  },
  projects: [
    {
      id: 'wordpress',
      stack: 'HTML · CSS · SCSS · Gulp · PHP · Vue · GSAP · JS · jQuery',
      sites: [
        'https://blueline.md/',
        'https://24max.it/',
        'https://borgoluce.it/',
        'https://centroserviziterziario.re.it/',
        'https://coparservizi.it/',
        'https://enamourskinstudio.it/',
        'https://forza4.eu/',
        'https://fruitsun.it/',
        'https://www.mbfevolution.com/',
        'https://mivebo.it/',
        'https://moonflower.it/',
        'https://pizzavoglia.it/',
        'https://studioprogetec.it/',
        'https://remax-abacus.com/',
        'https://studioingsassatelli.com/',
        'https://tsavignanese.com/',
        'https://trattorialarosablu.it/',
        'https://www.villagallorizzardi.it/',
        'https://salumificiotarasconi.it/',
        'https://sinergie.re/',
        'https://pizzaromana.md/',
        'http://www.foce.it/',
        'https://suoniesapori.bludelego.it/',
        'https://anticasalumeria.altuofianco.com/',
        'https://casamargot.altuofianco.com/',
        'https://bluebike.altuofianco.com/',
        'https://tacchettifiori.it/',
        'https://ziroma.bludelego.it/',
      ],
    },
    {
      id: 'reactLaravel',
      stack: 'HTML · CSS · SCSS · Gulp · PHP · JS · Bootstrap',
      sites: ['https://rand.md/'],
    },
    {
      id: 'laravel',
      stack: 'HTML · CSS · SCSS · Gulp · PHP · JS · Bootstrap · Vite',
      sites: [
        'https://samsungstore.md/',
        'https://istore.md/',
        'https://darwin.md/',
        'https://enter.online/',
        'https://www.thecamelcollectors.com/',
        'https://valdimobila.md/',
        'https://instrumentall.md/',
      ],
    },
    {
      id: 'frontendPhp',
      stack: 'HTML · CSS · PHP · JS · jQuery · Bootstrap',
      sites: [
        'https://webxmedia.ca/',
        'https://soularchild.com/',
        'https://kas-r.de/',
      ],
    },
  ],
  experienceMeta: [
    {
      id: 'invensis',
      company: 'Invensis Soft',
      tech: ['HTML5', 'CSS3', 'SCSS', 'BEM', 'Laravel', 'JavaScript', 'jQuery', 'Responsive', 'SEO', 'Web Performance'],
      sites: [
        { name: 'Darwin.md', url: 'https://darwin.md/' },
        { name: 'Enter.online', url: 'https://enter.online/' },
        { name: 'Istore.md', url: 'https://istore.md/' },
        { name: 'Samsung Store MD', url: 'https://samsungstore.md/' },
      ],
    },
    {
      id: 'blueline',
      company: 'BlueLine',
      tech: ['HTML5', 'CSS3', 'SCSS', 'BEM', 'ACF', 'JavaScript', 'jQuery', 'Animations', 'Responsive'],
    },
    {
      id: 'halley',
      company: 'HALLEY SOFT',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'React', 'Laravel REST API'],
    },
    {
      id: 'freelancer',
      company: 'Freelancer',
      link: { name: 'webxmedia.ca', url: 'https://webxmedia.ca/' },
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'React', 'Laravel REST API'],
    },
    {
      id: 'vega',
      company: 'Vega Salmon GmbH',
      link: { name: 'vega-salmon.dk', url: 'https://vega-salmon.dk/' },
    },
    {
      id: 'webxmedia',
      company: 'WebXMedia SRL',
      link: { name: 'webxmedia.ca', url: 'https://webxmedia.ca/' },
    },
    {
      id: 'bina',
      company: 'BinaSystems SRL',
      link: { name: 'binasystems.com', url: 'https://binasystems.com/' },
    },
    {
      id: 'webtellus',
      company: 'Webtellus SRL',
      link: { name: 'webtellus.com', url: 'https://webtellus.com/' },
    },
  ],
}

export function siteLabel(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}
