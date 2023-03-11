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
        id: 9,
        title: 'Catazon',
        description:
            'An E-Commerce platform for cat products.  Features user authentication, Stripe payment integration, and Google Cloud database.',
        tech: 'Firebase, React, Sass, Stripe API, Netlify',
        image: '/images/projects/catazon.jpg',
        github: 'https://github.com/hoopslam/catazon',
        live: 'https://startling-melba-a51cc6.netlify.app/',
    },
    {
        id: 8,
        title: 'The Ajeossi Post',
        description:
            'A full stack blog project with Sanity Headless CMS and Next.  Static Site Generation with Incremental Static Regeneration for Blazing fast performance and SEO.',
        tech: 'Next.js 13, Sanity, GROQ, Tailwind, Typescript, Portable Text,',
        image: '/images/projects/blog.jpg',
        github: 'https://github.com/hoopslam/ajeossiPost',
        live: 'https://ajeossipost.com',
    },
    {
        title: 'Disney Plus Front End',
        id: 3,
        image: '/images/projects/disneyplus1.png',
        description:
            'A replica of the Disney Plus Front End.  React + Redux + Styled Components frontend and Firebase backend for authentication and database.',
        tech: 'React, Redux, Styled Components, Firebase',
        github: 'https://github.com/hoopslam/disneyplusclone',
        live: 'https://disneyplus-clone-703c8.web.app/',
    },
    {
        id: 1,
        title: 'Covid-19 Tracker',
        description:
            "A worldwide Covid-19 tracker app using live data from John's Hopkins University and Worldometers. Fully intactive map and charts that dynamically render based on user input.",
        tech: 'React, disease.sh API, React-Leaflet, Chart-JS',
        image: '/images/projects/covid-0.png',
        github: 'https://github.com/hoopslam/Covid-19-tracker',
        live: 'https://hoopslam.github.io/Covid-19-tracker/',
    },
    {
        id: 6,
        title: 'Geography Quiz App',
        image: '/images/projects/geoquiz.jpg',
        description:
            'A random geography quiz app built in Typescript + React with MobX for global state management. Test your world knowledge!',
        tech: 'Typescript, React, MobX, Styled Components, Opentdb API',
        github: 'https://github.com/hoopslam/geoquiz',
        live: 'https://hoopslam.github.io/geoquiz/',
    },
    {
        id: 2,
        title: 'Voca Mocha',
        image: '/images/projects/mocha.jpg',
        description:
            'A vocabulary memorization app for both Android and IOS.  Features local storage and a study reminder notification system.',
        tech: 'React Native, Expo, Typescript',
        github: 'https://github.com/hoopslam/vocamocha',
    },
];
