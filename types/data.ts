// export type CmsImage = {
//     id: string;
//     src: string;
//     alt: string;
//     text: string;
//     isDark: boolean;
// };

// export type HeroImageTextCard = {
//     title: string;
//     subtitle: string;
//     description: string;
//     link: string;
// };

// export type HeroGalleryImage = {
//     image: CmsImage;
//     textCard: HeroImageTextCard;
// };

export type ImageTextInfo = {
  title: string;
  location: string;
  description: string;
};

export type ImageTechnicalInfo = {
  'Camera Model': string;
  'Lens Used': string;
  Aperture: string;
  'Shutter Speed': string;
};
