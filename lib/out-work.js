import { client } from "./contentful";

export const getOurWorkPageData = async (index) => {
  try {
    const mainEnteries = await client.getEntries({
      content_type: "caseStudyLayout",
      "fields.category.sys.contentType.sys.id": "ourWorkCategory",
      "fields.category.fields.index": index === 0 ? "" : index,
      select: "fields.title, fields.thumbnail, fields.slug",
      order: "fields.index",
    });

    return {
      main: mainEnteries?.items || [],
    };
  } catch (error) {
    console.error("Error fetching our work entries:", error);
    return {
      category: [],
      main: [],
    };
  }
};

export const getOurWorkPageCategories = async () => {
  try {
    // Fetch your GIF entry from Contentful
    const categories = await client.getEntries({
      content_type: "ourWorkCategory",
    });

    const categoryMask = categories?.items
      ?.map((cat) => cat?.fields)
      .sort((a, b) => a.index - b.index);

    return {
      category: categoryMask || [],
    };
  } catch (error) {
    console.error("Error fetching our work categories:", error);
    return {
      category: [],
      main: [],
    };
  }
};
