import { client } from "./contentful";

export const getCaseStudyData = async (slug) => {
  try {
    const caseStudy = await client.getEntries({
      content_type: "caseStudyLayout",
      "fields.slug": slug,
      limit: 1, // Limit to one entry
    });

    return {
      main: caseStudy?.items[0] || {},
    };
  } catch (error) {
    console.error("Error fetching caseStudy:", error);
    return {
      caseStudy: {},
    };
  }
};
