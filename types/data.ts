export type CmsImage = {
    id: string;
    src: string;
    alt: string;
    text: string;
    isDark: boolean;
};

export type HeroImageTextCard = {
    title: string;
    subtitle: string;
    description: string;
    link: string;
};

export type HeroGalleryImage = {
    image: CmsImage;
    textCard: HeroImageTextCard;
};
