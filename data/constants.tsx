import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from 'react-icons/si';

export const DATA_BG_LIGHT = 'light';

export enum DATA_BG {
    LIGHT = 'light',
    DARK = 'dark',
}

export enum NAVIGATION_HREFS {
    PORTFOLIO = 'Portfolio',
    ABOUT = 'About',
    CONTACT = 'Contact',
}

export const NAVIGATION_LINKS = [
    {
        name: NAVIGATION_HREFS.PORTFOLIO,
        url: `/${NAVIGATION_HREFS.PORTFOLIO.toLowerCase()}`,
        key: 'portfolio',
        hasChildren: true,
        childrenLinks: [
            {
                name: 'Portraits',
                url: `/${NAVIGATION_HREFS.PORTFOLIO.toLowerCase()}/portraits`,
                key: 'Portraits',
                description:
                    "Looking for a professional portrait? Look no further! I'm here to help you capture the perfect portrait.",
            },
            {
                name: 'Nature',
                url: `/${NAVIGATION_HREFS.PORTFOLIO.toLowerCase()}/nature`,
                key: 'nature',
                description: 'Nature is beautiful, and I love capturing it. Check out my nature photography portfolio!',
            },
            {
                name: 'Landscape',
                url: `/${NAVIGATION_HREFS.PORTFOLIO.toLowerCase()}/landscape`,
                key: 'landscape',
                description:
                    'Landscape photography is one-of-a-kind. I love capturing the beauty of the world around us. Check out my landscape photography portfolio!',
            },
            {
                name: 'Events',
                url: `/${NAVIGATION_HREFS.PORTFOLIO.toLowerCase()}/events`,
                key: 'events',
                description:
                    'Events are special, and I love capturing the moments that make them special. Check out my event photography portfolio!',
            },
        ],
    },
    {
        name: 'About',
        url: `/${NAVIGATION_HREFS.ABOUT.toLowerCase()}`,
        key: 'about',
        hasChildren: false,
    },
    {
        name: 'Contact',
        url: `/${NAVIGATION_HREFS.CONTACT.toLowerCase()}`,
        key: 'contact',
        hasChildren: false,
    },
];

export const SOCIAL_MEDIA = [
    {
        Component: SiTwitter,
        href: 'https://twitter.com',
    },
    {
        Component: SiInstagram,
        href: 'https://instagram.com',
    },
    {
        Component: SiLinkedin,
        href: 'https://linkedin.com',
    },
    {
        Component: SiYoutube,
        href: 'https://youtube.com',
    },
];
