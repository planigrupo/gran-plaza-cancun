export const Images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/images/homeGallery/*.{jpeg,jpg,png,gif}'
);
