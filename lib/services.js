import { client } from "./contentful";

export const getServicesPageData = async () => {
  try {
    // Fetch your GIF entry from Contentful
    const servicesEnteries = await client.getEntries({
      content_type: "service",
      order: "fields.index",
    });

    return {
      service: servicesEnteries?.items || [],
    };
  } catch (error) {
    console.error("Error fetching homepage entries:", error);
    return {
      service: [],
    };
  }
};
