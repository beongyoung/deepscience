const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export async function fetchNews() {
  try {
    const response = await fetch(
      `${proxyUrl}https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=${NEWS_API_KEY}`
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
