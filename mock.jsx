// Mock data for Yedai
const Mock = {
  user: { name: 'Lucas' },
  product: {
    title: 'Smart TV 55" 4K Samsung',
    price: 'R$ 3.299,00',
    delivery: 'Entrega em 2 dias',
  },
  professional: {
    initials: 'FM',
    name: 'Fabio Marques',
    role: 'Instalador de TV',
    exp: '5 anos exp.',
    rating: 4.7,
    ratingHigh: 4.9,
    services: 312,
    yearsOnPlatform: '3a',
    verified: true,
    available: true,
  },
  services: [
    { id: 'tv',   name: 'Instalação de TV',    price: 'R$ 89,90'  },
    { id: 'elt',  name: 'Instalação elétrica', price: 'R$ 120,00' },
    { id: 'mov',  name: 'Montagem de móveis',  price: 'R$ 70,00'  },
    { id: 'ac',   name: 'Instalação de A/C',   price: 'R$ 180,00' },
  ],
  scheduling: {
    month: 'Janeiro 2025',
    weekdays: ['D','S','T','Q','Q','S','S'],
    // Jan 2025: starts on Wed (col 3). We render Sun-first weeks.
    // We'll show one main week 5–11 plus prefix/suffix muted dates.
    weeks: [
      // each cell: { d: number, muted: boolean, current: boolean }
      [
        { d: 29, muted: true },  { d: 30, muted: true }, { d: 31, muted: true },
        { d: 1 }, { d: 2 }, { d: 3 }, { d: 4 },
      ],
      [
        { d: 5 }, { d: 6 }, { d: 7 }, { d: 8 }, { d: 9 }, { d: 10 }, { d: 11 },
      ],
      [
        { d: 12 }, { d: 13 }, { d: 14 }, { d: 15 }, { d: 16 }, { d: 17 }, { d: 18 },
      ],
      [
        { d: 19 }, { d: 20 }, { d: 21 }, { d: 22 }, { d: 23 }, { d: 24 }, { d: 25 },
      ],
      [
        { d: 26 }, { d: 27 }, { d: 28 }, { d: 29 }, { d: 30 }, { d: 31 },
        { d: 1, muted: true },
      ],
    ],
    times: ['08:00', '10:00', '13:00', '15:00', '17:00'],
    defaultDate: 7,
    defaultTime: '10:00',
  },
  scheduled: {
    title: 'Montagem de móveis',
    when: 'Hoje, 10:00 · Rua das Flores, 42',
    eta: '~40 min',
  },
  reviews: [
    {
      quote: '"Pontual, organizado e deixou tudo limpo. Recomendo demais."',
      author: '— Ana L.',
    },
    {
      quote: '"Resolveu uma instalação complicada em pouco tempo. Profissional de verdade."',
      author: '— Rafael M.',
    },
  ],
  inProgress: {
    startedAt: '08:40',
    estimate: '~1h estimado',
    steps: [
      'Chegada e apresentação',
      'Avaliação do espaço',
      'Montagem do móvel',
      'Acabamento e limpeza',
    ],
    currentStep: 2, // index of in-progress step
  },
  completed: {
    service: 'Montagem de móveis',
    duration: '1h 12min',
    pro: 'Fabio Marques',
    total: 'R$ 89,90',
  },
  ratingLabels: { 1: 'Ruim', 2: 'Regular', 3: 'Bom', 4: 'Muito bom', 5: 'Excelente' },
};

window.Mock = Mock;
