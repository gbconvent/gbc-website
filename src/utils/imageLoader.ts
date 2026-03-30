export interface ImageSourceData {
  srcLow: string;
  srcMedium: string;
  srcHigh: string;
}

export const getImageSources = (assetImports: Record<string, string>, key: string): ImageSourceData => ({
  srcLow: assetImports[`../assets/${key}-low.webp`],
  srcMedium: assetImports[`../assets/${key}-medium.webp`],
  srcHigh: assetImports[`../assets/${key}-high.webp`]
});
