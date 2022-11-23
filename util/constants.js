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
        id: 1,
        title: 'Geography Quiz App',
        image: '/images/projects/geoquiz.jpg',
        mobile: '/images/projects/geoquizmobile.jpg',
        description:
            'A random geography quiz app built in Typescript + React with MobX for global state management. Test your world knowledge!',
        tech: 'Typescript, React, MobX, Styled Components, Opentdb API',
        github: 'https://github.com/hoopslam/geoquiz',
        live: 'https://hoopslam.github.io/geoquiz/',
    },
    {
        id: 2,
        title: 'Covid-19 Tracker',
        description:
            "A worldwide Covid-19 tracker app using live data from John's Hopkins University and Worldometers. Fully intactive map and charts that dynamically render based on user input.",
        tech: 'React(CRA), disease.sh API, React-Leaflet, Chart-JS',
        image: '/images/projects/covid-0.png',
        mobile: '/images/projects/covidmobile.jpg',
        github: 'https://github.com/hoopslam/Covid-19-tracker',
        live: 'https://hoopslam.github.io/Covid-19-tracker/',
    },
    {
        id: 3,
        title: 'Artist Portfolio Website',
        description:
            'A fully responsive portfolio website with a custom-built modal for easy viewing and navigation.  Built with Next.js for search engine optimization, static site generation, and lazy loading features.',
        tech: 'React (Next.js), CSS Modules, Vercel',
        image: '/images/projects/jiseon-0.png',
        mobile: '/images/projects/jiseonmobile.jpg',
        github: 'https://github.com/hoopslam/lee_jiseon',
        live: 'https://lee-jiseon.vercel.app/',
    },
    {
        id: 4,
        title: 'Tier List Maker',
        image: '/images/projects/tier.jpg',
        mobile: '/images/projects/tierlistmobile.jpg',
        description:
            'A Tier List Maker built purely with vanilla HTML, CSS, and Javascript.  Drag and drop functionality using the native data-transfer API',
        tech: 'HTML, CSS, Javascript',
        github: 'https://github.com/hoopslam/tier-list-v1',
        live: 'https://hoopslam.github.io/tier-list-v1/',
    },
    {
        title: 'Disney Plus Clone',
        id: 5,
        image: '/images/projects/disneyplus1.png',
        mobile: '/images/projects/disneyplusmobile.jpg',
        description:
            'A replica of the Disney Plus Front End.  React + Redux + Styled Components frontend and Firebase backend for authentication and database.',
        tech: 'React, Redux, Styled Components, Firebase',
        github: 'https://github.com/hoopslam/disneyplusclone',
        live: 'https://disneyplus-clone-703c8.web.app/',
    },
    {
        title: 'My Portfolio Website',
        id: 6,
        image: '/images/projects/newportfolio.png',
        mobile: '/images/projects/newportfoliomobile.png',
        description:
            'Curious how I made this site?  Feel free to have a look at my code or send me a message with any questions about the site.',
        tech: 'Next.js, Styled-Components, React-reveal',
        github: 'https://github.com/hoopslam/portfoliov2',
        live: 'https://devcho.com',
    },
];
