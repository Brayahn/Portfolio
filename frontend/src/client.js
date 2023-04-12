import sanityClient, { SanityClient } from "@sanity/client";
import imageUrlBuider from "@sanity/image-url";

export const client = SanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-04-12",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

//for use when working with images
const builder = imageUrlBuider(client);
export const urlFor = (source) => builder.image(source);
