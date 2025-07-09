import { client } from "./contentful";

export const getFooterData = async () => {
  try {
    // Fetch your GIF entry from Contentful
    const footerEnteries = await client.getEntries({
      content_type: "footer",
    });

    return {
      footer: footerEnteries?.items[0]?.fields,
    };
  } catch (error) {
    console.error("Error fetching homepage entries:", error);
    return {
      footer: [],
    };
  }
};
