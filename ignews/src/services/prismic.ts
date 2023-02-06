import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";

export function getPrismicClient() {
  const endpoint = prismic.getRepositoryEndpoint("ignewshugo");
  const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

  const client = prismic.createClient(endpoint, { accessToken });

  return client;
}
