const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchNews() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=${NEWS_API_KEY}`,
      {
        Headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
