import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'frtj65y5',
  dataset: 'production',
  apiVersion: '2023-03-10',
  useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);