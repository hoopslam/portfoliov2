export const WHATIDO = [
    'Software Developer',
    'Cat Dad',
    'Basketball Fanatic',
    'Gamer',
    'Foodie',
];

export const COLORS = [
    { id: 0, hex: '#1976d2' },
    { id: 1, hex: '#f57c00' },
    { id: 2, hex: '#d32f2f' },
    { id: 3, hex: '#263238' },
    { id: 4, hex: '#00796b' },
];

export const PROFILE_IMGS = [
    `/images/0.png`,
    `/images/1.png`,
    `/images/2.png`,
    `/images/3.png`,
    `/images/4.png`,
];

export const PROJECTS = [
    {
        id: 6,
        title: 'AI Language Coach',
        description:
            'A language learning application using the power of OpenAI.  Have conversation classes with an AI Language Instructor',
        tech: ['Next.js', 'Typescript', 'OpenAI API', 'Firebase', 'Tailwind'],
        image: '/images/projects/babelon.png',
        github: 'https://github.com/hoopslam/babel_on',
        live: 'https://babel-on.vercel.app/',
    },
    {
        id: 5,
        title: 'Catazon',
        description:
            'A Full-Stack E-Commerce project for cat products.  Features user authentication, Stripe payment integration, and Google Cloud database.',
        tech: ['React', 'Sass', 'Firebase', 'Stripe API', 'Netlify'],
        image: '/images/projects/catazon.jpg',
        github: 'https://github.com/hoopslam/catazon',
        live: 'https://startling-melba-a51cc6.netlify.app/',
    },
    {
        id: 2,
        title: 'Covid-19 Tracker',
        description:
            "A worldwide Covid-19 tracker app using live data from John's Hopkins University and Worldometers. Fully interactive map and charts that dynamically render based on user input.",
        tech: ['React', 'disease.sh API', 'React-Leaflet', 'Chart-JS'],
        image: '/images/projects/covid-0.png',
        github: 'https://github.com/hoopslam/Covid-19-tracker',
        live: 'https://hoopslam.github.io/Covid-19-tracker/',
    },
    {
        title: 'Geo Quiz',
        id: 3,
        image: '/images/projects/geoquiz.jpg',
        description:
            'A Geo Quiz app that tests your world knowledge.  Questions fetched from Opentdb API.',
        tech: ['React', 'MobX', 'Styled Components', 'Typescript'],
        github: 'https://github.com/hoopslam/geoquiz',
        live: 'https://hoopslam.github.io/geoquiz/',
    },
    {
        title: 'Tier List Maker',
        id: 1,
        image: '/images/projects/tier.jpg',
        description:
            'A Tier List Maker built from vanilla HTML, CSS, Javascript. Features native drag and drop and image upload functionality',
        tech: ['HTML', 'CSS', 'Javascript'],
        github: 'https://github.com/hoopslam/tier-list-v1',
        live: 'https://hoopslam.github.io/tier-list-v1/',
    },
    {
        id: 0,
        title: 'This Portfolio Site',
        description:
            "Wanna see what's under the hood of this portfolio website?  Feel free to have a look at my portfolio site repo",
        tech: ['Next.js', 'Styled Components'],
        image: '/images/projects/portfolio.png',
        github: 'https://github.com/hoopslam/portfoliov2',
    },
];
