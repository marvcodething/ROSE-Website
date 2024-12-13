import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "9rdfsuag",
  dataset: "production",
  apiVersion: "2023-10-01", // Use a valid API version
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;