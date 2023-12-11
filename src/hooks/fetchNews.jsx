const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchNews() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + NEWS_API_KEY
  );
  const data = await response.json();
  return data.articles;
}
