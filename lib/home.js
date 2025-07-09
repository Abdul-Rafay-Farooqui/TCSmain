import { client } from "./contentful";

export const getHomePageData = async () => {
  try {
    // Fetch your GIF entry from Contentful
    const bannerEnteries = await client.getEntries({
      content_type: "homeMainSection",
    });
    const marqueeEnteries = await client.getEntries({
      content_type: "home2SliderSection",
    });
    const servicesEnteries = await client.getEntries({
      content_type: "home3ServicesSection",
    });
    const ourWorkEnteries = await client.getEntries({
      content_type: "home4OurWorkSection",
    });

    return {
      banner: bannerEnteries?.items[0]?.fields, // Ensure the URL is correctly formatted
      marquee: marqueeEnteries?.items || [],
      services: servicesEnteries?.items[0]?.fields,
      our_work: ourWorkEnteries?.items[0]?.fields,
    };
  } catch (error) {
    console.error("Error fetching homepage entries:", error);
    return {
      banner: [],
      marquee: [],
      services: [],
    };
  }
};
