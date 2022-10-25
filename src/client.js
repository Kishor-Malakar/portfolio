import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "6b8s31tj",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: "true",
  token:
    "skl9uOeV9geNvL51g4b5flc8VcLI0k5NlRcFbhOfMnPpU3ZLt18INubw11JK6Zn2NJUW0fUnYAh3SQXqmx4rsKueluQw7ehjEuTa32Hn5AuGdNS5ykVCvUEaXvDAnnzNCuI6Es0bmRb0Ya5bTbCGuJbB3pbyCYLhrDL89IvsOciHdqyjOw8c",
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
