import { client } from "./contentful";

export const getAboutUsPageData = async () => {
  try {
    // Fetch your GIF entry from Contentful
    const mainEnteries = await client.getEntries({
      content_type: "aboutUs",
    });
    const tribeEnteries = await client.getEntries({
      content_type: "aboutUsTheTribe",
      order: "fields.id",
    });
    const sortedtribe = tribeEnteries?.items
      ?.map((cat) => cat?.fields)
      .sort((a, b) => a.id - b.id);

    return {
      main: mainEnteries?.items[0]?.fields,
      tribe: sortedtribe || [],
    };
  } catch (error) {
    console.error("Error fetching homepage entries:", error);
    return {
      main: [],
      tribe: [],
    };
  }
};
