import axios from "axios";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchNews() {
  try {
    const response = await axios.get("/v2/top-headlines", {
      params: {
        country: "kr",
        category: "technology",
        apiKey: NEWS_API_KEY,
      },
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
